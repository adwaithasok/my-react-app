import { useState } from 'react'
import styles from './Skills.module.css'

export default function Skills({ skillGroups }) {
  const [active, setActive] = useState(null)

  return (
    <article id="skills" className="panel panel-animate">
      <div className="section-heading">
        <p className="section-kicker">Skills</p>
        <h2>Tech Stack</h2>
      </div>
      <div className={styles.groups}>
        {skillGroups?.map((group) => {
          const isOpen = active === group.category
          return (
            <div
              key={group.category}
              className={`${styles.group} ${isOpen ? styles.groupOpen : ''}`}
              onClick={() => setActive(isOpen ? null : group.category)}
            >
              <div className={styles.header}>
                <span className={styles.icon}>{group.icon}</span>
                <span className={styles.name}>{group.category}</span>
                <span className={styles.count}>{group.skills.length}</span>
                <span className={styles.arrow}>{isOpen ? '▲' : '▼'}</span>
              </div>
              <div className={styles.body}>
                <div className="chip-list">
                  {group.skills.map((skill, i) => (
                    <span key={skill} className="chip" style={{ animationDelay: `${i * 0.05}s` }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </article>
  )
}
