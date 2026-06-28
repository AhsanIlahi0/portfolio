import { about } from '../data/content'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="px-6 max-w-6xl mx-auto py-24 md:py-32">
      <Reveal>
        <p className="font-mono-label text-xs uppercase tracking-[0.25em] text-clay dark:text-copper mb-4">
          ~/about
        </p>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-graphite dark:text-bone mb-8 max-w-xl">
          A bit about how I got here.
        </h2>
      </Reveal>
      <Reveal delay={140}>
        <p className="max-w-2xl text-base md:text-lg leading-relaxed text-graphite/80 dark:text-bone/80 whitespace-pre-line">
          {about}
        </p>
      </Reveal>
    </section>
  )
}
