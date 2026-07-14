import { useMemo, useReducer, useState } from 'react'
import './App.css'
import { submitContactMessage } from './firebase'

const profile = {
  name: 'Adwaith C',
  title: 'Senior Flutter Developer',
  summary:
    'Senior Mobile App Developer with 4+ years of experience building cross-platform applications in the Flutter ecosystem, covering the full development lifecycle from architecture to App Store and Play Store deployment.',
  location: 'Bangalore, India',
  phone: '9746543460',
  email: 'adwaithdeva@gmail.com',
  linkedin: 'https://linkedin.com/in/adwaithasok',
  portfolio: 'https://yourportfolio.com',
}

const experience = [
  {
    role: 'Software Developer',
    company: 'Indo-Sakura Software Pvt Ltd.',
    period: 'Feb 2025 - Present',
    points: [
      'Architected a dual-app healthcare and e-commerce ecosystem with a shared design system for consistent brand and UX.',
      'Built a real-time IoT and public safety platform with Flutter Web and mobile sharing a single codebase.',
      'Developed a privacy-first QR-based incident reporting system using WebSockets and high-priority SOS alerts.',
      'Integrated Binah.ai SDK for real-time health metric extraction via smartphone camera scans.',
      'Engineered a high-concurrency betting and esports platform with sub-second live updates using WebSockets.',
    ],
  },
  {
    role: 'Flutter Developer',
    company: 'Superior Codelabs',
    period: 'Dec 2022 - Feb 2025',
    points: [
      'Led architecture for a high-traffic matrimony suite with B2C and B2B ecosystem synchronization.',
      'Developed a custom design system and real-time encrypted chat system using WebSockets and Firebase.',
      'Built a high-performance e-commerce experience with Google Maps Platform integration and OAuth authentication.',
      'Optimized a financial tracking app with lazy loading and pagination, improving retention by 20% and retaining smooth 60 FPS rendering.',
      'Standardized Riverpod and Provider patterns to improve maintainability and decouple business logic from UI.',
    ],
  },
  {
    role: 'Flutter Developer',
    company: 'Stackatech Info Labs Pvt Ltd',
    period: 'Dec 2021 - Nov 2022',
    points: [
      'Developed the Duka Affiliate App with responsive UI and REST API integration.',
    ],
  },
]

const skills = [
  'Dart',
  'Flutter',
  'Riverpod',
  'Provider',
  'GetX',
  'Bloc/Cubit',
  'MVVM',
  'Clean Architecture',
  'REST APIs',
  'GraphQL',
  'WebSockets',
  'Firebase',
  'Firebase Crashlytics',
  'Sentry',
  'Git',
  'CI/CD',
  'Codemagic',
  'Fastlane',
  'App Store / Play Store Deployment',
]

const projects = [
  {
    title: 'Theroheal',
    description: 'Healthcare and e-commerce platform with dual-app architecture, real-time stock updates, and dynamic category filtering.',
  },
  {
    title: 'MySafety24*7',
    description: 'Privacy-first public safety ecosystem with QR-based incident reporting, SOS alerts, and Flutter Web/mobile synchronization.',
  },
  {
    title: 'Face-ING App',
    description: 'Health metric extraction app integrated with Binah.ai SDK for real-time analysis from camera scans.',
  },
]

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const emptyForm = {
  name: '',
  email: '',
  message: '',
}

function formReducer(state, action) {
  switch (action.type) {
    case 'field':
      return { ...state, [action.field]: action.value }
    case 'reset':
      return emptyForm
    default:
      return state
  }
}

function App() {
  const [formData, dispatchForm] = useReducer(formReducer, emptyForm)
  const [status, setStatus] = useState('')

  const heroStats = useMemo(
    () => [
      { label: 'Years Experience', value: '4+' },
      { label: 'Production Apps', value: '10+' },
      { label: 'Core Focus', value: 'Flutter Architecture' },
    ],
    [],
  )

  const handleChange = (event) => {
    const { name, value } = event.target
    dispatchForm({ type: 'field', field: name, value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('Sending your message...')

    try {
      await submitContactMessage(formData)
      setStatus('Message sent successfully!')
      dispatchForm({ type: 'reset' })
    } catch (error) {
      setStatus('Something went wrong. Please try again later.')
      console.error(error)
    }
  }

  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="brand-mark" href="#top">AC</a>
        <nav className="topnav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <section id="top" className="hero-card">
        <div className="hero-copy">
          <p className="eyebrow">Mobile Engineering</p>
          <h1>Hi, I&apos;m {profile.name}</h1>
          <p className="lead">{profile.summary}</p>
          <p className="role-line">{profile.title}</p>
          <div className="hero-actions">
            <a className="primary-link" href="#projects">View Projects</a>
            <a className="secondary-link" href="#contact">Contact Me</a>
          </div>
        </div>

        <div className="stats-grid">
          {heroStats.map((stat) => (
            <div key={stat.label} className="stat-item">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="content-grid">
        <article id="about" className="panel panel-animate">
          <div className="section-heading">
            <p className="section-kicker">About</p>
            <h2>Profile</h2>
          </div>
          <p>
            I am a senior mobile developer focused on building scalable, high-performance Flutter applications that balance product quality, maintainability, and user experience.
          </p>
          <ul className="info-list">
            <li><span>Location</span> {profile.location}</li>
            <li><span>Phone</span> {profile.phone}</li>
            <li><span>Email</span> {profile.email}</li>
            <li><span>LinkedIn</span> <a href={profile.linkedin} target="_blank" rel="noreferrer">Visit profile</a></li>
            <li><span>Portfolio</span> <a href={profile.portfolio} target="_blank" rel="noreferrer">View portfolio</a></li>
          </ul>
        </article>

        <article id="skills" className="panel panel-animate">
          <div className="section-heading">
            <p className="section-kicker">Skills</p>
            <h2>Skills</h2>
          </div>
          <div className="chip-list">
            {skills.map((skill) => (
              <span key={skill} className="chip">{skill}</span>
            ))}
          </div>
        </article>
      </section>

      <section id="experience" className="panel panel-animate">
        <div className="section-heading">
          <p className="section-kicker">Experience</p>
          <h2>Experience</h2>
        </div>
        <div className="timeline-list">
          {experience.map((item, index) => (
            <div key={`${item.role}-${index}`} className="timeline-item">
              <div className="timeline-meta">
                <h3>{item.role}</h3>
                <p>{item.company}</p>
                <span>{item.period}</span>
              </div>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="panel panel-animate">
        <div className="section-heading">
          <p className="section-kicker">Projects</p>
          <h2>Selected Work</h2>
        </div>
        <div className="card-grid">
          {projects.map((project) => (
            <article key={project.title} className="card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="panel panel-animate">
        <div className="section-heading">
          <p className="section-kicker">Contact</p>
          <h2>Let&apos;s Talk</h2>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Email
            <input name="email" type="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required />
          </label>
          <button type="submit">Send Message</button>
          {status ? (
            <p className="status" aria-live="polite">
              {status}
            </p>
          ) : null}
        </form>
      </section>
    </main>
  )
}

export default App
