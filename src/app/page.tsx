import Header from "@/components/Header";
import DeveloppementSection from "@/components/DeveloppementSection";
import BilanSection from "@/components/BilanSection";
import ReferencementSection from "@/components/ReferencementSection";

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="scroll-smooth">
        {/* 🔧 Ancre invisible pour le scroll vers #top */}
        <div id="top" className="h-0 scroll-mt-8" aria-hidden="true" />

        <DeveloppementSection />
        <BilanSection />
        <ReferencementSection />
        {/* Le bloc ContactSection et Footer viendront ensuite */}
      </main>
    </>
  );
}
