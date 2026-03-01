const API_URL = "https://drishtikon.life/server/api/featured-article/";
const FETCH_TIMEOUT = 8000; // 8 second timeout per request

const BLOCKED_PATTERNS = [
  "news.google.com/api/attachments",
  "googleusercontent.com",
  "/_next/image",
  "/api/image-proxy",
  "?url=",
];

const VALID_IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".gif"];

function isValidImageUrl(url?: string): boolean {
  if (!url?.trim()) return false;

  try {
    const urlLower = url.toLowerCase();

    const isBlocked = BLOCKED_PATTERNS.some((pattern) =>
      urlLower.includes(pattern.toLowerCase()),
    );
    if (isBlocked) return false;

    const hasValidExtension = VALID_IMAGE_EXTENSIONS.some((ext) =>
      urlLower.includes(ext),
    );
    if (!hasValidExtension) return false;

    const parsedUrl = new URL(url);
    if (parsedUrl.protocol === "data:") return false;

    return true;
  } catch {
    return false;
  }
}

export interface MarqueeNewsItem {
  id: string;
  title: string;
  image: string;
  categories: string[];
  source: string;
  sourceLogo?: string;
  totalSources: number;
  perspectiveCount: number;
}

interface APISource {
  article_image?: string;
  source?: string;
  source_logo?: string;
}

interface APIArticle {
  _id: string;
  title: string;
  category: string | string[];
  tab_name?: string;
  article_image?: string;
  show_image?: boolean;
  source?: string;
  source_logo?: string;
  info?: {
    total_sources?: number;
    category?: string[];
    topics?: string[];
    sources?: APISource[];
    bias_summary?: {
      perspective?: {
        key_claims?: unknown[];
        perspectives?: unknown[];
      };
    };
  };
}

interface APIResponse {
  count?: number;
  next?: string | null;
  results: Record<string, APIArticle[]> | APIArticle[];
  has_manually_featured?: boolean;
}

function getFirstValidImage(sources?: APISource[]): string | null {
  if (!sources?.length) return null;

  for (const source of sources) {
    if (isValidImageUrl(source.article_image)) {
      return source.article_image!;
    }
  }

  return null;
}

function extractCategories(article: APIArticle): string[] {
  if (article.info?.category?.length) {
    return article.info.category;
  }

  if (article.info?.topics?.length) {
    return article.info.topics;
  }

  return [];
}

function getPerspectiveCount(article: APIArticle): number {
  const perspective = article.info?.bias_summary?.perspective;
  if (!perspective) return 0;

  // Use perspectives array length, or fall back to key_claims length
  const perspectives = perspective.perspectives as unknown[] | undefined;
  if (perspectives?.length) return perspectives.length;

  return perspective.key_claims?.length ?? 0;
}

// In-memory cache for SSR
let cachedItems: MarqueeNewsItem[] = [];
let cacheTimestamp = 0;
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

async function fetchWithTimeout(url: string, timeout: number): Promise<Response> {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const res = await fetch(url, {
      cache: "no-store",
      signal: controller.signal,
    });
    return res;
  } finally {
    clearTimeout(id);
  }
}

export async function fetchMarqueeNews(count = 20): Promise<MarqueeNewsItem[]> {
  if (cachedItems.length > 0 && Date.now() - cacheTimestamp < CACHE_TTL) {
    return cachedItems;
  }

  try {
    const items: MarqueeNewsItem[] = [];

    // Single large request instead of paginated to avoid SSR timeout
    const res = await fetchWithTimeout(
      `${API_URL}?page=1&page_size=${count + 10}`,
      FETCH_TIMEOUT,
    );

    if (!res.ok) return cachedItems;

    const data: APIResponse = await res.json();

    // featured-article API returns { results: { "home": [...] } }
    const rawResults = data.results;
    const articles: APIArticle[] = Array.isArray(rawResults)
      ? rawResults
      : (rawResults as Record<string, APIArticle[]>)?.["home"] ?? [];

    for (const article of articles) {
      if (items.length >= count) break;

      const validImage = getFirstValidImage(article.info?.sources);
      if (!validImage) continue;

      items.push({
        id: article._id,
        title: article.title,
        image: validImage,
        categories: extractCategories(article),
        source: article.source || article.info?.sources?.[0]?.source || "",
        sourceLogo:
          article.source_logo || article.info?.sources?.[0]?.source_logo,
        totalSources:
          article.info?.total_sources || article.info?.sources?.length || 0,
        perspectiveCount: getPerspectiveCount(article),
      });
    }

    if (items.length > 0) {
      cachedItems = items;
      cacheTimestamp = Date.now();
    }

    return items;
  } catch (error) {
    console.error("Failed to fetch marquee news:", error);
    return cachedItems;
  }
}
