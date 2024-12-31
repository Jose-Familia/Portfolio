'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Globe, Server, Code, Cloud } from 'lucide-react'
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGithub, FaFileExcel } from 'react-icons/fa'
import { SiMongodb, SiPostgresql, SiGoland, SiExpress, SiCsharp, SiDotnet, SiNodedotjs, SiPrisma, SiPython, SiTypescript, SiAstro } from 'react-icons/si'
import { DiMsqlServer } from "react-icons/di"

type Technology = {
  name: string
  icon: React.ReactNode
}

type Project = {
  name: string
  description: string
  technologies: Technology[]
  githubUrl: string
  liveUrl?: string
}

type ProjectCategory = {
  name: string
  icon: React.ReactNode
  projects: Project[]
}

const projectCategories: ProjectCategory[] = [
  {
    name: 'Frontend',
    icon: <Code className="w-5 h-5" />,
    projects: [
      {
        name: 'Markdown Editor',
        description: 'Markdown Online Editor In Astro',
        technologies: [
          { name: 'Astro', icon: <SiAstro /> },
          { name: 'Typescript', icon: < SiTypescript /> },
        ],
        githubUrl: 'https://github.com/Jose-Familia/Markdown_Editor',
        liveUrl: 'https://markdown-editor-cju1ji4kv-jose-familias-projects.vercel.app/',
      },
    ]
  },
  {
    name: 'Backend',
    icon: <Server className="w-5 h-5" />,
    projects: [
      {
        name: 'TI Tickets Administrator',
        description: 'Create a IT tickets with an simple interfaz and .xlsx archives',
        technologies: [
          { name: 'python', icon:  <SiPython/>},
          { name: 'Excel', icon: <FaFileExcel/>}
        ],
        githubUrl: 'https://github.com/Jose-Familia/TI_Tickets-administration',
      },
      {
        name: 'Meeting Planer',
        description: 'AutoMeetingBot is an RPA that automates the entire flow related to planning, executing and monitoring virtual meetings.',
        technologies: [
          { name: 'python', icon:  <SiPython/>},
          { name: 'Postgresql', icon: <SiPostgresql/>}
        ],
        githubUrl: 'https://github.com/Jose-Familia/Meeting_Planning',
      }
    ]
  },
  {
    name: 'DevOps',
    icon: <Cloud className="w-5 h-5" />,
    projects: [
      {
        name: 'Github Profile Readme',
        description: 'My personal Github profile readme',
        technologies: [
          { name: 'Github Actions', icon: <FaGithub /> },
          { name: 'Node.js', icon: <FaNodeJs /> }
        ],
        githubUrl: 'https://github.com/Jose-Familia/Jose-Familia',
      }
    ]
  }
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg dark:hover:shadow-white/10">
      <CardHeader className="p-4 pb-2">
        <CardTitle className="text-base font-semibold">{project.name}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-2 pb-0">
        <div className="flex flex-wrap gap-1 mb-2">
          {project.technologies.map((tech) => (
            <Badge key={tech.name} variant="secondary" className="flex items-center gap-1 px-2 py-0.5 text-xs rounded-full">
              {tech.icon}
              <span>{tech.name}</span>
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-start gap-2 p-4 pt-2">
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline flex items-center gap-1">
          <Github className="w-3 h-3" />
          GitHub
        </a>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline flex items-center gap-1">
            <Globe className="w-3 h-3" />
            Live Demo
          </a>
        )}
      </CardFooter>
    </Card>
  )
}

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState(projectCategories[0].name)

  return (
    <section className="w-full bg-background">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="mb-8">
          <div className="flex p-1 space-x-1 bg-secondary rounded-xl max-w-md mx-auto">
            {projectCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveTab(category.name)}
                className={`flex-1 flex items-center justify-center space-x-1 py-2 px-2 text-xs font-medium leading-5 rounded-lg transition-colors duration-200 ease-out ${
                  activeTab === category.name
                    ? 'bg-background text-foreground shadow'
                    : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
        {projectCategories.map((category) => (
          category.name === activeTab && (
            <div key={category.name} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.projects.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          )
        ))}
      </div>
    </section>
  )
}
