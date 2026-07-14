import { useEffect, useState } from 'react'
import styles from './Topbar.module.css'

export default function Topbar({ navLinks }) {
  const [active, setActive]     = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!navLinks?.length) return
    const observers = []
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(href) },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [navLinks])

  return (
    <header className={`${styles.topbar} ${scrolled ? styles.topbarScrolled : ''}`}>
      <a className={styles.brandMark} href="#top">AC</a>
      <nav className={styles.topnav} aria-label="Primary navigation">
        {navLinks?.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={active === link.href ? styles.navActive : ''}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <a className={styles.cta} href="#contact">Hire Me</a>
    </header>
  )
}
