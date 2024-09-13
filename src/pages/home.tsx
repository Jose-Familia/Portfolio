import BlurFade from "@/components/magicui/blur-fade";

export default function Home() {
    return (
        <div className="items-center justify-center py-10">
            <BlurFade delay={0.4} className="text-5xl font-bold text-center py-9">
            <h1 className="text-5xl font-bold text-center">
                Welcome to my website!
            </h1>
            </BlurFade>

            <BlurFade delay={0.4} className="text-md text-center">
            <p className="text-md text-center">
                This is a simple website built with Next.js and Tailwind CSS.
            </p>
            </BlurFade>

            
      </div>
    );
  }