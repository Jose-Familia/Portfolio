export default function SkillsSection() {
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "TypeScript",
    "HTML/CSS",
    "Python",
    "Git",
    "SQL",
    "RESTful APIs",
    "Responsive Design",
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="text-sm py-2 px-4 rounded-full shadow-md"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}