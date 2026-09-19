import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { sendForm, FORM_EMAIL } from '../lib/sendForm'

const ArrowRight = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

// No "Connect" in the words
const WORDS = ['Lead.', 'Build.', 'Solve.']

function Hero() {
  const [wi, setWi] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setWi(p => (p + 1) % WORDS.length), 2600)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="hero-section" style={{
      minHeight: '100vh',
      background: `linear-gradient(150deg, var(--blue-dark) 0%, var(--blue) 60%, var(--blue-mid) 100%)`,
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: '8rem 0 5rem', position: 'relative', overflow: 'hidden',
    }}>
      {/* Subtle dot pattern */}
     
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `radial-gradient(circle at 75% 25%, rgba(255,255,255,0.05) 0%, transparent 55%), radial-gradient(circle at 15% 75%, rgba(0,172,193,0.12) 0%, transparent 50%)`,
        pointerEvents: 'none',
      }}/>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 8vw, 6.5rem)',
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
      <style>{`
        @media (max-width: 640px) {
          .hero-section { padding: 7rem 0 3.5rem !important; }
          .hero-section h1 { margin-bottom: 1.25rem !important; }
          .hero-stats { grid-template-columns: 1fr 1fr !important; gap: 1.75rem 1.5rem !important; margin-top: 3rem !important; }
        }
      `}</style>
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
            <div className="about-badge" style={{
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
                'Global Shapers Nairobi is a diverse community of professionals, entrepreneurs, and community builders aged 18 to 30, bringing together leaders from fields including business, investment, law, finance, advocacy, STEM, social enterprise, and entrepreneurship.',
                'Established in January 2012 as part of the Global Shapers Community, a World Economic Forum initiative spanning 900+ hubs across 150+ countries, the Nairobi Hub brings people together around a shared commitment to creating meaningful impact in society.',
                'We channel our work through four pillars: Innovation & Entrepreneurship, Education & Future of Work, Environment & Sustainable Cities, and Underserved Communities. Through community-led projects, we have worked on issues ranging from technology education for girls to financial literacy, food waste, and inclusion.',
              ].map((t, i) => (
                <p key={i} style={{ color: 'var(--text-mid)', fontSize: '0.975rem', lineHeight: 1.8 }}>{t}</p>
              ))}
            </div>
            <Link to="/team" className="arrow-link">Meet our team <ArrowRight /></Link>
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:768px){
          .about-grid{grid-template-columns:1fr !important;gap:3.5rem !important}
          .about-badge{right:12px !important;bottom:-24px !important;padding:1rem 1.25rem !important}
          .about-badge div:not(:last-child){font-size:1.5rem !important}
        }
      `}</style>
    </section>
  )
}

function SectionDivider() {
  return (
    <hr style={{ border: 'none', height: 1, background: 'var(--border)', width: '100%' }} />
  )
}

function Pillars() {
  const pillars = [
    { name: 'Innovation & Entrepreneurship', desc: 'Fostering startup thinking and supporting young entrepreneurs across Nairobi.', img: '/About-3.jpg' },
    { name: 'Education & Future of Work', desc: 'Equipping young people with skills to thrive, from coding through Technovation to financial literacy.', img: '/project-technovation.JPG' },
    { name: 'Environment & Sustainability', desc: 'Driving climate action and advocating for a greener Nairobi.', img: '/environment.webp' },
    { name: 'Underserved Communities', desc: 'Creating inclusive opportunities for marginalised groups.', img: '/dining.webp' },
  ]

  const trackRef = useRef(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const updateEdges = () => {
    const el = trackRef.current
    if (!el) return
    setAtStart(el.scrollLeft <= 4)
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4)
  }

  useEffect(() => {
    updateEdges()
    window.addEventListener('resize', updateEdges)
    return () => window.removeEventListener('resize', updateEdges)
  }, [])

  const scroll = dir => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('.pillar-card')
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollBy({ left: dir * step, behavior: reduce ? 'auto' : 'smooth' })
  }

  const DiagArrow = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17L17 7M8 7h9v9"/>
    </svg>
  )

  return (
    <section id="pillars" className="section" style={{ background: 'var(--white)', overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: 1320 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '3rem', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <h2 className="section-heading" style={{ color: 'var(--blue)', marginBottom: '0.75rem' }}>Our four pillars</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: 440 }}>
              The four areas that shape every project our hub takes on.
            </p>
          </div>
          <Link to="/projects" className="btn pillars-cta">
            See our projects <DiagArrow size={16} />
          </Link>
        </div>

      <div ref={trackRef} onScroll={updateEdges} className="pillars-track">
        {pillars.map((p, i) => (
          <div key={i} className="pillar-card">
            <img src={p.img} alt="" loading="lazy" />
            <div className="pillar-overlay" />
            <div className="pillar-body">
              <div className="pillar-rule" />
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2.5rem' }}>
        <button className="pillar-nav" onClick={() => scroll(-1)} disabled={atStart} aria-label="Previous pillar">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        </button>
        <button className="pillar-nav" onClick={() => scroll(1)} disabled={atEnd} aria-label="Next pillar">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>

      <style>{`
        .pillars-cta { background: var(--blue-dark); color: var(--white); }
        .pillars-cta:hover { background: var(--blue); box-shadow: var(--shadow-md); }

        .pillars-track {
          display: flex; gap: 1.5rem;
          overflow-x: auto; scroll-snap-type: x mandatory;
          scrollbar-width: none;
        }
        .pillars-track::-webkit-scrollbar { display: none; }

        .pillar-card {
          position: relative; flex: 0 0 calc((100% - 3rem) / 3);
          height: 440px; overflow: hidden; scroll-snap-align: start;
          color: var(--white); background: var(--blue-dark);
          container-type: inline-size;
        }
        .pillar-card img {
          position: absolute; inset: 0; width: 100%; height: 100%;
          object-fit: cover;
        }
        .pillar-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, rgba(6,50,133,0.15) 0%, rgba(6,50,133,0.25) 40%, rgba(4,26,70,0.88) 100%);
        }
        .pillar-body { position: absolute; left: 1.5rem; right: 1.5rem; bottom: 1.5rem; }
        .pillar-rule { height: 1px; background: rgba(255,255,255,0.55); margin-bottom: 1.25rem; }
        .pillar-body h3 { font-size: min(1.25rem, calc((100cqi - 3rem) / 16.6)); white-space: nowrap; font-weight: 400; line-height: 1.35; margin-bottom: 0.6rem; }
        .pillar-body p { font-size: 0.85rem; line-height: 1.65; color: rgba(255,255,255,0.78); }

        .pillar-nav {
          width: 64px; height: 36px; border-radius: 100px;
          border: 1px solid var(--border); background: var(--white); color: var(--text-dark);
          display: inline-flex; align-items: center; justify-content: center;
          transition: background 0.2s, opacity 0.2s;
        }
        .pillar-nav:hover:not(:disabled) { background: var(--blue-light); }
        .pillar-nav:disabled { opacity: 0.35; cursor: default; }
        .pillar-nav:focus-visible { outline: 2px solid var(--blue); outline-offset: 2px; }

        @media (max-width: 900px) {
          .pillar-card { flex-basis: calc((100% - 1.5rem) / 2); }
        }
        @media (max-width: 600px) {
          .pillar-card { flex-basis: 100%; height: 400px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .pillar-card img { transition: none; }
        }
      `}</style>
    </section>
  )
}

function FeaturedProjects() {
  const projects = [
    { id: 'technovation', title: 'Technovation', pillar: 'Education & Future of Work', desc: 'A global tech education program that empowers girls to become innovators and problem-solvers. For over 4 years the Nairobi Hub has enrolled students from various schools across Kenya in the 12-week program where they identify community issues and develop mobile apps.', img: '/project-technovation.JPG' },
    { id: 'dining', title: 'Dining in the Dark', pillar: 'Underserved Communities', desc: 'An immersive dining experience in complete darkness, guided by visually impaired hosts, building empathy and advocacy for the visually impaired community in Nairobi.', img: '/dining.webp' },
    { id: 'food', title: 'Meet the Leader Series', pillar: 'Leadership & Empowerment', desc: 'Distinguished leaders from a range of industries and sectors share their leadership journeys and insights with young leaders in Nairobi. Encouraging open dialogue and direct mentorship opportunities.', img: '/MTL.webp' },
    { id: 'finlit', title: 'Financial Literacy Series', pillar: 'Education & Future of Work', desc: 'Equipping young people across Nairobi with practical financial knowledge, from budgeting and saving to navigating Kenya\'s financial ecosystem.', img: '/project-literacy.jpg' },
    { id: 'upscale', title: 'Upscale Artists Seminar', pillar: 'Innovation & Entrepreneurship', desc: 'A seminar tailored for established visual artists and designers, aimed at imparting essential knowledge and insights to enhance their business and creative practices.', img: '/upscale.webp' },

  ]

  const n = projects.length
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (paused || reduce) return
    const t = setInterval(() => {
      if (!document.hidden) setActive(a => (a + 1) % n)
    }, 5000)
    return () => clearInterval(t)
  }, [paused, n])

  // Where each card sits in the stack: 0 = front, 1 and 2 peek behind, 3 = hidden
  const pos = [
    { y: 0,   scale: 1,    opacity: 1, zIndex: 4 },
    { y: -34, scale: 0.95, opacity: 1, zIndex: 3 },
    { y: -66, scale: 0.9,  opacity: 1, zIndex: 2 },
    { y: -90, scale: 0.85, opacity: 0, zIndex: 1 },
  ]

  return (
    <section className="section" style={{ background: 'var(--blue)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '6rem', flexWrap: 'wrap', gap: '1.5rem' }}>
          <h2 className="section-heading" style={{ color: 'var(--white)' }}>Projects we've worked on</h2>
          <Link to="/projects" className="arrow-link" style={{ color: 'var(--white)' }}>View all projects <ArrowRight /></Link>
        </div>

        <div
          className="proj-stack"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {projects.map((p, i) => {
            const offset = (i - active + n) % n
            const s = pos[Math.min(offset, 3)]
            const isFront = offset === 0
            return (
              <motion.article
                key={p.id}
                className="proj-card"
                initial={false}
                animate={{ y: s.y, scale: s.scale, opacity: s.opacity }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                style={{ zIndex: s.zIndex, pointerEvents: isFront ? 'auto' : 'none' }}
                aria-hidden={!isFront}
                inert={!isFront}
              >
                <div className="proj-text">
                  <span className="proj-num">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <p className="proj-meta">{p.pillar}{p.isNew && <span className="proj-new">New</span>}</p>
                    <h3 className="proj-title">{p.title}</h3>
                    <p className="proj-desc">{p.desc}</p>
                  </div>
                  <Link to={`/projects#${p.id}`} className="proj-cta">View project <ArrowRight size={14} /></Link>
                </div>
                <div className="proj-img">
                  <img src={p.img} alt={p.title} loading="lazy" />
                </div>
              </motion.article>
            )
          })}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', marginTop: '2.5rem' }}>
          {projects.map((p, i) => (
            <button
              key={p.id}
              className={`proj-dot${i === active ? ' is-active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Show ${p.title}`}
              aria-current={i === active}
            />
          ))}
        </div>
      </div>

      <style>{`
        .proj-stack { position: relative; height: 440px; max-width: 1000px; margin: 0 auto; }
        .proj-card {
          position: absolute; inset: 0; transform-origin: top center;
          display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;
          background: var(--off-white); border-radius: 20px; padding: 1rem 1rem 1rem 2.75rem;
          box-shadow: 0 -6px 24px rgba(4,26,70,0.18);
        }
        .proj-text { display: flex; flex-direction: column; justify-content: space-between; padding: 1.75rem 0; }
        .proj-num {
          align-self: flex-start; font-size: 0.8rem; font-weight: 500; color: var(--blue);
          border: 1px solid var(--border); border-radius: 100px; padding: 0.4rem 0.9rem;
        }
        .proj-meta { font-size: 0.8rem; color: var(--blue); margin-bottom: 0.6rem; display: flex; align-items: center; gap: 0.6rem; }
        .proj-new { background: var(--teal); color: #fff; font-size: 0.7rem; font-weight: 600; padding: 0.15rem 0.6rem; border-radius: 100px; }
        .proj-title { font-size: clamp(1.6rem, 2.6vw, 2.1rem); font-weight: 600; color: var(--blue-dark); line-height: 1.2; margin-bottom: 0.75rem; letter-spacing: -0.01em; }
        .proj-desc { font-size: 0.9rem; line-height: 1.7; color: var(--text-mid); max-width: 380px; }
        .proj-cta {
          align-self: flex-start; display: inline-flex; align-items: center; gap: 0.5rem;
          font-size: 0.85rem; font-weight: 600; color: var(--blue);
          border: 1px solid var(--border); border-radius: 100px; padding: 0.65rem 1.25rem;
          transition: background 0.2s;
        }
        .proj-cta:hover { background: var(--blue-light); }
        .proj-cta:focus-visible { outline: 2px solid var(--blue); outline-offset: 2px; }
        .proj-img { border-radius: 14px; overflow: hidden; background: var(--blue-dark); }
        .proj-img img { width: 100%; height: 100%; object-fit: cover; }

        .proj-dot {
          width: 10px; height: 10px; border-radius: 100px; padding: 0;
          background: rgba(255,255,255,0.35); transition: width 0.3s, background 0.3s;
        }
        .proj-dot.is-active { width: 28px; background: var(--white); }
        .proj-dot:focus-visible { outline: 2px solid var(--white); outline-offset: 3px; }

        @media (max-width: 768px) {
          .proj-stack { height: 540px; }
          .proj-card { grid-template-columns: 1fr; grid-template-rows: 220px 1fr; padding: 0.75rem; gap: 0; }
          .proj-img { grid-row: 1; }
          .proj-text { grid-row: 2; padding: 1.25rem 0.75rem 0.75rem; gap: 1rem; }
          .proj-num { display: none; }
        }
      `}</style>
    </section>
  )
}

