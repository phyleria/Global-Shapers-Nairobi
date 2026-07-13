import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WORDS = ['Build.', 'Connect.', 'Lead.', 'Shape.']

export default function Hero() {
  const [wi, setWi] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setWi(p => (p + 1) % WORDS.length), 2800)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      background: 'var(--black)',
      display: 'flex', flexDirection: 'column',
      justifyContent: 'center',
      padding: '8rem 2rem 4rem',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Subtle grid background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        pointerEvents: 'none',
      }}/>

      {/* Blue glow */}
      <div style={{
        position: 'absolute', top: '-20%', left: '-10%',
        width: '60vw', height: '60vw',
        background: 'radial-gradient(circle, rgba(20,0,204,0.25) 0%, transparent 70%)',
        pointerEvents: 'none',
        borderRadius: '50%',
      }}/>
      <div style={{
        position: 'absolute', bottom: '-20%', right: '-10%',
        width: '50vw', height: '50vw',
        background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
        borderRadius: '50%',
      }}/>

      <div style={{ maxWidth: 1160, margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
            fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.2em',
            textTransform: 'uppercase', color: 'var(--teal)',
            border: '1px solid rgba(0,212,255,0.25)', borderRadius: '100px',
            padding: '0.4rem 1rem', marginBottom: '2.5rem',
          }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--teal)', display: 'block' }}/>
          Global Shapers Community · Nairobi Hub · WEF
        </motion.div>

        {/* Main headline */}
        <div style={{ overflow: 'hidden' }}>
          <motion.h1
            initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.16,1,0.3,1] }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3.5rem, 9vw, 8rem)',
              fontWeight: 300,
              lineHeight: 1.0,
              letterSpacing: '-0.03em',
              marginBottom: '0.2rem',
              color: 'var(--white)',
            }}>
            We Are<br/>
            <span style={{ fontStyle: 'italic', fontWeight: 300 }}>Nairobi's</span>
          </motion.h1>
        </div>

        {/* Kinetic word */}
        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(3.5rem, 9vw, 8rem)',
          fontWeight: 700,
          lineHeight: 1.0,
          letterSpacing: '-0.03em',
          marginBottom: '2.5rem',
          height: 'clamp(3.5rem, 9vw, 8rem)',
          display: 'flex', alignItems: 'center',
          overflow: 'hidden',
        }}>
          <AnimatePresence mode="wait">
            <motion.span
              key={wi}
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -60, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16,1,0.3,1] }}
              style={{
                display: 'block',
                background: 'linear-gradient(135deg, var(--teal) 0%, var(--vivid) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
              {WORDS[wi]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Sub + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          style={{ display: 'flex', alignItems: 'flex-end', gap: '3rem', flexWrap: 'wrap' }}>
          <p style={{
            color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', lineHeight: 1.8,
            maxWidth: 460, flex: '1 1 300px',
          }}>
            A community of young leaders aged 18–30 driving meaningful change across Nairobi — part of the World Economic Forum's Global Shapers Community.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', flex: '0 0 auto' }}>
            <a href="#join" style={{
              background: 'var(--white)', color: 'var(--black)',
              fontWeight: 700, fontSize: '0.9rem',
              padding: '0.9rem 2rem', borderRadius: '100px',
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              transition: 'background 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--teal)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--white)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >Join the Hub →</a>
            <a href="#about" style={{
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'var(--white)',
              fontWeight: 500, fontSize: '0.9rem',
              padding: '0.9rem 2rem', borderRadius: '100px',
              display: 'inline-block',
              transition: 'border-color 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >Our Story</a>
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}
          style={{
            marginTop: '5rem',
            paddingTop: '2.5rem',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem',
          }}>
          {[
            { n: '300+', l: 'Girls empowered through Technovation' },
            { n: 'Since 2021', l: 'Active in Nairobi' },
            { n: '4', l: 'Community pillars' },
            { n: 'WEF', l: 'Official initiative' },
          ].map((s, i) => (
            <div key={i}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                fontWeight: 400,
                color: 'var(--white)',
                lineHeight: 1,
                marginBottom: '0.5rem',
              }}>{s.n}</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.5 }}>{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #hero { padding: 7rem 1.25rem 3rem; }
          div[style*="gridTemplateColumns: repeat(4"] { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
