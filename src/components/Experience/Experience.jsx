import styles from './Experience.module.css'

export default function Experience({ experience }) {
  return (
    <section id="experience" className="panel panel-animate">
      <div className="section-heading">
        <p className="section-kicker">Experience</p>
        <h2>Work History</h2>
      </div>
      <div className={styles.list}>
        {experience?.map((item) => (
          <div key={item.id} className={styles.item}>
            <div className={styles.meta}>
              <h3>{item.role}</h3>
              <p>{item.company}</p>
              <span>{item.period} · {item.location}</span>
            </div>
            <div className={styles.subProjects}>
              {item.subProjects?.map((sub) => (
                <div key={sub.name} className={styles.subProject}>
                  <p className={styles.subName}>{sub.name}</p>
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
