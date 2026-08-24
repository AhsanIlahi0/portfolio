import { skills } from '../data/content'
import Reveal from './Reveal'
import { Code2, Server, Database, Wrench } from 'lucide-react'

const ICON_MAP = {
  frontend: Code2,
  backend: Server,
  database: Database,
  tools: Wrench,
}

const ACCENT_STYLES = {
  copper: {
    badge: 'bg-copper/15 text-clay dark:text-copper border-clay/30 dark:border-copper/30',
    hoverBorder: 'hover:border-clay/50 dark:hover:border-copper/50',
    dot: 'bg-copper',
    text: 'text-clay dark:text-copper',
  },
  slate: {
    badge: 'bg-slate/15 text-slate border-slate/30',
    hoverBorder: 'hover:border-slate/50',
    dot: 'bg-slate',
    text: 'text-slate',
  },
  moss: {
    badge: 'bg-moss/15 text-moss border-moss/30',
    hoverBorder: 'hover:border-moss/50',
    dot: 'bg-moss',
    text: 'text-moss',
  },
  bone: {
    badge: 'bg-bone/20 text-graphite dark:text-bone border-graphite/30 dark:border-bone/30',
    hoverBorder: 'hover:border-bone/50',
    dot: 'bg-bone',
    text: 'text-graphite dark:text-bone',
  },
}

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 max-w-6xl mx-auto py-24 md:py-36 z-10">
      <Reveal>
        <p className="font-mono-label text-xs uppercase tracking-[0.25em] text-clay dark:text-copper mb-4">
          $ skills --list --all
        </p>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-graphite dark:text-bone mb-4 max-w-2xl tracking-tight">
          Tools I reach for, grouped by architectural layer.
        </h2>
        <p className="text-base text-graphite/70 dark:text-bone/65 mb-14 max-w-xl">
          A focused stack centered on modern JavaScript/TypeScript workflows, reactive user interfaces, and robust backend services.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
        {skills.map((group, gi) => {
          const Icon = ICON_MAP[group.id] || Code2
          const accent = ACCENT_STYLES[group.accent] || ACCENT_STYLES.copper

          return (
            <Reveal key={group.id} delay={gi * 90} direction="up">
              <div className="h-full rounded-xl border border-graphite/15 dark:border-bone/15 p-6 md:p-8 bg-parchment-soft/50 dark:bg-ink-soft/60 backdrop-blur-md shadow-md flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-graphite/10 dark:border-bone/10">
                  <div className="flex items-center gap-3">
                    <span className={`p-2 rounded-lg ${accent.badge} border`}>
                      <Icon className="w-4 h-4" />
                    </span>
                    <h3 className="font-display font-bold text-xl text-graphite dark:text-bone">
                      {group.label}
                    </h3>
                  </div>
                  <span className="font-mono-label text-[11px] uppercase tracking-widest text-graphite/50 dark:text-bone/45">
                    {group.items.length} technologies
                  </span>
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      tabIndex={0}
                      className={`group/item relative px-4 py-3.5 border border-graphite/10 dark:border-bone/10 rounded-lg bg-parchment/60 dark:bg-ink/60 transition-all duration-200 ${accent.hoverBorder} hover:shadow-md cursor-default`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <p className="font-display text-sm font-semibold text-graphite dark:text-bone group-hover/item:text-clay dark:group-hover/item:text-copper transition-colors">
                          {item.name}
                        </p>
                        <span className={`w-1.5 h-1.5 rounded-full ${accent.dot} opacity-60`} />
                      </div>
                      <p className="mt-1 text-[11px] leading-tight text-graphite/60 dark:text-bone/50">
                        {item.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
