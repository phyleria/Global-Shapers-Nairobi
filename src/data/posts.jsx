// All blog posts live here. The Blog page and each post page both read from this list.
//
// slug: the post's web address (/blog/your-slug). Use lowercase words joined by hyphens.
// category: used for the filter buttons on the Blog page.
// featured: true shows the post in the large box at the top of the Blog page (use it on one post).
// excerpt: the short summary shown on the Blog page.
// img: the main photo. Use a file in /public ('/photo.jpg') or a full image URL.
//
// content blocks, in the order they appear:
//   { type: 'p', text: '...' }                       a paragraph
//   { type: 'lead', text: '...' }                    a bold paragraph, good for opening a section
//   { type: 'h2', text: '...' }                      a section heading
//   { type: 'quote', text: '...', attr: 'Name, Role' }  a quote
//   { type: 'img', src: '/photo.jpg', caption: '...' }  a photo inside the article
//   { type: 'list', items: [{ lead: 'Bold start:', text: '...' }] }  a bullet list (lead is optional;
//                                                   add email: 'x@y.com' to make the text an email link)

export const posts = [
  {
    slug: 'technovation-homabay-2024',
    category: 'Education & Future of Work',
    featured: true,
    excerpt: 'In 2024, Global Shapers Nairobi Hub received the Innovation Prize, enabling us to scale Technovation to Kibera, Kawangware, Kakuma, Narok, Samburu, and Homabay. This is the story of 25 girls who built solutions for their communities.',
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
  
  {
    slug: 'ai-education-nairobi',
    category: 'Education & Future of Work',
    featured: false,
    excerpt: 'A conversation with Qiqing He, founder of the Global AI and Education Policy Observatory, on what access to tech and AI education really looks like on the ground in Kenya.',
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
  {
    slug: 'aacose-partnership',
    category: 'Press Release',
    featured: false,
    excerpt: 'Global Shapers Nairobi announces a partnership with the Annual Africa Conference on Social Entrepreneurship (AACOSE), bringing a network of young leaders together with a leading platform for social entrepreneurship across Africa.',
    title: 'Global Shapers Nairobi Hub and Annual Africa Conference on Social Entrepreneurship (AACOSE) join forces to advance social entrepreneurship in Africa',
    date: 'May 8, 2024',
    author: 'Global Shapers Nairobi',
    img: '/AACOSE25.webp',
    content: [
      { type: 'p', text: 'Global Shapers Nairobi, the Nairobi Hub of the World Economic Forum’s Global Shapers Community, announced a collaborative partnership with the Annual Africa Conference on Social Entrepreneurship (AACOSE). This exciting collaboration brings together a dynamic network of young leaders with a leading platform for social entrepreneurship across Africa.' },
      { type: 'p', text: 'Established in 2017 by the Institute for Social Transformation at Tangaza University College, AACOSE has established itself as a premier forum for collaboration among key stakeholders in the social entrepreneurship ecosystem. The conference fosters dialogue and action between leading social entrepreneurs, policymakers, academics, and investors, all united by a shared vision of a thriving social enterprise landscape in Africa.' },
      { type: 'p', text: 'Global Shapers Nairobi Hub, comprised of inspiring young leaders under 30, aligns perfectly with AACOSE’s mission. As part of a global network of over 14,000 members in 450 city-based hubs across 150 countries, Global Shapers Nairobi brings a unique perspective and a wealth of talent to the table. This partnership will empower young changemakers in Nairobi to actively participate in shaping the future of social entrepreneurship in Africa.' },
      { type: 'p', text: 'The theme of the upcoming AACOSE conference, “Building networks to advance social entrepreneurship in Africa,” perfectly encapsulates the spirit of this collaboration. By working together, Global Shapers Nairobi and AACOSE aim to:' },
      { type: 'list', items: [
        { lead: 'Amplify the voices of young social entrepreneurs:', text: 'Global Shapers Nairobi will provide a platform for young entrepreneurs to showcase their innovative solutions and connect with established figures in the field.' },
        { lead: 'Foster cross-generational knowledge exchange:', text: 'This partnership will encourage a dynamic exchange of ideas and experiences between seasoned social entrepreneurs and the next generation of leaders.' },
        { lead: 'Strengthen the social entrepreneurship ecosystem in Africa:', text: 'By building stronger networks and fostering collaboration, this initiative aims to create a more supportive environment for social enterprises to thrive across the continent.' },
      ] },
      { type: 'quote', text: 'In spite of the continued growth, social entrepreneurship is still very unpopular in many countries. Therefore, accelerating social entrepreneurship in Africa requires strengthening the existing and emerging networks supporting social entrepreneurs. As social entrepreneurship continues to grow, there are local or national social entrepreneurship networks that have already been formed in some African countries. It is time to bring these existing networks together towards a continental network and strengthen their efforts.', attr: 'Dr. Br Jonas Yawovi Dzinekou' },
      { type: 'quote', text: 'This partnership between Global Shapers Nairobi and AACOSE underscores our shared commitment to nurturing the next generation of social innovators and change-makers across Africa. By harnessing the collective power of our networks, we aim to unlock new opportunities, spark innovative solutions, and create lasting impact in communities across the continent. We look forward to a lasting collaboration between our organisations to drive change through social entrepreneurship.', attr: 'Trevor Koronei, Incoming Curator, Global Shapers Nairobi Hub' },
      { type: 'h2', text: 'About Global Shapers Nairobi' },
      { type: 'p', text: 'Global Shapers Nairobi is the Nairobi Hub of the World Economic Forum’s Global Shapers Community, a network of young people under the age of 30 who are driving positive change. The Hub brings together a diverse group of young leaders from various sectors who are passionate about addressing local, regional, and global challenges through innovative projects and collaborative initiatives. The Hub actively engages in shaping policies and implementing solutions that enhance community development and foster societal progress.' },
      { type: 'h2', text: 'About the Annual Africa Conference on Social Entrepreneurship (AACOSE)' },
      { type: 'p', text: 'The Annual Africa Conference on Social Entrepreneurship (AACOSE) is a leading platform for social entrepreneurship in Africa. Founded in 2017 by the Institute for Social Transformation at Tangaza University College, AACOSE convenes key stakeholders in the social entrepreneurship ecosystem to foster dialogue, collaboration, and action.' },
      { type: 'h2', text: 'Media contacts' },
      { type: 'list', items: [
        { lead: 'Global Shapers Nairobi Hub:', text: 'globalshapersnairobi@gmail.com', email: 'globalshapersnairobi@gmail.com' },
        { lead: 'AACOSE:', text: 'aacose@tangaza.ac.ke', email: 'aacose@tangaza.ac.ke' },
      ] },
    ],
  },
]