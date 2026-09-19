import { useEffect, useState } from 'react'
import {
  Lightbulb,
  BriefcaseBusiness,
  Globe2,
  CircleDollarSign,
} from 'lucide-react'
import { sendForm, FORM_EMAIL } from '../lib/sendForm'

const partnerTypes = [
  {
    title: 'Programme Partners',
    // Photo: Nairobi skyline, imsogabriel stock (Unsplash)
    img: 'https://images.unsplash.com/photo-1741991110666-88115e724741?w=1200&q=70&auto=format&fit=crop',
    desc: 'Co-deliver one of our flagship programmes such as Technovation, Dining in the Dark, or the Financial Literacy Series. Bring your expertise, resources, or networks to help us scale our impact.',
    examples: [
      'Provide mentors or facilitators',
      'Co-fund a programme cohort',
      'Offer venue or logistics support',
      'Share technical expertise',
    ],  },
  {
    title: 'Corporate Partners',
    // Photo: Nairobi skyline, Amani Nation (Unsplash)
    img: 'https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=1200&q=70&auto=format&fit=crop',
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
    // Photo: Zebras in Nairobi National Park, Grace Nandi (Unsplash)
    img: 'https://images.unsplash.com/photo-1635595358293-03620e36be48?w=1200&q=70&auto=format&fit=crop',
    desc: 'Join forces with us on community-level initiatives whether you are an NGO, a school, a community organisation, or a government body.',
    examples: [
      'Partner on a community project',
      'Share your community networks',
      'Co-organise events',
      'Provide access to beneficiaries',
    ],  },
  {
    title: 'Funding Partners',
    // Photo: Giraffes and the Nairobi skyline, Murad Swaleh (Unsplash)
    img: 'https://images.unsplash.com/photo-1683435299487-12296f884718?w=1200&q=70&auto=format&fit=crop',
    desc: 'Help us sustain and scale our impact through grants, donations, or impact investments. Your funding directly supports the projects and programmes that are changing lives in Nairobi.',
    examples: [
      'Grant funding for programmes',
      'Project-specific donations',
      'Multi-year partnerships',
      'Innovation prizes and awards',
    ],
  },
]

// Recent partners. logo: put the logo file in public/partners/ with this exact name.
// If a logo file is missing, the tile shows the partner's name instead.
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
    logo: '/partners/ksb.jpeg',
    type: 'Community Partner',
  },
  {
    name: 'AACOSE',
    logo: '/partners/aacose.png',
    type: 'Community Partner',
  },
  {
    name: 'Inkomoko',
    logo: '/partners/inkomoko.jpeg',
    type: 'Community Partner',
  },
  {
    name: 'Centonomy',
    logo: '/partners/centonomy.png',
    type: 'Programme Partner',
  },
  {
    name: 'Kenya Red Cross',
    logo: '/partners/redcross.jpeg',
    type: 'Programme Partner',
  },
  
]

function PartnerLogo({ p }) {
  const [failed, setFailed] = useState(false)
  return (
    <li className="pt-logo-tile" title={p.name}>
      {p.logo && !failed
        ? <img src={p.logo} alt={p.name} loading="lazy" onError={() => setFailed(true)} />
        : <span className="pt-logo-fallback">{p.name}</span>}
    </li>
  )
}

const CONTACT_EMAIL = FORM_EMAIL

