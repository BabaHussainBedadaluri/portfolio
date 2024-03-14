import Image from "next/image";
import HeroSection from "../../components/HeroSection";
import Navbar from "../../components/Navbar";
import AboutSection from "../../components/AboutSection";
import ProjectSection from "../../components/ProjectSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#121212]">
      <Navbar />
      <div className="container mx-auto py-4 px-12 mt-12">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <p>
          Anim incididunt ullamco commodo mollit esse incididunt cupidatat
          ullamco ut aliquip. lorem10
        </p>
      </div>
    </main>
  );
}
