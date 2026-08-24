import { profile } from '../data/content'
import resume from '../data/Resume.pdf'
import { ArrowDown, Download, Mail, Terminal, Sparkles } from 'lucide-react'
import { useCardTilt } from '../hooks/useCardTilt'

const CORE_LAYERS = [
  { label: 'Frontend', color: 'bg-copper text-ink', border: 'border-copper/40', detail: 'React · Tailwind CSS · Next' },
  { label: 'Backend', color: 'bg-slate text-bone', border: 'border-slate/40', detail: 'Node.js · Express · REST APIs' },
  { label: 'Database', color: 'bg-moss text-bone', border: 'border-moss/40', detail: 'MongoDB · Mongoose · Schemas' },
  { label: 'Cloud & Tools', color: 'bg-bone text-ink', border: 'border-bone/40', detail: 'Git · Postman · Linux · JWT' },
]

export default function Hero() {
  const { cardRef, handlers } = useCardTilt({ maxTilt: 6, scale: 1.02 })

  return (
    <section
      id="top"
      className="relative pt-32 pb-24 md:pt-48 md:pb-36 px-6 max-w-6xl mx-auto grid md:grid-cols-[1.25fr_0.75fr] gap-12 lg:gap-16 items-center"
    >
      <div className="animate-riseIn z-10">
        {/* Terminal status pill */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-clay/30 dark:border-copper/30 bg-clay/5 dark:bg-copper/10 backdrop-blur-md mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-mono-label text-[11px] uppercase tracking-widest text-clay dark:text-copper font-medium flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 inline" />
            <span>{profile.role}</span>
            <span className="text-graphite/40 dark:text-bone/40">/</span>
            <span>{profile.location}</span>
          </span>
        </div>

        <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.02] text-graphite dark:text-bone">
          {profile.name}
          <span className="text-clay dark:text-copper">.</span>
        </h1>

        <p className="mt-4 font-mono-label text-lg md:text-2xl text-slate dark:text-slate font-medium">
          Full-Stack &amp; MERN Developer
        </p>

        <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-graphite/85 dark:text-bone/80">
          {profile.tagline}
        </p>

        {/* Action buttons */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="group px-6 py-3.5 bg-clay dark:bg-copper text-parchment dark:text-ink font-mono-label text-xs uppercase tracking-widest rounded-md hover:shadow-lg hover:shadow-copper/20 hover:opacity-95 transition-all flex items-center gap-2 font-medium"
          >
            <span>Explore Work</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </a>

          <a
            href={resume}
            download="Ahsan-Resume.pdf"
            className="group px-6 py-3.5 border border-graphite/25 dark:border-bone/25 text-graphite dark:text-bone font-mono-label text-xs uppercase tracking-widest rounded-md hover:border-clay dark:hover:border-copper hover:text-clay dark:hover:text-copper bg-parchment-soft/40 dark:bg-ink-soft/40 backdrop-blur-sm transition-all flex items-center gap-2"
          >
            <Download className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            <span>Resume</span>
          </a>

          <a
            href="#contact"
            className="group px-5 py-3.5 text-graphite/80 dark:text-bone/80 hover:text-clay dark:hover:text-copper font-mono-label text-xs uppercase tracking-widest transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>

      {/* 3D Stack Architecture Core Card */}
      <div className="hidden md:flex justify-center z-10">
        <div
          ref={cardRef}
          {...handlers}
          className="w-full max-w-[280px] p-5 rounded-xl border border-graphite/15 dark:border-bone/15 bg-parchment-soft/50 dark:bg-ink-soft/60 backdrop-blur-md shadow-2xl transition-all duration-200"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-graphite/10 dark:border-bone/10">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-copper" />
              <span className="font-mono-label text-[11px] uppercase tracking-widest text-graphite/70 dark:text-bone/70 font-semibold">
                Stack Core
              </span>
            </div>
            <span className="font-mono-label text-[10px] text-emerald-500 font-medium">v2.0-live</span>
          </div>

          <div className="space-y-2.5">
            {CORE_LAYERS.map((layer, i) => (
              <div
                key={layer.label}
                className={`p-3.5 rounded-lg border ${layer.border} bg-parchment dark:bg-ink/80 backdrop-blur-sm hover:scale-[1.02] transition-transform duration-200 shadow-sm animate-coreDrop`}
                style={{ animationDelay: `${i * 120 + 200}ms` }}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono-label text-xs uppercase tracking-wider font-semibold text-graphite dark:text-bone">
                    {layer.label}
                  </span>
                  <span className={`w-2 h-2 rounded-full ${layer.color}`} />
                </div>
                <p className="font-mono-label text-[10px] text-graphite/60 dark:text-bone/50 truncate">
                  {layer.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-graphite/10 dark:border-bone/10 text-center">
            <span className="font-mono-label text-[10px] uppercase tracking-widest text-graphite/40 dark:text-bone/40">
              Interactive 3D Layer Matrix
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
