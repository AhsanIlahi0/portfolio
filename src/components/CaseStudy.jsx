import { caseStudy, projects } from '../data/content'
import Reveal from './Reveal'
import { GitBranch, AlertCircle, CheckCircle, Cpu, FileText, Target } from 'lucide-react'

const STAGE_ICONS = {
  problem: AlertCircle,
  planning: Target,
  architecture: Cpu,
  challenges: GitBranch,
  solutions: CheckCircle,
  result: FileText,
}

const STAGES = [
  { key: 'problem', label: '01. Problem' },
  { key: 'planning', label: '02. Planning' },
  { key: 'architecture', label: '03. Architecture' },
  { key: 'challenges', label: '04. Challenges' },
  { key: 'solutions', label: '05. Solutions' },
  { key: 'result', label: '06. Result' },
]

export default function CaseStudy() {
  const project = projects.find((p) => p.id === caseStudy.project)

  return (
    <section className="relative px-6 max-w-6xl mx-auto py-24 md:py-36 z-10">
      <Reveal>
        <p className="font-mono-label text-xs uppercase tracking-[0.25em] text-clay dark:text-copper mb-4">
          ~/case-study
        </p>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-graphite dark:text-bone mb-3 max-w-2xl tracking-tight">
          How {project?.name || 'Chatly'} actually came together.
        </h2>
        <p className="text-base text-graphite/70 dark:text-bone/65 mb-14 max-w-xl">
          An architectural deep dive from requirements discovery to solved production challenges.
        </p>
      </Reveal>

      <div className="relative pl-6 md:pl-10 border-l-2 border-slate/30 dark:border-slate/30 space-y-8">
        {STAGES.map((stage, i) => {
          const Icon = STAGE_ICONS[stage.key] || Cpu

          return (
            <Reveal key={stage.key} delay={i * 80} direction="left">
              <div className="relative group">
                {/* Glowing step marker */}
                <span className="absolute -left-[31px] md:-left-[47px] top-4 w-4 h-4 rounded-full bg-clay dark:bg-copper border-4 border-parchment dark:border-ink shadow-md group-hover:scale-125 transition-transform" />

                <div className="p-6 md:p-8 rounded-xl border border-graphite/15 dark:border-bone/15 bg-parchment-soft/50 dark:bg-ink-soft/60 backdrop-blur-md shadow-sm hover:border-slate/40 transition-colors">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon className="w-4 h-4 text-clay dark:text-copper" />
                    <p className="font-mono-label text-xs uppercase tracking-widest text-clay dark:text-copper font-semibold">
                      {stage.label}
                    </p>
                  </div>
                  <p className="text-sm md:text-base leading-relaxed text-graphite/85 dark:text-bone/85">
                    {caseStudy[stage.key]}
                  </p>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
