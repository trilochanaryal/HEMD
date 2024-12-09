import Hero from "@/components/Hero";
import ResearchHighlights from "@/components/ResearchHighlights";
import { QuoteSection } from "@/components/QuoteSection";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <ResearchHighlights />
      <QuoteSection />
      <ScrollToTop />
    </div>
  );
}