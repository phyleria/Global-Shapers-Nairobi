import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// Edit events here. Events move from "Upcoming" to "Past" automatically once their date has passed.
// date: '2026-12-05' for a full date, '2026-10' if only the month is known, '2024' if only the year.
// open: true if the public can attend. link: registration URL (leave '' until registration opens).
// img: photo in /public or a full image URL.
const events = [
  { title: 'Meet the Leader Session', date: '2026-08-20', time: '7:00 PM', location: 'Virtual', desc: 'An honest conversation with two leaders, Joseph Nguthiru and Michael Waiyaki, who are helping shape a more sustainable future for Nairobi.', open: true, link: '', img: '/MTL (3).png' },
  { title: 'How to Get Into a Top Masters Program', date: '2026-09-30', time: '7:00 PM', location: 'Virtual',   open: true, img: '/gsn-team.jpeg', link: '/events' },
  { title: 'Open House Event', date: '2026-10-03', time: '7:00 PM', location: 'Nairobi', open: true, img: '/About-3.jpg', link: '/events' },

]

// Works out the date badge and whether the event is over
function parseDate(str) {
  const [y, m, d] = str.split('-').map(Number)
  if (d) {
    const date = new Date(y, m - 1, d)
    return {
      top: date.toLocaleDateString('en-GB', { weekday: 'short' }),
      big: d,
      bottom: date.toLocaleDateString('en-GB', { month: 'short' }),
      label: date.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }),
      end: new Date(y, m - 1, d, 23, 59),
    }
  }
  if (m) {
    const date = new Date(y, m - 1, 1)
    const mon = date.toLocaleDateString('en-GB', { month: 'short' })
    return { top: y, big: mon, bottom: 'Date TBC', label: `${date.toLocaleDateString('en-GB', { month: 'long' })} ${y}, date to be confirmed`, end: new Date(y, m, 0, 23, 59) }
  }
  return { top: '', big: y, bottom: '', label: String(y), end: new Date(y, 11, 31, 23, 59) }
}

const PinIcon = ({ virtual }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {virtual
      ? <><rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></>
      : <><path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></>}
  </svg>
)

function EventCard({ e, isPast }) {
  const d = parseDate(e.date)
  const isExternal = e.link.startsWith('http')

  let action
  if (isPast) action = <span className="ev-btn ev-btn-muted">Past event</span>
  else if (!e.open) action = <span className="ev-btn ev-btn-muted">Hub members only</span>
  else if (!e.link) action = <span className="ev-btn ev-btn-muted">Registration opens soon</span>
  else if (isExternal) action = <a href={e.link} target="_blank" rel="noreferrer" className="ev-btn">Register now</a>
  else action = <Link to={e.link} className="ev-btn">Register now</Link>

  return (
    <article className="ev-card">
      <img src={e.img} alt="" loading="lazy" />
      <div className="ev-overlay" />

      <div className="ev-date" aria-label={d.label}>
        {d.top !== '' && <span className="ev-weekday">{d.top}</span>}
        <span className="ev-daymonth">
          <strong>{d.big}</strong>
          {d.bottom && <span>{d.bottom}</span>}
        </span>
      </div>


      <div className="ev-body">
        <p className="ev-loc">
          <PinIcon virtual={e.location.toLowerCase().startsWith('virtual')} />
          {e.location}{e.time && ` · ${e.time}`}
        </p>
        <h2 className="ev-title">{e.title}</h2>
        <p className="ev-desc">{e.desc}</p>
        {action}
      </div>
    </article>
  )
}

