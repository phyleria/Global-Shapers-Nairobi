import { Link } from 'react-router-dom'

const LinkedIn = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)
const Instagram = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
)
const Twitter = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)
const Facebook = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const socials = [
  { Icon: Twitter, href: 'https://twitter.com/gshapersnairobi', label: 'X (Twitter)' },
  { Icon: Instagram, href: 'https://instagram.com/globalshapersnairobi', label: 'Instagram' },
  { Icon: LinkedIn, href: 'https://linkedin.com/company/globalshapersnairobi', label: 'LinkedIn' },
  { Icon: Facebook, href: 'https://facebook.com/NairobiGlobalShapers', label: 'Facebook' },
]

const columns = [
  { title: 'Navigate', links: [['About', '/#about'], ['Our Pillars', '/#pillars'], ['Projects', '/projects'], ['Events', '/events'], ['Blog', '/blog'], ['Team', '/team']] },
  { title: 'Get Involved', links: [['Join the Hub', '/#join'], ['Contact Us', 'mailto:contact@globalshapersnairobi.org'], ['Toplink Profile', 'https://initiatives.weforum.org/nairobi-hub/'], ['WEF', 'https://weforum.org']] },
]

function FooterLink({ href, children, className }) {
  if (href.startsWith('http')) return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>
  if (href.startsWith('mailto')) return <a href={href} className={className}>{children}</a>
  return <Link to={href} className={className}>{children}</Link>
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="ft-top">
          <div className="ft-brand">
            <Link to="/" className="ft-logo">
              <img src="/logo-dark.svg" alt="" onError={e => { e.target.style.display = 'none' }} />
              <span>Global Shapers Nairobi</span>
            </Link>
            <p className="ft-about">
              A community of young leaders aged 18 to 30 shaping the future of Nairobi through projects, partnerships, and impact.
            </p>
            <div className="ft-socials">
              {socials.map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}><Icon /></a>
              ))}
            </div>
          </div>

          <div className="ft-cols">
            {columns.map(col => (
              <div key={col.title}>
                <h3 className="ft-col-title">{col.title}</h3>
                <ul className="ft-list">
                  {col.links.map(([label, href]) => (
                    <li key={label}><FooterLink href={href} className="ft-link">{label}</FooterLink></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="ft-bottom">
          <p>© {new Date().getFullYear()} Global Shapers Nairobi. All rights reserved.</p>
          <p>
            Part of the{' '}
            <a href="https://www.globalshapers.org" target="_blank" rel="noopener noreferrer" className="ft-underline">Global Shapers Community</a>
          </p>
        </div>
      </div>

      <style>{`
        .site-footer {
          font-family: inherit;
          background: var(--blue-dark); color: var(--white);
          padding: 4rem 0 2.25rem;
        }
        .ft-top { display: grid; grid-template-columns: 1fr auto; gap: 4rem; padding-bottom: 3rem; border-bottom: 1px solid rgba(255,255,255,0.15); }

        .ft-logo { display: inline-flex; align-items: center; gap: 0.7rem; margin-bottom: 1.5rem; }
        .ft-logo img { width: 40px; height: 40px; object-fit: contain; }
        .ft-logo span { font-size: 1.1rem; font-weight: 600; color: var(--white); letter-spacing: -0.01em; }
        .ft-about { font-size: 0.9rem; line-height: 1.6; color: rgba(255,255,255,0.7); max-width: 360px; margin-bottom: 1.5rem; }
        .ft-socials { display: flex; gap: 1.1rem; }
        .ft-socials a { color: rgba(255,255,255,0.85); display: inline-flex; transition: color 0.2s; }
        .ft-socials a:hover { color: var(--white); opacity: 0.7; }

        .ft-cols { display: grid; grid-template-columns: repeat(3, minmax(130px, auto)); gap: 4rem; }
        .ft-col-title { font-size: 0.95rem; font-weight: 700; color: var(--white); margin-bottom: 1.25rem; }
        .ft-list { list-style: none; display: flex; flex-direction: column; gap: 0.85rem; }
        .ft-link { font-size: 0.9rem; color: rgba(255,255,255,0.7); transition: color 0.2s; }
        .ft-link:hover { color: var(--white); }

        .ft-bottom { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; padding-top: 1.75rem; font-size: 0.85rem; color: rgba(255,255,255,0.6); }
        .ft-underline { color: rgba(255,255,255,0.9); text-decoration: underline; text-underline-offset: 3px; text-decoration-color: rgba(255,255,255,0.4); transition: color 0.2s; }
        .ft-underline:hover { color: var(--white); text-decoration-color: var(--white); }

        .site-footer a:focus-visible { outline: 2px solid var(--white); outline-offset: 3px; border-radius: 2px; }

        @media (max-width: 900px) {
          .ft-top { grid-template-columns: 1fr; gap: 2.5rem; }
          .ft-cols { gap: 2.5rem; }
        }
        @media (max-width: 560px) {
          .ft-cols { grid-template-columns: 1fr 1fr; }
          .ft-bottom { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </footer>
  )
}