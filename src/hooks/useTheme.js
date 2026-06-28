import { useEffect, useState } from 'react'

export function useTheme() {
  // The site is designed dark-first (the strata motif reads best on ink);
  // light mode is offered as a toggle rather than the default.
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return { theme, toggle }
}
