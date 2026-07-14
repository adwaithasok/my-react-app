import { profile, heroStats } from '../data/profile'

export default function Hero() {
  return (
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
  )
}
