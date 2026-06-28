import { useReveal } from '../hooks/useReveal'

/**
 * Wraps children and fades/rises them into view on scroll.
 * delay (ms) lets siblings stagger.
 */
export default function Reveal({ children, delay = 0, className = '' }) {
  const { ref, visible } = useReveal()

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(18px)',
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
