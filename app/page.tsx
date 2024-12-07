import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ResearchHighlights from "@/components/ResearchHighlights";
import { QuoteSection } from "@/components/QuoteSection";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <ResearchHighlights />
      <QuoteSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}