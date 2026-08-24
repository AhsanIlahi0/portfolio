import { useReveal } from '../hooks/useReveal'

/**
 * Wraps children and fades/slides them into view on scroll.
 * delay (ms) lets siblings stagger.
 * direction: 'up' | 'down' | 'left' | 'right' | 'scale' | 'none'
 */
export default function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}) {
  const { ref, visible } = useReveal()

  const getInitialTransform = () => {
    switch (direction) {
      case 'up':
        return 'translateY(24px)'
      case 'down':
        return 'translateY(-24px)'
      case 'left':
        return 'translateX(24px)'
      case 'right':
        return 'translateX(-24px)'
      case 'scale':
        return 'scale(0.95) translateY(12px)'
      default:
        return 'none'
    }
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translate3d(0, 0, 0) scale(1)' : getInitialTransform(),
        transition: `opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  )
}
