import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageWrapper from "@/components/PageWrapper";
import ContentPageView from "@/components/ContentPageView";
import { getBySlug, getByCollection } from "@/lib/content";
import { SITE_URL } from "@/lib/structured-data";

export function generateStaticParams() {
  return getByCollection("solutions").map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const page = getBySlug("solutions", params.slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `/solutions/${page.slug}` },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `${SITE_URL}/solutions/${page.slug}`,
      type: "article",
    },
  };
}

export default function SolutionPage({ params }: { params: { slug: string } }) {
  const page = getBySlug("solutions", params.slug);
  if (!page) notFound();
  return (
    <PageWrapper>
      <ContentPageView page={page} />
    </PageWrapper>
  );
}
