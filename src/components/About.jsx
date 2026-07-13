import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16,1,0.3,1] } } }

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const pillars = [
    { icon: '💡', name: 'Innovation & Entrepreneurship', color: '#3B82F6' },
    { icon: '📚', name: 'Education & Future of Work', color: '#8B5CF6' },
    { icon: '🌍', name: 'Environment & Sustainability', color: '#10B981' },
    { icon: '🤝', name: 'Underserved Communities', color: 'var(--teal)' },
  ]

  return (
    <section id="about" ref={ref} style={{
      background: 'var(--off-white)',
      color: 'var(--black)',
      padding: 'clamp(4rem, 8vw, 8rem) 2rem',
    }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '5rem',
          alignItems: 'start',
        }} className="about-grid">

          {/* Left — text */}
          <motion.div variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"}>
            <div style={{
              fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em',
              textTransform: 'uppercase', color: 'var(--blue)',
              marginBottom: '1.5rem',
            }}>Who We Are</div>

            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '2rem',
              color: 'var(--black)',
            }}>
              Young leaders.<br/>
              <span style={{ fontStyle: 'italic' }}>Real impact.</span><br/>
              Right now.
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                'Global Shapers Nairobi is a hub of professionals, entrepreneurs, and community builders aged 18–30, part of the Global Shapers Community — a World Economic Forum initiative spanning 900+ hubs across 150+ countries.',
                'Since 2021, we\'ve delivered community-led projects creating real, measurable impact in Nairobi — from empowering girls with tech skills to advocating for underserved communities and driving innovation at the intersection of tech and social impact.',
                'We believe the young people of today are not the leaders of tomorrow. We are shaping things right now.',
              ].map((t, i) => (
                <p key={i} style={{
                  color: i === 2 ? 'var(--blue)' : '#444',
                  fontSize: '1rem', lineHeight: 1.8,
                  fontWeight: i === 2 ? 600 : 400,
                }}>{t}</p>
              ))}
            </div>
          </motion.div>

          {/* Right — pillars + badge */}
          <motion.div
            variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"}
            transition={{ delay: 0.15 }}>

            {/* Large quote */}
            <div style={{
              background: 'var(--black)',
              borderRadius: 16,
              padding: '2.5rem',
              marginBottom: '1.5rem',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: '-30%', right: '-15%',
                width: '60%', aspectRatio: 1,
                background: 'radial-gradient(circle, rgba(20,0,204,0.3) 0%, transparent 70%)',
                borderRadius: '50%', pointerEvents: 'none',
              }}/>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '4.5rem', fontWeight: 300,
                color: 'rgba(255,255,255,0.08)',
                lineHeight: 1, position: 'absolute', top: '1rem', left: '2rem',
              }}>"</div>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.2rem', fontWeight: 300, fontStyle: 'italic',
                color: 'rgba(255,255,255,0.85)', lineHeight: 1.7,
                position: 'relative', zIndex: 1, paddingTop: '1rem',
              }}>
                We don't wait for change — we build it, together, one project at a time.
              </p>
              <div style={{
                marginTop: '1.5rem', fontSize: '0.78rem', fontWeight: 600,
                color: 'var(--teal)', letterSpacing: '0.08em',
                position: 'relative', zIndex: 1,
              }}>GLOBAL SHAPERS NAIROBI · EST. 2021</div>
            </div>

            {/* Pillars grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              {pillars.map((p, i) => (
                <div key={i} style={{
                  padding: '1rem 1.25rem',
                  borderRadius: 12,
                  background: 'var(--white)',
                  border: '1px solid rgba(0,0,0,0.06)',
                  display: 'flex', alignItems: 'center', gap: '0.65rem',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <span style={{ fontSize: '1.2rem' }}>{p.icon}</span>
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#333', lineHeight: 1.3 }}>{p.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  )
}
