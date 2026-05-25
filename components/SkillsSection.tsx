'use client'

import { useEffect, useState } from 'react'

interface SkillCategory {
  title: string
  color: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    color: 'from-primary to-secondary',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'UI/UX Design',
    color: 'from-secondary to-accent',
    skills: ['Figma', 'UI Design', 'UX Research', 'Prototyping', 'Wireframing', 'Design Systems', 'Usability Testing'],
  },
  {
    title: 'Backend & CMS',
    color: 'from-accent to-primary',
    skills: ['PHP', 'WordPress', 'Elementor', 'Database Design', 'REST APIs', 'Python'],
  },
  {
    title: 'Tools & Workflow',
    color: 'from-primary via-secondary to-accent',
    skills: ['GitHub', 'Git', 'Vercel', 'Visual Studio Code', 'DevTools', 'Responsive Design', 'Accessibility (WCAG)'],
  },
]

export function SkillsSection() {
  const [visibleCategories, setVisibleCategories] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-category-index') || '0')
            setVisibleCategories((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('[data-category-index]').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="section-container">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="section-title glow-text">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A comprehensive overview of my technical skills and expertise across different domains.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                data-category-index={index}
                className={`transition-all duration-700 ${
                  visibleCategories.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="card-glass card-hover p-8 rounded-xl space-y-6 group">
                  {/* Category Title */}
                  <div>
                    <div className={`inline-block bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                      <h3 className="text-2xl font-bold">{category.title}</h3>
                    </div>
                    <div className={`h-1 w-12 bg-gradient-to-r ${category.color} rounded-full mt-3 group-hover:w-24 transition-all duration-300`} />
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, i) => (
                      <div
                        key={i}
                        className={`p-3 rounded-lg border transition-all duration-300 hover:scale-105 transform ${
                          index === 0
                            ? 'bg-primary/5 border-primary/30 hover:bg-primary/10 hover:border-primary/50'
                            : index === 1
                              ? 'bg-secondary/5 border-secondary/30 hover:bg-secondary/10 hover:border-secondary/50'
                              : index === 2
                                ? 'bg-accent/5 border-accent/30 hover:bg-accent/10 hover:border-accent/50'
                                : 'bg-primary/5 border-primary/30 hover:bg-primary/10 hover:border-primary/50'
                        }`}
                      >
                        <p className={`text-sm font-medium text-center ${
                          index === 0
                            ? 'text-primary'
                            : index === 1
                              ? 'text-secondary'
                              : index === 2
                                ? 'text-accent'
                                : 'text-primary'
                        }`}>
                          {skill}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Skill Count */}
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-xs text-muted-foreground">
                      {category.skills.length} core competencies
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Proficiency Breakdown */}
          <div className="card-glass p-8 rounded-xl space-y-6 mt-8">
            <h3 className="text-xl font-bold text-foreground">Proficiency Levels</h3>

            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-foreground">Frontend Technologies</span>
                  <span className="text-sm text-muted-foreground">Expert</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-secondary w-4/5" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-foreground">UI/UX Design</span>
                  <span className="text-sm text-muted-foreground">Expert</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-secondary to-accent w-4/5" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-foreground">Backend Development</span>
                  <span className="text-sm text-muted-foreground">Intermediate</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-accent to-primary w-3/5" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-foreground">Mentorship & Training</span>
                  <span className="text-sm text-muted-foreground">Expert</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary via-secondary to-accent w-4/5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
