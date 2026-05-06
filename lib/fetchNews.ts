const DRISHTIKON_API_URL =
  "https://drishtikon.life/server/api/featured-article/";
const PERSPECTIVITY_API_URL =
  "https://app.perspectivity.co/server/api/featured-article/";
const FETCH_TIMEOUT = 8000; // 8 second timeout per request

const BLOCKED_PATTERNS = ["/_next/image", "/api/image-proxy", "/img-proxy"];

const VALID_IMAGE_EXTENSIONS = [
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".gif",
  ".svg",
  ".avif",
];

const VALID_IMAGE_PATH_PATTERNS = [
  "/image",
  "/images",
  "/media",
  "/photo",
  "/cdn",
  "/uploads",
  "/assets",
  "/static",
  "/img",
];

const KNOWN_CDN_DOMAINS = [
  "cloudinary",
  "cloudfront",
  "amazonaws",
  "imgix",
  "unsplash",
  "pexels",
  "gstatic.com",
];

function cleanImageUrl(url: string): string {
  // Strip Google News size constraints: -w100-h100-p-df-rw
  let cleaned = url.replace(/-w\d+-h\d+[^&\s]*/g, "");
  // Strip fopt param from gstatic
  cleaned = cleaned.replace(/[&?]fopt=[^&]*/g, "");
  return cleaned;
}

function isValidImageUrl(url?: string): boolean {
  if (!url?.trim()) return false;

  try {
    const urlLower = url.toLowerCase();

    const isBlocked = BLOCKED_PATTERNS.some((pattern) =>
      urlLower.includes(pattern.toLowerCase()),
    );
    if (isBlocked) return false;

    const parsedUrl = new URL(url);
    if (parsedUrl.protocol === "data:") return false;

    // Accept if has valid image extension
    const hasValidExtension = VALID_IMAGE_EXTENSIONS.some((ext) =>
      urlLower.includes(ext),
    );
    if (hasValidExtension) return true;

    // Accept if URL path contains image-related segments
    const hasImagePath = VALID_IMAGE_PATH_PATTERNS.some((p) =>
      urlLower.includes(p),
    );
    if (hasImagePath) return true;

    // Accept known CDN domains
    const isKnownCDN = KNOWN_CDN_DOMAINS.some((cdn) => urlLower.includes(cdn));
    if (isKnownCDN) return true;

    // Accept Google News attachment URLs (they serve real images)
    if (urlLower.includes("news.google.com/api/attachments")) return true;

    return false;
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

function getFirstValidImage(article: APIArticle): string | null {
  // Try source-level images first
  if (article.info?.sources?.length) {
    for (const source of article.info.sources) {
      if (isValidImageUrl(source.article_image)) {
        return cleanImageUrl(source.article_image!);
      }
    }
  }

  // Fallback to top-level article_image
  if (isValidImageUrl(article.article_image)) {
    return cleanImageUrl(article.article_image!);
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
let cachedDrishtikon: MarqueeNewsItem[] = [];
let cachedPerspectivity: MarqueeNewsItem[] = [];
let cacheTimestamp = 0;
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

export interface MarqueeNewsData {
  perspectivity: MarqueeNewsItem[];
  drishtikon: MarqueeNewsItem[];
}

async function fetchWithTimeout(
  url: string,
  timeout: number,
): Promise<Response> {
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

async function fetchFromAPI(
  apiUrl: string,
  count: number,
): Promise<MarqueeNewsItem[]> {
  try {
    const res = await fetchWithTimeout(
      `${apiUrl}?page=1&page_size=${count + 10}`,
      FETCH_TIMEOUT,
    );

    if (!res.ok) return [];

    const data: APIResponse = await res.json();

    const rawResults = data.results;
    const articles: APIArticle[] = Array.isArray(rawResults)
      ? rawResults
      : ((rawResults as Record<string, APIArticle[]>)?.["home"] ?? []);

    const items: MarqueeNewsItem[] = [];
    for (const article of articles) {
      if (items.length >= count) break;

      const validImage = getFirstValidImage(article);
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

    return items;
  } catch (error) {
    console.error(`Failed to fetch from ${apiUrl}:`, error);
    return [];
  }
}

export async function fetchMarqueeNews(count = 20): Promise<MarqueeNewsData> {
  if (
    cachedPerspectivity.length > 0 &&
    cachedDrishtikon.length > 0 &&
    Date.now() - cacheTimestamp < CACHE_TTL
  ) {
    return { perspectivity: cachedPerspectivity, drishtikon: cachedDrishtikon };
  }

  const [perspectivityItems, drishtikonItems] = await Promise.all([
    fetchFromAPI(PERSPECTIVITY_API_URL, count),
    fetchFromAPI(DRISHTIKON_API_URL, count),
  ]);

  if (perspectivityItems.length > 0) cachedPerspectivity = perspectivityItems;
  if (drishtikonItems.length > 0) cachedDrishtikon = drishtikonItems;
  if (perspectivityItems.length > 0 || drishtikonItems.length > 0) {
    cacheTimestamp = Date.now();
  }

  return {
    perspectivity: cachedPerspectivity,
    drishtikon: cachedDrishtikon,
  };
}
