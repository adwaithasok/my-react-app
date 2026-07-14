import './App.css'
import { usePortfolioData } from './hooks/usePortfolioData'
import Topbar     from './components/Topbar/Topbar'
import Hero       from './components/Hero/Hero'
import About      from './components/About/About'
import Skills     from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import Projects   from './components/Projects/Projects'
import Contact    from './components/Contact/Contact'

export default function App() {
  const { data, loading, error } = usePortfolioData()

  if (loading) return (
    <div className="app-loader">
      <div className="loader-ring" />
      <p>Loading portfolio...</p>
    </div>
  )

  if (error) return (
    <div className="app-loader">
      <p>Failed to load portfolio data. Please refresh.</p>
    </div>
  )

  const { profile, meta, skillGroups, experience, projects } = data

  return (
    <>
      <Topbar navLinks={meta.navLinks} />
      <main className="page-shell">
        <Hero profile={profile} heroStats={meta.heroStats} />
        <section className="content-grid">
          <About profile={profile} />
          <Skills skillGroups={skillGroups} />
        </section>
        <Experience experience={experience} />
        <Projects projects={projects} />
        <Contact />
      </main>
    </>
  )
}
