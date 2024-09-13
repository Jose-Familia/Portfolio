import NavBar from "@/components/ui/navbar"
import Home from "@/pages/home";
import SkillSection from "@/components/skillSection";

 
export default function myApp() {
  return (
    <div>
      <Home></Home>
      <SkillSection />
      <NavBar></NavBar>
    </div>
  );
}
