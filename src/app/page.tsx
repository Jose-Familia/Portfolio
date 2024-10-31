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
      <Head>
        <title>Jose Familia | Portfolio</title>
        <meta name="description" content="Portfolio Page of Jose Rene Familia" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Jose Familia | Portfolio" />
        <meta property="og:description" content="Portfolio Page of Jose Rene Familia" />
        <meta property="og:image" content="https://portfolio-josefamilia.vercel.app/images/profile.jpg" />
        <meta property="og:url" content="https://portfolio-josefamilia.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="Jose Rene Familia, web developer, frontend developer, portfolio" />
        <meta name="author" content="Jose Rene Familia" />
      </Head>
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
