import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { posts } from '../data/posts'

const Chevron = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>
)

export default function BlogPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const [filter, setFilter] = useState('All posts')

  const featured = posts.find(p => p.featured)
  const rest = posts.filter(p => p !== featured)
  const categories = ['All posts', ...new Set(rest.map(p => p.category))]
  const shown = filter === 'All posts' ? rest : rest.filter(p => p.category === filter)

  return (
    <div className="bl-page">
      <section className="pp-hero">
        <div className="container">
          <h1>Stories <em>from</em> the hub</h1>
          <p>News, press releases, and stories from the work our hub does across Nairobi.</p>
        </div>
      </section>

      <div className="container bl-wrap">

        {featured && (
          <article className="bl-feature">
            <div className="bl-feature-text">
              <p className="bl-meta">{featured.category} • {featured.date}</p>
              <h2><Link to={`/blog/${featured.slug}`}>{featured.title}</Link></h2>
              <p className="bl-excerpt">{featured.excerpt}</p>
              <Link to={`/blog/${featured.slug}`} className="bl-read" aria-label={`Read more: ${featured.title}`}>Read more <Chevron /></Link>
            </div>
            <Link to={`/blog/${featured.slug}`} className="bl-feature-img" tabIndex={-1} aria-hidden="true">
              <img src={featured.img} alt="" />
            </Link>
          </article>
        )}

        {categories.length > 2 && (
          <div className="bl-filters" role="group" aria-label="Filter posts">
            {categories.map(c => (
              <button key={c} onClick={() => setFilter(c)} className={filter === c ? 'is-active' : ''} aria-pressed={filter === c}>{c}</button>
            ))}
          </div>
        )}

        <div className="bl-grid">
          {shown.map(p => (
            <article key={p.slug} className="bl-card">
              <Link to={`/blog/${p.slug}`} className="bl-card-img" tabIndex={-1} aria-hidden="true">
                <img src={p.img} alt="" loading="lazy" />
              </Link>
              <p className="bl-meta">{p.category} • {p.date}</p>
              <h3><Link to={`/blog/${p.slug}`}>{p.title}</Link></h3>
              <p className="bl-excerpt">{p.excerpt}</p>
              <Link to={`/blog/${p.slug}`} className="bl-read" aria-label={`Read more: ${p.title}`}>Read more</Link>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .bl-page { padding-top: 4.5rem; background: var(--off-white); }
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

        .bl-wrap { max-width: 1100px; position: relative; margin-top: clamp(-8rem, -12vw, -6rem); padding-bottom: clamp(4rem, 8vw, 6rem); }

        /* Card style shared with the Projects page: white card, inset rounded photo, padded text */
        .bl-feature, .bl-card {
          background: var(--white); border: 1px solid var(--border); border-radius: 20px;
          box-shadow: var(--shadow-sm); transition: box-shadow 0.3s;
        }
        .bl-feature:hover, .bl-card:hover { box-shadow: var(--shadow-lg); }

        .bl-feature {
          display: grid; grid-template-columns: 1fr 1.1fr; gap: 2rem; align-items: stretch;
          padding: 0.75rem; margin-bottom: 3rem;
        }
        .bl-feature-text { padding: 1.75rem 0.5rem 1.75rem 1.75rem; align-self: center; }
        /* Photo fills the full card height, so the gap above, below and to the right of it is the same */
        .bl-feature-img { order: 2; display: block; min-height: 300px; overflow: hidden; border-radius: 14px; background: var(--light-gray); }
        .bl-feature h2 { font-size: clamp(1.5rem, 2.8vw, 2.1rem); font-weight: 500; line-height: 1.2; letter-spacing: -0.02em; color: var(--text-dark); margin-bottom: 0.9rem; }
        .bl-feature .bl-excerpt { font-size: 0.9rem; margin-bottom: 1.5rem; }

        .bl-card { display: flex; flex-direction: column; padding: 0.75rem 0.75rem 1.5rem; }
        .bl-card > :not(.bl-card-img) { margin-left: 1rem; margin-right: 1rem; }
        .bl-card-img { display: block; aspect-ratio: 16 / 10; overflow: hidden; border-radius: 14px; margin-bottom: 1.25rem; background: var(--light-gray); }
        .bl-card h3 { font-size: 1.1rem; font-weight: 600; line-height: 1.35; color: var(--text-dark); margin-bottom: 0.5rem; }
        .bl-card .bl-excerpt { flex: 1; }
        .bl-card .bl-read { align-self: flex-start; }

        .bl-feature-img img, .bl-card-img img { width: 100%; height: 100%; object-fit: cover; }

        .bl-meta { font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.6rem; }
        .bl-excerpt { font-size: 0.85rem; line-height: 1.65; color: var(--text-mid); margin-bottom: 1rem; }
        .bl-read {
          display: inline-flex; align-items: center; gap: 0.35rem; font-size: 0.82rem; font-weight: 500; color: var(--text-dark);
          padding-bottom: 0.2rem; border-bottom: 1px solid var(--text-dark); transition: color 0.2s, border-color 0.2s;
        }
        .bl-read:hover { color: var(--blue); border-color: var(--blue); }
        .bl-page a:focus-visible, .bl-filters button:focus-visible { outline: 2px solid var(--blue); outline-offset: 3px; }
        .bl-feature h2 a:hover, .bl-card h3 a:hover { color: var(--blue); }

        .bl-filters { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1.75rem; }
        .bl-filters button { font-size: 0.8rem; color: var(--text-mid); padding: 0.45rem 0.9rem; border-radius: 100px; transition: background 0.2s, color 0.2s; }
        .bl-filters button:hover { color: var(--blue); }
        .bl-filters button.is-active { background: var(--white); color: var(--blue-dark); font-weight: 600; box-shadow: var(--shadow-sm); border: 1px solid var(--border); }

        .bl-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.75rem; }

        @media (max-width: 768px) {
          .bl-feature { grid-template-columns: 1fr; gap: 0; }
          .bl-feature-img { order: -1; min-height: 0; aspect-ratio: 16 / 10; }
          .bl-feature-text { padding: 1.25rem 1rem 0.75rem; }
          .bl-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  )
}