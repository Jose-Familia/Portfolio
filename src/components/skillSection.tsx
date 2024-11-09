import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Code, Database, Server } from "lucide-react";

const skillsData = [
  {
    category: "Frontend",
    icon: <Code className="h-6 w-6 text-primary" />,
    skills: ["HTML/CSS", "JavaScript", "React", "Tailwind CSS", "TypeScript", "Next.js", "Astro"],
  },
  {
    category: "Backend",
    icon: <Server className="h-6 w-6 text-primary" />,
    skills: ["Node.js", "Express", "Golang"],
  },
  {
    category: "Database",
    icon: <Database className="h-6 w-6 text-primary" />,
    skills: ["MongoDB", "PostgreSQL", "SQL Server", "PrismaORM"],
  },
  {
    category: "DevOps",
    icon: <Cloud className="h-6 w-6 text-primary" />,
    skills: ["Docker", "CI/CD", "Git", "GitHub Actions"],
  }
];

export default function SkillsSection() {
  return (
    <section className="py-8 bg-background flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h2 className="text-2xl font-bold text-center mb-6">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((category) => (
            <Card key={category.category} className="flex flex-col h-full">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                {category.icon}
                <CardTitle className="text-sm ml-2">{category.category}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs px-2 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}