import { education } from '../data/content'
import Reveal from './Reveal'

export default function Education() {
  return (
    <section id="education" className="px-6 max-w-6xl mx-auto py-24 md:py-32">
      <Reveal>
        <p className="font-mono-label text-xs uppercase tracking-[0.25em] text-clay dark:text-copper mb-4">
          ~/education
        </p>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-12">
        <Reveal delay={80}>
          <div>
            <h3 className="font-display font-bold text-2xl text-graphite dark:text-bone">
              {education.degree}
            </h3>
            <p className="font-mono-label text-sm text-slate mt-1">{education.university}</p>
            <p className="font-mono-label text-xs text-graphite/50 dark:text-bone/45 mt-1">
              Class of {education.year}
            </p>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div>
            <p className="font-mono-label text-xs uppercase tracking-widest text-graphite/60 dark:text-bone/55 mb-3">
              Relevant coursework
            </p>
            <ul className="space-y-2">
              {education.coursework.map((c) => (
                <li
                  key={c}
                  className="flex gap-2 text-sm text-graphite/80 dark:text-bone/80"
                >
                  <span className="text-moss mt-1.5 w-1.5 h-1.5 rounded-full bg-moss shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
