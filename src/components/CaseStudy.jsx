import { caseStudy, projects } from '../data/content'
import Reveal from './Reveal'

const STAGES = [
  { key: 'problem', label: 'Problem' },
  { key: 'planning', label: 'Planning' },
  { key: 'architecture', label: 'Architecture' },
  { key: 'challenges', label: 'Challenges' },
  { key: 'solutions', label: 'Solutions' },
  { key: 'result', label: 'Result' },
]

export default function CaseStudy() {
  const project = projects.find((p) => p.id === caseStudy.project)

  return (
    <section className="px-6 max-w-6xl mx-auto py-24 md:py-32">
      <Reveal>
        <p className="font-mono-label text-xs uppercase tracking-[0.25em] text-clay dark:text-copper mb-4">
          ~/case-study
        </p>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-graphite dark:text-bone mb-2 max-w-xl">
          How {project?.name} actually came together.
        </h2>
        <p className="text-sm text-graphite/60 dark:text-bone/55 mb-12">
          The path from problem to shipped result, in order.
        </p>
      </Reveal>

      <div className="relative pl-8 border-l-2 border-slate/30 space-y-10">
        {STAGES.map((stage, i) => (
          <Reveal key={stage.key} delay={i * 90}>
            <div className="relative">
              <span className="absolute -left-[35px] top-1 w-3 h-3 rounded-full bg-copper border-4 border-parchment dark:border-ink" />
              <p className="font-mono-label text-xs uppercase tracking-widest text-slate mb-2">
                {stage.label}
              </p>
              <p className="max-w-2xl text-sm md:text-base leading-relaxed text-graphite/80 dark:text-bone/80">
                {caseStudy[stage.key]}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
