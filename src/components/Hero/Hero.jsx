import styles from './Hero.module.css'

export default function Hero({ profile, heroStats }) {
  return (
    <section id="top" className={styles.heroCard}>
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}>Mobile Engineering</p>
        <h1>Hi, I&apos;m {profile.name}</h1>
        <p className={styles.lead}>{profile.summary}</p>
        <p className={styles.roleLine}>{profile.title}</p>
        <div className={styles.heroActions}>
          <a className="btn-primary" href="#projects">View Projects</a>
          <a className="btn-secondary" href="#contact">Contact Me</a>
        </div>
      </div>
      <div className={styles.statsGrid}>
        {heroStats?.map((stat) => (
          <div key={stat.label} className={styles.statItem}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
