import type { MouseEvent } from "react";

/** Mirrors the scroll-padding-top in globals.css, which the fixed header needs. */
const headerOffset = () => (window.innerWidth >= 1024 ? 128 : 96);

const DURATION = 650;
const easeOutQuint = (t: number) => 1 - Math.pow(1 - t, 5);

/**
 * Animates the window to a y position.
 *
 * Native `behavior: "smooth"` is a silent no-op on this page — the same call
 * with `"instant"` lands fine — so the tween is run by hand rather than left to
 * the browser. Reduced-motion visitors jump straight there.
 */
function scrollWindowTo(top: number) {
  const start = window.scrollY;
  const distance = top - start;
  if (
    !distance ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    window.scrollTo({ top, behavior: "instant" as ScrollBehavior });
    return;
  }

  let startedAt: number | null = null;
  const step = (now: number) => {
    startedAt ??= now;
    const progress = Math.min((now - startedAt) / DURATION, 1);
    window.scrollTo({
      top: start + distance * easeOutQuint(progress),
      behavior: "instant" as ScrollBehavior,
    });
    if (progress < 1) window.requestAnimationFrame(step);
  };
  window.requestAnimationFrame(step);
}

/**
 * Scrolls to an in-page section on click.
 *
 * Every anchor on the landing page was dead: clicking "Demo" or "See how we map
 * it" changed the URL and moved nothing. Almost every section is styled
 * `overflow-hidden`, which makes each one its own scrollport, so fragment
 * navigation — and scrollIntoView with it — scrolls inside the section rather
 * than moving the window. Measuring the section against the page and scrolling
 * the window is what actually gets there.
 *
 * Links to a different route still fall through to the router untouched, as do
 * modified clicks (new tab, new window), so nothing that worked before changes.
 */
export function handleHashClick(
  e: MouseEvent<HTMLAnchorElement>,
  href: string,
) {
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return;

  // "/#faq" is in-page only when we are already on "/".
  const path = href.slice(0, hashIndex);
  if (path && path !== "/" && path !== window.location.pathname) return;
  if (path === "/" && window.location.pathname !== "/") return;

  if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

  const id = href.slice(hashIndex + 1);
  const target = document.getElementById(id);
  if (!target) return;

  e.preventDefault();
  const top = target.getBoundingClientRect().top + window.scrollY - headerOffset();
  scrollWindowTo(Math.max(top, 0));
  window.history.pushState(null, "", `#${id}`);
}
