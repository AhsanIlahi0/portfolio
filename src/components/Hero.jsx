import { profile } from '../data/content'
import  resume  from '../data/Resume.pdf'

const CORE_LAYERS = [
  { label: 'Frontend', color: 'bg-copper', detail: 'React · Tailwind' },
  { label: 'Backend', color: 'bg-slate', detail: 'Node · Express' },
  { label: 'Database', color: 'bg-moss', detail: 'MongoDB' },
  { label: 'Tools', color: 'bg-bone', detail: 'Git · Postman' },
]

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-24 md:pt-44 md:pb-32 px-6 max-w-6xl mx-auto grid md:grid-cols-[1.2fr_0.8fr] gap-14 items-center"
    >
      <div className="animate-riseIn">
        <p className="font-mono-label text-xs uppercase tracking-[0.25em] text-clay dark:text-copper mb-5">
          $ {profile.role} / {profile.location}
        </p>
        <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl leading-[1.02] text-graphite dark:text-bone">
          {profile.name}
        </h1>
        <p className="mt-4 font-mono-label text-lg md:text-xl text-slate dark:text-slate">
          {profile.role}
        </p>
        <p className="mt-6 max-w-lg text-base md:text-lg leading-relaxed text-graphite/80 dark:text-bone/80">
          {profile.tagline}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-clay dark:bg-copper text-parchment dark:text-ink font-mono-label text-xs uppercase tracking-widest rounded-sm hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
          <a
            href={resume}
            download
            className="px-6 py-3 border border-graphite/30 dark:border-bone/30 text-graphite dark:text-bone font-mono-label text-xs uppercase tracking-widest rounded-sm hover:border-clay dark:hover:border-copper hover:text-clay dark:hover:text-copper transition-colors"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-3 text-graphite dark:text-bone font-mono-label text-xs uppercase tracking-widest hover:text-clay dark:hover:text-copper transition-colors"
          >
            Contact Me →
          </a>
        </div>
      </div>

      {/* Signature: a literal "core sample" of the stack */}
      <div className="hidden md:flex justify-center">
        <div className="flex  flex-col border border-none w-full max-w-[220px] rounded-sm overflow-hidden border border-graphite/15 dark:border-bone/10 bg-parchment-soft/60 dark:bg-ink-soft/60                         backdrop-blur-sm">
          {CORE_LAYERS.map((layer, i) => (
            <div
              key={layer.label}
              className={`${layer.color} rounded-[20px] relative text-center justify-center h-24 flex flex-col justify-end px-4 py-3 origin-top animate-coreDrop`}
              style={{ animationDelay: `${i * 140 + 200}ms` }}
            >
              <span className="font-mono-label text-[10px]  uppercase tracking-widest text-ink/70">
                {layer.label}
              </span>
              <span className="font-mono-label text-[10px] text-ink/50">{layer.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
