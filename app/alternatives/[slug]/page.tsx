import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageWrapper from "@/components/PageWrapper";
import ContentPageView from "@/components/ContentPageView";
import { getBySlug, getByCollection } from "@/lib/content";
import { SITE_URL } from "@/lib/structured-data";

export function generateStaticParams() {
  return getByCollection("alternatives").map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const page = getBySlug("alternatives", params.slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `/alternatives/${page.slug}` },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `${SITE_URL}/alternatives/${page.slug}`,
      type: "article",
    },
  };
}

export default function AlternativePage({ params }: { params: { slug: string } }) {
  const page = getBySlug("alternatives", params.slug);
  if (!page) notFound();
  return (
    <PageWrapper>
      <ContentPageView page={page} />
    </PageWrapper>
  );
}
