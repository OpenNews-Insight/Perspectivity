"use client";

/**
 * BetaInvite — a dismissible card that invites the reader to join the beta
 * tester list. It appears bottom-right 15 seconds into a visit, once: the
 * outcome is kept in localStorage so it is asked per visitor rather than per
 * page load, and Escape closes it.
 */
import { FC, FormEvent, useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Loader2, Sparkles, X } from "lucide-react";
import { easeOutExpo, useReducedMotionFlag } from "@/lib/motionfold";
import { signUpForBeta } from "@/lib/betaSignup";

/** Remembers the outcome so the card is asked for once, not once per page. */
const STORAGE_KEY = "beta-invite-state";
type Stored = "dismissed" | "joined";

/** Long enough that it never lands on top of someone still orienting, and well
 *  clear of the 2s intro splash. */
const APPEAR_AFTER_MS = 15_000;

/** Leaves the confirmation up long enough to actually be read. */
const CLOSE_AFTER_JOIN_MS = 2600;

type Status = "idle" | "sending" | "joined" | "error";

const BetaInvite: FC = () => {
  const reduced = useReducedMotionFlag();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      /* private mode — fall through and just show it */
    }
    if (stored === "dismissed" || stored === "joined") return;

    const timer = window.setTimeout(() => setOpen(true), APPEAR_AFTER_MS);
    return () => window.clearTimeout(timer);
  }, []);

  const remember = (value: Stored) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* nothing to do — worst case it is offered again next visit */
    }
  };

  const close = useCallback(() => {
    setOpen(false);
    // Only a deliberate dismissal is remembered here; closing after joining is
    // recorded by the submit handler instead.
    if (status !== "joined") remember("dismissed");
  }, [status]);

  // Escape closes, matching the rest of the site's dismissible surfaces.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim() || status === "sending") return;

    setStatus("sending");
    try {
      const res = await signUpForBeta(email.trim());
      if (res.success) {
        setStatus("joined");
        remember("joined");
        window.setTimeout(() => setOpen(false), CLOSE_AFTER_JOIN_MS);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          role="dialog"
          aria-label="Join the Perspectivity beta"
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
          animate={reduced ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
          exit={reduced ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }}
          transition={{ duration: reduced ? 0.2 : 0.32, ease: easeOutExpo }}
          className="fixed bottom-4 right-4 z-[120] w-[calc(100%-2rem)] max-w-sm sm:bottom-6 sm:right-6"
        >
          <div className="relative overflow-hidden rounded-2xl bg-navy-deep border border-line-dark shadow-2xl shadow-black/40">
            {/* Amber wash so the card reads as an invitation, not a notice. */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl"
              style={{ background: "rgba(224,160,48,0.16)" }}
            />

            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-2.5 top-2.5 z-10 rounded-lg p-1.5 text-white/50 transition-colors hover:bg-white/[0.06] hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative p-5">
              <span className="font-hanken inline-flex items-center gap-1.5 rounded-full bg-amber/[0.14] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-amber">
                <Sparkles className="h-3 w-3" />
                Beta
              </span>

              <h3 className="font-serif mt-3 text-[19px] font-medium leading-snug text-white">
                Want to try things before they ship?
              </h3>
              <p className="font-hanken mt-1.5 text-[13px] leading-relaxed text-white/60">
                We&rsquo;re looking for a few readers to use new features early
                and tell us what&rsquo;s broken. Leave your email if that sounds
                like you.
              </p>

              {status === "joined" ? (
                <p className="font-hanken mt-4 flex items-center gap-2 text-[13px] font-medium text-signal-green">
                  <Check className="h-4 w-4 shrink-0" />
                  You&rsquo;re on the list. We&rsquo;ll be in touch soon.
                </p>
              ) : (
                <form onSubmit={submit} className="mt-4 space-y-2">
                  <div className="flex gap-2">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === "error") setStatus("idle");
                      }}
                      placeholder="you@email.com"
                      aria-label="Email address"
                      disabled={status === "sending"}
                      className="font-hanken min-w-0 flex-1 rounded-lg bg-white/[0.04] border border-line-dark px-3 py-2 text-[13px] text-white placeholder:text-white/35 outline-none transition-colors focus:border-amber/60"
                    />
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="font-hanken flex shrink-0 items-center gap-1.5 rounded-lg bg-amber px-3.5 py-2 text-[13px] font-semibold text-navy-deep transition-opacity hover:opacity-90 disabled:opacity-60"
                    >
                      {status === "sending" && (
                        <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      )}
                      {status === "sending" ? "Sending" : "Count me in"}
                    </button>
                  </div>

                  {status === "error" && (
                    <p className="font-hanken text-[12px] text-[#E85D4A]">
                      That didn&rsquo;t go through. Please try again.
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default BetaInvite;
