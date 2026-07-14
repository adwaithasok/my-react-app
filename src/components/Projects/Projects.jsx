import { useState } from 'react'
import styles from './Projects.module.css'

function ProjectModal({ project, onClose }) {
  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">✕</button>
        <div className={styles.modalHeader}>
          <div className={styles.modalTags}>
            {project.tags?.map((t) => <span key={t} className="chip chip-sm">{t}</span>)}
          </div>
          <h2>{project.title}</h2>
          <p className={styles.modalCompany}>{project.company}</p>
        </div>
        <ul className={styles.modalPoints}>
          {project.details?.map((d) => <li key={d}>{d}</li>)}
        </ul>
        <div className={styles.techRow}>
          {project.tech?.map((t) => <span key={t} className={styles.techBadge}>{t}</span>)}
        </div>
      </div>
    </div>
  )
}

export default function Projects({ projects }) {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="panel panel-animate">
      <div className="section-heading">
        <p className="section-kicker">Projects</p>
        <h2>Selected Work</h2>
      </div>
      <div className={styles.grid}>
        {projects?.map((project) => (
          <article key={project.id} className={styles.card} onClick={() => setSelected(project)}>
            <div className={styles.tags}>
              {project.tags?.slice(0, 2).map((t) => <span key={t} className="chip chip-sm">{t}</span>)}
            </div>
            <h3>{project.title}</h3>
            <p className={styles.company}>{project.company}</p>
            <p className={styles.summary}>{project.summary}</p>
            <span className={styles.cta}>View details →</span>
          </article>
        ))}
      </div>
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
