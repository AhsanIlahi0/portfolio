import { achievements, services } from '../data/content'
import Reveal from './Reveal'
import { Trophy, Sparkles, CheckCircle2, Layers } from 'lucide-react'

export default function AchievementsServices() {
  return (
    <section className="relative px-6 max-w-6xl mx-auto py-24 md:py-36 grid md:grid-cols-2 gap-12 lg:gap-16 z-10">
      {/* Achievements Column */}
      <div>
        <Reveal>
          <p className="font-mono-label text-xs uppercase tracking-[0.25em] text-clay dark:text-copper mb-4">
            ~/achievements
          </p>
        </Reveal>
        <Reveal delay={60}>
          <h3 className="font-display font-bold text-2xl md:text-3xl text-graphite dark:text-bone mb-8 flex items-center gap-2.5">
            <Trophy className="w-6 h-6 text-copper" />
            <span>Key Milestones</span>
          </h3>
        </Reveal>

        <div className="space-y-4">
          {achievements.map((a, i) => (
            <Reveal key={a} delay={i * 80} direction="up">
              <div className="p-5 rounded-xl border border-graphite/15 dark:border-bone/15 bg-parchment-soft/50 dark:bg-ink-soft/60 backdrop-blur-md flex items-start gap-3.5 shadow-sm hover:border-copper/40 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-copper mt-0.5 shrink-0" />
                <p className="text-sm md:text-base text-graphite/85 dark:text-bone/85 leading-relaxed">
                  {a}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Services Column */}
      <div>
        <Reveal>
          <p className="font-mono-label text-xs uppercase tracking-[0.25em] text-clay dark:text-copper mb-4">
            ~/services
          </p>
        </Reveal>
        <Reveal delay={60}>
          <h3 className="font-display font-bold text-2xl md:text-3xl text-graphite dark:text-bone mb-8 flex items-center gap-2.5">
            <Layers className="w-6 h-6 text-slate" />
            <span>What I Deliver</span>
          </h3>
        </Reveal>

        <div className="space-y-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80} direction="up">
              <div className="p-5 rounded-xl border border-graphite/15 dark:border-bone/15 bg-parchment-soft/50 dark:bg-ink-soft/60 backdrop-blur-md shadow-sm hover:border-slate/40 transition-colors">
                <h4 className="font-display font-semibold text-base text-graphite dark:text-bone flex items-center gap-2 mb-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-slate" />
                  <span>{s.title}</span>
                </h4>
                <p className="text-xs md:text-sm text-graphite/70 dark:text-bone/65 leading-relaxed pl-5">
                  {s.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
