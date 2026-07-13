import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const ArrowLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 19l-7-7 7-7"/>
  </svg>
)

const posts = {
  'technovation-homabay-2024': {
    title: 'The Impact of Technovation in Homabay',
    date: 'June 2025',
    author: 'Global Shapers Nairobi',
    img: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200&q=80',
    content: [
      { type: 'p', text: 'In 2024, the Global Shapers Nairobi Hub was honored to receive the Innovation Prize, an initiative by the Global Shapers Community, Accenture, and the Global Alliance for YOUth. The prize celebrates and supports the most promising youth-led solutions that are building more inclusive and prosperous societies. For the Nairobi Hub, it marked the beginning of a transformative chapter, scaling our Technovation program to reach more marginalized girls across Kenya.' },
      { type: 'p', text: 'Thanks to the Innovation Prize, we were able to expand our reach to communities in Kibera, Kawangware, Kakuma, Narok, Samburu, and Homabay. This expansion brought not just a wider geographical footprint, but deeper partnerships that are now shaping the lives of girls who had previously been left out of the digital revolution.' },
      { type: 'h2', text: 'A Partnership That Changed Everything' },
      { type: 'p', text: 'One such impactful collaboration took place in Homabay County, where we partnered with Compassion International Kenya and KidsCodeLab to implement the Technovation programme. Compassion International provided access to ICT labs, internet connectivity, and logistical resources that ensured girls from remote communities could gather every Saturday to learn. Meanwhile, KidsCodeLab brought in dedicated mentors and trainers who guided the girls through hands-on coding sessions.' },
      { type: 'p', text: 'The Global Shapers Nairobi Hub supported the mentors and facilitators throughout the programme, ensuring they had access to training resources, transportation for each session, and all the materials they needed to deliver effectively.' },
      { type: 'h2', text: '25 Girls. 9 Communities. 12 Weeks.' },
      { type: 'p', text: 'Together, we impacted the lives of 25 girls from 9 Child Development Centres within the Homabay Cluster supported by Compassion International. These girls, drawn from Rusinga, Oriang, Lwanda, Homabay, Oyugis, Kadie, Rangwe, Nyagoro, and Rang\'ombe CDCs, began a 12-week learning journey in STEM and mobile application development. In just three months, they had developed functional prototypes and solutions for mobile and web apps addressing challenges within their communities.' },
      { type: 'quote', text: 'Partnering with the Global Shapers Nairobi Hub and KidsCodeLab was a game-changer for our girls. Through this collaboration, our girls not only gained access to ICT labs and reliable internet resources they had never had before, but also mentorship that nurtured their confidence, creativity, and problem-solving skills. The transformation in their engagement, self-esteem, and ambition over the 12-week journey was incredible.', attr: 'Alex Shiguri, Partnerships Lead, Compassion International Kenya' },
      { type: 'h2', text: 'Building Solutions for Their Communities' },
      { type: 'p', text: 'Each Saturday, the girls met at Compassion-supported centres, worked in teams, and built tech solutions addressing unemployment, gender-based violence, food insecurity, poor sexual health education, and harmful cultural practices.' },
      { type: 'quote', text: 'One of the most unforgettable moments during the Technovation programme was watching the girls bring GirlShield to life, a mobile app designed to fight gender-based violence in our community. I remember the late evenings they spent debating how to make the SOS button more accessible, and the teamwork that went into designing a reporting system that felt safe and anonymous. Their commitment, empathy, and creativity were beyond inspiring. Seeing them turn their lived experiences into a tech solution completely shifted how I view youth innovation. These girls are not just the future, they are already powerful changemakers today.', attr: 'Okoth Henry Maurice Ochieng, Mentor, KidsCodeLab' },
      { type: 'h2', text: 'What Comes Next' },
      { type: 'p', text: 'Moving forward, our mission remains clear: to ignite and sustain the spark we have seen in these girls and scale the impact even further. With over 174 girls already impacted, we are on track to reach an additional 100 girls by the end of 2025, and we are just getting started.' },
      { type: 'p', text: 'Through the Innovation Prize, the Nairobi Hub has not only accelerated its vision but proven what is possible when global opportunity meets local passion. We are grateful to our partners, mentors, and the brave girls who said yes to the journey. The future is theirs to code, and we will be right here, cheering them on.' },
    ],
  },
  'food-waste-nairobi': {
    title: 'The Food Wastage Problem in Nairobi and How We Plan to Solve It',
    date: 'July 2026',
    author: 'Global Shapers Nairobi',
    img: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=1200&q=80',
    content: [
      { type: 'p', text: 'Nairobi generates between 2,000 and 2,500 tonnes of waste daily, 80% of which is organic. A significant portion of this comes from the hospitality sector, where hotels and restaurants routinely discard surplus food that is still edible, while communities nearby face food insecurity.' },
      { type: 'p', text: 'This is the problem Global Shapers Nairobi is working to solve through our Food Wastage Solution project, a new initiative launching in 2026 in collaboration with PadMad Kenya and Woodland Star International School.' },
      { type: 'h2', text: 'What We Are Building' },
      { type: 'p', text: 'The Food Wastage Solution is a lightweight digital platform that helps Nairobi hotels track how much food is wasted after each meal service, reduce waste through data-driven insights, and redirect surplus edible food to vetted community partners before it ends up in landfill.' },
      { type: 'p', text: 'Think of it as the missing link between hotel kitchens and communities in need. Structured, trackable, and simple enough for a kitchen manager to use in two minutes.' },
      { type: 'h2', text: 'The Gap We Are Filling' },
      { type: 'p', text: 'Most food waste solutions in Kenya focus on the agricultural supply chain, connecting farms to markets. The hospitality-to-community redistribution angle is genuinely underserved. There is no platform or system designed specifically to help Nairobi hotels measure, reduce, and redirect surplus edible food to communities in need, in a structured and scalable way.' },
      { type: 'p', text: 'In March 2026, UNEP and UN Tourism jointly launched Recipe of Change, a global initiative to eliminate food waste across the hospitality and tourism sector. Hotels in Nairobi are actively looking for ways to participate. We are arriving at exactly the right moment.' },
    ],
  },
  'ai-education-nairobi': {
    title: 'When Opportunity Is Unequal: Girls, Access, and the Fight for AI Education in Nairobi',
    date: 'March 2026',
    author: 'Phylis Atieno',
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80',
    content: [
      { type: 'p', text: 'AI is often discussed as if its benefits will spread naturally. Students will learn faster, schools will modernise, and the future will open up equally for everyone. But that is not how change usually works in unequal systems.' },
      { type: 'p', text: 'In Nairobi, the conversation about AI in education must begin with a harder question: who actually gets to participate first? When new technology enters an already unequal environment, it rarely closes gaps. It benefits those who already have better schools, stronger infrastructure, and more support.' },
      { type: 'h2', text: 'A Fast-Moving City, Not Yet Equal Access' },
      { type: 'p', text: 'Kenya has visible technological momentum, growing public interest in innovation, and many young people eager to engage with what comes next. But for many students, especially those in underserved communities, the reality is vastly different. AI may be familiar as something seen on social media, but not yet as a meaningful educational tool.' },
      { type: 'quote', text: 'When you come into the local context, down to the average Kenyan, the context is very different.', attr: 'Phylis Atieno' },
      { type: 'h2', text: 'What Technovation Actually Opens Up' },
      { type: 'p', text: 'This is the significance of Technovation. The programme guides girls through a structured process of identifying a problem, researching users, developing an idea, and building it into an app or digital product. For girls who may never have been told they belong in technology, that matters enormously. A programme like this can become the first serious invitation.' },
      { type: 'p', text: 'This piece was informed by a conversation with Qiqing He, founder of the Global AI and Education Policy Observatory, whose full article on this subject can be found at their website.' },
    ],
  },
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts[slug]
  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  if (!post) {
    return (
      <div style={{ paddingTop: '8rem', textAlign: 'center', minHeight: '60vh' }}>
        <h2 style={{ color: 'var(--text-dark)', marginBottom: '1rem' }}>Post not found</h2>
        <Link to="/blog" className="arrow-link"><ArrowLeft /> Back to Blog</Link>
      </div>
    )
  }

  return (
    <div style={{ paddingTop: '5rem' }}>
      {/* Hero */}
      <div style={{ position: 'relative', height: 420, overflow: 'hidden' }}>
        <img src={post.img} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,25,41,0.4) 0%, rgba(10,25,41,0.85) 100%)' }}/>
        <div className="container" style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', paddingBottom: '3rem' }}>
          <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', fontWeight: 500, marginBottom: '1.5rem', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color='#fff'} onMouseLeave={e => e.currentTarget.style.color='rgba(255,255,255,0.7)'}>
            <ArrowLeft /> Back to Blog
          </Link>
          <h1 style={{ color: '#fff', fontSize: 'clamp(1.6rem,4vw,3rem)', fontWeight: 800, lineHeight: 1.2, letterSpacing: '-0.02em', maxWidth: 760 }}>{post.title}</h1>
          <div style={{ marginTop: '1rem', display: 'flex', gap: '1.5rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>
            <span>{post.author}</span>
            <span>{post.date}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ background: 'var(--white)', padding: 'clamp(3rem,6vw,5rem) 0' }}>
        <div className="container">
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            {post.content.map((block, i) => {
              if (block.type === 'p') return (
                <p key={i} style={{ color: 'var(--text-mid)', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: '1.5rem' }}>{block.text}</p>
              )
              if (block.type === 'h2') return (
                <h2 key={i} style={{ fontSize: 'clamp(1.3rem,2.5vw,1.8rem)', fontWeight: 700, color: 'var(--text-dark)', letterSpacing: '-0.02em', marginTop: '3rem', marginBottom: '1.25rem' }}>{block.text}</h2>
              )
              if (block.type === 'quote') return (
                <blockquote key={i} style={{
                  margin: '2.5rem 0', padding: '2rem 2rem 2rem 2.5rem',
                  borderLeft: '4px solid var(--blue)', borderRadius: '0 12px 12px 0',
                  background: 'var(--blue-light)',
                }}>
                  <p style={{ fontSize: '1rem', fontStyle: 'italic', color: 'var(--text-dark)', lineHeight: 1.8, marginBottom: '0.75rem' }}>{block.text}</p>
                  {block.attr && <cite style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--blue)', fontStyle: 'normal' }}>{block.attr}</cite>}
                </blockquote>
              )
              return null
            })}

            {/* Back link */}
            <div style={{ marginTop: '4rem', paddingTop: '2.5rem', borderTop: '1px solid var(--border)' }}>
              <Link to="/blog" className="arrow-link"><ArrowLeft /> Back to Blog</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
