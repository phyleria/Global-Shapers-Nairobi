import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const projects = [
  {
    tag: 'Education · Year 4',
    isNew: false,
    title: 'Technovation',
    img: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80',
    desc: 'The world\'s largest tech entrepreneurship programme for girls — delivered by Global Shapers Nairobi since 2021. Over 300 girls have learned to code, conduct market research, and pitch solutions to real problems. Some have gone on to compete and win at global level.',
    meta: 'Cohort recruitment opens September 2026',
    accent: '#3B82F6',
  },
  {
    tag: 'Community · Returning Oct 2026',
    isNew: false,
    title: 'Dining in the Dark',
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    desc: 'An immersive dining experience in complete darkness, guided by visually impaired hosts from the Kenya Society for the Blind. Guests navigate a meal without sight — building empathy, connection, and real advocacy for Nairobi\'s visually impaired community.',
    meta: 'Returning October 2026',
    accent: '#8B5CF6',
  },
  {
    tag: 'Education · Ongoing',
    isNew: false,
    title: 'Financial Literacy Series',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    desc: 'A practical programme equipping young people across Nairobi with financial knowledge — from budgeting and saving to investments and navigating Kenya\'s financial ecosystem. Because economic empowerment starts with understanding.',
    meta: 'New cohort launching January 2027',
    accent: '#10B981',
  },
  {
    tag: 'Innovation · New 2026 ✨',
    isNew: true,
    title: 'Food Wastage Solution',
    img: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&q=80',
    desc: 'A new platform to track, reduce, and redistribute surplus food from Nairobi\'s hotels to communities in need. Built in collaboration with PadMad and Woodland Star International School — combining Shapers\' professional expertise with student innovation.',
    meta: 'In development · 2026–2027',
    accent: 'var(--teal)',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" ref={ref} style={{
      background: 'var(--black)',
      padding: 'clamp(4rem, 8vw, 8rem) 2rem',
    }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: '1rem' }}>Our Work</div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              fontWeight: 300, lineHeight: 1.05,
              letterSpacing: '-0.02em',
            }}>
              Projects that move<br/><span style={{ fontStyle: 'italic' }}>the needle.</span>
            </h2>
          </div>
          <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: 360 }}>
            Fewer projects, done well. We protect our flagships and build new solutions to Nairobi's most pressing challenges.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1.5rem',
        }} className="projects-grid">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.6 }}
              style={{
                borderRadius: 16,
                overflow: 'hidden',
                background: 'var(--off-black)',
                border: p.isNew ? `1px solid ${p.accent}` : '1px solid rgba(255,255,255,0.06)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'default',
              }}
              whileHover={{ y: -6, boxShadow: `0 20px 60px rgba(0,0,0,0.4)` }}
            >
              {/* Image */}
              <div style={{ height: 200, overflow: 'hidden', position: 'relative' }}>
                <img
                  src={p.img} alt={p.title} loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to bottom, transparent 40%, rgba(17,17,17,0.9) 100%)',
                }}/>
                {/* Tag on image */}
                <div style={{
                  position: 'absolute', top: '1rem', left: '1rem',
                  fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  padding: '0.3rem 0.7rem', borderRadius: '100px',
                  background: p.isNew ? p.accent : 'rgba(0,0,0,0.6)',
                  color: p.isNew ? '#0A0080' : 'rgba(255,255,255,0.8)',
                  backdropFilter: 'blur(8px)',
                }}>{p.tag}</div>
              </div>

              {/* Content */}
              <div style={{ padding: '1.75rem' }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem', fontWeight: 400,
                  color: 'var(--white)', marginBottom: '0.75rem',
                }}>{p.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>{p.desc}</p>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: p.accent, display: 'block', flexShrink: 0 }}/>
                  <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{p.meta}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
