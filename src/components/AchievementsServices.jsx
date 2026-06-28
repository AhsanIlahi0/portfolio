import { achievements, services } from '../data/content'
import Reveal from './Reveal'

export default function AchievementsServices() {
  return (
    <section className="px-6 max-w-6xl mx-auto py-24 md:py-32 grid md:grid-cols-2 gap-16">
      <div>
        <Reveal>
          <p className="font-mono-label text-xs uppercase tracking-[0.25em] text-clay dark:text-copper mb-4">
            ~/achievements
          </p>
        </Reveal>
        <Reveal delay={60}>
          <ul className="space-y-3">
            {achievements.map((a) => (
              <li key={a} className="flex gap-3 text-sm md:text-base text-graphite/80 dark:text-bone/80">
                <span className="text-copper mt-2 w-1.5 h-1.5 rounded-full bg-copper shrink-0" />
                {a}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div>
        <Reveal>
          <p className="font-mono-label text-xs uppercase tracking-[0.25em] text-clay dark:text-copper mb-4">
            ~/services
          </p>
        </Reveal>
        <div className="space-y-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <div className="border-b border-graphite/10 dark:border-bone/10 pb-4">
                <h4 className="font-display font-semibold text-base text-graphite dark:text-bone">
                  {s.title}
                </h4>
                <p className="text-sm text-graphite/70 dark:text-bone/65 mt-1">{s.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
