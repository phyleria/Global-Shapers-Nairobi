import { useEffect, useState } from 'react'

// Edit members here.
// photo: looks for a file in /public named exactly like the person (e.g. "Kate Mbugua.jpeg").
// role: optional, shown under the name. linkedin: optional full profile URL; shows the "in" badge.
// outline: true adds a thin border around the photo (used for photos with white backgrounds).
const members = [
  { name: 'Krupa Mandavia', role: '', linkedin: '', outline: true },
  { name: 'Trevor Koronei', role: '', linkedin: '' },
  { name: 'Bernice Mwaura', role: '', linkedin: '' },
  { name: 'Prestone Katiedzo', role: '', linkedin: '' },
  { name: 'Dennis Cherogony', role: '', linkedin: '', outline: true },
  { name: 'Kelvin Ndambuki', role: '', linkedin: '' },
  { name: 'Isaac Chibole', role: '', linkedin: '' },
  { name: 'Niels Peters Williams', role: '', linkedin: '', outline: true },
  { name: 'Hassan Koki', role: '', linkedin: '' },
  { name: 'Tabitha Wang\'ombe', role: '', linkedin: '' },
  { name: 'Caleb Munyoki', role: '', linkedin: '', outline: true },
  { name: 'Wanjiru Mwangi', role: '', linkedin: '' },
  { name: 'Edel Koki', role: '', linkedin: '' },
  { name: 'Laura Mugeha', role: '', linkedin: '', outline: true },
  { name: 'Merlene Amonde', role: '', linkedin: '' },
  { name: 'Brian Njoroge', role: '', linkedin: '' },
  { name: 'Asha Makana', role: '', linkedin: '', outline: true },
  { name: 'Valentine Muchiri', role: '', linkedin: '', outline: true },
  { name: 'Kate Mbugua', role: '', linkedin: '' },
  { name: 'Elizabeth Kigochi', role: '', linkedin: '' },
  { name: 'Njoki Njore', role: '', linkedin: '' },
]

// Tries each extension in order; shows initials if no photo is found
const EXTENSIONS = ['jpeg', 'jpg', 'png', 'webp']

function initials(name) {
  return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
}

function MemberCard({ m }) {
  const [extIndex, setExtIndex] = useState(0)
  const noPhoto = extIndex >= EXTENSIONS.length

  return (
    <div className="tm-card">
      <div className={`tm-photo${m.outline ? ' has-outline' : ''}`}>
        {noPhoto
          ? <span className="tm-initials" aria-hidden="true">{initials(m.name)}</span>
          : <img src={`/${encodeURIComponent(m.name)}.${EXTENSIONS[extIndex]}`} alt={m.name} loading="lazy" onError={() => setExtIndex(i => i + 1)} />}
        {m.linkedin && (
          <a href={m.linkedin} target="_blank" rel="noreferrer" className="tm-in" aria-label={`${m.name} on LinkedIn`}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.1c0-1.22-.02-2.78-1.7-2.78-1.7 0-1.96 1.33-1.96 2.7V21h-4z"/>
            </svg>
          </a>
        )}
      </div>
      <h3 className="tm-name">{m.name}</h3>
      {m.role && <p className="tm-role">{m.role}</p>}
    </div>
  )
}

export default function TeamPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <div style={{ paddingTop: '4.5rem', background: 'var(--white)' }}>
      <section className="pp-hero">
        <div className="container">
          <h1>Meet <em>our</em> Shapers</h1>
          <p>The young leaders behind Global Shapers Nairobi's projects, events, and partnerships.</p>
        </div>
      </section>

      <section className="tm-wrap">
        <div className="container">
          <div className="tm-grid">
            {members.map(m => <MemberCard key={m.name} m={m} />)}
          </div>
        </div>
      </section>

      <style>{`
        .pp-hero {
          text-align: center; color: var(--white);
          padding: clamp(4rem, 8vw, 6rem) 0 clamp(8rem, 14vw, 11rem);
          background:
            radial-gradient(circle at 20% 20%, rgba(30,91,201,0.55) 0%, transparent 45%),
            radial-gradient(circle at 85% 70%, rgba(0,172,193,0.18) 0%, transparent 45%),
            var(--blue-dark);
        }
        .pp-hero h1 { font-size: clamp(2.4rem, 6vw, 4.5rem); font-weight: 700; letter-spacing: -0.03em; line-height: 1.05; margin-bottom: 1.25rem; }
        .pp-hero h1 em { font-style: italic; font-weight: 300; }
        .pp-hero p { color: rgba(255,255,255,0.75); font-size: 1rem; line-height: 1.7; max-width: 520px; margin: 0 auto; }

        .tm-wrap { margin-top: clamp(-6rem, -9vw, -4rem); padding-bottom: clamp(4rem, 8vw, 6rem); position: relative; }
        .tm-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 2.25rem 1.25rem; }
        .tm-photo { position: relative; aspect-ratio: 5 / 6; overflow: hidden; background: var(--light-gray); margin-bottom: 0.9rem; }
        .tm-photo img {
          width: 100%; height: 100%; object-fit: cover; object-position: center top;
          filter: grayscale(1) contrast(1.05); transition: filter 0.4s ease;
        }
        .tm-card:hover .tm-photo img { filter: grayscale(0); }
        .tm-photo.has-outline::after { content: ''; position: absolute; inset: 0; border: 1px solid rgba(0,0,0,0.25); pointer-events: none; }
        .tm-initials {
          position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
          font-size: 2rem; font-weight: 600; color: var(--text-muted);
        }
        .tm-in {
          position: absolute; right: 0.7rem; bottom: 0.7rem; width: 30px; height: 30px;
          display: inline-flex; align-items: center; justify-content: center;
          background: var(--white); color: var(--blue-dark); transition: background 0.2s, color 0.2s;
        }
        .tm-in:hover { background: var(--blue); color: var(--white); }
        .tm-in:focus-visible { outline: 2px solid var(--blue); outline-offset: 2px; }
        .tm-name { font-size: 1.05rem; font-weight: 500; color: var(--text-dark); letter-spacing: -0.01em; line-height: 1.3; }
        .tm-role { font-size: 0.8rem; color: var(--text-muted); margin-top: 0.15rem; }

        @media (max-width: 1100px) { .tm-grid { grid-template-columns: repeat(4, 1fr); } }
        @media (max-width: 820px) { .tm-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 540px) { .tm-grid { grid-template-columns: repeat(2, 1fr); gap: 1.75rem 1rem; } .tm-name { font-size: 0.95rem; } }
        @media (prefers-reduced-motion: reduce) { .tm-photo img { transition: none; } }
      `}</style>
    </div>
  )
}