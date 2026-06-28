import { experience } from '../data/content'
import Reveal from './Reveal'

export default function Experience() {
  return (
    <section id="experience" className="px-6 max-w-6xl mx-auto py-24 md:py-32">
      <Reveal>
        <p className="font-mono-label text-xs uppercase tracking-[0.25em] text-clay dark:text-copper mb-4">
          ~/experience
        </p>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-graphite dark:text-bone mb-12 max-w-xl">
          Where I've put this to work.
        </h2>
      </Reveal>

      <div className="space-y-10">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 100}>
            <div className="grid md:grid-cols-[200px_1fr] gap-6 border-l-2 border-slate/40 pl-6">
              <div>
                <p className="font-mono-label text-xs text-graphite/50 dark:text-bone/45">
                  {job.duration}
                </p>
              </div>
              <div>
                <h3 className="font-display font-semibold text-xl text-graphite dark:text-bone">
                  {job.role}
                </h3>
                <p className="font-mono-label text-sm text-slate mb-4">{job.company}</p>
                <ul className="space-y-2">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm md:text-base text-graphite/80 dark:text-bone/80"
                    >
                      <span className="text-copper mt-2 w-1.5 h-1.5 rounded-full bg-copper shrink-0" />
                      {point}
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
