import { profile } from '../data/content'
import { Mail, ArrowUp } from 'lucide-react'
import { Github, Linkedin } from './Icons'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative z-10 px-6 max-w-6xl mx-auto py-12 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-graphite/10 dark:border-bone/10">
      <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
        <p className="font-mono-label text-xs text-graphite/60 dark:text-bone/50">
          © {new Date().getFullYear()} {profile.name}. Crafted with React &amp; Three.js.
        </p>
      </div>

      <div className="flex items-center gap-5">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="p-2 rounded-lg border border-graphite/15 dark:border-bone/15 text-graphite/70 dark:text-bone/70 hover:text-clay dark:hover:text-copper hover:border-clay dark:hover:border-copper bg-parchment-soft/40 dark:bg-ink-soft/40 transition-colors"
        >
          <Github className="w-4 h-4" />
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="p-2 rounded-lg border border-graphite/15 dark:border-bone/15 text-graphite/70 dark:text-bone/70 hover:text-clay dark:hover:text-copper hover:border-clay dark:hover:border-copper bg-parchment-soft/40 dark:bg-ink-soft/40 transition-colors"
        >
          <Linkedin className="w-4 h-4" />
        </a>
        <a
          href={`mailto:${profile.email}`}
          aria-label="Email"
          className="p-2 rounded-lg border border-graphite/15 dark:border-bone/15 text-graphite/70 dark:text-bone/70 hover:text-clay dark:hover:text-copper hover:border-clay dark:hover:border-copper bg-parchment-soft/40 dark:bg-ink-soft/40 transition-colors"
        >
          <Mail className="w-4 h-4" />
        </a>
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="p-2 rounded-lg border border-graphite/15 dark:border-bone/15 text-graphite/70 dark:text-bone/70 hover:text-clay dark:hover:text-copper hover:border-clay dark:hover:border-copper bg-parchment-soft/40 dark:bg-ink-soft/40 transition-colors"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  )
}
