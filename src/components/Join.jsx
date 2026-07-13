import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Join() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    setTimeout(() => { setSending(false); setSent(true); }, 1200)
  }

  const input = {
    width: '100%', padding: '0.85rem 1rem',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: 10, color: 'var(--white)',
    fontFamily: 'var(--font-body)', fontSize: '0.92rem',
    outline: 'none', transition: 'border-color 0.2s',
  }

  return (
    <section id="join" ref={ref} style={{
      background: '#060612',
      padding: 'clamp(4rem, 8vw, 8rem) 2rem',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Glow */}
      <div style={{
        position: 'absolute', bottom: '-20%', left: '30%',
        width: '60vw', height: '60vw',
        background: 'radial-gradient(circle, rgba(20,0,204,0.2) 0%, transparent 70%)',
        pointerEvents: 'none', borderRadius: '50%',
      }}/>

      <div style={{ maxWidth: 1160, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }} className="join-grid">

          {/* Left */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
            <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: '1rem' }}>Join the Hub</div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              fontWeight: 300, lineHeight: 1.05,
              letterSpacing: '-0.02em', marginBottom: '1.5rem',
            }}>
              Ready to shape<br/><span style={{ fontStyle: 'italic' }}>Nairobi's future?</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              We're recruiting new members for 2027. We want young professionals, entrepreneurs, and community builders who are genuinely committed to making a difference — not just adding a line to their CV.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2.5rem' }}>
              {[
                'Aged 18–30',
                'Based in or connected to Nairobi',
                'Demonstrated impact in your field or community',
                'Able to commit meaningfully to hub activities',
                'Aligned with Global Shapers Community values',
              ].map((c, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>
                  <span style={{ color: 'var(--teal)', fontWeight: 700, marginTop: '0.1rem', flexShrink: 0 }}>✓</span>
                  {c}
                </li>
              ))}
            </ul>
            <p style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.6 }}>
              Applications open September 2026. Submit your expression of interest below to be notified first.
            </p>
          </motion.div>

          {/* Right — form */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.15 }}>
            <div style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 20, padding: '2.5rem',
            }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.4rem' }}>Express Your Interest</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.88rem', marginBottom: '2rem' }}>We'll reach out when applications open in September 2026.</p>

              {sent ? (
                <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎉</div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>You're on the list!</h4>
                  <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>We'll be in touch before applications open in September.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                  {[
                    { label: 'Full Name', id: 'name', type: 'text', placeholder: 'Your full name' },
                    { label: 'Email Address', id: 'email', type: 'email', placeholder: 'your@email.com' },
                    { label: 'Current Occupation', id: 'job', type: 'text', placeholder: 'What do you do?' },
                  ].map(f => (
                    <div key={f.id}>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: '0.45rem' }}>{f.label}</label>
                      <input
                        type={f.type} id={f.id} placeholder={f.placeholder} required
                        style={input}
                        onFocus={e => e.target.style.borderColor = 'var(--teal)'}
                        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                      />
                    </div>
                  ))}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: '0.45rem' }}>Which pillar excites you most?</label>
                    <select required style={{ ...input, appearance: 'none' }}
                      onFocus={e => e.target.style.borderColor = 'var(--teal)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                    >
                      <option value="">Select a pillar</option>
                      <option>Innovation & Entrepreneurship</option>
                      <option>Education & Future of Work</option>
                      <option>Environment & Sustainability</option>
                      <option>Underserved Communities</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: '0.45rem' }}>Why do you want to join? (2–3 sentences)</label>
                    <textarea required placeholder="Tell us what brings you here..."
                      style={{ ...input, resize: 'vertical', minHeight: 90 }}
                      onFocus={e => e.target.style.borderColor = 'var(--teal)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                    />
                  </div>
                  <button type="submit" disabled={sending} style={{
                    width: '100%', padding: '1rem',
                    background: sending ? 'rgba(0,212,255,0.5)' : 'var(--teal)',
                    color: '#0A0080', fontWeight: 700, fontSize: '1rem',
                    borderRadius: 100, cursor: sending ? 'not-allowed' : 'pointer',
                    transition: 'opacity 0.2s, transform 0.2s',
                    fontFamily: 'var(--font-body)',
                  }}
                  onMouseEnter={e => !sending && (e.target.style.opacity = '0.88')}
                  onMouseLeave={e => (e.target.style.opacity = '1')}
                  >{sending ? 'Sending...' : 'Submit Expression of Interest'}</button>
                  <p style={{ fontSize: '0.75rem', color: 'var(--muted)', textAlign: 'center' }}>Applications open September 2026. We'll be in touch before then.</p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .join-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } }
        select option { background: #111; color: #fff; }
      `}</style>
    </section>
  )
}
