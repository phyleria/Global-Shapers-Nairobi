import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const events = [
  { month: 'JUL', day: '11', title: 'All Hands Meeting — New Term Kickoff', desc: 'Our first hub-wide meeting of the 2026–2027 term. Vision, pillars, calendar, and role applications go live.', type: 'Virtual · 10AM', accent: 'var(--teal)' },
  { month: 'JUL', day: '26', title: 'Monthly Hub Check-in', desc: 'First monthly check-in of the new term. Leadership Board and Pillar Leads announced.', type: 'Virtual', accent: '#8B5CF6' },
  { month: 'AUG', day: '29', title: 'Monthly Hub Check-in', desc: 'First in-person check-in. Pillar Leads share their project roadmaps. First newsletter drops.', type: 'In Person', accent: '#3B82F6' },
  { month: 'OCT', day: 'TBC', title: 'Dining in the Dark', desc: 'Our signature immersive experience returns — in collaboration with Kenya Society for the Blind.', type: 'In Person', accent: '#F59E0B' },
  { month: 'SEP', day: '—', title: 'New Member Applications Open', desc: 'Applications to join Global Shapers Nairobi for 2027 open in September. Watch this space.', type: 'Applications', accent: '#10B981' },
  { month: 'DEC', day: '5', title: 'Annual Hub Retreat & Awards', desc: 'Year-in-review, member recognition, new member onboarding, and celebrating what we built together.', type: 'In Person', accent: '#EF4444' },
]

export default function Events() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="events" ref={ref} style={{
      background: 'var(--black)',
      padding: 'clamp(4rem, 8vw, 8rem) 2rem',
    }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ marginBottom: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: '1rem' }}>What's Coming</div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              fontWeight: 300, lineHeight: 1.05,
              letterSpacing: '-0.02em',
            }}>
              The year ahead,<br/><span style={{ fontStyle: 'italic' }}>mapped out.</span>
            </h2>
          </div>
          <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: 360 }}>
            Key moments across the 2026–2027 term — monthly check-ins, flagship projects, and the annual retreat.
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(255,255,255,0.05)', borderRadius: 16, overflow: 'hidden' }}>
          {events.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.08 + 0.2 }}
              style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr auto',
                gap: '2rem', alignItems: 'center',
                padding: '1.75rem 2rem',
                background: 'var(--off-black)',
                transition: 'background 0.2s',
                cursor: 'default',
              }}
              whileHover={{ background: 'rgba(255,255,255,0.03)' }}
              className="event-row"
            >
              {/* Date */}
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: e.accent }}>{e.month}</div>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2rem', fontWeight: 400,
                  color: 'var(--white)', lineHeight: 1,
                  marginTop: '0.2rem',
                }}>{e.day}</div>
              </div>
              {/* Info */}
              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--white)', marginBottom: '0.3rem' }}>{e.title}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.6 }}>{e.desc}</p>
              </div>
              {/* Type badge */}
              <div style={{
                fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: e.accent,
                border: `1px solid ${e.accent}40`,
                borderRadius: '100px', padding: '0.3rem 0.85rem',
                whiteSpace: 'nowrap',
              }}>{e.type}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .event-row { grid-template-columns: 60px 1fr !important; }
          .event-row > div:last-child { display: none; }
        }
      `}</style>
    </section>
  )
}
