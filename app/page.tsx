import Header from "@/components/Header";
import InformationCrisisSection from "@/components/InformationCrisisSection";
import FeaturesSection from "@/components/FeaturesSection";
import TeamSection from "@/components/TeamSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import DemoSection from "@/components/DemoSection";
import FaqAccordion from "@/components/FaqAccordion";
import HeroSection from "@/components/HeroSection";
import { fetchMarqueeNews } from "@/lib/fetchNews";

export const dynamic = "force-dynamic";

export default async function Home() {
  const newsData = await fetchMarqueeNews(20);

  return (
    <main className="overflow-x-hidden">
      <Header />
      <HeroSection newsData={newsData} />
      <InformationCrisisSection />
      <FeaturesSection />
      <DemoSection />
      <TeamSection />
      <FinalCTASection />
      <FaqAccordion />
      <Footer />
    </main>
  );
}
