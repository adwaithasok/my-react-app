import { profile } from '../data/profile'

export default function About() {
  return (
    <article id="about" className="panel panel-animate">
      <div className="section-heading">
        <p className="section-kicker">About</p>
        <h2>Profile</h2>
      </div>
      <p className="about-desc">{profile.summary}</p>
      <ul className="info-list">
        <li><span>Location</span>{profile.location}</li>
        <li><span>Phone</span>{profile.phone}</li>
        <li><span>Email</span>{profile.email}</li>
        <li><span>LinkedIn</span><a href={profile.linkedin} target="_blank" rel="noreferrer">{profile.linkedin.split('/').pop()}</a></li>
        {/* <li><span>Portfolio</span><a href={profile.portfolio} target="_blank" rel="noreferrer">View portfolio</a></li> */}
        <li><span>Languages</span>{profile.languages.join(', ')}</li>
      </ul>
      <div className="about-extra">
        <div className="about-block">
          <p className="section-kicker" style={{ marginBottom: '0.4rem' }}>Education</p>
          <p className="about-desc">{profile.education}</p>
        </div>
        <div className="about-block">
          <p className="section-kicker" style={{ marginBottom: '0.4rem' }}>Certifications</p>
          <ul className="cert-list">
            {profile.certifications.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </div>
      </div>
    </article>
  )
}
