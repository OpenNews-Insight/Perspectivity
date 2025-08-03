import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import Demo from "@/components/Demo";
import Team from "@/components/Team";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="container mx-auto">
      <Header />
      <Hero />
      <Problem />
      <Features />
      <Demo />
      <Team />
      <FinalCTA />
      <Footer />
    </main>
  );
}
