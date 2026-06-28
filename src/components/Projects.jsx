import { projects } from '../data/content'
import Reveal from './Reveal'

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="px-6 max-w-6xl mx-auto py-24 md:py-32">
      <Reveal>
        <p className="font-mono-label text-xs uppercase tracking-[0.25em] text-clay dark:text-copper mb-4">
          ~/projects
        </p>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-graphite dark:text-bone mb-12 max-w-xl">
          A few things I've built end to end.
        </h2>
      </Reveal>

      {featured.map((project) => (
        <Reveal key={project.id} className="mb-10">
          <div className="border border-graphite/15 dark:border-bone/15 rounded-sm p-8 md:p-10 bg-parchment-soft/50 dark:bg-ink-soft/50">
            <div className="flex flex-wrap items-baseline justify-between gap-3 mb-2">
              <h3 className="font-display font-bold text-2xl md:text-3xl text-graphite dark:text-bone">
                {project.name}
              </h3>
              <span className="font-mono-label text-[11px] uppercase tracking-widest text-clay dark:text-copper">
                Featured
              </span>
            </div>
            <p className="font-mono-label text-sm text-slate mb-4">{project.tagline}</p>
            <p className="max-w-2xl text-base leading-relaxed text-graphite/80 dark:text-bone/80 mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono-label text-[11px] px-2.5 py-1 border border-graphite/20 dark:border-bone/20 rounded-sm text-graphite/70 dark:text-bone/70"
                >
                  {t}
                </span>
              ))}
            </div>

            <ul className="grid sm:grid-cols-2 gap-2 mb-8">
              {project.features.map((f) => (
                <li
                  key={f}
                  className="flex gap-2 text-sm text-graphite/80 dark:text-bone/80"
                >
                  <span className="text-moss mt-1.5 w-1.5 h-1.5 rounded-full bg-moss shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="font-mono-label text-xs uppercase tracking-widest px-5 py-2.5 border border-graphite/30 dark:border-bone/30 rounded-sm hover:border-clay dark:hover:border-copper hover:text-clay dark:hover:text-copper transition-colors"
              >
                GitHub
              </a>
              {/* <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="font-mono-label text-xs uppercase tracking-widest px-5 py-2.5 bg-clay dark:bg-copper text-parchment dark:text-ink rounded-sm hover:opacity-90 transition-opacity"
              >
                Live Demo
              </a> */}
            </div>
          </div>
        </Reveal>
      ))}

      <div className="grid md:grid-cols-2 gap-6">
        {rest.map((project, i) => (
          <Reveal key={project.id} delay={i * 100}>
            <div className="h-full border border-graphite/15 dark:border-bone/15 rounded-sm p-6 flex flex-col">
              <h3 className="font-display font-semibold text-xl text-graphite dark:text-bone">
                {project.name}
              </h3>
              <p className="font-mono-label text-xs text-slate mb-3">{project.tagline}</p>
              <p className="text-sm leading-relaxed text-graphite/75 dark:text-bone/75 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono-label text-[10px] px-2 py-0.5 border border-graphite/20 dark:border-bone/20 rounded-sm text-graphite/60 dark:text-bone/60"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <ul className="space-y-1.5 mb-6">
                {project.features.map((f) => (
                  <li
                    key={f}
                    className="flex gap-2 text-xs text-graphite/70 dark:text-bone/70"
                  >
                    <span className="text-copper mt-1 w-1 h-1 rounded-full bg-copper shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono-label text-xs uppercase tracking-widest px-5 py-2.5 border border-graphite/30 dark:border-bone/30 rounded-sm hover:border-clay dark:hover:border-copper hover:text-clay dark:hover:text-copper transition-colors"
                >
                  GitHub
                </a>

              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