function FeaturedEvents() {
  // Add an image for each event: put the file in /public and use '/file-name.jpg'
  // link: where "Register now" goes (a registration form URL, or '/events')
  const events = [
    { title: 'How to Get Into a Top Masters Program', date: '2026-09-30', time: '7:00 PM', location: 'Virtual', img: '/gsn-team.jpeg', link: '/events' },
    { title: 'Open House Event', date: '2026-10-03', time: '7:00 PM', location: 'Nairobi', img: '/About-3.jpg', link: '/events' },
  ]

  const parts = iso => {
    const d = new Date(iso + 'T00:00:00')
    return {
      weekday: d.toLocaleDateString('en-GB', { weekday: 'short' }),
      day: d.getDate(),
      month: d.toLocaleDateString('en-GB', { month: 'short' }),
    }
  }

  return (
    <section className="section" style={{ background: 'var(--blue-light)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1.5rem' }}>
          <h2 className="section-heading" style={{ color: 'var(--blue)' }}>Upcoming events</h2>
          <Link to="/events" className="arrow-link">View all events <ArrowRight /></Link>
        </div>

        <div className="ev-grid">
          {events.map((e, i) => {
            const d = parts(e.date)
            const isExternal = e.link.startsWith('http')
            const RegisterTag = isExternal ? 'a' : Link
            const registerProps = isExternal ? { href: e.link, target: '_blank', rel: 'noreferrer' } : { to: e.link }
            return (
              <article key={i} className="ev-card">
                <img src={e.img} alt="" loading="lazy" />
                <div className="ev-overlay" />

                <div className="ev-date" aria-label={`${d.weekday} ${d.day} ${d.month}`}>
                  <span className="ev-weekday">{d.weekday}</span>
                  <span className="ev-daymonth"><strong>{d.day}</strong>{d.month}</span>
                </div>

                <Link to="/events" className="ev-info" aria-label={`Details for ${e.title}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
                </Link>

                <div className="ev-body">
                  <p className="ev-loc">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      {e.location === 'Virtual'
                        ? <><rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></>
                        : <><path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></>}
                    </svg>
                    {e.location}{e.time && ` · ${e.time}`}
                  </p>
                  <h3 className="ev-title">{e.title}</h3>
                  <RegisterTag {...registerProps} className="ev-btn">Register now</RegisterTag>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      <style>{`
        .ev-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .ev-card {
          position: relative; height: 440px; border-radius: 18px; overflow: hidden;
          background: var(--blue-dark); color: var(--white);
          box-shadow: var(--shadow-sm); transition: box-shadow 0.3s;
        }
        .ev-card:hover { box-shadow: var(--shadow-lg); }
        .ev-card > img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
        .ev-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, rgba(4,26,70,0.25) 0%, rgba(4,26,70,0.35) 45%, rgba(4,26,70,0.85) 100%);
        }

        .ev-date {
          position: absolute; top: 1rem; left: 1rem; width: 58px;
          border-radius: 8px; overflow: hidden; text-align: center;
          box-shadow: 0 4px 14px rgba(0,0,0,0.2);
        }
        .ev-weekday { display: block; background: var(--white); color: var(--text-dark); font-size: 0.75rem; font-weight: 500; padding: 0.3rem 0; }
        .ev-daymonth { display: block; background: var(--blue-dark); color: var(--white); font-size: 0.72rem; padding: 0.35rem 0 0.45rem; line-height: 1.2; }
        .ev-daymonth strong { display: block; font-size: 1.35rem; font-weight: 600; }

        .ev-info {
          position: absolute; top: 1rem; right: 1rem; width: 34px; height: 34px; border-radius: 8px;
          display: inline-flex; align-items: center; justify-content: center;
          background: rgba(255,255,255,0.18); color: var(--white); transition: background 0.2s;
        }
        .ev-info:hover { background: rgba(255,255,255,0.3); }

        .ev-body { position: absolute; left: 1.25rem; right: 1.25rem; bottom: 1.25rem; }
        .ev-loc { display: flex; align-items: center; gap: 0.45rem; font-size: 0.82rem; color: rgba(255,255,255,0.85); margin-bottom: 0.5rem; }
        .ev-title { font-size: 1.6rem; font-weight: 700; line-height: 1.2; margin-bottom: 1.5rem; letter-spacing: -0.01em; }
        .ev-btn {
          display: block; text-align: center; padding: 0.85rem; border-radius: 8px;
          background: var(--white); color: var(--blue-dark); font-size: 0.9rem; font-weight: 600;
          transition: background 0.25s, color 0.25s;
        }
        .ev-card:hover .ev-btn { background: rgba(6,50,133,0.85); color: var(--white); }
        .ev-btn:focus-visible, .ev-info:focus-visible { outline: 2px solid var(--white); outline-offset: 2px; }

        @media (max-width: 900px) { .ev-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 600px) { .ev-grid { grid-template-columns: 1fr; } .ev-card { height: 400px; } }
      `}</style>
    </section>
  )
}

function LeadershipPreview() {
  // linkedin: paste the full profile URL to show the "in" badge on the photo
  const team = [
    { name: 'Phylis Atieno', role: 'Curator', img: '/phylis.png', linkedin: '' },
    { name: 'Stella Cherotich', role: 'Vice-Curator', img: '/stella.jpg', linkedin: '' },
    { name: 'Alvin Nyaga', role: 'Impact Officer', img: '/alvin.jpg', linkedin: '' },
  ]
  return (
    <section id="team" className="section" style={{ background: 'var(--white)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1.5rem' }}>
          <h2 className="section-heading" style={{ color: 'var(--blue)' }}>The Curatorship</h2>
          <Link to="/team" className="arrow-link">View all members <ArrowRight /></Link>
        </div>

        <div className="lead-grid">
          {team.map((t, i) => (
            <div key={i} className="lead-card">
              <div className="lead-photo">
                <img src={t.img} alt={t.name} loading="lazy" onError={e => { e.target.style.display = 'none' }} />
                {t.linkedin && (
                  <a href={t.linkedin} target="_blank" rel="noreferrer" className="lead-in" aria-label={`${t.name} on LinkedIn`}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.1c0-1.22-.02-2.78-1.7-2.78-1.7 0-1.96 1.33-1.96 2.7V21h-4z"/>
                    </svg>
                  </a>
                )}
              </div>
              <h3 className="lead-name">{t.name}</h3>
              <p className="lead-role">{t.role}</p>
            </div>
          ))}
        </div>

       
      </div>

      <style>{`
        .lead-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.75rem; }
        .lead-photo { position: relative; aspect-ratio: 5 / 6; overflow: hidden; background: var(--light-gray); margin-bottom: 1.1rem; }
        .lead-photo img {
          width: 100%; height: 100%; object-fit: cover; object-position: center top;
          filter: grayscale(1) contrast(1.05); transition: filter 0.4s ease;
        }
        .lead-card:hover .lead-photo img { filter: grayscale(0); }
        .lead-in {
          position: absolute; right: 0.9rem; bottom: 0.9rem; width: 34px; height: 34px;
          display: inline-flex; align-items: center; justify-content: center;
          background: var(--white); color: var(--blue-dark); transition: background 0.2s, color 0.2s;
        }
        .lead-in:hover { background: var(--blue); color: var(--white); }
        .lead-in:focus-visible { outline: 2px solid var(--blue); outline-offset: 2px; }
        .lead-name { font-size: 1.3rem; font-weight: 500; color: var(--text-dark); letter-spacing: -0.01em; margin-bottom: 0.2rem; }
        .lead-role { font-size: 0.85rem; color: var(--text-muted); }

        @media (max-width: 768px) { .lead-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 480px) { .lead-grid { grid-template-columns: 1fr; } }
        @media (prefers-reduced-motion: reduce) { .lead-photo img { transition: none; } }
      `}</style>
    </section>
  )
}

function JoinSection() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const onSubmit = async e => {
    e.preventDefault()
    setLoading(true); setError(false)
    try {
      await sendForm('New expression of interest: Global Shapers Nairobi', e.target)
      setSent(true)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  const criteria = [
    { text: 'Aged 18 to 27', icon: <><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></> },
    { text: 'Based in Nairobi', icon: <><path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></> },
    { text: 'Demonstrated impact in your field', icon: <path d="M3 17l6-6 4 4 8-8M15 7h6v6"/> },
    { text: 'Able to commit to hub activities', icon: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></> },
    { text: 'Aligned with Global Shapers values', icon: <path d="M20 6L9 17l-5-5"/> },
  ]

  return (
    <section id="join" className="section" style={{ background: 'var(--off-white)' }}>
      <div className="container">
        <div className="join-panel">
          <img src="/logo-dark.svg" alt="" aria-hidden="true" className="join-mark" />

          <div className="join-info">
            <h2 className="join-title">Ready to shape Nairobi's future?</h2>
            <p className="join-intro">
              We want young professionals, entrepreneurs, and community builders genuinely committed to making a difference.
            </p>
            <ul className="join-list">
              {criteria.map((c, i) => (
                <li key={i}>
                  <span className="join-ico">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{c.icon}</svg>
                  </span>
                  {c.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="join-form-card">
            {sent ? (
              <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--blue-light)', color: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <h3 style={{ color: 'var(--text-dark)', fontSize: '1.15rem', marginBottom: '0.5rem' }}>You are on the list!</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>We will reach out when applications open.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="join-form">
                <div className="join-row">
                  <label>First name<input name="First name" type="text" placeholder="Wanjiru" autoComplete="given-name" required /></label>
                  <label>Last name<input name="Last name" type="text" placeholder="Kamau" autoComplete="family-name" required /></label>
                </div>
                <label>Email<input name="Email" type="email" placeholder="you@example.com" autoComplete="email" required /></label>
                <label>Occupation<input name="Occupation" type="text" placeholder="What do you do?" required /></label>
                <label>Which pillar excites you most?
                  <span className="join-select">
                    <select name="Pillar of interest" required defaultValue="">
                      <option value="" disabled>Select a pillar</option>
                      <option>Innovation &amp; Entrepreneurship</option>
                      <option>Education &amp; Future of Work</option>
                      <option>Environment &amp; Sustainability</option>
                      <option>Underserved Communities</option>
                    </select>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
                  </span>
                </label>
                <label>Why do you want to join?<textarea name="Why they want to join" rows="4" placeholder="Tell us about the work you do and what you'd bring to the hub." /></label>
                {/* Hidden spam trap: people never see or fill this, bots usually do */}
                <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: 'none' }} />
                {error && (
                  <p role="alert" className="form-error">
                    Something went wrong and your details were not sent. Please try again, or email us at <a href={`mailto:${FORM_EMAIL}`}>{FORM_EMAIL}</a>.
                  </p>
                )}
                <button type="submit" className="join-submit" disabled={loading}>
                  {loading ? 'Sending...' : 'Submit expression of interest'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .join-panel {
          font-family: inherit;
          position: relative; overflow: hidden; border-radius: 28px;
          display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: start;
          padding: 2rem 2rem 2rem 3.5rem;
          background:
            radial-gradient(circle at 0% 0%, rgba(30,91,201,0.9) 0%, transparent 38%),
            radial-gradient(circle at 100% 100%, rgba(0,172,193,0.35) 0%, transparent 35%),
            var(--blue-dark);
        }
        .join-mark {
          position: absolute; left: -120px; bottom: -455px; width: 640px; opacity: 0.07; pointer-events: none;
        }
        .join-info { position: relative; padding-top: 2rem; }
        .join-title { font-size: clamp(1.9rem, 3.4vw, 2.6rem); font-weight: 700; color: var(--white); line-height: 1.15; letter-spacing: -0.02em; margin-bottom: 1.25rem; max-width: 420px; }
        .join-intro { color: rgba(255,255,255,0.75); font-size: 0.95rem; line-height: 1.75; max-width: 420px; margin-bottom: 2.5rem; }
        .join-list { list-style: none; display: flex; flex-direction: column; gap: 1.1rem; }
        .join-list li { display: flex; align-items: center; gap: 0.9rem; color: rgba(255,255,255,0.92); font-size: 0.95rem; }
        .join-ico {
          width: 32px; height: 32px; border-radius: 50%; flex-shrink: 0;
          display: inline-flex; align-items: center; justify-content: center;
          background: var(--blue-mid); color: var(--white);
        }

        .join-form-card { position: relative; background: var(--white); border-radius: 18px; padding: 1.75rem; box-shadow: 0 20px 50px rgba(2,15,45,0.35); }
        .join-form { display: flex; flex-direction: column; gap: 1.1rem; }
        .join-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .join-form label { display: flex; flex-direction: column; gap: 0.45rem; font-size: 0.78rem; font-weight: 600; color: var(--text-dark); }
        .join-form input, .join-form select, .join-form textarea {
          width: 100%; padding: 0.8rem 1rem; border: 1px solid var(--border); border-radius: 10px;
          font-family: inherit; font-size: 0.9rem; font-weight: 400; color: var(--text-dark); background: var(--white);
          outline: none; transition: border-color 0.2s, box-shadow 0.2s;
        }
        .join-form textarea { resize: vertical; min-height: 110px; }
        .join-form ::placeholder { color: #A9B8CC; }
        .join-form input:focus, .join-form select:focus, .join-form textarea:focus { border-color: var(--blue); box-shadow: 0 0 0 3px var(--blue-light); }
        .join-select { position: relative; display: block; }
        .join-select select { appearance: none; padding-right: 2.5rem; cursor: pointer; }
        .join-select select:invalid { color: #A9B8CC; }
        .join-select select option { color: var(--text-dark); }
        .join-select svg { position: absolute; right: 0.9rem; top: 50%; transform: translateY(-50%); pointer-events: none; color: var(--text-dark); }
        .join-submit {
          margin-top: 0.25rem; padding: 0.95rem; border-radius: 10px;
          background: var(--blue); font-family: inherit;
          color: var(--white); font-size: 0.95rem; font-weight: 600; transition: background 0.2s;
        }
        .join-submit:hover:not(:disabled) { background: var(--blue-hover); }
        .join-submit:disabled { opacity: 0.7; cursor: default; }
        .join-submit:focus-visible { outline: 2px solid var(--blue-dark); outline-offset: 2px; }
        .form-error { font-size: 0.82rem; line-height: 1.5; color: #B42318; background: #FEF3F2; border: 1px solid #FECDCA; border-radius: 10px; padding: 0.7rem 0.9rem; }
        .form-error a { color: inherit; text-decoration: underline; }

        @media (max-width: 900px) {
          .join-panel { grid-template-columns: 1fr; padding: 2rem 1.25rem 1.25rem; gap: 2rem; }
          .join-info { padding-top: 0.5rem; padding-inline: 0.75rem; }
          .join-mark { width: 420px; bottom: auto; top: -260px; left: auto; right: -180px; }
        }
        @media (max-width: 480px) {
          .join-row { grid-template-columns: 1fr; }
          .join-form-card { padding: 1.25rem; }
        }
      `}</style>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SectionDivider />
      <Pillars />
      <SectionDivider />
      <FeaturedProjects />
      <FeaturedEvents />
      <LeadershipPreview />
      <JoinSection />
    </>
  )
}