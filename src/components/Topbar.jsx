import { useEffect, useState } from 'react'
import { navLinks } from '../data/profile'

export default function Topbar() {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
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
  }, [])

  return (
    <header className={`topbar ${scrolled ? 'topbar--scrolled' : ''}`}>
      <a className="brand-mark" href="#top">
        <span className="brand-initials">AC</span>
      </a>

      <nav className="topnav" aria-label="Primary navigation">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={active === link.href ? 'nav-active' : ''}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a className="topbar-cta" href="#contact">Hire Me</a>
    </header>
  )
}
