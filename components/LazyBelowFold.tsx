"use client";

import dynamic from "next/dynamic";

// ssr:false defers the entire below-fold subtree (and its framer-motion/motionfold
// usage) out of the initial bundle. Must live in a client component because
// next/dynamic ssr:false is not allowed directly in a Server Component.
const LazyBelowFold = dynamic(() => import("@/components/HomeBelowFold"), {
  ssr: false,
  loading: () => (
    <div aria-hidden className="h-px w-full" />
  ),
});

export default LazyBelowFold;
