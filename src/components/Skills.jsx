import { skills } from '../data/content'
import Reveal from './Reveal'

const ACCENT_MAP = {
  copper: 'group-hover:border-copper group-hover:text-copper',
  slate: 'group-hover:border-slate group-hover:text-slate',
  moss: 'group-hover:border-moss group-hover:text-moss',
  bone: 'group-hover:border-bone group-hover:text-bone',
}

export default function Skills() {
  return (
    <section id="skills" className="px-6 max-w-6xl mx-auto py-24 md:py-32">
      <Reveal>
        <p className="font-mono-label text-xs uppercase tracking-[0.25em] text-clay dark:text-copper mb-4">
          $ skills --list
        </p>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-graphite dark:text-bone mb-12 max-w-xl">
          Tools I reach for, grouped by layer.
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-10">
        {skills.map((group, gi) => (
          <Reveal key={group.id} delay={gi * 90}>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`w-2.5 h-2.5 rounded-sm ${
                    group.accent === 'bone' ? 'bg-bone' : `bg-${group.accent}`
                  }`}
                />
                <h3 className="font-mono-label text-xs uppercase tracking-widest text-graphite/70 dark:text-bone/70">
                  {group.label}
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    tabIndex={0}
                    className="group relative px-4 py-4 border border-graphite/15 dark:border-bone/15 rounded-sm bg-parchment-soft/60 dark:bg-ink-soft/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-default"
                  >
                    <p
                      className={`font-display text-sm font-semibold text-graphite dark:text-bone transition-colors ${ACCENT_MAP[group.accent]}`}
                    >
                      {item.name}
                    </p>
                    <p className="mt-1 text-[11px] leading-snug text-graphite/50 dark:text-bone/45 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300">
                      {item.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
