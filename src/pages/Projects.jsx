import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const projects = [
  {
    id: 'technovation',
    tag: 'Education and Future of Work',
    title: 'Technovation',
    img: '/project-technovation.JPG',
    accent: 'var(--blue)',
    desc: [
      'Technovation is the world\'s largest technology entrepreneurship programme for girls, and Global Shapers Nairobi has been its delivery partner in Kenya since 2021. Through a structured 12-week curriculum, teams of young women aged 10 to 18 identify a problem in their community, conduct market research, build a mobile application, and pitch their solution to a global panel of judges.',
      'In 2024, the Global Shapers Nairobi Hub was honored to receive the Innovation Prize from the Global Shapers Community, Accenture, and the Global Alliance for YOUth. This recognition enabled us to scale our reach to communities in Kibera, Kawangware, Kakuma, Narok, Samburu, and Homabay.',
    ],
    impact: [],
    partners: ['Compassion International Kenya', 'KidsCodeLab', 'Accenture', 'Global Alliance for YOUth'],
  },
  {
    id: 'dining',
    tag: 'Underserved Communities',
    title: 'Dining in the Dark',
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80',
    accent: 'var(--blue-dark)',
    desc: [
      'Dining in the Dark is an immersive experience that places guests in complete darkness for a full meal, guided by visually impaired hosts from the Kenya Society for the Blind. The experience is designed to challenge perceptions, build genuine empathy, and create meaningful conversations about the lived realities of visually impaired Kenyans.',
      'The event brings together Global Shapers members, corporate partners, and community guests for a shared experience that is both thought-provoking and deeply human. Proceeds from the event support the Kenya Society for the Blind and its ongoing work.',
      'After a successful inaugural edition, Dining in the Dark returns in October 2026 with an expanded format, new partnerships, and a stronger focus on accessible fundraising.',
    ],
    impact: [],
    partners: ['Kenya Society for the Blind'],
  },
  {
    id: 'food',
    tag: 'Innovation and Entrepreneurship',
    isNew: true,
    title: 'Food Wastage Solution',
    img: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=900&q=80',
    accent: 'var(--teal)',
    desc: [
      'Nairobi generates between 2,000 and 2,500 tonnes of waste daily, 80% of which is organic. Hotels and restaurants are significant contributors, yet edible surplus food routinely goes to waste while communities nearby face food insecurity.',
      'The Food Wastage Solution project is building a lightweight digital platform that helps Nairobi hotels track how much food is wasted, reduce waste through data-driven insights, and redirect surplus edible food to vetted community partners, including schools and shelters, before it becomes waste.',
      'This project is being developed in collaboration with PadMad and Woodland Star International School, combining Global Shapers members\' professional expertise with student innovation. The project will culminate in an Impact Dinner event where the platform is demonstrated live.',
    ],
    impact: [],
    partners: ['Woodland Star International School'],
  },
  {
    id: 'finlit',
    tag: 'Education and Future of Work',
    title: 'Financial Literacy Series',
    img: '/project-literacy.jpg',
    accent: 'var(--blue-mid)',
    desc: [
      'The Financial Literacy Series is a practical, accessible programme equipping young people across Nairobi with the financial knowledge and skills to make better decisions across their lives.',
      'Sessions cover budgeting and saving, understanding credit and debt, investing basics, navigating Kenya\'s financial system including mobile money and banking, and planning for long-term financial goals. The programme is designed to be relatable and grounded in the real financial realities of young Kenyans.',
      'A new cohort launches in January 2027, building on lessons from previous editions and incorporating updated content on digital financial tools and platforms.',
    ],
    partners: ['Kenya Red Cross'],
  },
]

export default function ProjectsPage() {
  const loc = useLocation()

  useEffect(() => {
    if (loc.hash) {
      const el = document.getElementById(loc.hash.slice(1))
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
    } else {
      window.scrollTo(0, 0)
    }
  }, [loc])

  return (
    <div style={{ paddingTop: '5rem' }}>
      

      {/* Projects */}
      <div style={{ background: 'var(--white)' }}>
        {projects.map((p, i) => (
          <section key={p.id} id={p.id} style={{
            padding: 'clamp(3rem,6vw,5rem) 0',
            background: i % 2 === 0 ? 'var(--white)' : 'var(--off-white)',
            borderTop: '1px solid var(--border)',
          }}>
            <div className="container">
              <div style={{ display: 'grid', gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr', gap: '4rem', alignItems: 'start' }} className="proj-detail-grid">
                {/* Image - alternate sides */}
                <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                  <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', aspectRatio: '16/10' }}>
                    <img src={p.img} alt={p.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                 
                </div>

                {/* Text */}
                <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--blue)', border: '1px solid var(--blue)', borderRadius: '100px', padding: '0.25rem 0.75rem' }}>{p.tag}</span>
                  </div>
                  <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 800, color: 'var(--text-dark)', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>{p.title}</h2>
                  <p style={{ fontSize: '1rem', color: 'var(--blue)', fontWeight: 600, marginBottom: '1.5rem' }}>{p.tagline}</p>
                  {p.desc.map((d, j) => (
                    <p key={j} style={{ color: 'var(--text-mid)', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '1rem' }}>{d}</p>
                  ))}
                  {p.partners.length > 0 && (
                    <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
                      <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '0.6rem' }}>Partners</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {p.partners.map(partner => (
                          <span key={partner} style={{ fontSize: '0.82rem', padding: '0.3rem 0.85rem', borderRadius: '100px', background: 'var(--blue-light)', color: 'var(--blue)', fontWeight: 500 }}>{partner}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .proj-detail-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .proj-detail-grid > div { order: unset !important; }
        }
      `}</style>
    </div>
  )
}
