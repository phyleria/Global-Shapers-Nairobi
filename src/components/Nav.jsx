import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const loc = useLocation()
  const isHome = loc.pathname === '/'

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const onDark = isHome && !scrolled
  const navBg = scrolled ? 'rgba(255,255,255,0.97)' : isHome ? 'transparent' : 'var(--white)'
  const logoSrc = onDark ? '/logo-dark.svg' : '/logo-light.jpeg'
  const textColor = onDark ? 'rgba(255,255,255,0.9)' : 'var(--text-mid)'
  const hoverBg = onDark ? 'rgba(255,255,255,0.1)' : 'var(--blue-light)'
  const hoverColor = onDark ? '#fff' : 'var(--blue)'
  const buttonBg = onDark ? '#fff' : 'var(--blue)'
const buttonText = onDark ? 'var(--blue)' : '#fff'
const buttonBorder = onDark ? 'none' : 'none'
const buttonHoverBg = onDark ? 'rgba(255,255,255,0.9)' : 'var(--blue-hover)'

  const links = [
    { label: 'About', to: '/#about' },
    { label: 'Projects', to: '/projects' },
    { label: 'Events', to: '/events' },
    { label: 'Blog', to: '/blog' },
    { label: 'Team', to: '/team' },
  ]

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0.85rem 2rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: navBg,
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        transition: 'all 0.35s ease',
      }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <img
  src={logoSrc}
  alt="Global Shapers Nairobi"
  style={{
    height: onDark ? 48 : 40,
    width: onDark ? 48 : 40,
    objectFit: 'contain',
    borderRadius: 4,
  }}
  onError={e => e.target.style.display='none'}
/>
          <span style={{ fontSize: '0.88rem', fontWeight: 700, color: onDark ? '#fff' : 'var(--text-dark)', lineHeight: 1.2 }}>
            Global Shapers<br/>
            <span style={{ fontWeight: 400, fontSize: '0.72rem', color: onDark ? 'rgba(255,255,255,0.65)' : 'var(--text-muted)' }}>Nairobi</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul style={{ display: 'flex', gap: '0.15rem', listStyle: 'none', alignItems: 'center' }} className="nav-desktop">
          {links.map(l => (
            <li key={l.label}>
              <Link to={l.to} style={{
                fontSize: '0.875rem', fontWeight: 500, color: textColor,
                padding: '0.45rem 0.8rem', borderRadius: 8, display: 'block',
                transition: 'color 0.2s, background 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = hoverColor; e.currentTarget.style.background = hoverBg; }}
              onMouseLeave={e => { e.currentTarget.style.color = textColor; e.currentTarget.style.background = 'transparent'; }}
              >{l.label}</Link>
            </li>
          ))}
          <li style={{ marginLeft: '0.5rem' }}>
           <Link
  to="/partner"
  style={{
    background: buttonBg,
    color: buttonText,
    border: buttonBorder,
    fontWeight: 600,
    fontSize: '0.875rem',
    padding: '0.5rem 1.25rem',
    borderRadius: '100px',
    display: 'inline-block',
    transition: 'background 0.2s, transform 0.2s, color 0.2s',
  }}
  onMouseEnter={e => {
    e.currentTarget.style.background = buttonHoverBg
    e.currentTarget.style.transform = 'translateY(-1px)'
  }}
  onMouseLeave={e => {
    e.currentTarget.style.background = buttonBg
    e.currentTarget.style.color = buttonText
    e.currentTarget.style.transform = 'translateY(0)'
  }}
>
  Partner With Us
</Link>
          </li>
        </ul>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} className="hamburger" style={{ display: 'none', flexDirection: 'column', gap: 5, padding: 4 }}>
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: 22, height: 2, borderRadius: 2,
              background: onDark ? '#fff' : 'var(--text-dark)',
              transition: '0.3s',
              transform: open && i===0 ? 'translateY(7px) rotate(45deg)' : open && i===2 ? 'translateY(-7px) rotate(-45deg)' : 'none',
              opacity: open && i===1 ? 0 : 1,
            }}/>
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 99, background: 'var(--white)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', paddingTop: '5rem',
        }}>
          {[...links, { label: 'Partner With Us', to: '/partner' }].map(l => (
            <Link key={l.label} to={l.to} onClick={() => setOpen(false)} style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-dark)' }}>{l.label}</Link>
          ))}
        </div>
      )}

      <style>{`@media(max-width:900px){.nav-desktop{display:none !important}.hamburger{display:flex !important}}`}</style>
    </>
  )
}