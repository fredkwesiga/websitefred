'use client'

import { useEffect, useState } from 'react'
import { Mail, Linkedin, Github, ArrowRight } from 'lucide-react'

export function ContactSection() {
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

    const element = document.querySelector('#contact')
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'fredkwesiga9@gmail.com',
      href: 'mailto:fredkwesiga9@gmail.com',
      color: 'from-primary to-secondary',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'fredkwesiga',
      href: 'https://www.linkedin.com/in/fred-kwesiga65/',
      color: 'from-secondary to-accent',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'fredkwesiga',
      href: 'https://github.com/fredkwesiga',
      color: 'from-accent to-primary',
    },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="section-container">
        <div className="space-y-12">
          {/* Section Header */}
          <div className={`text-center space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="section-title glow-text">Let&apos;s Build Something Together</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out through any of the channels below.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contacts.map((contact, index) => {
              const Icon = contact.icon
              return (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`group transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                >
                  <div className="card-glass card-hover p-8 rounded-xl text-center space-y-4 h-full flex flex-col items-center justify-center hover:shadow-lg hover:shadow-primary/20">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${contact.color} p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:glow-text transition-all duration-300">
                        {contact.label}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{contact.value}</p>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>

          {/* CTA Section */}
          <div className={`card-glass p-8 md:p-12 rounded-xl text-center space-y-6 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Ready to collaborate?
              </h3>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Whether you have a project in mind or just want to discuss design and development, I&apos;d love to hear from you. Let&apos;s create something impactful together.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="mailto:fredkwesiga9@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
              >
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#experience"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-primary/50 rounded-lg font-semibold text-primary hover:bg-primary/10 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <p className="text-3xl font-bold glow-text">24/7</p>
              <p className="text-sm text-muted-foreground">Available for inquiries</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold glow-text">🇺🇬</p>
              <p className="text-sm text-muted-foreground">Based in Uganda</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold glow-text">🚀</p>
              <p className="text-sm text-muted-foreground">Always learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
