'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Server, Database, Cloud } from 'lucide-react'

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
    <section className="w-full bg-background">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillsData.map((category) => (
            <Card key={category.category} className="flex flex-col h-full">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                {category.icon}
                <CardTitle className="text-sm ml-2">{category.category}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-1">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs px-2 py-0.5">
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
  )
}
