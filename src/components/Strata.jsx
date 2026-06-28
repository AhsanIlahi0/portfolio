const LAYERS = [
  { color: '#D98B4A' }, // copper — frontend
  { color: '#5C84A6' }, // slate — backend
  { color: '#6B8F71' }, // moss — database
  { color: '#ECE7DA' }, // bone — tools
]

/**
 * A thin "core sample" rule: four colored segments standing in for the
 * four layers of the stack (frontend / backend / database / tools).
 * Used between sections instead of a plain <hr>, so the page's own
 * structure echoes the stack it's describing.
 */
export default function Strata({ label }) {
  return (
    <div className="relative w-full select-none" aria-hidden="true">
      <div className="strata-rule">
        {LAYERS.map((layer, i) => (
          <span key={i} style={{ backgroundColor: layer.color, opacity: 0.85 }} />
        ))}
      </div>
      {label && (
        <span className="absolute right-0 -top-5 font-mono-label text-[10px] uppercase tracking-widest text-graphite/40 dark:text-bone/30">
          {label}
        </span>
      )}
    </div>
  )
}
