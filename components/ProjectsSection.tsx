'use client'

import { useEffect, useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Domains Manager',
    description: 'A comprehensive domain management platform enabling users to monitor, manage, and optimize their domain portfolios. Built with modern tech stack for scalability and performance.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
    technologies: ['React.js', 'PHP', 'Database', 'API'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 2,
    title: 'Dunwell Drycleaners',
    description: 'Modern business website for a professional dry cleaning service. Features service listings, pricing information, and easy contact options for customers.',
    image: 'https://images.unsplash.com/photo-1460925895917-adf4e0e5e2b3?w=600&h=400&fit=crop',
    technologies: ['WordPress', 'Elementor', 'WooCommerce'],
    liveUrl: 'https://example.com',
  },
  {
    id: 3,
    title: 'African Experience and Safaris',
    description: 'Tourism website showcasing safari experiences and travel packages across Africa. Features responsive design and immersive content for adventure seekers.',
    image: 'https://images.unsplash.com/photo-1488747807830-63789f68bb65?w=600&h=400&fit=crop',
    technologies: ['WordPress', 'Responsive Design', 'PHP'],
    liveUrl: 'https://example.com',
  },
  {
    id: 4,
    title: 'Radiofy',
    description: 'Radio-focused platform prototype with strong navigation design and intuitive user experience. Emphasizes audio streaming and content discovery.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=400&fit=crop',
    technologies: ['Figma', 'UI Design', 'Prototyping', 'UX'],
    liveUrl: 'https://example.com',
  },
  {
    id: 5,
    title: 'Malaikah Specialist Care',
    description: 'Healthcare platform focused on usability and building trust. Features intuitive patient interface and comprehensive health information management.',
    image: 'https://images.unsplash.com/photo-1576091160550-112173f7f869?w=600&h=400&fit=crop',
    technologies: ['Frontend Development', 'React', 'Healthcare UX', 'Accessibility'],
    liveUrl: 'https://example.com',
  },
  {
    id: 6,
    title: 'Tourism Company Website',
    description: 'Modern tourism website concept designed in Figma. Features elegant visual design and user-focused interface for travel planning and booking.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop',
    technologies: ['Figma', 'UI/UX Design', 'Prototyping', 'Web Design'],
  },
]

export function ProjectsSection() {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute('data-project-id') || '0')
            setVisibleProjects((prev) => [...new Set([...prev, id])])
          }
        })
      },
      { threshold: 0.2 }
    )

    document.querySelectorAll('[data-project-id]').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="section-container">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="section-title glow-text">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A selection of projects that showcase my expertise in frontend development, UI/UX design, and full-stack development.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                data-project-id={project.id}
                className={`group transition-all duration-700 ${
                  visibleProjects.includes(project.id)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="card-glass card-hover rounded-xl overflow-hidden flex flex-col h-full">
                  {/* Image Container */}
                  <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-foreground group-hover:glow-text transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs px-2 py-1 rounded-full bg-muted/20 text-muted-foreground">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-4 border-t border-white/10 mt-auto">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-primary hover:text-secondary transition-colors duration-300 hover:scale-110 transform"
                          aria-label="View live project"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors duration-300 hover:scale-110 transform"
                          aria-label="View GitHub repository"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
