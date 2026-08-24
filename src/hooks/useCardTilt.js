import { useRef, useCallback } from 'react'

export function useCardTilt({ maxTilt = 8, scale = 1.02 } = {}) {
  const cardRef = useRef(null)

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -maxTilt
    const rotateY = ((x - centerX) / centerX) * maxTilt

    card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`
    card.style.setProperty('--mouse-x', `${x}px`)
    card.style.setProperty('--mouse-y', `${y}px`)
  }, [maxTilt, scale])

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current
    if (!card) return

    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
    card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
  }, [])

  const handleMouseEnter = useCallback(() => {
    const card = cardRef.current
    if (!card) return
    card.style.transition = 'transform 0.1s ease-out'
  }, [])

  return {
    cardRef,
    handlers: {
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
      onMouseEnter: handleMouseEnter,
    },
  }
}
