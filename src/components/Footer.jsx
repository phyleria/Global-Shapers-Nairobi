import { Link } from 'react-router-dom'

// Real SVG social icons
const LinkedIn = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)
const Instagram = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
)
const Twitter = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)
const Facebook = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

export default function Footer() {
  return (
    <footer style={{ background: 'var(--blue-dark)', color: 'var(--white)', padding: '4rem 0 2rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '3rem', marginBottom: '3rem' }} className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
              <img src="/logo-dark.jpg" alt="Global Shapers Nairobi" style={{ height: 44, width: 44, objectFit: 'contain', borderRadius: 4, background: 'rgba(255,255,255,0.1)' }} onError={e => e.target.style.display='none'} />
              <span style={{ fontSize: '0.92rem', fontWeight: 700, lineHeight: 1.25 }}>Global Shapers<br/><span style={{ fontWeight: 400, fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)' }}>Nairobi</span></span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', lineHeight: 1.8, maxWidth: 280, marginBottom: '1.5rem' }}>
              A community of young leaders aged 18 to 30 shaping the future of Nairobi through projects, partnerships, and impact.
            </p>
            {/* Social icons */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { Icon: LinkedIn, href: 'https://linkedin.com/company/globalshapersnairobi', label: 'LinkedIn' },
                { Icon: Instagram, href: 'https://instagram.com/globalshapersnairobi', label: 'Instagram' },
                { Icon: Twitter, href: 'https://twitter.com/gshapersnairobi', label: 'Twitter' },
                { Icon: Facebook, href: 'https://facebook.com/NairobiGlobalShapers', label: 'Facebook' },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  style={{
                    width: 38, height: 38, borderRadius: '50%',
                    background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(255,255,255,0.7)', transition: 'background 0.2s, color 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.25)'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
                ><Icon /></a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {[
            { title: 'Navigate', links: [['About','/#about'],['Our Pillars','/pillars'],['Projects','/projects'],['Events','/events'],['Blog','/blog'],['Team','/team']] },
            { title: 'Projects', links: [['Technovation','/projects#technovation'],['Dining in the Dark','/projects#dining'],['Financial Literacy','/projects#finlit'],['Food Wastage','/projects#food']] },
            { title: 'Get Involved', links: [['Join the Hub','/#join'],['Contact Us','mailto:contact@globalshapersnairobi.com'],['Toplink Profile','https://www.globalshapers.org/hubs/nairobi-hub'],['WEF','https://weforum.org']] },
          ].map(col => (
            <div key={col.title}>
              <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '1.25rem' }}>{col.title}</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    {href.startsWith('http') || href.startsWith('mailto') ? (
                      <a href={href} target={href.startsWith('http') ? '_blank' : '_self'} rel="noopener"
                        style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', transition: 'color 0.2s' }}
                        onMouseEnter={e => e.target.style.color='#fff'} onMouseLeave={e => e.target.style.color='rgba(255,255,255,0.6)'}
                      >{label}</a>
                    ) : (
                      <Link to={href}
                        style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', transition: 'color 0.2s' }}
                        onMouseEnter={e => e.target.style.color='#fff'} onMouseLeave={e => e.target.style.color='rgba(255,255,255,0.6)'}
                      >{label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>2026 Global Shapers Nairobi. All rights reserved.</p>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem' }}>
            Part of the <span style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>Global Shapers Community</span>
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 2rem !important; } }
        @media (max-width: 480px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  )
}
