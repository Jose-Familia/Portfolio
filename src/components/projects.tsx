'use client'

import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { Github, Globe, Server, Code, Cloud } from 'lucide-react'

// Definición de tipos para nuestros proyectos
type Project = {
  name: string
  description: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
}

type ProjectCategory = {
  name: string
  icon: React.ReactNode
  projects: Project[]
}

// Datos de ejemplo
const projectCategories: ProjectCategory[] = [
  {
    name: 'Frontend',
    icon: <Code className="w-6 h-6" />,
    projects: [
      {
        name: 'E-commerce Website',
        description: 'A responsive e-commerce site built with React and Redux',
        technologies: ['React', 'Redux', 'Tailwind CSS'],
        githubUrl: 'https://github.com/yourusername/ecommerce-frontend',
        liveUrl: 'https://ecommerce-example.com'
      },
      {
        name: 'Portfolio Site',
        description: 'Personal portfolio showcasing my projects and skills',
        technologies: ['Next.js', 'Framer Motion', 'Styled Components'],
        githubUrl: 'https://github.com/yourusername/portfolio',
        liveUrl: 'https://yourportfolio.com'
      }
    ]
  },
  {
    name: 'Backend',
    icon: <Server className="w-6 h-6" />,
    projects: [
      {
        name: 'RESTful API',
        description: 'A RESTful API for a blog application',
        technologies: ['Node.js', 'Express', 'MongoDB'],
        githubUrl: 'https://github.com/yourusername/blog-api'
      },
      {
        name: 'Authentication Service',
        description: 'Microservice for user authentication and authorization',
        technologies: ['Python', 'Flask', 'JWT', 'PostgreSQL'],
        github: 'https://github.com/yourusername/auth-service'
      }
    ]
  },
  {
    name: 'DevOps',
    icon: <Cloud className="w-6 h-6" />,
    projects: [
      {
        name: 'CI/CD Pipeline',
        description: 'Automated CI/CD pipeline for a microservices architecture',
        technologies: ['Jenkins', 'Docker', 'Kubernetes'],
        githubUrl: 'https://github.com/yourusername/cicd-pipeline'
      },
      {
        name: 'Infrastructure as Code',
        description: 'IaC templates for cloud resources',
        technologies: ['Terraform', 'AWS', 'Ansible'],
        githubUrl: 'https://github.com/yourusername/infrastructure-as-code'
      }
    ]
  }
]

export default function Projects() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-extrabold text-black dark:text-white text-center mb-8">My Projects</h2>
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List className="flex p-1 space-x-1 bg-black/20 dark:bg-white/20 rounded-xl mb-8">
          {projectCategories.map((category) => (
            <Tab
              key={category.name}
              className={({ selected }) =>
                `w-full py-2.5 text-sm leading-5 font-medium text-black dark:text-white rounded-lg
                focus:outline-none focus:ring-2 ring-offset-2 ring-offset-black dark:ring-offset-white ring-white ring-opacity-60
                ${
                  selected
                    ? 'bg-white dark:bg-black shadow'
                    : 'text-black dark:text-white hover:bg-white/[0.12] dark:hover:bg-black/[0.12] hover:text-black dark:hover:text-white'
                }`
              }
            >
              <div className="flex items-center justify-center space-x-2">
                {category.icon}
                <span>{category.name}</span>
              </div>
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {projectCategories.map((category, idx) => (
            <Tab.Panel
              key={idx}
              className={`bg-white dark:bg-black rounded-xl p-3
                focus:outline-none focus:ring-2 ring-offset-2 ring-offset-black dark:ring-offset-white ring-white ring-opacity-60`}
            >
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.projects.map((project) => (
                  <li
                    key={project.name}
                    className="relative p-3 rounded-md hover:bg-black/10 dark:hover:bg-white/10 transition-colors duration-300 ease-in-out"
                  >
                    <h3 className="text-sm font-medium leading-5 mb-1 text-black dark:text-white">
                      {project.name}
                    </h3>
                    <p className="text-sm text-black dark:text-white mb-2">{project.description}</p>
                    <ul className="mt-1 flex flex-wrap gap-1 mb-2">
                      {project.technologies.map((tech) => (
                        <li
                          key={tech}
                          className="px-2 py-1 bg-black text-white dark:bg-white dark:text-black rounded-full text-xs"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                    <div className="flex space-x-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-black dark:text-white hover:text-black dark:hover:text-white"
                      >
                        <Github className="w-4 h-4 mr-1" />
                        <span className="text-sm">GitHub</span>
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-black dark:text-white hover:text-black dark:hover:text-white"
                        >
                          <Globe className="w-4 h-4 mr-1" />
                          <span className="text-sm">Live Demo</span>
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}