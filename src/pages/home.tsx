import BlurFade from "@/components/magicui/blur-fade";
import TypingAnimation from "@/components/typingAnimation";



export default function Home() {
    return (
        <div className="items-center justify-center py-10">
            <BlurFade delay={0.4} className="text-5xl font-bold text-center py-9">
            <h1 className="text-5xl font-bold text-center">
                Hi,{' '}
                <TypingAnimation
                    steps={['my name is Jose Rene Familia', "i'm  a Front End Developer"]}
                    loop={true}
                />
            </h1>
            </BlurFade>

            <BlurFade delay={0.4} className="text-md text-center">
            <p className="text-md text-center justify-center px-72">
            I am an Engineering Systems student with a passion for technology and continuous learning. With a strong foundation in frontend development, I have hands-on experience in technologies like React, and I'm proficient in working with databases, Golang, and Node.js. I thrive on solving complex problems and am always eager to take on new challenges that push me to expand my technical expertise. As someone who enjoys both learning and applying innovative solutions, I am committed to advancing my skills while contributing to impactful projects.
            </p>
            </BlurFade>    
      </div>
    );
  }