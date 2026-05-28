'use client'

import { useEffect, useState } from 'react'

const stats = [
  { label: 'Years of Experience', value: '5+' },
  { label: 'Projects Completed', value: '15+' },
  { label: 'Happy Clients', value: '10+' },
  { label: 'Students/Mentees Trained', value: '74+' },
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
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Text */}
            <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-slate-300/80 leading-relaxed text-lg">
                I&apos;m a Software Developer and UI/UX designer with a strong foundation in frontend development and user-centered design principles back with Bachelor&apos;s Degree in Computer Science. With over 5 years of experience, I&apos;ve had the opportunity to work on diverse projects ranging from responsive web applications to mobile experiences.
              </p>

              <p className="text-slate-300/80 leading-relaxed text-lg">
                My expertise spans modern web technologies including React, Next.js, and JavaScript frameworks, Python and PHP, complemented by design skills in Figma and strong understanding of UX principles. I believe in building accessible, scalable systems that prioritize user needs.
              </p>

              <p className="text-slate-300/80 leading-relaxed text-lg">
                Over the years, I’ve worked on projects spanning healthcare, tourism, digital services, education, 
                business platforms, and personal websites - including <a className="font-medium text-slate-100 hover:text-purple-500 transition-colors" href="https://www.everythinguganda.com" target="_blank" rel="noopener noreferrer" >Everything Uganda</a>,  <a className="font-medium text-slate-100 hover:text-purple-500 transition-colors" href="https://iicstechnologies.com/i/" target="_blank" rel="noopener noreferrer">IICS</a>  always focusing on creating accessible, scalable, and meaningful 
                user experiences that balance design thinking with clean engineering.
              </p>

              <p className="text-slate-300/80 leading-relaxed text-lg">
                Beyond my professional work, I&apos;m deeply committed to mentorship and education. I have trained  more than 74+ women with computer science and software engineering skills under  <a className="font-medium text-slate-100 hover:text-purple-500 transition-colors" href="https://refactory.academy" target="_blank" rel="noopener noreferrer">
                  Refactory Uganda</a>&apos;s Foundations of Software Development 10X Program,through the Hire a School Lab Initiative partnered with the Mastercard Foundation.
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
                    <div className="text-3xl font-bold bg-gradient-to-br from-primary via-secondary to-accent bg-clip-text">
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
                  <h2 className="text-sm font-semibold text-foreground">Bachelor of Science in Computer Science</h2>
                  <h3 className="text-sm font-semibold text-muted-foreground">Victoria University - Kampala</h3>
                  <p className="text-xs text-primary font-medium pt-2">2025 - Present</p>
                </div>

                <hr></hr>

                <div className="space-y-2">
                  <h2 className="text-sm font-semibold text-foreground">Certificate in Software Engineering</h2>
                  <h3 className="text-xs text-muted-foreground">Refactory Uganda - Kampala</h3>
                  <p className="text-xs text-primary font-medium pt-2">March 2021 - March 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
