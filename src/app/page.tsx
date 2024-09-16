import NavBar from "@/components/ui/navbar";
import Home from "@/pages/home";
import SkillSection from "@/components/skillSection";
import BlurFade from "@/components/magicui/blur-fade";

 
export default function myApp() {
  return (
    <div>
      <BlurFade delay={0.8}>
      <Home></Home>
      <SkillSection />
      <NavBar></NavBar>
      </BlurFade>
    </div>
  );
}
