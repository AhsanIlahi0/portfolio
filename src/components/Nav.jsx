import { useEffect, useState } from 'react'
import { nav, profile } from '../data/content'
import { Sun, Moon, Menu, X } from 'lucide-react'

export default function Nav({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16)
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      if (totalScroll > 0) {
        setScrollProgress(Math.min(100, (window.scrollY / totalScroll) * 100))
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-parchment/80 dark:bg-ink/80 backdrop-blur-md border-b border-graphite/10 dark:border-bone/10 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      {/* Top micro scroll progress line */}
      <div
        className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-copper via-slate to-moss transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav className="max-w-6xl mx-auto px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Terminal-tab brand */}
        <a
          href="#top"
          className="group flex items-center gap-2.5 font-mono-label text-sm text-graphite dark:text-bone font-medium"
        >
          <span className="flex gap-1.5 p-1 rounded-md bg-parchment-soft/50 dark:bg-ink-soft/50 border border-graphite/10 dark:border-bone/10">
            <span className="w-2 h-2 rounded-full bg-copper group-hover:scale-125 transition-transform" />
            <span className="w-2 h-2 rounded-full bg-slate group-hover:scale-125 transition-transform delay-75" />
            <span className="w-2 h-2 rounded-full bg-moss group-hover:scale-125 transition-transform delay-150" />
          </span>
          <span className="ml-1 tracking-tight group-hover:text-clay dark:group-hover:text-copper transition-colors">
            ~/{profile.name.toLowerCase()}.dev
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono-label text-xs uppercase tracking-widest text-graphite/70 dark:text-bone/70 hover:text-clay dark:hover:text-copper transition-colors font-medium relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-copper hover:after:w-full after:transition-all after:duration-200"
            >
              {item.label}
            </a>
          ))}
          <div className="pl-2 border-l border-graphite/15 dark:border-bone/15">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          </div>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="p-2 rounded-lg border border-graphite/15 dark:border-bone/15 bg-parchment-soft/60 dark:bg-ink-soft/60 text-graphite dark:text-bone"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden bg-parchment/95 dark:bg-ink/95 backdrop-blur-xl border-b border-graphite/10 dark:border-bone/10 px-6 py-6 flex flex-col gap-4 shadow-xl animate-riseIn">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-mono-label text-sm uppercase tracking-widest text-graphite/80 dark:text-bone/80 hover:text-clay dark:hover:text-copper py-2 border-b border-graphite/5 dark:border-bone/5"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle color theme"
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="p-2 rounded-lg border border-graphite/20 dark:border-bone/20 bg-parchment-soft/50 dark:bg-ink-soft/50 text-graphite dark:text-bone hover:border-clay dark:hover:border-copper hover:text-clay dark:hover:text-copper transition-all"
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-copper hover:rotate-45 transition-transform" />
      ) : (
        <Moon className="w-4 h-4 text-slate hover:-rotate-12 transition-transform" />
      )}
    </button>
  )
}
