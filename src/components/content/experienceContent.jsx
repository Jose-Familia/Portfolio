import React from 'react';

const ExperienceContent = () => (
  <>
    <h2 className="font-semibold text-2xl mb-4">Experience</h2>
    <p className="mb-4">
      Throughout my university studies, I have gained knowledge in various areas of computer science and worked with different systems and technologies. Focusing on programming, I have experience with the following languages:
    </p>
    <details className="mb-6">
      <summary className="cursor-pointer font-medium mb-2">Programming Languages</summary>
      <ul className="list-disc list-inside pl-4 space-y-2">
        <li>C/C#</li>
        <li>Java</li>
        <li>HTML/CSS</li>
        <li>SQL</li>
        <li>Dart/Flutter</li>
      </ul>
    </details>
    <p className="mb-4">
      Additionally, I have worked with several technologies, including:
    </p>
    <details>
      <summary className="cursor-pointer font-medium mb-2">Technologies</summary>
      <ul className="list-disc list-inside pl-4 space-y-2">
        <li>Docker</li>
        <li>Kubernetes (K8S)</li>
        <li>Ansible</li>
        <li>Azure</li>
        <li>Git</li>
      </ul>
    </details>
    <meta name="keywords" content="Jose Rene Familia, web developer, frontend developer, portfolio" />
    <meta name="author" content="Jose Rene Familia" />
  </>
);

export default ExperienceContent;
