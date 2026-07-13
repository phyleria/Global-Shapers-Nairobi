import { useEffect, useState } from 'react'

const partnerTypes = [
  {
    title: 'Programme Partners',
    desc: 'Co-deliver one of our flagship programmes such as Technovation, Dining in the Dark, or the Financial Literacy Series. Bring your expertise, resources, or networks to help us scale our impact.',
    examples: ['Provide mentors or facilitators', 'Co-fund a programme cohort', 'Offer venue or logistics support', 'Share technical expertise'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    title: 'Corporate Partners',
    desc: 'Support our work through CSR partnerships, sponsorships, or in-kind contributions. Connect your team with Nairobi\'s next generation of leaders and demonstrate your commitment to youth empowerment.',
    examples: ['Sponsor a hub event or programme', 'Provide in-kind resources', 'Offer employee volunteer time', 'Host a Meet the Leader session'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
  },
  {
    title: 'Community Partners',
    desc: 'Join forces with us on community-level initiatives. Whether you are an NGO, a school, a community organisation, or a government body, there are meaningful ways to collaborate.',
    examples: ['Partner on a community project', 'Share your community networks', 'Co-organise events', 'Provide access to beneficiaries'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
  },
  {
    title: 'Funding Partners',
    desc: 'Help us sustain and scale our impact through grants, donations, or impact investments. Your funding directly supports the projects and programmes that are changing lives in Nairobi.',
    examples: ['Grant funding for programmes', 'Project-specific donations', 'Multi-year partnerships', 'Innovation prizes and awards'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
]

const currentPartners = [
  { name: 'Compassion International Kenya', type: 'Programme Partner' },
  { name: 'KidsCodeLab', type: 'Programme Partner' },
  { name: 'Kenya Society for the Blind', type: 'Community Partner' },
  { name: 'PadMad Kenya', type: 'Community Partner' },
  { name: 'Accenture', type: 'Funding Partner' },
  { name: 'Global Alliance for YOUth', type: 'Funding Partner' },
  { name: 'Woodland Star International', type: 'Community Partner' },
]

export default function PartnerPage() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const onSubmit = e => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSent(true) }, 1200)
  }

  const inputStyle = {
    width: '100%', padding: '0.8rem 1rem',
    background: 'var(--white)', border: '1.5px solid var(--border)',
    borderRadius: 10, color: 'var(--text-dark)',
    fontFamily: 'var(--font)', fontSize: '0.9rem', outline: 'none',
    transition: 'border-color 0.2s',
  }

  return (
    <div style={{ paddingTop: '5rem' }}>
      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, var(--blue-dark) 0%, var(--blue) 100%)`, padding: '5rem 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(circle at 70% 30%, rgba(255,255,255,0.06) 0%, transparent 60%)`, pointerEvents: 'none' }}/>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>Get Involved</span>
          <h1 style={{ color: '#fff', fontSize: 'clamp(2.2rem,5vw,4rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            Partner With Us
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', maxWidth: 560, margin: '0 auto' }}>
            We believe the best change happens through collaboration. Whether you are a company, organisation, or community group, there is a meaningful way to work with Global Shapers Nairobi.
          </p>
        </div>
      </div>

      {/* Partnership types */}
      <div className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="eyebrow">How We Can Work Together</span>
            <h2 className="section-heading">Partnership opportunities</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.5rem' }} className="partner-types-grid">
            {partnerTypes.map((p, i) => (
              <div key={i} style={{
                padding: '2.5rem', borderRadius: 'var(--radius)',
                border: '1px solid var(--border)', background: 'var(--white)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow='var(--shadow-md)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='var(--shadow-sm)'; }}
              >
                <div style={{ width: 56, height: 56, borderRadius: 14, background: 'var(--blue-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--blue)', marginBottom: '1.25rem' }}>
                  {p.icon}
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '0.75rem' }}>{p.title}</h3>
                <p style={{ color: 'var(--text-mid)', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>{p.desc}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  {p.examples.map((ex, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--text-mid)' }}>
                      <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--blue)', flexShrink: 0 }}/>
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Current partners */}
      <div className="section" style={{ background: 'var(--off-white)', paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="eyebrow">Who We Work With</span>
            <h2 className="section-heading">Our partners</h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
            {currentPartners.map((p, i) => (
              <div key={i} style={{
                padding: '0.75rem 1.25rem', borderRadius: 100,
                background: 'var(--white)', border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
              }}>
                <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-dark)' }}>{p.name}</span>
                <span style={{ fontSize: '0.7rem', color: 'var(--blue)', background: 'var(--blue-light)', padding: '0.15rem 0.5rem', borderRadius: 100 }}>{p.type}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact form */}
      <div className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }} className="partner-contact-grid">
            {/* Left */}
            <div>
              <span className="eyebrow">Get in Touch</span>
              <h2 className="section-heading" style={{ marginBottom: '1.25rem' }}>Ready to partner<br/><em>with us?</em></h2>
              <p style={{ color: 'var(--text-mid)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                We would love to hear from you. Fill in the form and we will be in touch within 3 to 5 business days. You can also reach us directly at the email below.
              </p>
              <div style={{ padding: '1.5rem', borderRadius: 'var(--radius)', background: 'var(--blue-light)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Email us directly</p>
                  <a href="mailto:contact@globalshapersnairobi.com" style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--blue)' }}>contact@globalshapersnairobi.com</a>
                </div>
              </div>
            </div>

            {/* Right - form */}
            <div style={{ background: 'var(--off-white)', borderRadius: 'var(--radius)', padding: '2.5rem', border: '1px solid var(--border)' }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                  <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem', color: '#fff' }}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                  </div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>Message received!</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>We will be in touch within 3 to 5 business days.</p>
                </div>
              ) : (
                <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.25rem' }}>Partnership Enquiry</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Tell us a bit about your organisation and how you would like to work together.</p>
                  {[['Organisation Name','text','Your organisation name'],['Contact Name','text','Your full name'],['Email','email','your@email.com'],['Website','url','https://yourwebsite.com (optional)']].map(([label, type, ph]) => (
                    <div key={label}>
                      <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-mid)', marginBottom: '0.4rem' }}>{label}</label>
                      <input type={type} placeholder={ph} required={type !== 'url'} style={inputStyle}
                        onFocus={e => e.target.style.borderColor='var(--blue)'}
                        onBlur={e => e.target.style.borderColor='var(--border)'}
                      />
                    </div>
                  ))}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-mid)', marginBottom: '0.4rem' }}>Partnership type</label>
                    <select required style={{ ...inputStyle, appearance: 'none' }}>
                      <option value="">Select a partnership type</option>
                      <option>Programme Partner</option>
                      <option>Corporate Partner</option>
                      <option>Community Partner</option>
                      <option>Funding Partner</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-mid)', marginBottom: '0.4rem' }}>Tell us more</label>
                    <textarea required placeholder="Describe your organisation and how you see us working together..." style={{ ...inputStyle, resize: 'vertical', minHeight: 100 }}
                      onFocus={e => e.target.style.borderColor='var(--blue)'}
                      onBlur={e => e.target.style.borderColor='var(--border)'}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.9rem', fontSize: '0.95rem' }} disabled={loading}>
                    {loading ? 'Sending...' : 'Submit Partnership Enquiry'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .partner-types-grid { grid-template-columns: 1fr !important; }
          .partner-contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
        select option { background: var(--white); color: var(--text-dark); }
      `}</style>
    </div>
  )
}
