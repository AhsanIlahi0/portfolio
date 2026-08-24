import { about } from '../data/content'
import Reveal from './Reveal'
import { Code2, Server, Database, Sparkles } from 'lucide-react'

const HIGHLIGHTS = [
  {
    icon: Code2,
    title: 'Frontend & UI',
    desc: 'Component architecture, responsive layouts, intuitive state management.',
  },
  {
    icon: Server,
    title: 'Backend Systems',
    desc: 'Scalable Express APIs, secure JWT auth, robust middleware pipelines.',
  },
  {
    icon: Database,
    title: 'Data & Modeling',
    desc: 'MongoDB document structures, Mongoose validation, and query optimization.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative px-6 max-w-6xl mx-auto py-24 md:py-36 z-10">
      <Reveal>
        <p className="font-mono-label text-xs uppercase tracking-[0.25em] text-clay dark:text-copper mb-4">
          ~/about
        </p>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-graphite dark:text-bone mb-12 max-w-2xl tracking-tight">
          Engineering intuitive interfaces backed by solid systems.
        </h2>
      </Reveal>

      <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-12 items-start">
        {/* Main narrative card */}
        <Reveal delay={120} direction="up">
          <div className="p-8 md:p-10 rounded-xl border border-graphite/15 dark:border-bone/15 bg-parchment-soft/50 dark:bg-ink-soft/60 backdrop-blur-md shadow-lg">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-graphite/10 dark:border-bone/10 font-mono-label text-xs text-slate">
              <span className="w-2 h-2 rounded-full bg-clay dark:bg-copper" />
              <span>developer.bio</span>
            </div>
            <p className="text-base md:text-lg leading-relaxed text-graphite/85 dark:text-bone/85 whitespace-pre-line">
              {about}
            </p>
          </div>
        </Reveal>

        {/* Highlights pillars */}
        <div className="space-y-4">
          {HIGHLIGHTS.map((item, i) => {
            const Icon = item.icon
            return (
              <Reveal key={item.title} delay={i * 100 + 150} direction="left">
                <div className="p-5 rounded-xl border border-graphite/15 dark:border-bone/15 bg-parchment-soft/40 dark:bg-ink-soft/40 backdrop-blur-sm hover:border-slate/40 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="p-2 rounded-lg bg-slate/15 text-slate dark:text-slate">
                      <Icon className="w-4 h-4" />
                    </span>
                    <h3 className="font-display font-semibold text-base text-graphite dark:text-bone">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-graphite/70 dark:text-bone/65 leading-relaxed pl-11">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            )
          })}

          <Reveal delay={450} direction="left">
            <div className="p-4 rounded-xl border border-dashed border-clay/30 dark:border-copper/30 bg-clay/5 dark:bg-copper/5 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-clay dark:text-copper shrink-0" />
              <span className="font-mono-label text-xs text-clay dark:text-copper">
                Passionate about clean code, developer empathy, and continuous learning.
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
