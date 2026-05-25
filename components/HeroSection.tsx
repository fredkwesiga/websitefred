'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Download } from 'lucide-react'
import Link from 'next/link'

export function HeroSection() {
  const [displayedText, setDisplayedText] = useState('')
  const fullText = 'I build user-focused digital experiences'
  const [isDeleting, setIsDeleting] = useState(false)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting && index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1))
        setIndex(index + 1)
      } else if (isDeleting && index > 0) {
        setDisplayedText(fullText.slice(0, index - 1))
        setIndex(index - 1)
      } else if (index === fullText.length) {
        setTimeout(() => setIsDeleting(true), 3000)
      } else if (index === 0 && isDeleting) {
        setIsDeleting(false)
      }
    }, isDeleting ? 30 : 50)

    return () => clearTimeout(timer)
  }, [index, isDeleting])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-0"
    >
      <div className="section-container w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              {/* <div className="inline-block">
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  Welcome to my portfolio
                </span>
              </div> */}

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
                Fred Kwesiga
              </h1>

              <div className="text-xl md:text-2xl font-semibold text-secondary">
                Software Developer & UI/UX Designer
              </div>

              {/* Typing Effect */}
              <div className="h-16 flex items-center">
                <p className="text-lg text-muted-foreground font-light">
                  <span className="glow-text font-medium">{displayedText}</span>
                  <span className="animate-pulse">|</span>
                </p>
              </div>

              <div className="space-y-4 pt-4">
                <p className="text-muted-foreground leading-relaxed max-w-lg">
                  I craft elegant web experiences through React, modern design systems, and user-centered thinking. Based in Uganda, passionate about solving real-world problems through technology.
                </p>
                <p className="text-muted-foreground leading-relaxed max-w-lg">
                  Passionate about empowering the next generation of developers through the Refactory Uganda 10X Program and Hire a School Lab Initiative.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary/50 rounded-lg font-semibold text-primary hover:bg-primary/10 transition-all duration-300 hover:border-primary"
              >
                Download CV
                <Download className="w-4 h-4" />
              </a>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-accent/50 rounded-lg font-semibold text-accent hover:bg-accent/10 transition-all duration-300 hover:border-accent"
              >
                Contact Me
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-12 border-t border-white/10">
              <a
                href="https://github.com/fredkwesiga"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/fredkwesiga"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.81 0-9.728h3.554v1.375c.43-.664 1.199-1.61 2.919-1.61 2.134 0 3.734 1.39 3.734 4.376v5.588zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.704 0-.951.768-1.704 1.959-1.704 1.188 0 1.914.753 1.939 1.704 0 .946-.751 1.704-1.983 1.704zm1.946 11.596H3.392V9.724h3.891v10.727zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="mailto:fred@example.com"
                className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span className="text-sm">Email</span>
              </a>
            </div>
          </div>

          {/* Right Visual Element */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Animated gradient background */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 blur-2xl animate-pulse" />

              {/* Card content */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-white/10 backdrop-blur-xl p-8 flex flex-col justify-center items-center space-y-6">
                <div className="space-y-2 text-center">
                  <div className="text-6xl font-bold glow-text">FK</div>
                  <p className="text-lg font-semibold text-foreground">Fred Kwesiga</p>
                  <p className="text-sm text-muted-foreground">Developer & Designer</p>
                </div>

                <div className="grid grid-cols-2 gap-4 w-full text-center text-sm">
                  <div>
                    <p className="text-2xl font-bold text-primary">5+</p>
                    <p className="text-xs text-muted-foreground">Years Experience</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-secondary">15+</p>
                    <p className="text-xs text-muted-foreground">Projects Done</p>
                  </div>
                </div>

                <div className="w-full space-y-2 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-xs text-muted-foreground">React & Next.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    <span className="text-xs text-muted-foreground">UI/UX Design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-xs text-muted-foreground">Full Stack Dev</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
