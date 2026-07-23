import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const ArrowRight = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

// No "Connect" in the words
const WORDS = ['Shape.', 'Build.', 'Create.']

function Hero() {
  const [wi, setWi] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setWi(p => (p + 1) % WORDS.length), 2600)
    return () => clearInterval(t)
  }, [])

  return (
    <section style={{
      minHeight: '100vh',
      background: `linear-gradient(150deg, var(--blue-dark) 0%, var(--blue) 60%, var(--blue-mid) 100%)`,
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: '8rem 2rem 5rem', position: 'relative', overflow: 'hidden',
    }}>
      {/* Subtle dot pattern */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)`,
        backgroundSize: '40px 40px', pointerEvents: 'none',
      }}/>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `radial-gradient(circle at 75% 25%, rgba(255,255,255,0.05) 0%, transparent 55%), radial-gradient(circle at 15% 75%, rgba(0,172,193,0.12) 0%, transparent 50%)`,
        pointerEvents: 'none',
      }}/>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 6.5rem)',
            fontWeight: 800, lineHeight: 1.05,
            letterSpacing: '-0.03em', color: 'var(--white)',
            marginBottom: '0.5rem',
          }}>
            Nairobi's Young<br/>
            Leaders Who{' '}
            <span style={{ display: 'inline-block', minWidth: '4ch' }}>
<AnimatePresence mode="wait" initial={false}>
                <motion.span key={wi}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.95, ease: [0.16,1,0.3,1] }}
                  style={{ display: 'inline-block', color: 'rgba(255,255,255,0.85)', fontStyle: 'italic', fontWeight: 300 }}
                >{WORDS[wi]}</motion.span>
              </AnimatePresence>
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
          style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: 520, marginBottom: '2.5rem' }}>
          A community of young professionals aged 18 to 30 driving meaningful change across Nairobi, part of the World Economic Forum's Global Shapers Community.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#join" className="btn btn-white">Join the Hub <ArrowRight /></a>
          <a href="#about" className="btn btn-outline" style={{ color: 'var(--white)', borderColor: 'rgba(255,255,255,0.4)' }}
            onMouseEnter={e => e.currentTarget.style.background='rgba(255,255,255,0.1)'}
            onMouseLeave={e => e.currentTarget.style.background='transparent'}
          >About Us</a>
        </motion.div>

        {/* Stats - no boxed background */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
          style={{
            marginTop: '5rem', paddingTop: '2.5rem',
            borderTop: '1px solid rgba(255,255,255,0.15)',
            display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '2rem',
          }} className="hero-stats">
          {[
            { n: '2012', l: 'Established in Nairobi' },
            { n: '20+', l: 'Active hub members' },
            { n: '10+', l: 'Projects delivered' },
            { n: '15+', l: 'Partners' },
          ].map((s, i) => (
            <div key={i}>
              <div style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: 'var(--white)', lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.4rem', lineHeight: 1.5 }}>{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* <div style={{
        position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
        color: 'rgba(255,255,255,0.4)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase',
        animation: 'bounce 2s ease-in-out infinite',
      }}>
        <span>Scroll</span>
        <div style={{ width: 1, height: 32, background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)' }}/>
      </div>
      <style>{`
        @keyframes bounce { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(8px)} }
        @media(max-width:640px) { .hero-stats{grid-template-columns:1fr 1fr !important} }
      `}</style> */}
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section" style={{ background: 'var(--white)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="about-grid">
          
          {/* Four image grid */}
          <div style={{ position: 'relative' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gridTemplateRows: '1fr 1fr',
              gap: '0.75rem',
              borderRadius: 20,
              overflow: 'hidden',
            }}>
              <img src="/gsn-team.jpeg" alt="Global Shapers Nairobi" style={{ width: '100%', aspectRatio: '1', objectFit: 'cover' }} />
              <img src="/About-2.jpg" alt="Global Shapers Nairobi" style={{ width: '100%', aspectRatio: '1', objectFit: 'cover' }} />
              <img src="/About-3.jpg" alt="Global Shapers Nairobi" style={{ width: '100%', aspectRatio: '1', objectFit: 'cover' }} />
              <img src="/About-4.jpg" alt="Global Shapers Nairobi" style={{ width: '100%', aspectRatio: '1', objectFit: 'cover' }} />
            </div>
            {/* Floating badge */}
            <div style={{
              position: 'absolute', bottom: -20, right: -20,
              background: 'var(--blue)', color: 'var(--white)',
              borderRadius: 16, padding: '1.25rem 1.5rem', boxShadow: 'var(--shadow-lg)',
            }}>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, lineHeight: 1 }}>Est.</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, lineHeight: 1 }}>2012</div>
              <div style={{ fontSize: '0.7rem', opacity: 0.8, marginTop: '0.25rem' }}>Nairobi Hub</div>
            </div>
          </div>

          {/* Text */}
          <div>
            <h2 className="section-heading" style={{ marginBottom: '1.5rem', maxWidth: '380px', color: 'var(--blue)' }}>
              Leaders building Nairobi's future.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {[
                'Global Shapers Nairobi is a hub of professionals, entrepreneurs, and community builders aged 18 to 30, part of the Global Shapers Community, a World Economic Forum initiative spanning 900+ hubs across 150+ countries.',
                'Established in 2012, we have delivered community-led projects creating measurable impact in Nairobi, from empowering girls with technology skills to advocating for underserved communities.',
                'In 2024, we received the Innovation Prize from the Global Shapers Community and Accenture, recognising our Technovation work with over 300 girls across Kenya.',
              ].map((t, i) => (
                <p key={i} style={{ color: 'var(--text-mid)', fontSize: '0.975rem', lineHeight: 1.8 }}>{t}</p>
              ))}
            </div>
            <Link to="/team" className="arrow-link">Meet our team <ArrowRight /></Link>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr !important;gap:3rem !important}}`}</style>
    </section>
  )
}

