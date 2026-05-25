'use client'

import { useEffect, useState } from 'react'

interface ExperienceItem {
  id: number
  company: string
  position: string
  period: string
  description: string[]
  skills: string[]
  isEducation?: boolean
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: 'TekJuice',
    position: 'UI/UX Designer & Software Developer',
    period: 'March 2025 – March 2026',
    description: [
      'Designed user-centered web and mobile interfaces with focus on conversion and engagement',
      'Created wireframes, prototypes, and high-fidelity designs in Figma',
      'Worked with React.js and PHP to implement responsive interfaces',
      'Conducted usability testing and A/B testing to validate design decisions',
      'Collaborated with developers and stakeholders to ensure design excellence',
    ],
    skills: ['React.js', 'Figma', 'PHP', 'UI Design', 'UX Research'],
  },
  {
    id: 2,
    company: 'Audersity',
    position: 'UI/UX Designer & Website Developer',
    period: 'July 2024 – October 2024',
    description: [
      'Designed responsive interfaces and user flows in Figma',
      'Built and deployed websites using WordPress and Elementor',
      'Improved information architecture and overall usability',
      'Implemented best practices for mobile-first design',
    ],
    skills: ['Figma', 'WordPress', 'Elementor', 'Web Design', 'Responsive Design'],
  },
  {
    id: 3,
    company: 'IICS Technologies',
    position: 'Frontend Software Developer',
    period: 'June 2022 – April 2023',
    description: [
      'Developed responsive frontend interfaces with HTML, CSS, and JavaScript',
      'Worked in agile teams to deliver features on sprint basis',
      'Built user-focused interfaces from Figma designs',
      'Maintained code quality and best practices',
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Agile'],
  },
  {
    id: 4,
    company: 'Refactory Uganda',
    position: 'Software Developer',
    period: 'March 2021 – March 2022',
    description: [
      'Developed web and mobile applications using modern technologies',
      'Participated in agile software development teams',
      'Contributed to the development of healthcare platform solutions',
      'Collaborated on code reviews and knowledge sharing',
    ],
    skills: ['Web Development', 'Mobile Development', 'Agile', 'Healthcare Tech'],
  },
  {
    id: 5,
    company: 'Refactory Uganda',
    position: 'Trainer & Mentor',
    period: '10X Program',
    isEducation: true,
    description: [
      'Training young women in computer science and software development fundamentals',
      'Supporting beginner learners in HTML, CSS, GitHub, WordPress, and software engineering foundations',
      'Mentoring and guiding students through their learning journey',
      'Participating in Hire a School Lab Initiative partnered with Mastercard Foundation',
    ],
    skills: ['Teaching', 'Mentorship', 'Curriculum Design', 'Front-End Fundamentals'],
  },
]

export function ExperienceSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('[data-index]').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="section-container">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="section-title glow-text">Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A timeline of my professional journey, projects, and growth in software development and design.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent opacity-30" />

            {/* Experience Items */}
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <div
                  key={experience.id}
                  data-index={index}
                  className={`transition-all duration-700 ${
                    visibleItems.includes(index)
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                >
                  <div className={`md:grid md:grid-cols-2 md:gap-8 ${index % 2 === 1 ? 'md:flex md:flex-row-reverse' : ''}`}>
                    {/* Timeline Dot */}
                    <div className="hidden md:flex justify-center">
                      <div className="relative">
                        <div className={`w-4 h-4 rounded-full absolute left-1/2 top-2 transform -translate-x-1/2 ${
                          experience.isEducation
                            ? 'bg-gradient-to-r from-primary to-secondary'
                            : 'bg-gradient-to-r from-secondary to-accent'
                        }`} />
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <div className={`card-glass card-hover p-6 md:p-8 rounded-xl space-y-4 ${experience.isEducation ? 'border-primary/30' : ''}`}>
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{experience.position}</h3>
                          <p className={`text-sm font-medium ${experience.isEducation ? 'text-primary' : 'text-secondary'}`}>
                            {experience.company}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">{experience.period}</p>
                        </div>

                        <ul className="space-y-2">
                          {experience.description.map((item, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex gap-3">
                              <span className="text-primary mt-1">▸</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 pt-4">
                          {experience.skills.map((skill) => (
                            <span
                              key={skill}
                              className={`text-xs px-2 py-1 rounded-full ${
                                experience.isEducation
                                  ? 'bg-primary/10 text-primary'
                                  : 'bg-secondary/10 text-secondary'
                              }`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
