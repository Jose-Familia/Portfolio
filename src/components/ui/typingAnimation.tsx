"use client";

import { useEffect, useState } from 'react';

interface TypingAnimationProps {
  steps: string[];
  loop?: boolean;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ steps, loop = true }) => {
  const [displayText, setDisplayText] = useState('');
  const [stepIndex, setStepIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentStep = steps[stepIndex];
      const isLastStep = stepIndex === steps.length - 1;

      if (isDeleting) {
        if (charIndex > 0) {
          setDisplayText(currentStep.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setStepIndex((prev) => (isLastStep && !loop ? prev : (prev + 1) % steps.length));
        }
      } else {
        if (charIndex < currentStep.length) {
          setDisplayText(currentStep.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      }
    };

    const typingTimeout = setTimeout(handleTyping, isDeleting ? 50 : 150);

    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, stepIndex, steps, loop]);

  return (
    <>
      <span>{displayText}</span>
      <meta name="keywords" content="Jose Rene Familia, web developer, frontend developer, portfolio" />
      <meta name="author" content="Jose Rene Familia" />
    </>
  );
};

export default TypingAnimation;
