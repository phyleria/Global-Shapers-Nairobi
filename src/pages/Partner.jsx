import { useEffect, useState } from 'react'
import {
  Lightbulb,
  BriefcaseBusiness,
  Globe2,
  CircleDollarSign,
} from 'lucide-react'
const partnerTypes = [
  {
    title: 'Programme Partners',
    desc: 'Co-deliver one of our flagship programmes such as Technovation, Dining in the Dark, or the Financial Literacy Series. Bring your expertise, resources, or networks to help us scale our impact.',
    examples: [
      'Provide mentors or facilitators',
      'Co-fund a programme cohort',
      'Offer venue or logistics support',
      'Share technical expertise',
    ],
    icon: <Lightbulb size={28} strokeWidth={1.8} />,
  },
  {
    title: 'Corporate Partners',
    desc: 'Support our work through CSR partnerships, sponsorships, or in-kind contributions. Connect your team with Nairobi’s next generation of leaders and demonstrate your commitment to youth empowerment.',
    examples: [
      'Sponsor a hub event or programme',
      'Provide in-kind resources',
      'Offer employee volunteer time',
      'Host a Meet the Leader session',
    ],
    icon: <BriefcaseBusiness size={28} strokeWidth={1.8} />,
  },
  {
    title: 'Community Partners',
    desc: 'Join forces with us on community-level initiatives whether you are an NGO, a school, a community organisation, or a government body.',
    examples: [
      'Partner on a community project',
      'Share your community networks',
      'Co-organise events',
      'Provide access to beneficiaries',
    ],
    icon: <Globe2 size={28} strokeWidth={1.8} />,
  },
  {
    title: 'Funding Partners',
    desc: 'Help us sustain and scale our impact through grants, donations, or impact investments. Your funding directly supports the projects and programmes that are changing lives in Nairobi.',
    examples: [
      'Grant funding for programmes',
      'Project-specific donations',
      'Multi-year partnerships',
      'Innovation prizes and awards',
    ],
    icon: <CircleDollarSign size={28} strokeWidth={1.8} />,
  },
]

const currentPartners = [
  {
    name: 'Compassion International Kenya',
    logo: '/partners/compassion.png',
    type: 'Programme Partner',
  },
  {
    name: 'KidsCodeLab',
    logo: '/partners/kidscodelab.png',
    type: 'Programme Partner',
  },
  {
    name: 'Kenya Society for the Blind',
    logo: '/partners/ksb.png',
    type: 'Community Partner',
  },
  {
    name: 'AACOSE',
    logo: '/partners/aacose.png',
    type: 'Community Partner',
  },
  {
    name: 'Inkomoko',
    logo: '/partners/inkomoko.png',
    type: 'Community Partner',
  },
  {
    name: 'Centonomy',
    logo: '/partners/centonomy.png',
    type: 'Programme Partner',
  },
  {
    name: 'Kenya Red Cross',
    logo: '/partners/redcross.png',
    type: 'Programme Partner',
  },
  {
    name: 'Afrika House',
    logo: '/partners/afrikahouse.png',
    type: 'Community Partner',
  },
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
      

      {/* Partnership types */}
      <div className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 className="section-heading" style={{ color: 'var(--blue)' }}>Partnership opportunities</h2>
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
                <div
  style={{
    width: 64,
    height: 64,
    borderRadius: '18px',
    background: 'rgba(0, 95, 204, 0.08)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--blue)',
    marginBottom: '1.5rem',
    transition: 'all .25s ease',
  }}
>
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
            <h2 className="section-heading">Recent partners</h2>
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
              <h2 className="section-heading" style={{ marginBottom: '1.25rem', color: 'var(--blue)' }}>Ready to partner?</h2>
              <p style={{ color: 'var(--text-mid)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                We would love to hear from you. Fill in the form and we will be in touch within 3 to 5 business days. You can also reach us at <a href="mailto:contact@globalshapersnairobi.com" style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--blue)' }}>contact@globalshapersnairobi.com</a>

              </p>
              
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
