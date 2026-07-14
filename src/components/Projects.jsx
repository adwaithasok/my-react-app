import { useState } from 'react'
import { projects } from '../data/profile'

function ProjectModal({ project, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        <div className="modal-header">
          <div className="modal-tags">
            {project.tags.map((t) => <span key={t} className="chip chip-sm">{t}</span>)}
          </div>
          <h2>{project.title}</h2>
          <p className="modal-company">{project.company}</p>
        </div>
        <ul className="modal-points">
          {project.details.map((d) => <li key={d}>{d}</li>)}
        </ul>
        <div className="modal-tech">
          {project.tech.map((t) => <span key={t} className="tech-badge">{t}</span>)}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="panel panel-animate">
      <div className="section-heading">
        <p className="section-kicker">Projects</p>
        <h2>Selected Work</h2>
      </div>
      <div className="card-grid">
        {projects.map((project) => (
          <article key={project.title} className="card project-card" onClick={() => setSelected(project)}>
            <div className="card-tags">
              {project.tags.slice(0, 2).map((t) => <span key={t} className="chip chip-sm">{t}</span>)}
            </div>
            <h3>{project.title}</h3>
            <p className="card-company">{project.company}</p>
            <p className="card-summary">{project.summary}</p>
            <span className="card-cta">View details →</span>
          </article>
        ))}
      </div>
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
