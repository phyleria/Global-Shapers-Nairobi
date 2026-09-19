import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Edit project content here.
// tag: the pillar label above the title. desc: the paragraphs on the card.
// partners: shown at the bottom of the card. isNew: shows a "New" badge. img: photo in /public or a full image URL.
const projects = [
  {
    id: 'technovation',
    tag: 'Education and Future of Work',
    title: 'Technovation',
    img: '/project-technovation.JPG',
    accent: 'var(--blue)',
    desc: [
      'Technovation is the world\'s largest technology entrepreneurship programme for girls, and Global Shapers Nairobi has been its delivery partner in Kenya since 2021. Through a structured 12-week curriculum, teams of young girls aged 10 to 18 identify a problem in their community, conduct market research, build a mobile application, and pitch their solution to a global panel of judges.',
      'In 2024, the Global Shapers Nairobi Hub was honored to receive the Innovation Prize from the Global Shapers Community, Accenture, and the Global Alliance for YOUth. This recognition enabled us to scale our reach to communities in Kibera, Kawangware, Kakuma, Narok, Samburu, and Homabay.',
    ],
    impact: [],
  },
  {
    id: 'meet-leader',
    tag: 'Leadership',
    title: 'Meet the Leader Series',
    img: '/MTL.webp',
    accent: 'var(--blue-dark)',
    desc: [
      'The Meet the Leader Series brings distinguished leaders from different industries and sectors into conversation with young leaders in Nairobi.',
      'The sessions create space for open dialogue, practical insights, and direct mentorship, giving participants the opportunity to learn from leaders about their experiences, challenges, and leadership journeys.',
    ],
    impact: [],
  },
  {
    id: 'upscale',
    tag: 'Innovation and Entrepreneurship',
    title: 'Upscale Artist Seminar',
    img: '/upscale.webp',
    accent: 'var(--teal)',
    desc: [
      'The Upscale Artist Seminar is designed for established visual artists and designers looking to strengthen both their creative and business practices.',
      'The seminar provides practical knowledge and insights to help artists navigate the business side of their work while creating space for learning, growth, and connection within the creative community.',
    ],
    impact: [],
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
    impact: [],
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
    <div style={{ paddingTop: '4.5rem', background: 'var(--off-white)' }}>
      <section className="pp-hero">
        <div className="container">
          <h1>Explore <em>our</em> projects</h1>
        </div>
      </section>

      <section className="pp-grid-wrap">
        <div className="container" style={{ maxWidth: 1320 }}>
          <div className="pp-grid">
            {projects.map((p, i) => (
              <article key={p.id} id={p.id} className="pc-card">
                <div className="pc-img">
                  <img src={p.img} alt="" loading={i < 2 ? 'eager' : 'lazy'} />
                  {p.isNew && <span className="pc-new">New</span>}
                </div>
                <div className="pc-content">
                  <span className="pc-label">{p.tag}</span>
                  <h2>{p.title}</h2>
                  {p.desc.map((d, j) => <p key={j}>{d}</p>)}
                  {p.partners?.length > 0 && (
                    <div className="pc-partners">
                      <span>Partners</span>
                      <ul>
                        {p.partners.map(partner => <li key={partner}>{partner}</li>)}
                      </ul>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <style>{`
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
        .pp-hero p { color: rgba(255,255,255,0.75); font-size: 1rem; line-height: 1.7; max-width: 520px; margin: 0 auto; }

        .pp-grid-wrap { padding-bottom: clamp(4rem, 8vw, 6rem); margin-top: clamp(-8rem, -12vw, -6rem); }
        .pp-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.75rem; }

        .pc-card {
          background: var(--white); border-radius: 20px; padding: 0.75rem 0.75rem 1.5rem;
          box-shadow: var(--shadow-sm); border: 1px solid var(--border);
          display: flex; flex-direction: column; scroll-margin-top: 6rem;
        }
        .pc-img { position: relative; aspect-ratio: 2 / 1; border-radius: 14px; overflow: hidden; background: var(--blue-dark); margin-bottom: 1.5rem; }
        .pc-img img { width: 100%; height: 100%; object-fit: cover; }
        .pc-new { position: absolute; top: 0.85rem; left: 0.85rem; background: var(--teal); color: #fff; font-size: 0.75rem; font-weight: 600; padding: 0.25rem 0.75rem; border-radius: 100px; }
        .pc-content { padding: 0 1rem; display: flex; flex-direction: column; flex: 1; }
        .pc-label { display: block; font-size: 0.8rem; font-weight: 600; color: var(--blue); margin-bottom: 0.35rem; }
        .pc-content h2 { font-size: 1.3rem; font-weight: 700; color: var(--blue-dark); letter-spacing: -0.01em; line-height: 1.3; margin-bottom: 1rem; }
        .pc-content p { font-size: 0.9rem; line-height: 1.7; color: var(--text-mid); }
        .pc-content p + p { margin-top: 0.85rem; }

        .pc-partners { margin-top: auto; padding-top: 1.5rem; }
        .pc-partners > span { display: block; font-size: 0.8rem; font-weight: 600; color: var(--text-dark); margin: 0.5rem 0 0.6rem; padding-top: 1.25rem; border-top: 1px solid var(--border); }
        .pc-partners ul { list-style: none; display: flex; flex-wrap: wrap; gap: 0.45rem; }
        .pc-partners li { font-size: 0.8rem; padding: 0.3rem 0.8rem; border-radius: 100px; background: var(--blue-light); color: var(--blue); font-weight: 500; }

        @media (max-width: 800px) {
          .pp-grid { grid-template-columns: 1fr; max-width: 640px; margin: 0 auto; }
        }
      `}</style>
    </div>
  )
}