import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold glow-text">FK</h3>
            <p className="text-sm text-muted-foreground">
              Software Developer & UI/UX Designer
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#hero" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/fredkwesiga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/fred-kwesiga65/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/fredkwesiga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Get in Touch</h4>
            <p className="text-sm text-muted-foreground">
              Ready to discuss a project? Send me an email.
            </p>
            <a
              href="mailto:fredkwesiga9@gmail.com"
              className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-lg text-sm font-medium hover:bg-primary/30 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              © {currentYear} Fred Kwesiga. All rights reserved.
            </p>
            <p>
              Developed by Fred Kwesiga
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
