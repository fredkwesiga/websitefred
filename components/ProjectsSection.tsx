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
  figma?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Africa Connect',
    description: 'A talent marketplace designed specifically for African youth by providing them with essential skills training and connecting them to global opportunities.',
    image: 'https://res.cloudinary.com/dgxsvle5c/image/upload/v1780146227/tek_talent_africa_logo_a94tyz.jpg',
    technologies: ['Figma', 'React.js', 'PHP', 'Database', 'API'],
    liveUrl: 'https://www.africaconnect.uk/home',
  },
  {
    id: 2,
    title: 'Dunwell Drycleaners',
    description: 'Modern business website for a professional dry cleaning service. Features service listings, pricing information, and easy contact options for customers.',
    image: 'https://res.cloudinary.com/dgxsvle5c/image/upload/v1780144407/HUB_02_yzvrzu.jpg',
    technologies: ['WordPress', 'Elementor'],
    liveUrl: 'https://dunwelldrycleaners.com',
  },
  {
    id: 3,
    title: 'Everything Uganda',
    description: 'Tourism website showcasing safari experiences and travel packages across Africa. I was the head designer on the project',
    image: 'https://res.cloudinary.com/dgxsvle5c/image/upload/v1780144856/everythinguganda_pgckbo.jpg',
    technologies: ['Figma', 'Responsive Design', 'Next.js', 'Node.js'],
    liveUrl: 'https://everythinguganda.com',
  },
  {
    id: 4,
    title: 'Radiofy',
    description: 'Radio-focused platform prototype with strong navigation design and intuitive user experience. Emphasizes audio streaming and content discovery.',
    image: 'https://res.cloudinary.com/dgxsvle5c/image/upload/v1780147090/radiofy_fcldh9.png',
    technologies: ['Figma', 'UI Design', 'Prototyping', 'UX'],
    figma: 'https://www.figma.com/design/3kZSyU2HJsHNAUufBQ7VdH/Radiofy7?node-id=20-133&t=Lr9463CcrOspOuL9-1',
  },
  {
    id: 5,
    title: 'Trainer / Facilitator',
    description: 'Trained over 70 young women in foundations of computer and software development.',
    image: 'https://res.cloudinary.com/dgxsvle5c/image/upload/v1780147722/arua_fewby3.jpg',
    technologies: ['HTML', 'CSS'],
    // liveUrl: 'https://example.com',
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
                      {project.figma && (
                        <a
                          href={project.figma}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors duration-300 hover:scale-110 transform"
                          aria-label="View Figma design"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Figma Design
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