export default function EventsPage() {
  const [tab, setTab] = useState('upcoming')
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const now = new Date()
  const withState = events.map(e => ({ e, isPast: parseDate(e.date).end < now }))
  const upcoming = withState.filter(x => !x.isPast).sort((a, b) => parseDate(a.e.date).end - parseDate(b.e.date).end)
  const past = withState.filter(x => x.isPast).sort((a, b) => parseDate(b.e.date).end - parseDate(a.e.date).end)
  const list = tab === 'upcoming' ? upcoming : past

  return (
    <div style={{ paddingTop: '5rem' }}>
      <div style={{ background: 'var(--white)', borderBottom: '1px solid var(--border)', position: 'sticky', top: 68, zIndex: 10 }}>
        <div className="container" style={{ display: 'flex' }} role="tablist">
          {['upcoming', 'past'].map(t => (
            <button key={t} role="tab" aria-selected={tab === t} onClick={() => setTab(t)} className={`ev-tab${tab === t ? ' is-active' : ''}`}>
              {t === 'upcoming' ? 'Upcoming events' : 'Past events'}
            </button>
          ))}
        </div>
      </div>

      <div style={{ background: 'var(--off-white)', padding: 'clamp(2.5rem,5vw,4rem) 0', minHeight: '60vh' }}>
        <div className="container">
          {list.length > 0 ? (
            <div className="ev-grid">
              {list.map(({ e, isPast }, i) => <EventCard key={`${e.title}-${e.date}-${i}`} e={e} isPast={isPast} />)}
            </div>
          ) : (
            <p className="ev-empty">
              {tab === 'upcoming'
                ? 'No upcoming events right now. Follow us on social media to hear about the next one.'
                : 'Past events will appear here.'}
            </p>
          )}
        </div>
      </div>

      <style>{`
        .ev-tab {
          padding: 1.1rem 1.75rem; font-size: 0.9rem; font-weight: 600; color: var(--text-muted);
          border-bottom: 2.5px solid transparent; transition: color 0.2s;
        }
        .ev-tab.is-active { color: var(--blue); border-bottom-color: var(--blue); }
        .ev-tab:focus-visible { outline: 2px solid var(--blue); outline-offset: -4px; }

        .ev-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .ev-card {
          position: relative; min-height: 500px; border-radius: 18px; overflow: hidden;
          background: var(--blue-dark); color: var(--white);
          box-shadow: var(--shadow-sm); transition: box-shadow 0.3s;
          display: flex; flex-direction: column; justify-content: flex-end;
        }
        .ev-card:hover { box-shadow: var(--shadow-lg); }
        .ev-card > img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
        .ev-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, rgba(4,26,70,0.25) 0%, rgba(4,26,70,0.4) 35%, rgba(4,26,70,0.92) 100%);
        }

        .ev-date {
  position: absolute; 
  top: 1rem; 
  left: 1rem; 
  min-width: 58px;
  border-radius: 8px; 
  overflow: hidden; 
  text-align: center;
  box-shadow: 0 4px 14px rgba(0,0,0,0.2);
border: 1px solid rgba(255,255,255,0.6);
}
        .ev-weekday { display: block; background: var(--white); color: var(--text-dark); font-size: 0.75rem; font-weight: 500; padding: 0.3rem 0.5rem; }
        .ev-daymonth { display: block; background: var(--blue-dark); color: var(--white); font-size: 0.72rem; padding: 0.35rem 0.5rem 0.45rem; line-height: 1.2; }
        .ev-daymonth strong { display: block; font-size: 1.35rem; font-weight: 600; }

        .ev-type {
          position: absolute; top: 1rem; right: 1rem;
          font-size: 0.72rem; font-weight: 600; padding: 0.35rem 0.75rem; border-radius: 100px;
          background: rgba(255,255,255,0.18); color: var(--white); backdrop-filter: blur(6px);
        }

        .ev-body { position: relative; padding: 1.25rem; }
        .ev-loc { display: flex; align-items: center; gap: 0.45rem; font-size: 0.82rem; color: rgba(255,255,255,0.85); margin-bottom: 0.5rem; }
        .ev-title { font-size: 1.5rem; font-weight: 700; line-height: 1.2; margin-bottom: 0.6rem; letter-spacing: -0.01em; }
        .ev-desc { font-size: 0.85rem; line-height: 1.6; color: rgba(255,255,255,0.8); margin-bottom: 1.25rem; }
        .ev-btn {
          display: block; text-align: center; padding: 0.85rem; border-radius: 8px;
          background: var(--white); color: var(--blue-dark); font-size: 0.9rem; font-weight: 600;
          transition: background 0.25s, color 0.25s;
        }
        a.ev-btn:hover { background: rgba(6,50,133,0.85); color: var(--white); }
        a.ev-btn:focus-visible { outline: 2px solid var(--white); outline-offset: 2px; }
        .ev-btn-muted { background: rgba(255,255,255,0.14); color: rgba(255,255,255,0.85); border: 1px solid rgba(255,255,255,0.25); }

        .ev-empty { text-align: center; color: var(--text-muted); padding: 3rem 1rem; }

        @media (max-width: 960px) { .ev-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 600px) { .ev-grid { grid-template-columns: 1fr; } .ev-card { min-height: 460px; } .ev-tab { padding: 1rem 1.1rem; } }
      `}</style>
    </div>
  )
}