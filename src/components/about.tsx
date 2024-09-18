import React from 'react';
import TypingAnimation from './ui/typingAnimation';

export default function About() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-5xl font-bold text-center py-9">
        <h1 className="text-5xl font-bold text-center">
          Hi,{' '}
          <TypingAnimation
            steps={['my name is Jose Rene Familia', "i'm a Front End Developer", "i'm a Systems Engineer Student"]}
            loop={true}
          />
        </h1>
      </div>

      <div className="flex justify-center">
        <p className="text-md text-center max-w-3xl">
          I am an Engineering Systems student with a passion for technology and continuous learning. With a strong foundation in frontend development, I have hands-on experience in technologies like React, and I proficient in working with databases, Golang, and Node.js. I thrive on solving complex problems and am always eager to take on new challenges that push me to expand my technical expertise. As someone who enjoys both learning and applying innovative solutions, I am committed to advancing my skills while contributing to impactful projects.
        </p>
      </div>
    </div>
  );
}