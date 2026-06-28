import { useTheme } from './hooks/useTheme'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import CaseStudy from './components/CaseStudy'
import Education from './components/Education'
import AchievementsServices from './components/AchievementsServices'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Strata from './components/Strata'

const LABELS = [
  'about', 'skills', 'experience', 'projects',
  'case-study', 'education', 'achievements', 'contact',
]

function Divider({ label }) {
  return (
    <div className="px-6 max-w-6xl mx-auto">
      <Strata label={label} />
    </div>
  )
}

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    <div className="bg-parchment dark:bg-ink min-h-screen font-body">
      <Nav theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <Divider label={LABELS[0]} />
        <About />
        <Divider label={LABELS[1]} />
        <Skills />
        <Divider label={LABELS[2]} />
        <Experience />
        <Divider label={LABELS[3]} />
        <Projects />
        <Divider label={LABELS[4]} />
        <CaseStudy />
        <Divider label={LABELS[5]} />
        <Education />
        <Divider label={LABELS[6]} />
        <AchievementsServices />
        <Divider label={LABELS[7]} />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
