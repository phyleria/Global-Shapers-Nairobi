// Auto-scrolling photo strip using real Unsplash images of African youth community moments
const PHOTOS = [
  { url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80', alt: 'Young leaders collaborating' },
  { url: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&q=80', alt: 'Community meeting' },
  { url: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&q=80', alt: 'Women in tech workshop' },
  { url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80', alt: 'Panel discussion' },
  { url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80', alt: 'Group workshop' },
  { url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80', alt: 'Team collaboration' },
  { url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80', alt: 'Girls coding' },
  { url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80', alt: 'Conference event' },
]
// Duplicate for seamless loop
const ALL = [...PHOTOS, ...PHOTOS]

export default function PhotoMarquee() {
  return (
    <section style={{
      background: 'var(--off-black)',
      padding: '0',
      overflow: 'hidden',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
    }}>
      {/* Label */}
      <div style={{
        padding: '1.5rem 2rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        maxWidth: 1160, margin: '0 auto',
      }}>
        <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)' }}>
          Our Community in Action
        </span>
        <a href="https://instagram.com/globalshapersnairobi" target="_blank" rel="noopener"
          style={{ fontSize: '0.75rem', color: 'var(--teal)', fontWeight: 600 }}>
          @globalshapersnairobi →
        </a>
      </div>

      {/* Scrolling strip */}
      <div style={{ display: 'flex', gap: '1rem', overflow: 'hidden', paddingBottom: '2rem' }}>
        <div style={{
          display: 'flex', gap: '1rem', flexShrink: 0,
          animation: 'marquee 40s linear infinite',
        }}>
          {ALL.map((p, i) => (
            <div key={i} style={{
              width: 300, height: 220, flexShrink: 0,
              borderRadius: 12, overflow: 'hidden',
              background: 'var(--off-black)',
            }}>
              <img
                src={p.url}
                alt={p.alt}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                onError={e => { e.target.style.display = 'none' }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          div[style*="marquee"] { animation: none !important; }
        }
      `}</style>
    </section>
  )
}