function Pillars() {
  const pillars = [
    { name: 'Innovation and Entrepreneurship', desc: 'Building tech solutions, fostering startup thinking, and supporting young entrepreneurs across Nairobi.', color: 'var(--blue)' },
    { name: 'Education & Future of Work', desc: 'Equipping young people with skills to thrive, from coding through Technovation to financial literacy.', color: 'var(--blue-dark)' },
    { name: 'Environment and Sustainability', desc: 'Driving climate action, building food wastage solutions, and advocating for a greener Nairobi.', color: 'var(--teal)' },
    { name: 'Underserved Communities', desc: 'Creating inclusive opportunities for marginalised groups through Dining in the Dark and civic engagement.', color: 'var(--blue-mid)' },
  ]
  return (
    <section id="pillars" className="section" style={{ background: 'var(--off-white)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div><h2 className="section-heading"style={{ color: 'var(--text-dark)' }}>Our four pillars</h2></div>
          <Link to="/pillars" className="arrow-link">Learn more <ArrowRight /></Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.25rem' }} className="pillars-grid">
          {pillars.map((p, i) => (
            <Link to="/pillars" key={i} style={{
              padding: '2rem 1.5rem', borderRadius: 'var(--radius)', background: 'var(--white)',
              border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)',
              display: 'flex', flexDirection: 'column', transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow='var(--shadow-md)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='var(--shadow-sm)'; }}
            >
              <h3 style={{ fontSize: '0.975rem', fontWeight: 700, color: 'var(--blue-dark)', marginBottom: '0.75rem', lineHeight: 1.4 }}>{p.name}</h3>
              <div
  style={{
    width: '70%',
    height: '3px',
    background: 'var(--blue)',
    marginBottom: '1rem',
  }}
/>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.7, flex: 1 }}>{p.desc}</p>
            </Link>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){.pillars-grid{grid-template-columns:1fr 1fr !important}}@media(max-width:480px){.pillars-grid{grid-template-columns:1fr !important}}`}</style>
    </section>
  )
}

function FeaturedProjects() {
  const projects = [
    { id: 'technovation', title: 'Technovation', desc: 'The world\'s largest tech entrepreneurship programme for girls. Over 300 girls have learned to code and build mobile apps addressing real community challenges.', img: '/project-technovation.JPG', accent: 'var(--blue)' },
    { id: 'dining', title: 'Dining in the Dark', desc: 'An immersive dining experience in complete darkness, guided by visually impaired hosts, building empathy and advocacy for the visually impaired community in Nairobi.', img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80', accent: 'var(--blue-dark)' },
    { id: 'food', title: 'Food Wastage Solution', isNew: true, desc: 'A new platform to track, reduce, and redistribute surplus food from Nairobi hotels to communities in need, in collaboration with PadMad and Woodland Star International.', img: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=900&q=80', accent: 'var(--teal)' },
    { id: 'finlit', title: 'Financial Literacy Series', desc: 'Equipping young people across Nairobi with practical financial knowledge, from budgeting and saving to navigating Kenya\'s financial ecosystem.', img: '/project-literacy.jpg', accent: 'var(--blue-mid)' },
  ]
  return (
    <section className="section" style={{ background: 'var(--white)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div><h2 className="section-heading" style={{ color: 'var(--blue)' }}>Projects we've worked on</h2></div>
          <Link to="/projects" className="arrow-link">View all projects <ArrowRight /></Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.5rem' }} className="proj-grid">
          {projects.map((p, i) => (
            <Link to={`/projects#${p.id}`} key={i} style={{
              borderRadius: 'var(--radius)', overflow: 'hidden',
              border: `1px solid ${p.isNew ? 'var(--teal)' : 'var(--border)'}`,
              boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column',
              background: 'var(--white)', transition: 'transform 0.25s, box-shadow 0.25s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform='translateY(-5px)'; e.currentTarget.style.boxShadow='var(--shadow-lg)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='var(--shadow-sm)'; }}
            >
              <div style={{ height: 200, overflow: 'hidden', position: 'relative' }}>
                <img src={p.img} alt={p.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.35) 100%)' }}/>
                <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: p.isNew ? 'var(--teal)' : 'rgba(255,255,255,0.92)', color: p.isNew ? '#fff' : p.accent, fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.28rem 0.75rem', borderRadius: '100px' }}>{p.isNew ? 'New' : p.tag}</div>
              </div>
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--blue)', marginBottom: '0.6rem' }}>{p.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.75, marginBottom: '1.25rem', flex: 1 }}>{p.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{p.meta}</span>
                  <span className="arrow-link" style={{ fontSize: '0.82rem' }}>Learn more <ArrowRight size={13} /></span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:640px){.proj-grid{grid-template-columns:1fr !important}}`}</style>
    </section>
  )
}

function FeaturedEvents() {
  const events = [
    { title: 'All Hands Meeting', date: 'July 11, 2026', time: '10:00 AM', location: 'Virtual', type: 'Hub Meeting', upcoming: true },
    { title: 'Meet the Leader Session', date: 'August 11, 2026', time: '7:00 PM', location: 'Virtual', type: 'Community Event', upcoming: true },
    { title: 'Yoga Meetup', date: 'August 8, 2026', time: '7:00 AM', location: 'Nairobi', type: 'Community Event', upcoming: true },
  ]
  return (
    <section className="section" style={{ background: 'var(--blue-light)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div><span className="eyebrow"></span><h2 className="section-heading">Upcoming events</h2></div>
          <Link to="/events" className="arrow-link">View all events <ArrowRight /></Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.25rem' }} className="events-grid">
          {events.map((e, i) => (
            <Link to="/events" key={i} style={{ background: 'var(--white)', borderRadius: 'var(--radius)', border: '1px solid var(--border)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)', display: 'block', transition: 'transform 0.2s, box-shadow 0.2s' }}
              onMouseEnter={el => { el.currentTarget.style.transform='translateY(-4px)'; el.currentTarget.style.boxShadow='var(--shadow-md)'; }}
              onMouseLeave={el => { el.currentTarget.style.transform='translateY(0)'; el.currentTarget.style.boxShadow='var(--shadow-sm)'; }}
            >
              <div style={{ height: 90, background: `linear-gradient(135deg, var(--blue) 0%, var(--blue-mid) 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)', border: '1px solid rgba(255,255,255,0.3)', padding: '0.3rem 0.8rem', borderRadius: '100px' }}>{e.type}</span>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '0.75rem', lineHeight: 1.4 }}>{e.title}</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <span style={{ fontSize: '0.82rem', color: 'var(--blue)', fontWeight: 600 }}>{e.date}{e.time && e.time !== 'TBC' && ' · ' + e.time}</span>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{e.location}</span>
                </div>
                <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                  <span className="arrow-link" style={{ fontSize: '0.82rem' }}>View details <ArrowRight size={13} /></span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){.events-grid{grid-template-columns:1fr !important}}`}</style>
    </section>
  )
}

function LeadershipPreview() {
  const team = [
    { name: 'Phylis Atieno', role: 'Curator', color: 'var(--blue-dark)', img: '/phylis.png' },
    { name: 'Stella Cherotich', role: 'Vice-Curator', color: 'var(--blue-dark)', img: '/stella.jpg' },
    { name: 'Alvin Nyaga', role: 'Impact Officer', color: 'var(--blue-dark)', img: '/alvin.jpg' },
  ]
  return (
    <section id="team" className="section" style={{ background: 'var(--white)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div><span className="eyebrow"></span><h2 className="section-heading" style={{ color: 'var(--blue)' }}>The Curatorship</h2></div>
          <Link to="/team" className="arrow-link">View all members <ArrowRight /></Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }} className="team-preview-grid">
          {team.map((t, i) => (
            <div key={i} style={{ background: 'var(--white)', borderRadius: 'var(--radius)', border: '1px solid var(--border)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)', transition: 'transform 0.2s, box-shadow 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow='var(--shadow-md)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='var(--shadow-sm)'; }}
            >
              <div style={{ height: 320, overflow: 'hidden', background: t.color, position: 'relative' }}>
                <img src={t.img} alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                  onError={e => { e.target.style.display='none' }}
                />
              </div>
              <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '0.25rem' }}>{t.name}</h3>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: t.color, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{t.role}</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <Link to="/team" className="btn btn-outline">View all hub members <ArrowRight size={15} /></Link>
        </div>
      </div>
      <style>{`@media(max-width:640px){.team-preview-grid{grid-template-columns:1fr !important}}`}</style>
    </section>
  )
}

function JoinSection() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const onSubmit = e => { e.preventDefault(); setLoading(true); setTimeout(() => { setLoading(false); setSent(true); }, 1200); }
  const inputStyle = { width: '100%', padding: '0.8rem 1rem', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 10, color: '#fff', fontFamily: 'var(--font)', fontSize: '0.9rem', outline: 'none', transition: 'border-color 0.2s' }

  return (
    <section id="join" className="section" style={{ background: `linear-gradient(150deg, var(--blue-dark) 0%, var(--blue) 100%)`, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(circle at 80% 50%, rgba(0,172,193,0.15) 0%, transparent 60%)`, pointerEvents: 'none' }}/>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }} className="join-grid">
          <div>
            <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}></span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
              Ready to shape<br/>Nairobi's future?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              We are recruiting new members for 2027. We want young professionals, entrepreneurs, and community builders genuinely committed to making a difference.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Aged 18 to 27','Based in Nairobi','Demonstrated impact in your field','Able to commit to hub activities','Aligned with Global Shapers values'].map((c,i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem' }}>
                  <span style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(255, 255, 255, 0.92)', border: '1.5px solid rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="10" height="10" viewBox="0 0 12 10" fill="none" stroke="#2e0baeff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 5l3 3 7-7"/></svg>
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 20, padding: '2.5rem' }}>
            <h3 style={{ color: '#fff', fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.4rem' }}>Express Your Interest</h3>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', marginBottom: '2rem' }}>We will reach out when applications open in September 2026.</p>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '2.5rem 0' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: '#fff' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>You are on the list!</h4>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem' }}>We will be in touch before September.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[['Full Name','Your full name'],['Email'],['Occupation','What do you do?']].map(([label,type,ph]) => (
                  <div key={label}>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: '0.4rem' }}>{label}</label>
                    <input type={type} placeholder={ph} required style={inputStyle}
                      onFocus={e => e.target.style.borderColor='rgba(255,255,255,0.5)'}
                      onBlur={e => e.target.style.borderColor='rgba(255,255,255,0.18)'}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: '0.4rem' }}>Which pillar excites you most?</label>
                  <select required style={{ ...inputStyle, appearance: 'none' }}>
                    <option value="">Select a pillar</option>
                    <option>Innovation and Entrepreneurship</option>
                    <option>Education and Future of Work</option>
                    <option>Environment and Sustainability</option>
                    <option>Underserved Communities</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: '0.4rem' }}>Why do you want to join?</label>
                  <textarea style={{ ...inputStyle, resize: 'vertical', minHeight: 85 }}
                    onFocus={e => e.target.style.borderColor='rgba(255,255,255,0.5)'}
                    onBlur={e => e.target.style.borderColor='rgba(255,255,255,0.18)'}
                  />
                </div>
                <button type="submit" className="btn btn-white" style={{ width: '100%', justifyContent: 'center', padding: '0.9rem', fontSize: '0.95rem' }} disabled={loading}>
                  {loading ? 'Sending...' : 'Submit Expression of Interest'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.join-grid{grid-template-columns:1fr !important;gap:3rem !important}} select option{background:var(--blue-dark);color:#fff}`}</style>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Pillars />
      <FeaturedProjects />
      <FeaturedEvents />
      <LeadershipPreview />
      <JoinSection />
    </>
  )
}
