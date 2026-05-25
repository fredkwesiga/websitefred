'use client'

import { useEffect, useState } from 'react'

const stats = [
  { label: 'Years of Experience', value: '5+' },
  { label: 'Projects Completed', value: '15+' },
  { label: 'Happy Clients', value: '10+' },
  { label: 'Mentees Trained', value: '30+' },
]

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.querySelector('#about')
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="section-container">
        <div className="space-y-12">
          {/* Section Header */}
          <div className={`space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="section-title glow-text">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A Ugandan software developer and UI/UX designer passionate about creating digital experiences that solve real problems.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Text */}
            <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-muted-foreground leading-relaxed text-lg">
                I&apos;m a software developer and UI/UX designer with a strong foundation in frontend development and user-centered design principles. With over 5 years of experience, I&apos;ve had the opportunity to work on diverse projects ranging from responsive web applications to mobile experiences.
              </p>

              <p className="text-muted-foreground leading-relaxed text-lg">
                My expertise spans modern web technologies including React, Next.js, and JavaScript frameworks, complemented by design skills in Figma and strong understanding of UX principles. I believe in building accessible, scalable systems that prioritize user needs.
              </p>

              <p className="text-muted-foreground leading-relaxed text-lg">
                Beyond my professional work, I&apos;m deeply committed to mentorship and education. As a trainer with Refactory Uganda&apos;s Foundations of Software Development 10X Program, I&apos;m passionate about empowering young women with computer science and software engineering skills through the Hire a School Lab Initiative partnered with the Mastercard Foundation.
              </p>

              <div className="flex gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">✓</div>
                  <span className="text-muted-foreground">Accessibility Focused</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-sm">✓</div>
                  <span className="text-muted-foreground">User-Centered Design</span>
                </div>
              </div>
            </div>

            {/* Right Column - Cards */}
            <div className={`space-y-4 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="card-glass card-hover p-6 rounded-xl text-center"
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Skills Summary Card */}
              <div className="card-glass p-6 rounded-xl space-y-4">
                <h3 className="font-semibold text-foreground">Core Skills</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Frontend Development</p>
                    <div className="flex gap-2 flex-wrap">
                      {['React', 'Next.js', 'JavaScript', 'TypeScript'].map((skill) => (
                        <span
                          key={skill}
                          className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">UI/UX & Design</p>
                    <div className="flex gap-2 flex-wrap">
                      {['Figma', 'UI Design', 'UX Research', 'Prototyping'].map((skill) => (
                        <span
                          key={skill}
                          className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Backend & Tools</p>
                    <div className="flex gap-2 flex-wrap">
                      {['PHP', 'WordPress', 'Python', 'GitHub'].map((skill) => (
                        <span
                          key={skill}
                          className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Education Card */}
              <div className="card-glass p-6 rounded-xl space-y-3">
                <h3 className="font-semibold text-foreground">Education</h3>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Refactory Uganda</p>
                  <p className="text-xs text-muted-foreground">Foundations of Software Development</p>
                  <p className="text-xs text-primary font-medium pt-2">Trainer & Mentor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
