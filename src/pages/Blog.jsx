import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const posts = [
  {
    slug: 'technovation-homabay-2024',
    title: 'The Impact of Technovation in Homabay',
    excerpt: 'In 2024, Global Shapers Nairobi Hub received the Innovation Prize, enabling us to scale Technovation to Kibera, Kawangware, Kakuma, Narok, Samburu, and Homabay. This is the story of 25 girls who built solutions for their communities.',
    date: 'June 2025',
    author: 'Global Shapers Nairobi',
    img: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80',
    featured: true,
  },
  {
    slug: 'food-waste-nairobi',
    title: 'The Food Wastage Problem in Nairobi and How We Plan to Solve It',
    excerpt: 'Nairobi generates 2,000 to 2,500 tonnes of waste daily, 80% of which is organic. Here is what we are building to change that, starting with the hospitality sector.',
    date: 'July 2026',
    author: 'Global Shapers Nairobi',
    img: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&q=80',
    featured: false,
  },
  {
    slug: 'ai-education-nairobi',
    title: 'When Opportunity Is Unequal: Girls, Access, and the Fight for AI Education in Nairobi',
    excerpt: 'A conversation with Qiqing He, founder of the Global AI and Education Policy Observatory, on what access to tech and AI education really looks like on the ground in Kenya.',
    date: 'March 2026',
    author: 'Phylis Atieno',
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
    featured: false,
  },
]



export default function BlogPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const featured = posts.find(p => p.featured)
  const rest = posts.filter(p => !p.featured)

  return (
    <div style={{ paddingTop: '5rem' }}>
      {/* Hero */}
     

      <div style={{ background: 'var(--white)', padding: 'clamp(3rem,6vw,5rem) 0' }}>
        <div className="container">
          {/* Featured post */}
          {featured && (
            <div style={{ marginBottom: '3.5rem' }}>
              <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>Featured</p>
              <div style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr',
                gap: '0', borderRadius: 'var(--radius)', overflow: 'hidden',
                border: '1px solid var(--border)', boxShadow: 'var(--shadow-md)',
              }} className="featured-grid">
                <div style={{  minHeight: '380px', overflow: 'hidden' }}>
                  <img src={featured.img} alt={featured.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  </div>
                  <h2 style={{ fontSize: 'clamp(1.3rem,2.5vw,2rem)', fontWeight: 800, color: 'var(--text-dark)', lineHeight: 1.25, marginBottom: '1rem', letterSpacing: '-0.02em' }}>{featured.title}</h2>
                  <p style={{ color: 'var(--text-mid)', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '2rem' }}>{featured.excerpt}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
                    <div>
                      <p style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-dark)' }}>{featured.author}</p>
                      <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{featured.date}</p>
                    </div>
                    <Link to={`/blog/${featured.slug}`} className="arrow-link">
                      Read more
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Rest of posts */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.5rem' }} className="blog-grid">
            {rest.map((post, i) => (
              <Link to={`/blog/${post.slug}`} key={i} style={{
                background: 'var(--white)', borderRadius: 'var(--radius)',
                border: '1px solid var(--border)', overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow='var(--shadow-md)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='var(--shadow-sm)'; }}
              >
                <div style={{ height: 200, overflow: 'hidden' }}>
                  <img src={post.img} alt={post.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }} />
                </div>
                <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-dark)', lineHeight: 1.35, marginBottom: '0.75rem' }}>{post.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-mid)', lineHeight: 1.75, flex: 1, marginBottom: '1.5rem' }}>{post.excerpt}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                    <div>
                      <p style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-dark)' }}>{post.author}</p>
                      <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{post.date}</p>
                    </div>
                    <span className="arrow-link" style={{ fontSize: '0.82rem' }}>Read more <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){.featured-grid{grid-template-columns:1fr !important}.blog-grid{grid-template-columns:1fr !important}}
      `}</style>
    </div>
  )
}
