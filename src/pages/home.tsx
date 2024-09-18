import SkillSection from "@/components/skillSection";
import NavBar from "@/components/ui/navbar";
import About from "@/components/about";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
      <About />
      <SkillSection />
      <Projects />
      <NavBar />
    </div>
  );
}