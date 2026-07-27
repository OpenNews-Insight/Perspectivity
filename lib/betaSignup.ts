import { LINKS } from "@/lib/links";

const TIMEOUT = 15000;

export interface BetaSignupResult {
  success: boolean;
  /** True when the address was already on the list. Still a success. */
  alreadyRegistered?: boolean;
  /** Server-supplied message, used only as a fallback for unmapped errors. */
  error?: string;
}

/**
 * Adds an address to the Perspectivity beta list.
 *
 * lang/country follow the convention the rest of the API uses: ("en","US")
 * resolves to the Perspectivity database, anything else to Drishtikon. Sending
 * them is what keeps the two sites' beta lists in separate stores, so this
 * landing page must pin them even though it only ever serves one site.
 */
export async function signUpForBeta(
  email: string,
  source = "landing-invite",
): Promise<BetaSignupResult> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT);

  try {
    const res = await fetch(LINKS.perspectivityBetaSignupAPI, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, source, lang: "en", country: "US" }),
      signal: controller.signal,
    });

    // 4xx/5xx still carry a JSON body worth surfacing; a non-JSON body (e.g. an
    // HTML error page from the proxy) is reported as a plain failure.
    const data = await res.json().catch(() => null);
    if (!res.ok || !data) {
      return { success: false, error: data?.error };
    }

    return data as BetaSignupResult;
  } finally {
    clearTimeout(timer);
  }
}
