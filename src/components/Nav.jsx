import { useEffect, useState } from 'react'
import { nav, profile } from '../data/content'

export default function Nav({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-parchment/90 dark:bg-ink/90 backdrop-blur border-b border-graphite/10 dark:border-bone/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Terminal-tab brand */}
        <a
          href="#top"
          className="flex items-center gap-2 font-mono-label text-sm text-graphite dark:text-bone"
        >
          <span className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-copper" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate" />
            <span className="w-2.5 h-2.5 rounded-full bg-moss" />
          </span>
          <span className="ml-1">~/{profile.name.toLowerCase()}.dev</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono-label text-xs uppercase tracking-widest text-graphite/70 dark:text-bone/70 hover:text-clay dark:hover:text-copper transition-colors"
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="w-9 h-9 flex flex-col items-center justify-center gap-1.5"
          >
            <span
              className={`block w-5 h-px bg-graphite dark:bg-bone transition-transform ${
                open ? 'translate-y-[3px] rotate-45' : ''
              }`}
            />
            <span
              className={`block w-5 h-px bg-graphite dark:bg-bone transition-transform ${
                open ? '-translate-y-[3px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-parchment dark:bg-ink border-b border-graphite/10 dark:border-bone/10 px-6 pb-6 flex flex-col gap-4">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-mono-label text-sm uppercase tracking-widest text-graphite/80 dark:text-bone/80"
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
      className="relative w-11 h-6 rounded-full border border-graphite/20 dark:border-bone/20 flex items-center px-0.5 transition-colors"
    >
      <span
        className={`w-5 h-5 rounded-full bg-copper transition-transform duration-300 ${
          isDark ? 'translate-x-[18px]' : 'translate-x-0'
        }`}
      />
    </button>
  )
}
