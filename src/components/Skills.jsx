import { useState } from 'react'
import { skillGroups } from '../data/profile'

export default function Skills() {
  const [active, setActive] = useState(null)

  return (
    <article id="skills" className="panel panel-animate">
      <div className="section-heading">
        <p className="section-kicker">Skills</p>
        <h2>Tech Stack</h2>
      </div>
      <div className="skill-groups">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className={`skill-group ${active === group.category ? 'skill-group--open' : ''}`}
            onClick={() => setActive(active === group.category ? null : group.category)}
          >
            <div className="skill-group-header">
              <span className="skill-group-icon">{group.icon}</span>
              <span className="skill-group-name">{group.category}</span>
              <span className="skill-group-count">{group.skills.length}</span>
              <span className="skill-group-arrow">{active === group.category ? '▲' : '▼'}</span>
            </div>
            <div className="skill-group-body">
              <div className="chip-list">
                {group.skills.map((skill, i) => (
                  <span
                    key={skill}
                    className="chip"
                    style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}
