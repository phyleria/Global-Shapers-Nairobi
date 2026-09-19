import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { posts } from '../data/posts'

const ArrowLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M19 12H5M12 19l-7-7 7-7"/>
  </svg>
)

function Block({ block }) {
  switch (block.type) {
    case 'h2': return <h2>{block.text}</h2>
    case 'lead': return <p className="bp-lead">{block.text}</p>
    case 'quote': return (
      <blockquote>
        <p>“{block.text}”</p>
        {block.attr && <cite>{block.attr}</cite>}
      </blockquote>
    )
    case 'img': return (
      <figure>
        <img src={block.src} alt={block.caption || ''} loading="lazy" />
        {block.caption && <figcaption>{block.caption}</figcaption>}
      </figure>
    )
    case 'list': return (
      <ul className="bp-list">
        {block.items.map((item, j) => (
          <li key={j}>
            {item.lead && <strong>{item.lead} </strong>}
            {item.email ? <a href={`mailto:${item.email}`}>{item.text}</a> : item.text}
          </li>
        ))}
      </ul>
    )
    default: return <p>{block.text}</p>
  }
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find(p => p.slug === slug)
  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  if (!post) {
    return (
      <div style={{ paddingTop: '8rem', textAlign: 'center', minHeight: '60vh' }}>
        <h1 style={{ color: 'var(--text-dark)', fontSize: '1.6rem', marginBottom: '1rem' }}>Post not found</h1>
        <Link to="/blog" className="arrow-link"><ArrowLeft /> Back to blog</Link>
      </div>
    )
  }

  const more = posts.filter(p => p.slug !== slug).slice(0, 2)

  return (
    <article className="bp-page">
      <header className="bp-head">
        <div className="container bp-head-inner">
          <Link to="/blog" className="bp-back"><ArrowLeft /> All posts</Link>
          <div className="bp-meta">
            <span className="bp-pill">{post.category}</span>
            <span>{post.date}</span>
            {post.author && post.author !== 'Global Shapers Nairobi' && <span>By {post.author}</span>}
          </div>
          <h1 className={post.title.length > 80 ? 'is-long' : ''}>{post.title}</h1>
        </div>
      </header>

      <div className="container">
        <div className="bp-body">
          {post.content.map((block, i) => <Block key={i} block={block} />)}
        </div>
      </div>

      {more.length > 0 && (
        <section className="bp-more">
          <div className="container bp-more-inner">
            <h2>More from the blog</h2>
            <div className="bp-more-grid">
              {more.map(p => (
                <Link key={p.slug} to={`/blog/${p.slug}`} className="bp-more-card">
                  <div className="bp-more-img"><img src={p.img} alt="" loading="lazy" /></div>
                  <p className="bp-more-meta">{p.category} • {p.date}</p>
                  <h3>{p.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <style>{`
        .bp-page { padding-top: 4.5rem; background: var(--white); }
        .bp-head { background: var(--blue-light); padding: clamp(2rem, 4vw, 3rem) 0 clamp(2.5rem, 5vw, 3.5rem); }
        .bp-head-inner { max-width: 1240px; }
        .bp-back { display: inline-flex; align-items: center; gap: 0.4rem; font-size: 0.82rem; color: var(--text-mid); margin-bottom: 2rem; transition: color 0.2s; }
        .bp-back:hover { color: var(--blue); }
        .bp-meta { display: flex; align-items: center; flex-wrap: wrap; gap: 0.5rem 1.1rem; font-size: 0.8rem; color: var(--text-muted); margin-bottom: 1rem; }
        .bp-pill { background: var(--white); color: var(--blue-dark); font-weight: 600; padding: 0.3rem 0.7rem; border-radius: 6px; }
        .bp-head h1 { font-size: clamp(1.9rem, 4.5vw, 3.1rem); font-weight: 500; line-height: 1.15; letter-spacing: -0.02em; color: var(--text-dark); }
        .bp-head h1.is-long { font-size: clamp(1.7rem, 3.6vw, 2.6rem); }


        .bp-body { max-width: 680px; margin: 0 auto; padding: clamp(3rem, 6vw, 4.5rem) 0; }
        .bp-body > p { font-size: 1.02rem; line-height: 1.85; color: var(--text-mid); margin-bottom: 1.25rem; }
        .bp-body .bp-lead { font-weight: 600; color: var(--text-dark); }
        .bp-body h2 { font-size: clamp(1.5rem, 3vw, 2.1rem); font-weight: 500; letter-spacing: -0.02em; line-height: 1.2; color: var(--text-dark); margin: 3rem 0 1.1rem; }
        .bp-body h2:first-child { margin-top: 0; }
        .bp-body blockquote { margin: 2.25rem 0; padding: 0.25rem 0 0.25rem 1.5rem; border-left: 2px solid var(--blue); }
        .bp-body blockquote p { font-size: 1.05rem; line-height: 1.75; color: var(--text-dark); margin-bottom: 0.75rem; }
        .bp-list { margin: 0 0 1.5rem; padding-left: 1.25rem; display: flex; flex-direction: column; gap: 0.75rem; }
        .bp-list li { font-size: 1.02rem; line-height: 1.75; color: var(--text-mid); padding-left: 0.25rem; }
        .bp-list li::marker { color: var(--blue); }
        .bp-list strong { color: var(--text-dark); font-weight: 600; }
        .bp-list a { color: var(--blue); text-decoration: underline; text-underline-offset: 3px; }
        .bp-body cite { font-size: 0.82rem; font-style: normal; font-weight: 600; color: var(--blue); }
        .bp-body figure { margin: 2.5rem -4rem; }
        .bp-body figure img { width: 100%; border-radius: 6px; }
        .bp-body figcaption { font-size: 0.75rem; color: var(--text-muted); margin-top: 0.6rem; padding-left: 0.6rem; border-left: 2px solid var(--text-dark); }

        .bp-more { border-top: 1px solid var(--border); background: var(--off-white); padding: clamp(3rem, 6vw, 4.5rem) 0; }
        .bp-more-inner { max-width: 1040px; }
        .bp-more h2 { font-size: 1.5rem; font-weight: 500; color: var(--text-dark); margin-bottom: 1.75rem; }
        .bp-more-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
        .bp-more-img { aspect-ratio: 16 / 10; overflow: hidden; margin-bottom: 0.9rem; background: var(--light-gray); }
        .bp-more-img img { width: 100%; height: 100%; object-fit: cover; }
        .bp-more-meta { font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.4rem; }
        .bp-more-card h3 { font-size: 1.05rem; font-weight: 600; line-height: 1.35; color: var(--text-dark); transition: color 0.2s; }
        .bp-more-card:hover h3 { color: var(--blue); }
        .bp-page a:focus-visible { outline: 2px solid var(--blue); outline-offset: 3px; }

        @media (max-width: 860px) { .bp-body figure { margin-left: 0; margin-right: 0; } }
        @media (max-width: 600px) { .bp-more-grid { grid-template-columns: 1fr; } }
      `}</style>
    </article>
  )
}