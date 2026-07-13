import { useEffect, useState } from 'react'

const upcoming = [
  { title: 'All Hands Meeting', date: 'July 11, 2026', time: '10:00 AM - 12:00 PM', location: 'Virtual (Google Meet)', type: 'Hub Meeting', desc: 'Our first hub-wide meeting of the 2026-2027 term. Hear the vision for the year, select your pillar, and find out how to apply for leadership roles.', open: false },
  { title: 'Meet the Leader Session', date: 'August 2026', time: 'TBC', location: 'Nairobi (TBC)', type: 'Community Event', desc: 'An intimate session with an inspiring leader from Nairobi\'s business, tech, or social impact ecosystem. Open to Global Shapers members and the broader community.', open: true },
  { title: 'Dining in the Dark', date: 'October 2026', time: 'TBC', location: 'Nairobi', type: 'Community Event', desc: 'Our signature immersive dining experience in complete darkness, guided by visually impaired hosts from the Kenya Society for the Blind. Tickets available to the public.', open: true },
  { title: 'Annual Hub Retreat and Awards', date: 'December 5, 2026', time: 'TBC', location: 'Nairobi', type: 'Hub Meeting', desc: 'Year-in-review, member recognition, new member onboarding, and celebrating everything we built together across the 2026-2027 term.', open: false },
]

const past = [
  { title: 'Dining in the Dark', date: '2024', location: 'Nairobi',  desc: 'The inaugural edition of our immersive dining experience, raising awareness and funds for the Kenya Society for the Blind.' },
  { title: 'Financial Literacy Workshop', date: '2024', location: 'Nairobi',  desc: 'A practical workshop series on personal finance, savings, and investing, equipping young Nairobians with essential money skills.' },
]

const TYPE_COLORS = {
  'Community Event': 'var(--blue-mid)',
  'Hub Meeting': 'var(--blue)'
}

export default function EventsPage() {
  const [tab, setTab] = useState('upcoming')
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div style={{ paddingTop: '5rem' }}>
      {/* Hero */}
      <div style={{ background: 'var(--blue)', padding: '4rem 0 5rem', textAlign: 'center' }}>
        <div className="container">
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}></span>
          <h1 style={{ color: '#fff', fontSize: 'clamp(2.2rem,5vw,4rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            Join us in person and online
          </h1>
          
        </div>
      </div>

      {/* Tabs */}
      <div style={{ background: 'var(--white)', borderBottom: '1px solid var(--border)', position: 'sticky', top: 68, zIndex: 10 }}>
        <div className="container" style={{ display: 'flex', gap: '0' }}>
          {['upcoming', 'past'].map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: '1.1rem 1.75rem',
              fontSize: '0.9rem', fontWeight: 600,
              color: tab === t ? 'var(--blue)' : 'var(--text-muted)',
              borderBottom: tab === t ? '2.5px solid var(--blue)' : '2.5px solid transparent',
              textTransform: 'capitalize', transition: 'color 0.2s',
              background: 'none', cursor: 'pointer', border: 'none', borderRadius: 0,
            }}>{t === 'upcoming' ? 'Upcoming Events' : 'Past Events'}</button>
          ))}
        </div>
      </div>

      {/* Events list */}
      <div style={{ background: 'var(--off-white)', padding: 'clamp(2.5rem,5vw,4rem) 0', minHeight: '60vh' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.25rem' }} className="events-page-grid">
            {(tab === 'upcoming' ? upcoming : past).map((e, i) => (
              <div key={i} style={{
                background: 'var(--white)', borderRadius: 'var(--radius)',
                border: '1px solid var(--border)', overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={el => { el.currentTarget.style.transform='translateY(-3px)'; el.currentTarget.style.boxShadow='var(--shadow-md)'; }}
              onMouseLeave={el => { el.currentTarget.style.transform='translateY(0)'; el.currentTarget.style.boxShadow='var(--shadow-sm)'; }}
              >
                {/* Color header */}
                <div style={{ height: 8, background: TYPE_COLORS[e.type] || 'var(--blue)' }}/>
                <div style={{ padding: '1.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span style={{
                      fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em',
                      textTransform: 'uppercase', padding: '0.28rem 0.75rem', borderRadius: '100px',
                      background: `${(TYPE_COLORS[e.type] || 'var(--blue)').replace(')',',0.1)').replace('var(','rgba(').replace(/^rgba\(--[^,]+,/,'var(')}`,
                      color: TYPE_COLORS[e.type] || 'var(--blue)',
                      border: `1px solid ${TYPE_COLORS[e.type] || 'var(--blue)'}30`,
                    }}>{e.type}</span>
                  
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '0.75rem', lineHeight: 1.35 }}>{e.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-mid)', lineHeight: 1.75, marginBottom: '1.25rem' }}>{e.desc}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                      <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--blue)' }}>{e.date}{e.time && e.time !== 'TBC' && ' · ' + e.time}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{e.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`@media(max-width:640px){.events-page-grid{grid-template-columns:1fr !important}}`}</style>
    </div>
  )
}
