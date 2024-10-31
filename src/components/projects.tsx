'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Globe, Server, Code, Cloud } from 'lucide-react'
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGithub, FaReact } from 'react-icons/fa'
import { SiMongodb, SiPostgresql, SiGoland, SiExpress, SiTailwindcss, SiCsharp, SiDotnet, SiNodedotjs, SiPrisma } from 'react-icons/si'
import { DiMsqlServer } from "react-icons/di";

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
        name: 'Netflix Landing Page',
        description: 'Single page application of Netflix landing page',
        technologies: [
          { name: 'HTML', icon: <FaHtml5 /> },
          { name: 'CSS', icon: <FaCss3Alt /> },
          { name: 'JavaScript', icon: <FaJs /> }
        ],
        githubUrl: 'https://github.com/Jose-Familia/Netflix-LandingPage',
        liveUrl: '',
      },
    ]
  },
  {
    name: 'Backend',
    icon: <Server className="w-5 h-5" />,
    projects: [
      {
        name: 'Golang Books API',
        description: 'Books API using Golang & PostgreSQL',
        technologies: [
          { name: 'Go', icon: <SiGoland /> },
          { name: 'PostgreSQL', icon: <SiPostgresql /> }
        ],
        githubUrl: 'https://github.com/Jose-Familia/Books_Crud',
      },
      {
        name: 'Node.js REST API',
        description: 'REST API Users using Node.js & Express',
        technologies: [
          { name: 'Node.js', icon: <FaNodeJs /> },
          { name: 'Express.js', icon: <SiExpress /> },
          { name: 'MongoDB', icon: <SiMongodb /> }
        ],
        githubUrl: 'https://github.com/Jose-Familia/My-Node-API',
      },
      {
        name: 'Estudents System Form Application',
        description: 'Form application using C#.NET & SQL Server',
        technologies: [
          { name: 'C#', icon: <SiCsharp /> },
          { name: '.NET', icon: <SiDotnet /> },  
          { name: 'SQL Server', icon: <DiMsqlServer/> }
        ],
        githubUrl: 'https://github.com/Jose-Familia/SistemadeEstudiantes',
      },
      {
        name: 'Prisma REST API',
        description: 'Rest API using Prisma & PostgreSQL',
        technologies: [
          { name: 'Prisma', icon: <SiPrisma /> },
          { name: 'Node.js', icon: <SiNodedotjs /> },  
          { name: 'Express.js', icon: <SiExpress/> },
          { name: 'PostgreSQL', icon: <SiPostgresql/> }
        ],
        githubUrl: 'https://github.com/Jose-Familia/Prisma-Users-API',
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
]

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

export default function Projects() {
  const [activeTab, setActiveTab] = useState(projectCategories[0].name)

  return (
    <div className="container mx-auto max-w-screen-lg px-2 py-8">
      <h2 className="text-2xl font-bold text-center mb-6">My Projects</h2>
      <div className="mb-6">
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
  )
}
