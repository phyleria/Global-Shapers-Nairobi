import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const team = [
  {
    name: 'Phylis Atieno',
    role: 'Curator',
    bio: 'Works at the intersection of technology, education, and community impact. Venture Fellow at an early-stage fintech fund. Has led Technovation Kenya for 3+ years, empowering 300+ girls.',
    initial: 'P',
    img: null,
    color: '#1400CC',
  },
  {
    name: 'Stella Cherotich',
    role: 'Vice-Curator',
    bio: 'Leads member engagement and hub culture — building a community where people show up because they want to, not because they have to.',
    initial: 'S',
    img: null,
    color: '#7C3AED',
  },
  {
    name: 'Alvin Nyaga',
    role: 'Impact Officer',
    bio: 'Leads project delivery and community impact — ensuring everything Global Shapers Nairobi builds moves the needle for the people it serves.',
    initial: 'A',
    img: null,
    color: '#0891B2',
  },
]

const members = [
  'Krupa Mandavia','Trevor Koronei','Bernice Mwaura','Prestone Katiedzo',
  'Dennis Cherogony','Kelvin Ndambuki','Isaac Chibole','Niels Peters Williams',
  'Hassan Koki','Tabitha Wang\'ombe','Caleb Munyoki','Wanjiru Mwangi',
  'Dorcas Litunya','Edel Koki','Laura Mugeha',
  'Sean Gichuru','Merlene Amonde','Brian Njoroge','Asha Makana',
  'Valentine Muchiri','Kate Mbugua','Elizabeth Kigochi','Njoki Njore',
]

export default function Team() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="team" ref={ref} style={{
      background: 'var(--off-white)',
      color: 'var(--black)',
      padding: 'clamp(4rem, 8vw, 8rem) 2rem',
    }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ marginBottom: '4rem' }}>
          <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '1rem' }}>The People</div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            fontWeight: 300, lineHeight: 1.05,
            letterSpacing: '-0.02em', color: 'var(--black)',
          }}>
            Led by young leaders<br/><span style={{ fontStyle: 'italic' }}>from across Nairobi.</span>
          </h2>
        </motion.div>

        {/* Curatorship */}
        <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.5rem' }}>
          Curatorship Team 2026–2027
        </div>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', marginBottom: '4rem',
        }} className="team-grid">
          {team.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 + 0.15 }}
              style={{
                background: 'var(--white)', borderRadius: 16,
                overflow: 'hidden',
                border: '1px solid rgba(0,0,0,0.06)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(0,0,0,0.1)' }}
            >
              {/* Colored header */}
              <div style={{
                height: 120, background: t.color, position: 'relative', overflow: 'hidden',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <div style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: `repeating-linear-gradient(-55deg, transparent, transparent 40px, rgba(255,255,255,0.04) 40px, rgba(255,255,255,0.04) 41px)`,
                }}/>
                <div style={{
                  width: 72, height: 72, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.15)',
                  border: '2px solid rgba(255,255,255,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.8rem', fontWeight: 400, color: '#fff',
                  position: 'relative', zIndex: 1,
                }}>{t.initial}</div>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--black)', marginBottom: '0.2rem' }}>{t.name}</h3>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: t.color, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.85rem' }}>{t.role}</div>
                <p style={{ fontSize: '0.875rem', color: '#555', lineHeight: 1.7 }}>{t.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Members */}
        <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.5rem' }}>
          Hub Members
        </div>
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: '0.6rem',
        }}>
          {members.map((m, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.02 + 0.4 }}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '100px',
                background: 'var(--white)',
                border: '1px solid rgba(0,0,0,0.08)',
                fontSize: '0.85rem', fontWeight: 500, color: '#333',
                transition: 'background 0.2s, color 0.2s, border-color 0.2s',
                cursor: 'default',
              }}
              whileHover={{ background: 'var(--black)', color: 'var(--white)', borderColor: 'var(--black)' }}
            >{m}</motion.span>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .team-grid { grid-template-columns: 1fr !important; } }
        @media (min-width: 481px) and (max-width: 768px) { .team-grid { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </section>
  )
}
