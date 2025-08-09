import Header from "@/components/Header";
import InformationCrisisSection from "@/components/InformationCrisisSection";
import FeaturesSection from "@/components/FeaturesSection";
import TeamSection from "@/components/TeamSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import DemoSection from "@/components/DemoSection";
import FaqAccordion from "@/components/FaqAccordion";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <HeroSection />
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