export default function PartnerPage() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const onSubmit = async e => {
    e.preventDefault()
    setLoading(true); setError(false)
    try {
      await sendForm('New partnership enquiry: Global Shapers Nairobi', e.target)
      setSent(true)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="pt-page">
      {/* Header */}
      <section className="pp-hero">
        <div className="container">
          <h1>Partner <em>with</em> us</h1>
          <p>Work with Nairobi's young leaders to co-deliver programmes, support community projects, and scale impact across the city.</p>
        </div>
      </section>

      {/* Partnership types */}
      <section className="pt-types">
        <div className="container">
          <div className="pt-grid">
            {partnerTypes.map(p => (
              <article key={p.title} className="pt-card">
                <div className="pt-photo">
                  <img src={p.img} alt="" loading="lazy" />
                  <div className="pt-photo-tint" />
                  <span className="pt-photo-icon">{p.icon}</span>
                  <h2>{p.title}</h2>
                </div>
                <div className="pt-body">
                  <p className="pt-desc">{p.desc}</p>
                  <ul className="pt-examples">
                    {p.examples.map(ex => <li key={ex}>{ex}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Recent partners */}
      <section className="pt-partners">
        <div className="container">
          <h2 className="section-heading" style={{ color: 'var(--blue)', marginBottom: '2rem' }}>Recent partners</h2>
          <ul className="pt-partner-grid">
            {currentPartners.map(p => <PartnerLogo key={p.name} p={p} />)}
          </ul>
        </div>
      </section>

      {/* Enquiry form */}
      <section id="enquire" className="pt-contact">
        <div className="container">
          <div className="pt-panel">
            <img src="/logo-dark.svg" alt="" aria-hidden="true" className="pt-mark" />

            <div className="pt-info">
              <h2>Ready to partner?</h2>
              <p className="pt-intro">We would love to hear from you. Tell us about your organisation and how you would like to work together.</p>
              <ul className="pt-points">
                <li>
                  <span className="pt-ico"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/></svg></span>
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </li>
                <li>
                  <span className="pt-ico"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg></span>
                  We reply within 3 to 5 business days
                </li>
                <li>
                  <span className="pt-ico"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg></span>
                  Based in Nairobi, Kenya
                </li>
              </ul>
            </div>

            <div className="pt-form-card">
              {sent ? (
                <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--blue-light)', color: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                  </div>
                  <h3 style={{ color: 'var(--text-dark)', fontSize: '1.15rem', marginBottom: '0.5rem' }}>Message received</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>We will be in touch within 3 to 5 business days.</p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="pt-form">
                  <label>Organisation name<input name="Organisation" type="text" placeholder="Your organisation" autoComplete="organization" required /></label>
                  <div className="pt-row">
                    <label>First name<input name="First name" type="text" placeholder="Wanjiru" autoComplete="given-name" required /></label>
                    <label>Last name<input name="Last name" type="text" placeholder="Kamau" autoComplete="family-name" required /></label>
                  </div>
                  <div className="pt-row">
                    <label>Email<input name="Email" type="email" placeholder="you@example.com" autoComplete="email" required /></label>
                    <label>Website <span className="pt-opt">(optional)</span><input name="Website" type="url" placeholder="https://" autoComplete="url" /></label>
                  </div>
                  <label>Partnership type
                    <span className="pt-select">
                      <select name="Partnership type" required defaultValue="">
                        <option value="" disabled>Select a partnership type</option>
                        {partnerTypes.map(p => <option key={p.title}>{p.title.replace(/s$/, '')}</option>)}
                        <option>Other</option>
                      </select>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
                    </span>
                  </label>
                  <label>Tell us more<textarea name="Message" rows="4" required placeholder="Describe your organisation and how you see us working together." /></label>
                  {/* Hidden spam trap: people never see or fill this, bots usually do */}
                  <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: 'none' }} />
                  {error && (
                    <p role="alert" className="form-error">
                      Something went wrong and your enquiry was not sent. Please try again, or email us at <a href={`mailto:${FORM_EMAIL}`}>{FORM_EMAIL}</a>.
                    </p>
                  )}
                  <button type="submit" className="pt-submit" disabled={loading}>
                    {loading ? 'Sending...' : 'Send partnership enquiry'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .pt-page { padding-top: 4.5rem; background: var(--off-white); }

        .pp-hero {
          text-align: center; color: var(--white);
          padding: clamp(4rem, 8vw, 6rem) 0 clamp(9rem, 16vw, 13rem);
          background:
            radial-gradient(circle at 20% 20%, rgba(30,91,201,0.55) 0%, transparent 45%),
            radial-gradient(circle at 85% 70%, rgba(0,172,193,0.18) 0%, transparent 45%),
            var(--blue-dark);
        }
        .pp-hero h1 { font-size: clamp(2.4rem, 6vw, 4.5rem); font-weight: 700; letter-spacing: -0.03em; line-height: 1.05; margin-bottom: 1.25rem; }
        .pp-hero h1 em { font-style: italic; font-weight: 300; }
        .pp-hero p { color: rgba(255,255,255,0.75); font-size: 1rem; line-height: 1.7; max-width: 540px; margin: 0 auto; }

        /* Partnership type cards: same card style as Projects */
        .pt-types { position: relative; margin-top: clamp(-8rem, -12vw, -6rem); }
        .pt-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.75rem; max-width: 1100px; margin: 0 auto; }
        .pt-card {
          background: var(--white); border: 1px solid var(--border); border-radius: 20px;
          box-shadow: var(--shadow-sm); padding: 0.75rem 0.75rem 1.75rem;
          display: flex; flex-direction: column; transition: box-shadow 0.3s;
        }
        .pt-card:hover { box-shadow: var(--shadow-lg); }

        /* Photo header on each card, with the title over a blue tint */
        .pt-photo {
          position: relative; aspect-ratio: 16 / 8; border-radius: 14px; overflow: hidden;
          background: var(--blue-dark); margin-bottom: 1.5rem;
          display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.6rem;
          color: var(--white); text-align: center; padding: 1rem;
        }
        .pt-photo img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }
        .pt-card:hover .pt-photo img { transform: scale(1.04); }
        .pt-photo-tint { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(6,50,133,0.35) 0%, rgba(6,50,133,0.6) 100%); }
        
        .pt-photo-icon svg { width: 22px; height: 22px; }
        .pt-photo h2 { position: relative; font-size: clamp(1.5rem, 2.6vw, 2rem); font-weight: 500; letter-spacing: -0.02em; line-height: 1.15; text-shadow: 0 2px 16px rgba(0,0,0,0.3); }
        .pt-body { padding: 0 1rem; display: flex; flex-direction: column; flex: 1; }
        .pt-desc { font-size: 0.9rem; line-height: 1.75; color: var(--text-mid); margin-bottom: 1.25rem; }
        .pt-examples { list-style: none; display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1.5rem; flex: 1; }
        .pt-examples li { display: flex; align-items: center; gap: 0.6rem; font-size: 0.85rem; color: var(--text-mid); }
        .pt-examples li::before { content: ''; width: 5px; height: 5px; border-radius: 50%; background: var(--blue); flex-shrink: 0; }
        .pt-link {
          align-self: flex-start; font-size: 0.82rem; font-weight: 500; color: var(--text-dark);
          padding-bottom: 0.2rem; border-bottom: 1px solid var(--text-dark); transition: color 0.2s, border-color 0.2s;
        }
        .pt-link:hover { color: var(--blue); border-color: var(--blue); }

        /* Recent partners */
        .pt-partners { padding: clamp(4rem, 7vw, 5.5rem) 0 0; }
        .pt-partner-grid { list-style: none; display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.25rem; }
        .pt-logo-tile {
  aspect-ratio: 16 / 9;
  background: var(--white);
  border-radius: 14px;
  box-shadow: 0 4px 24px rgba(6,50,133,0.06), 0 1px 3px rgba(6,50,133,0.04);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.25rem 1.5rem;
}

.pt-logo-tile img {
  width: 180px;
  height: 90px;
  max-width: 90%;
  object-fit: contain;
  display: block;
}

.pt-logo-fallback {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-dark);
  text-align: center;
  line-height: 1.3;
  letter-spacing: -0.01em;
}

        /* Enquiry panel: same design as the home page join section */
        .pt-contact { padding: clamp(4rem, 7vw, 5.5rem) 0 clamp(4rem, 8vw, 6rem); scroll-margin-top: 4rem; }
        .pt-panel {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          position: relative; overflow: hidden; border-radius: 28px;
          display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: start;
          padding: 2rem 2rem 2rem 3.5rem;
          background:
            radial-gradient(circle at 0% 0%, rgba(30,91,201,0.9) 0%, transparent 38%),
            radial-gradient(circle at 100% 100%, rgba(0,172,193,0.35) 0%, transparent 35%),
            var(--blue-dark);
        }
        .pt-mark { position: absolute; left: -120px; bottom: -455px; width: 640px; opacity: 0.07; pointer-events: none; }
        .pt-info { position: relative; padding-top: 2rem; }
        .pt-info h2 { font-size: clamp(1.9rem, 3.4vw, 2.6rem); font-weight: 700; color: var(--white); line-height: 1.15; letter-spacing: -0.02em; margin-bottom: 1.25rem; }
        .pt-intro { color: rgba(255,255,255,0.75); font-size: 0.95rem; line-height: 1.75; max-width: 420px; margin-bottom: 2.5rem; }
        .pt-points { list-style: none; display: flex; flex-direction: column; gap: 1.1rem; }
        .pt-points li { display: flex; align-items: center; gap: 0.9rem; color: rgba(255,255,255,0.92); font-size: 0.95rem; }
        .pt-points a { color: var(--white); text-decoration: underline; text-underline-offset: 3px; text-decoration-color: rgba(255,255,255,0.4); }
        .pt-ico {
          width: 32px; height: 32px; border-radius: 50%; flex-shrink: 0;
          display: inline-flex; align-items: center; justify-content: center;
          background: var(--blue-mid); color: var(--white);
        }

        .pt-form-card { position: relative; background: var(--white); border-radius: 18px; padding: 1.75rem; box-shadow: 0 20px 50px rgba(2,15,45,0.35); }
        .pt-form { display: flex; flex-direction: column; gap: 1.1rem; }
        .pt-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .pt-form label { display: flex; flex-direction: column; gap: 0.45rem; font-size: 0.78rem; font-weight: 600; color: var(--text-dark); }
        .pt-opt { font-weight: 400; color: var(--text-muted); display: inline; }
        .pt-form label:has(.pt-opt) { display: block; }
        .pt-form label:has(.pt-opt) input { margin-top: 0.45rem; }
        .pt-form input, .pt-form select, .pt-form textarea {
          width: 100%; padding: 0.8rem 1rem; border: 1px solid var(--border); border-radius: 10px;
          font-family: inherit; font-size: 0.9rem; font-weight: 400; color: var(--text-dark); background: var(--white);
          outline: none; transition: border-color 0.2s, box-shadow 0.2s;
        }
        .pt-form textarea { resize: vertical; min-height: 110px; }
        .pt-form ::placeholder { color: #A9B8CC; }
        .pt-form input:focus, .pt-form select:focus, .pt-form textarea:focus { border-color: var(--blue); box-shadow: 0 0 0 3px var(--blue-light); }
        .pt-select { position: relative; display: block; }
        .pt-select select { appearance: none; padding-right: 2.5rem; cursor: pointer; }
        .pt-select select:invalid { color: #A9B8CC; }
        .pt-select select option { color: var(--text-dark); }
        .pt-select svg { position: absolute; right: 0.9rem; top: 50%; transform: translateY(-50%); pointer-events: none; color: var(--text-dark); }
        .pt-submit {
          margin-top: 0.25rem; padding: 0.95rem; border-radius: 10px; background: var(--blue); font-family: inherit;
          color: var(--white); font-size: 0.95rem; font-weight: 600; transition: background 0.2s;
        }
        .pt-submit:hover:not(:disabled) { background: var(--blue-hover); }
        .pt-submit:disabled { opacity: 0.7; cursor: default; }
        .form-error { font-size: 0.82rem; line-height: 1.5; color: #B42318; background: #FEF3F2; border: 1px solid #FECDCA; border-radius: 10px; padding: 0.7rem 0.9rem; }
        .form-error a { color: inherit; text-decoration: underline; }

        .pt-page a:focus-visible, .pt-submit:focus-visible { outline: 2px solid var(--blue); outline-offset: 3px; }
        .pt-points a:focus-visible { outline-color: var(--white); }

        @media (max-width: 960px) {
          .pt-partner-grid { grid-template-columns: repeat(2, 1fr); }
          .pt-panel { grid-template-columns: 1fr; padding: 2rem 1.25rem 1.25rem; gap: 2rem; }
          .pt-info { padding-top: 0.5rem; padding-inline: 0.75rem; }
          .pt-mark { width: 420px; bottom: auto; top: -260px; left: auto; right: -180px; }
        }
        @media (max-width: 768px) {
          .pt-grid { grid-template-columns: 1fr; max-width: 600px; }
          .pt-body { padding: 0 0.5rem; }
        }
        @media (max-width: 480px) {
          .pt-row { grid-template-columns: 1fr; }
          .pt-form-card { padding: 1.25rem; }
          .pt-partner-grid { grid-template-columns: 1fr 1fr; gap: 0.75rem; }
          .pt-logo-tile { padding: 1rem; }
        }
        @media (prefers-reduced-motion: reduce) { .pt-photo img { transition: none; } }
      `}</style>
    </div>
  )
}