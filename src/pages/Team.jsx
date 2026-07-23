import { useEffect, useState } from 'react'

const members = [
  'Krupa Mandavia','Trevor Koronei','Bernice Mwaura','Prestone Katiedzo',
  'Dennis Cherogony','Kelvin Ndambuki','Isaac Chibole','Niels Peters Williams',
  'Hassan Koki','Tabitha Wang\'ombe','Caleb Munyoki','Wanjiru Mwangi',
  'Dorcas Litunya','Edel Koki','Laura Mugeha',
  'Sean Gichuru','Merlene Amonde','Brian Njoroge','Asha Makana',
  'Valentine Muchiri','Kate Mbugua','Elizabeth Kigochi','Njoki Njore',
]

function getInitials(name) {
  return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
}

const COLORS = ['var(--blue)','var(--blue-dark)','var(--blue-mid)','var(--teal)','#0F3D73','#1B5EA6','#2D7DD2','#00A8CC']

// Tries each extension in order; falls back to initials if none of the files exist
const EXTENSIONS = ['jpeg', 'jpg', 'png', 'webp']

function MemberCard({ name, index }) {
  const [extIndex, setExtIndex] = useState(0)
  const imgFailed = extIndex >= EXTENSIONS.length

  return (
    <div style={{ textAlign: 'center', padding: '1.25rem 0.5rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', background: 'var(--off-white)', transition: 'transform 0.2s, box-shadow 0.2s, background 0.2s' }}
      onMouseEnter={e => { e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow='var(--shadow-md)'; e.currentTarget.style.background='var(--white)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='none'; e.currentTarget.style.background='var(--off-white)'; }}
    >
      {imgFailed ? (
        <div style={{
          width: 96, height: 96, borderRadius: '50%',
          background: COLORS[index % COLORS.length],
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 0.75rem',
          fontSize: '1.1rem', fontWeight: 800, color: '#fff',
        }}>{getInitials(name)}</div>
      ) : (
        <img
          src={`/${encodeURIComponent(name)}.${EXTENSIONS[extIndex]}`}
          alt={name}
          onError={() => setExtIndex(i => i + 1)}
          style={{
            width: 96, height: 96, borderRadius: '50%',
            objectFit: 'cover', objectPosition: 'center top',
            display: 'block', margin: '0 auto 0.75rem',
            border: '2px solid var(--border)',
          }}
        />
      )}
      <p style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-dark)', lineHeight: 1.3 }}>{name}</p>
    </div>
  )
}

export default function TeamPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <div style={{ paddingTop: '5rem' }}>

      {/* Group photo */}
      <div style={{ background: 'var(--white)', padding: '4rem 0 1.25rem' }}>
        <div className="container">
          <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', maxHeight: 480 }}>
            <img src="/gsn-team.jpeg" alt="Global Shapers Nairobi team" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
          </div>
        </div>
      </div>

      {/* Members grid */}
      <div style={{ background: 'var(--white)', padding: '1.25rem 0 clamp(3rem,6vw,5rem)' }}>
        <div className="container">
          <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 800, color: 'var(--text-dark)', letterSpacing: '-0.02em' }}>Our Shapers</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: '1rem' }} className="members-grid">
            {members.map((m, i) => (
              <MemberCard key={m} name={m} index={i} />
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .lead-grid { grid-template-columns: 1fr !important; } }
        @media (min-width: 481px) and (max-width: 900px) { .lead-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 768px) { .members-grid { grid-template-columns: repeat(3,1fr) !important; } }
        @media (max-width: 480px) { .members-grid { grid-template-columns: repeat(2,1fr) !important; } }
      `}</style>
    </div>
  )
}