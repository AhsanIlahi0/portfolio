import { experience } from '../data/content'
import Reveal from './Reveal'
import { Briefcase, Calendar, CheckCircle2, Building2 } from 'lucide-react'

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 max-w-6xl mx-auto py-24 md:py-36 z-10">
      <Reveal>
        <p className="font-mono-label text-xs uppercase tracking-[0.25em] text-clay dark:text-copper mb-4">
          ~/experience
        </p>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-graphite dark:text-bone mb-4 max-w-2xl tracking-tight">
          Production experience &amp; impact.
        </h2>
        <p className="text-base text-graphite/70 dark:text-bone/65 mb-14 max-w-xl">
          Building and maintaining real-world web applications alongside senior engineering teams.
        </p>
      </Reveal>

      <div className="space-y-8">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 100} direction="up">
            <div className="rounded-xl border border-graphite/15 dark:border-bone/15 p-8 md:p-10 bg-parchment-soft/50 dark:bg-ink-soft/60 backdrop-blur-md shadow-md">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6 pb-6 border-b border-graphite/10 dark:border-bone/10">
                <div>
                  <div className="flex items-center gap-2.5 mb-1">
                    <span className="p-2 rounded-lg bg-clay/10 dark:bg-copper/15 text-clay dark:text-copper">
                      <Briefcase className="w-5 h-5" />
                    </span>
                    <h3 className="font-display font-bold text-2xl md:text-3xl text-graphite dark:text-bone">
                      {job.role}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 font-mono-label text-sm text-slate pl-11">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{job.company}</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-graphite/20 dark:border-bone/20 bg-parchment/60 dark:bg-ink/60 font-mono-label text-xs text-graphite/70 dark:text-bone/70">
                  <Calendar className="w-3.5 h-3.5 text-copper" />
                  <span>{job.duration}</span>
                </div>
              </div>

              <div className="pl-2">
                <h4 className="font-mono-label text-xs uppercase tracking-wider text-graphite/60 dark:text-bone/50 mb-4 font-semibold">
                  Key Responsibilities &amp; Outcomes
                </h4>
                <ul className="grid sm:grid-cols-2 gap-3.5">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm md:text-base text-graphite/85 dark:text-bone/85"
                    >
                      <CheckCircle2 className="w-4 h-4 text-copper mt-1 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
