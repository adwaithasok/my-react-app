import { experience } from '../data/profile'

export default function Experience() {
  return (
    <section id="experience" className="panel panel-animate">
      <div className="section-heading">
        <p className="section-kicker">Experience</p>
        <h2>Work History</h2>
      </div>
      <div className="timeline-list">
        {experience.map((item, index) => (
          <div key={`${item.role}-${index}`} className="timeline-item">
            <div className="timeline-meta">
              <h3>{item.role}</h3>
              <p>{item.company}</p>
              <span>{item.period} · {item.location}</span>
            </div>
            <div className="sub-projects">
              {item.subProjects.map((sub) => (
                <div key={sub.name} className="sub-project">
                  <p className="sub-project-name">{sub.name}</p>
                  <ul>
                    {sub.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
