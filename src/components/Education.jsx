import { education } from '../data/content'
import Reveal from './Reveal'
import { GraduationCap, BookOpen, Calendar, MapPin } from 'lucide-react'

export default function Education() {
  return (
    <section id="education" className="relative px-6 max-w-6xl mx-auto py-24 md:py-36 z-10">
      <Reveal>
        <p className="font-mono-label text-xs uppercase tracking-[0.25em] text-clay dark:text-copper mb-4">
          ~/education
        </p>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-graphite dark:text-bone mb-12 max-w-2xl tracking-tight">
          Academic foundation in computing.
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10">
        <Reveal delay={120} direction="up">
          <div className="h-full rounded-xl border border-graphite/15 dark:border-bone/15 p-8 md:p-10 bg-parchment-soft/50 dark:bg-ink-soft/60 backdrop-blur-md shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="p-2.5 rounded-lg bg-clay/10 dark:bg-copper/15 text-clay dark:text-copper">
                  <GraduationCap className="w-6 h-6" />
                </span>
                <div>
                  <h3 className="font-display font-bold text-2xl md:text-3xl text-graphite dark:text-bone">
                    {education.degree}
                  </h3>
                  <p className="font-mono-label text-sm text-slate mt-1 font-medium">
                    {education.university}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-6 pt-4 border-t border-graphite/10 dark:border-bone/10 font-mono-label text-xs text-graphite/60 dark:text-bone/50">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-copper" />
                  <span>Class of {education.year}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate" />
                  <span>Lahore, Pakistan</span>
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={160} direction="left">
          <div className="h-full rounded-xl border border-graphite/15 dark:border-bone/15 p-8 md:p-10 bg-parchment-soft/50 dark:bg-ink-soft/60 backdrop-blur-md shadow-md">
            <div className="flex items-center gap-2 mb-6 pb-3 border-b border-graphite/10 dark:border-bone/10">
              <BookOpen className="w-4 h-4 text-moss" />
              <h4 className="font-mono-label text-xs uppercase tracking-widest text-graphite/70 dark:text-bone/70 font-semibold">
                Relevant Core Coursework
              </h4>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {education.coursework.map((c) => (
                <span
                  key={c}
                  className="font-mono-label text-xs px-3.5 py-2 rounded-lg border border-graphite/15 dark:border-bone/15 bg-parchment/70 dark:bg-ink/70 text-graphite/80 dark:text-bone/80 capitalize hover:border-moss transition-colors shadow-sm"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
