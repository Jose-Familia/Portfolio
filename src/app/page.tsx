import SkillSection from "@/components/skillSection";
import NavBar from "@/components/ui/navbar";
import About from "@/components/about";
import Projects from "@/components/projects";
import Footer from "@/components/footer";
import BlurFade from "@/components/magicui/blur-fade";
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <title>Jose Familia | Portfolio 🧑‍🎓 </title>
      <div className="flex flex-col items-center justify-center py-2 px-4 sm:px-6 lg:px-8">
        <BlurFade delay={0.5}>
          <About />
          <SkillSection />
          <Projects />
        </BlurFade>
        <NavBar />
      </div>
      <BlurFade delay={0.5}>
        <Footer />
      </BlurFade>
   </div>
  );
}
