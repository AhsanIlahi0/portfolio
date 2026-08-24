import { projects } from '../data/content'
import Reveal from './Reveal'
import { useCardTilt } from '../hooks/useCardTilt'
import { ExternalLink, Sparkles, CheckCircle2, Layers } from 'lucide-react'
import { Github } from './Icons'

function FeaturedProjectCard({ project }) {
  const { cardRef, handlers } = useCardTilt({ maxTilt: 5, scale: 1.01 })

  return (
    <div
      ref={cardRef}
      {...handlers}
      className="group relative rounded-xl border border-graphite/20 dark:border-bone/20 p-8 md:p-10 bg-parchment-soft/70 dark:bg-ink-soft/70 backdrop-blur-md shadow-xl transition-all duration-300 hover:border-clay/50 dark:hover:border-copper/50 overflow-hidden"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Background subtle radial ambient glow */}
      <div className="absolute -right-24 -top-24 w-80 h-80 bg-copper/10 rounded-full blur-3xl pointer-events-none group-hover:bg-copper/20 transition-all duration-500" />

      <div className="relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-lg bg-copper/15 text-clay dark:text-copper">
              <Layers className="w-5 h-5" />
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-graphite dark:text-bone tracking-tight">
              {project.name}
            </h3>
          </div>
          <span className="inline-flex items-center gap-1.5 font-mono-label text-[11px] uppercase tracking-widest px-3 py-1 rounded-full bg-clay/10 dark:bg-copper/15 text-clay dark:text-copper border border-clay/20 dark:border-copper/30 font-medium">
            <Sparkles className="w-3 h-3" />
            Featured Architecture
          </span>
        </div>

        <p className="font-mono-label text-sm md:text-base text-slate font-medium mb-4">
          {project.tagline}
        </p>
        
        <p className="max-w-3xl text-base leading-relaxed text-graphite/85 dark:text-bone/80 mb-6">
          {project.description}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-mono-label text-xs px-3 py-1.5 rounded-md border border-graphite/20 dark:border-bone/20 bg-parchment/60 dark:bg-ink/60 text-graphite/80 dark:text-bone/80 backdrop-blur-sm font-medium hover:border-copper/50 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Feature Highlights Grid */}
        <div className="mb-8 p-5 rounded-lg bg-parchment/50 dark:bg-ink/50 border border-graphite/10 dark:border-bone/10">
          <h4 className="font-mono-label text-xs uppercase tracking-wider text-graphite/60 dark:text-bone/50 mb-3 font-semibold">
            Key Architecture &amp; Capabilities
          </h4>
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-2.5">
            {project.features.map((f) => (
              <li
                key={f}
                className="flex items-center gap-2 text-sm text-graphite/85 dark:text-bone/85"
              >
                <CheckCircle2 className="w-4 h-4 text-moss shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap gap-4 pt-2">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="font-mono-label text-xs uppercase tracking-widest px-6 py-3 bg-clay dark:bg-copper text-parchment dark:text-ink rounded-md hover:opacity-90 hover:shadow-lg hover:shadow-copper/20 transition-all font-medium flex items-center gap-2"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="font-mono-label text-xs uppercase tracking-widest px-6 py-3 border border-graphite/30 dark:border-bone/30 rounded-md hover:border-clay dark:hover:border-copper hover:text-clay dark:hover:text-copper bg-parchment-soft/50 dark:bg-ink-soft/50 backdrop-blur-sm transition-all flex items-center gap-2 text-graphite dark:text-bone"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project }) {
  const { cardRef, handlers } = useCardTilt({ maxTilt: 6, scale: 1.015 })

  return (
    <div
      ref={cardRef}
      {...handlers}
      className="group h-full rounded-xl border border-graphite/15 dark:border-bone/15 p-6 md:p-8 flex flex-col bg-parchment-soft/50 dark:bg-ink-soft/60 backdrop-blur-md transition-all duration-300 hover:border-slate/50 dark:hover:border-slate/50 hover:shadow-lg"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="flex items-center justify-between gap-3 mb-2">
        <h3 className="font-display font-bold text-xl sm:text-2xl text-graphite dark:text-bone">
          {project.name}
        </h3>
      </div>
      
      <p className="font-mono-label text-xs text-slate mb-3 font-medium">{project.tagline}</p>
      
      <p className="text-sm leading-relaxed text-graphite/80 dark:text-bone/80 mb-5 flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="font-mono-label text-[11px] px-2.5 py-1 rounded border border-graphite/20 dark:border-bone/20 bg-parchment/60 dark:bg-ink/60 text-graphite/70 dark:text-bone/70"
          >
            {t}
          </span>
        ))}
      </div>

      <ul className="space-y-1.5 mb-6 py-3 border-y border-graphite/10 dark:border-bone/10">
        {project.features.map((f) => (
          <li
            key={f}
            className="flex items-center gap-2 text-xs text-graphite/75 dark:text-bone/75"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-copper shrink-0" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-center gap-3 pt-2">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="font-mono-label text-xs uppercase tracking-widest px-5 py-2.5 border border-graphite/30 dark:border-bone/30 rounded-md hover:border-clay dark:hover:border-copper hover:text-clay dark:hover:text-copper transition-all flex items-center gap-2 text-graphite dark:text-bone"
          >
            <Github className="w-3.5 h-3.5" />
            <span>Repository</span>
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="font-mono-label text-xs uppercase tracking-widest px-5 py-2.5 bg-clay dark:bg-copper text-parchment dark:text-ink rounded-md hover:opacity-90 transition-opacity flex items-center gap-1.5 font-medium"
          >
            <span>Live</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="relative px-6 max-w-6xl mx-auto py-24 md:py-36 z-10">
      <Reveal>
        <p className="font-mono-label text-xs uppercase tracking-[0.25em] text-clay dark:text-copper mb-4">
          ~/projects
        </p>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-graphite dark:text-bone mb-4 max-w-2xl tracking-tight">
          Engineered from concept to deployment.
        </h2>
        <p className="text-base text-graphite/70 dark:text-bone/65 mb-14 max-w-xl">
          Real-world full stack applications with secure authentication, live data synchronization, and clean architecture.
        </p>
      </Reveal>

      {/* Featured Projects */}
      <div className="space-y-12 mb-12">
        {featured.map((project) => (
          <Reveal key={project.id} direction="scale">
            <FeaturedProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      {/* Rest Projects */}
      {rest.length > 0 && (
        <div className="grid md:grid-cols-2 gap-8">
          {rest.map((project, i) => (
            <Reveal key={project.id} delay={i * 120} direction="up">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      )}
    </section>
  )
}
