import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="px-6 max-w-6xl mx-auto py-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-graphite/10 dark:border-bone/10">
      <p className="font-mono-label text-xs text-graphite/50 dark:text-bone/40">
        © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind.
      </p>
      <div className="flex gap-6">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="font-mono-label text-xs uppercase tracking-widest text-graphite/60 dark:text-bone/55 hover:text-clay dark:hover:text-copper transition-colors"
        >
          GitHub
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="font-mono-label text-xs uppercase tracking-widest text-graphite/60 dark:text-bone/55 hover:text-clay dark:hover:text-copper transition-colors"
        >
          LinkedIn
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="font-mono-label text-xs uppercase tracking-widest text-graphite/60 dark:text-bone/55 hover:text-clay dark:hover:text-copper transition-colors"
        >
          Email
        </a>
      </div>
    </footer>
  )
}
