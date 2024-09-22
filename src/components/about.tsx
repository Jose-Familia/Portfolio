'use client';
import React, { useEffect, useState } from 'react';
import TypingAnimation from './ui/typingAnimation';

const steps: string[] = [
  "My name is Jose Familia",
  "I am Frontend Developer",
  "I am an Systems Engineer Student"
];

export default function About() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); 
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial state

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-4xl font-bold justify-center text-center py-12">
        <h1 className="text-5xl font-bold">
          <div
            className={`inline-block ${isMobile ? 'h-24' : 'h-32'}`}
            style={{
              minHeight: '4rem', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              transition: 'height 0.3s ease'
            }}
          >
            {isMobile ? (
              "My name is Jose Familia"
            ) : (
              <TypingAnimation loop={true} steps={steps} />
            )}
          </div>
        </h1>
      </div>

      <div className="flex justify-center">
        <p className="text-md text-center max-w-3xl">
          I am an Engineering Systems student with a passion for technology and continuous learning. With a strong foundation in frontend development, I have hands-on experience in technologies like React, and I am proficient in working with databases, Golang, and Node.js. I thrive on solving complex problems and am always eager to take on new challenges that push me to expand my technical expertise. As someone who enjoys both learning and applying innovative solutions, I am committed to advancing my skills while contributing to impactful projects.
        </p>
      </div>
    </div>
  );
}