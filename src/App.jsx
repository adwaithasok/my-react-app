import './App.css'
import Topbar from './components/Topbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <main className="page-shell">
      <Topbar />
      <Hero />
      <section className="content-grid">
        <About />
        <Skills />
      </section>
      <Experience />
      <Projects />
      <Contact />
    </main>
  )
}
