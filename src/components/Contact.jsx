import { useContactForm } from '../hooks/useContactForm'

export default function Contact() {
  const { formData, status, handleChange, handleSubmit } = useContactForm()

  return (
    <section id="contact" className="panel panel-animate">
      <div className="section-heading">
        <p className="section-kicker">Contact</p>
        <h2>Let&apos;s Talk</h2>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email
          <input name="email" type="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Message
          <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required />
        </label>
        <button type="submit">Send Message</button>
        {status && <p className="status" aria-live="polite">{status}</p>}
      </form>
    </section>
  )
}
