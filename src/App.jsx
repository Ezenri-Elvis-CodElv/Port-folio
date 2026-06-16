import { useState, useRef } from 'react'
import { DEMOS } from './demoData'

function Nav() {
  return (
    <nav>
      <a className="nav-logo" href="#hero">elvis<span>.dev</span></a>
      <ul className="nav-links">
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#playground">Playground</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

function Hero() {
  return (
    <div id="hero">
      <div className="hero-inner">
        <div className="hero-tag">Available for remote roles</div>
        <h1>
          Ezenri<br/>
          <span className="name-accent">Elvis Chiazam</span>
        </h1>
        <p className="hero-sub">
          Full-Stack Developer based in Lagos, Nigeria. I build fintech mobile apps and web products with React Native, Next.js, and Node.js — from architecture to App Store.
        </p>
        <div className="hero-ctas">
          <a href="#projects" className="btn btn-primary">View my work →</a>
          <a href="mailto:ezenrielvis@gmail.com" className="btn btn-ghost">Get in touch</a>
        </div>
        <div className="hero-stats">
          <div>
            <div className="stat-num">2+</div>
            <div className="stat-label">Years experience</div>
          </div>
          <div>
            <div className="stat-num">4</div>
            <div className="stat-label">Production apps shipped</div>
          </div>
          <div>
            <div className="stat-num">4</div>
            <div className="stat-label">African markets</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Projects() {
  return (
    <section id="projects">
      <div className="section-eyebrow">Selected work</div>
      <h2 className="section-title">Projects</h2>
      <p className="section-desc">Production applications shipped to real users — not demos.</p>

      <div className="projects-grid">

        {/* Swappid */}
        <div className="project-card">
          <div className="project-type">Fintech · Mobile App</div>
          <div className="project-header">
            <div className="project-name"><a href="https://swappid.com" target="_blank" rel="noreferrer">Swappid</a></div>
            <div className="project-links">
              <a className="project-link" href="https://swappid.com" target="_blank" rel="noreferrer" title="Live site">↗</a>
            </div>
          </div>
          <p className="project-desc">
            Crypto-to-NGN off-ramp and digital wallet app. Replaced an existing Flutter app on the App Store under the same bundle ID — zero disruption to active users.
          </p>
          <ul className="project-highlights">
            <li>Off-ramp for USDT, BTC, ETH, SOL, BNB, TRX, USDC with real-time WebSocket/SSE updates</li>
            <li>NGN digital wallet — virtual bank account, Stripe card payments, withdrawals</li>
            <li>Multi-tier KYC (Tier 0–2): BVN/NIN, address verification, step-aware wizard</li>
            <li>Complete bill payments: airtime, data, electricity, DStv/GOtv, flights, betting</li>
            <li>Biometric auth, TOTP 2FA, transaction PIN, device session management</li>
            <li>Dual light/dark design system — App Store + Play Store via EAS Build</li>
          </ul>
          <div className="tag-row">
            <span className="tag">React Native 0.81</span>
            <span className="tag">Expo 54</span>
            <span className="tag">TypeScript</span>
            <span className="tag">TanStack Query</span>
            <span className="tag">Stripe</span>
            <span className="tag">WebSocket</span>
            <span className="tag">Redux Toolkit</span>
            <span className="tag">EAS Build</span>
          </div>
        </div>

        {/* Rovvo */}
        <div className="project-card">
          <div className="project-type">Fintech · Cross-Border Payments</div>
          <div className="project-header">
            <div className="project-name"><a href="https://rovvohq.com" target="_blank" rel="noreferrer">Rovvo Technologies</a></div>
            <div className="project-links">
              <a className="project-link" href="https://rovvohq.com" target="_blank" rel="noreferrer" title="Live site">↗</a>
            </div>
          </div>
          <p className="project-desc">
            Cross-border money transfer app serving Nigeria, Ghana, Kenya, and South Africa — real-time FX rates, multi-currency wallets, and multiple transfer rails.
          </p>
          <ul className="project-highlights">
            <li>Send Money: bank transfers (NIBSS resolution), Mobile Money, Rovvo-to-Rovvo</li>
            <li>Multi-currency wallet with live FX rates, masked balances, and transaction history</li>
            <li>10 auth screens: signup, email verification, biometric login, JWT sessions</li>
            <li>10 profile screens: 2FA (TOTP), PIN/password change, logged-in devices</li>
            <li>Custom design system: RVButton, RVInput, RVToast with NativeWind</li>
            <li>Offline-first state with Redux Toolkit + React Query + redux-persist</li>
          </ul>
          <div className="tag-row">
            <span className="tag">React Native</span>
            <span className="tag">Expo</span>
            <span className="tag">TypeScript</span>
            <span className="tag">Redux Toolkit</span>
            <span className="tag">React Query</span>
            <span className="tag">NativeWind</span>
            <span className="tag">JWT</span>
            <span className="tag">Biometric Auth</span>
          </div>
        </div>

      </div>
    </section>
  )
}

function Skills() {
  const groups = [
    {
      label: 'Mobile',
      items: ['React Native 0.81', 'Expo 54 / EAS Build', 'TypeScript', 'Reanimated', 'Gorhom Bottom Sheet'],
    },
    {
      label: 'Frontend',
      items: ['Next.js', 'React', 'Tailwind CSS', 'NativeWind'],
    },
    {
      label: 'Backend',
      items: ['Node.js / Express', 'REST APIs', 'WebSocket / SSE', 'MySQL', 'MongoDB'],
    },
    {
      label: 'State & Data',
      items: ['Redux Toolkit', 'TanStack Query', 'Axios', 'AsyncStorage', 'redux-persist'],
    },
    {
      label: 'Payments & Auth',
      items: ['Stripe', 'Kora Gateway', 'JWT / TOTP 2FA', 'BVN / NIN KYC', 'Google OAuth', 'Biometric Auth'],
    },
    {
      label: 'Cloud & DevOps',
      items: ['AWS', 'Cloudinary', 'EAS CI/CD', 'App Store & Play Store', 'Git / GitHub'],
    },
  ]

  return (
    <section id="skills" style={{ padding: 0 }}>
      <div id="skills">
        <div className="inner">
          <div className="section-eyebrow">What I work with</div>
          <h2 className="section-title">Skills</h2>
          <p className="section-desc" style={{ marginBottom: '2.5rem' }}>
            My day-to-day toolkit for building and shipping full-stack products.
          </p>
          <div className="skills-grid">
            {groups.map((g) => (
              <div className="skill-group" key={g.label}>
                <div className="skill-group-label">{g.label}</div>
                <div className="skill-list">
                  {g.items.map((item) => (
                    <span className="skill-item" key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Experience() {
  const roles = [
    {
      date: 'Mar 2026\nPresent',
      role: 'Full-Stack Developer',
      company: 'Swappid',
      href: 'https://swappid.com',
      desc: 'Led the rebuild of a consumer fintech app — crypto off-ramp, digital wallet, KYC, bill payments, and App Store deployment.',
    },
    {
      date: 'Jan 2026\nPresent',
      role: 'Full-Stack Developer',
      company: 'Rovvo Technologies',
      href: 'https://rovvohq.com',
      desc: 'Built a cross-border money transfer app for 4 African countries — FX rates, multi-currency wallets, Mobile Money, and a full custom design system.',
    },
    {
      date: 'Sep 2024\nMar 2025',
      role: 'Full-Stack Developer',
      company: 'Useremi',
      href: 'https://useremi.org',
      desc: 'Delivered a complete bill payments React Native app and Next.js admin dashboard in under one month.',
    },
    {
      date: 'Mar 2025\nApr 2025',
      role: 'Full-Stack Developer (Freelance)',
      company: 'Voice of the People (VOP)',
      href: 'https://vop.ng',
      desc: 'Built the full mobile app and Node.js backend for a radio/TV station — live feeds, news, Kora payment subscriptions, and Google OAuth.',
    },
  ]

  return (
    <section id="experience">
      <div className="section-eyebrow">Career</div>
      <h2 className="section-title">Experience</h2>
      <p className="section-desc">Full-time and contract roles building production software.</p>
      <div className="timeline">
        {roles.map((r) => (
          <div className="timeline-item" key={r.company}>
            <div className="timeline-date" style={{ whiteSpace: 'pre-line' }}>{r.date}</div>
            <div className="timeline-content">
              <div className="timeline-role">{r.role}</div>
              <a className="timeline-company" href={r.href} target="_blank" rel="noreferrer">{r.company}</a>
              <p className="timeline-desc">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Playground() {
  const [modal, setModal] = useState(null)
  const iframeRef = useRef(null)

  const cards = [
    { key: 'animated-login',   title: 'Animated Login',        img: '/Animated_Login.png',               desc: 'Rotating orange bar ring with glassmorphism login card',          tags: ['CSS Animation', 'Vanilla JS'] },
    { key: 'auth-form',        title: 'Sliding Auth Form',     img: '/Sliding_Auth_Form.png',            desc: 'Login / register panel with smooth sliding transitions',           tags: ['CSS Transitions', 'Form UX'] },
    { key: 'futuristic-login', title: 'Futuristic Terminal',   img: '/Futuristic_Terminal.png',          desc: 'Sci-fi login with animated grid, glitch effect, and cyan glow',    tags: ['CSS Keyframes', 'SVG Filters'] },
    { key: 'electric-cards',   title: '3D Electric Cards',     img: '/3D_Electric_Cards.png',            desc: 'Hover-tilt cards with animated turbulence SVG border glow',        tags: ['SVG feTurbulence', '3D CSS'] },
    { key: 'neon-auth',        title: 'Neon Auth',             img: '/Neon_Auth.png',                   desc: 'Neon-bordered login / register with animated background shapes',   tags: ['CSS Transform', 'Clip Path'] },
    { key: 'slider',           title: 'Card Slider',           img: '/Card_Slider.png',                 desc: 'Fullscreen hero image carousel with animated text reveal',         tags: ['DOM Manipulation', 'CSS Animation'] },
    { url: '/demos/toonhub.html',       title: 'TOONHUB Carousel',        img: '/TOONHUB_Carousel.png',             desc: '3D figurine carousel with depth-layered positioning and color-shifting backgrounds', tags: ['JS Animation', 'CSS Transitions'] },
    { url: '/demos/gaming-slider.html', title: 'Dragon Controller Slider', img: '/demos/images/img1.png',            desc: 'Rotating 3D gaming controller carousel with color-matched info panels',              tags: ['CSS 3D Transform', 'DOM Manipulation'] },
  ]

  function openDemo(card) {
    let url
    if (card.url) {
      url = card.url
    } else {
      const html = atob(DEMOS[card.key])
      const blob = new Blob([html], { type: 'text/html' })
      url = URL.createObjectURL(blob)
    }
    setModal({ title: card.title, url, isBlob: !card.url })
    document.body.style.overflow = 'hidden'
  }

  function closeDemo() {
    if (iframeRef.current) {
      const old = iframeRef.current.src
      iframeRef.current.src = 'about:blank'
      if (modal?.isBlob && old.startsWith('blob:')) URL.revokeObjectURL(old)
    }
    setModal(null)
    document.body.style.overflow = ''
  }

  return (
    <section id="playground">
      <div className="section-eyebrow">UI experiments</div>
      <h2 className="section-title">Playground</h2>
      <p className="section-desc">Mini-apps I built while experimenting with CSS, animations, and interaction design. Click any to open it live.</p>

      <div className="pg-grid">
        {cards.map((c) => (
          <div className="pg-card" key={c.key ?? c.url} onClick={() => openDemo(c)}>
            <img className="pg-card-img" src={c.img} alt={c.title} />
            <div className="pg-info">
              <div className="pg-name">{c.title}</div>
              <div className="pg-desc">{c.desc}</div>
              <div className="tag-row" style={{ marginTop: '.5rem' }}>
                {c.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={`demo-modal${modal ? ' open' : ''}`} onClick={(e) => { if (e.target === e.currentTarget) closeDemo() }}>
        <div className="demo-modal-bar">
          <span className="demo-modal-title">{modal?.title}</span>
          <button className="demo-modal-close" onClick={closeDemo}>✕ Close</button>
        </div>
        <iframe
          ref={iframeRef}
          className="demo-modal-frame"
          src={modal?.url || 'about:blank'}
          frameBorder="0"
          title={modal?.title}
        />
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact">
      <div className="section-eyebrow">Get in touch</div>
      <h2 className="section-title">Let's work together</h2>
      <p style={{ color: 'var(--text-dim)', fontSize: '1rem', lineHeight: 1.7, margin: '1rem 0 2rem' }}>
        I'm open to remote full-time and contract roles. If you're building something in fintech, mobile, or web — let's talk.
      </p>
      <a href="mailto:ezenrielvis@gmail.com" className="contact-email">ezenrielvis@gmail.com</a>
      <div className="social-row">
        <a className="social-link" href="https://www.linkedin.com/in/ezenri-elvis" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a className="social-link" href="https://github.com/Ezenri-Elvis-CodElv" target="_blank" rel="noreferrer">GitHub ↗</a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      Built by Ezenri Elvis · Lagos, Nigeria · Open to remote work
    </footer>
  )
}

export default function App() {
  return (
    <>
      <div className="glow" />
      <Nav />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Playground />
      <Contact />
      <Footer />
    </>
  )
}
