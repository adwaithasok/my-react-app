import styles from './About.module.css'

export default function About({ profile }) {
  return (
    <article id="about" className="panel panel-animate">
      <div className="section-heading">
        <p className="section-kicker">About</p>
        <h2>Profile</h2>
      </div>
      <p className={styles.desc}>{profile.summary}</p>
      <ul className={styles.infoList}>
        <li><span>Location</span>{profile.location}</li>
        <li><span>Phone</span>{profile.phone}</li>
        <li><span>Email</span>{profile.email}</li>
        <li>
          <span>LinkedIn</span>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            {profile.linkedin?.split('/').pop()}
          </a>
        </li>
        <li>
          <span>GitHub</span>
          <a href={profile.github} target="_blank" rel="noreferrer">
            {profile.github?.split('/').pop()}
          </a>
        </li>
        <li><span>Languages</span>{profile.languages?.join(', ')}</li>
      </ul>
      <div className={styles.extra}>
        <div className={styles.block}>
          <p className="section-kicker" style={{ marginBottom: '0.4rem' }}>Education</p>
          <p className={styles.desc}>{profile.education}</p>
        </div>
        <div className={styles.block}>
          <p className="section-kicker" style={{ marginBottom: '0.4rem' }}>Certifications</p>
          <ul className={styles.certList}>
            {profile.certifications?.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </div>
      </div>
    </article>
  )
}
