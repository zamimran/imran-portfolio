import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone,
  Code2, Database, ShieldCheck, Terminal, GraduationCap, BriefcaseBusiness,
  Award, Menu, X, ExternalLink, ChevronRight
} from 'lucide-react'
import { profile } from './config'

const skills = [
  { title: 'Languages & Core', icon: Code2, items: ['Java', 'OOPs', 'Exception Handling', 'Collections Framework', 'Concurrency', 'Multithreading', 'SQL', 'DSA'] },
  { title: 'Backend & Cloud', icon: Database, items: ['Spring Boot', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'JDBC', 'JSP', 'Servlets', 'JWT', 'OAuth2', 'REST APIs', 'AWS'] },
  { title: 'Tools & Workflow', icon: Terminal, items: ['Git', 'GitHub', 'Maven', 'Postman', 'Eclipse', 'IntelliJ IDEA', 'VS Code', 'SDLC', 'Agile', 'Jira'] },
]
const projects = [
  {
    number: '01', title: 'Full Stack Authentication System',
    type: 'SECURITY · FULL STACK',
    description: 'A secure authentication application with email/password sign-in and OAuth2 social login, backed by Spring Security and JWT.',
    points: [
      'Implemented Google and GitHub OAuth2 login with access and refresh tokens.',
      'Added role-based access control, custom security filters, and BCrypt password hashing.',
      'Built a React interface with protected routes and Axios interceptors for token refresh.',
      'Designed the persistence layer using Spring Data JPA and MySQL.'
    ],
    stack: ['Spring Boot', 'Spring Security', 'JWT', 'OAuth2', 'React', 'MySQL'],
    github: profile.projects.authenticationGithub, live: profile.projects.authenticationLive
  },
  {
    number: '02', title: 'URL Shortener',
    type: 'BACKEND · WEB APPLICATION',
    description: 'A web application that converts long URLs into compact, shareable links and redirects visitors to their original destinations.',
    points: [
      'Designed a layered architecture: Controller, Service, Repository, Entity, and DTO.',
      'Implemented short-code generation and reuse of existing URL mappings.',
      'Stored URL mappings in MySQL using Spring Data JPA.',
      'Handled unknown short codes with 404 responses and tested creation and redirection flows.'
    ],
    stack: ['Java', 'Spring Boot', 'Spring Data JPA', 'MySQL', 'HTML', 'CSS'],
    github: profile.projects.shortenerGithub, live: profile.projects.shortenerLive
  }
]
const socials = [
  { label: 'GitHub', url: profile.links.github, icon: Github },
  { label: 'LinkedIn', url: profile.links.linkedin, icon: Linkedin },
  { label: 'LeetCode', url: profile.links.leetcode, icon: Code2 },
].filter(x => x.url)

function SectionTitle({ eyebrow, title, note }: { eyebrow: string; title: string; note?: string }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{note && <p>{note}</p>}</div>
}
function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const nav = ['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact']
  const closeMenu = () => setMenuOpen(false)
  return (
    <div className="site-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">MI</span><span>md<span className="accent">imran</span></span></a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>{nav.map(n => <a key={n} href={`#${n.toLowerCase()}`} onClick={closeMenu}>{n}</a>)}</nav>
        <a className="nav-cta" href={`mailto:${profile.email}`}>Let’s talk <ArrowUpRight size={15}/></a>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <motion.div className="hero-copy" initial={{opacity:0,y:22}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
            <div className="availability"><span className="pulse" /> OPEN TO ENTRY-LEVEL OPPORTUNITIES</div>
            <p className="hero-kicker">HELLO, I'M</p>
            <h1>Md Imran<span className="hero-dot">.</span></h1>
            <h2>Java Backend<br/><span className="outline-text">Developer</span></h2>
            <p className="hero-description">Graduate Software Engineer focused on Java, Spring Boot, REST APIs, and secure backend development. I enjoy turning complex problems into clean, practical solutions.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
              <a className="button button-ghost" href={`mailto:${profile.email}`}>Get in touch <Mail size={16}/></a>
            </div>
            <div className="hero-meta"><span><MapPin size={14}/>{profile.location}</span><span className="meta-separator"/><span>Java · Spring Boot · SQL</span></div>
          </motion.div>
          <motion.div className="hero-visual" initial={{opacity:0,scale:.92}} animate={{opacity:1,scale:1}} transition={{duration:.8,delay:.15}}>
            <div className="orbit orbit-a"/><div className="orbit orbit-b"/>
            <div className="profile-card">
              <div className="card-top"><span>PROFILE / 001</span><span className="card-live">● AVAILABLE</span></div>
              <div className="avatar"><img src="/profile.jpeg" alt="Md Imran" /></div>
              <div className="profile-card-name">Md Imran</div>
              <div className="profile-card-role">Graduate Software Engineer</div>
              <div className="card-rule"/>
              <div className="code-line"><span className="code-muted">01</span><span className="code-purple">const</span> focus = <span className="code-green">'Backend'</span>;</div>
              <div className="code-line"><span className="code-muted">02</span><span className="code-purple">const</span> language = <span className="code-green">'Java'</span>;</div>
              <div className="code-line"><span className="code-muted">03</span><span className="code-purple">const</span> mindset = <span className="code-green">'Always learning'</span>;</div>
              <div className="card-bottom"><span>BUILT WITH CURIOSITY</span><Code2 size={17}/></div>
            </div>
            <div className="floating-tag tag-java"><span className="tag-icon">☕</span> Java</div>
            <div className="floating-tag tag-spring"><span className="tag-spring-dot"/> Spring Boot</div>
            <div className="floating-tag tag-sql"><Database size={14}/> SQL</div>
          </motion.div>
          <a href="#about" className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></a>
        </section>

        <section className="section-wrap content-section" id="about">
          <SectionTitle eyebrow="01 / ABOUT ME" title="A little about my journey." note="Curious by nature. Focused on building a strong foundation in backend engineering."/>
          <div className="about-grid">
            <div className="about-main"><p className="lead">I’m a <strong>Graduate Software Engineer</strong> with hands-on experience in Java and backend development. My focus areas include building REST APIs, implementing authentication and authorization, and working with relational databases.</p><p>Through my projects and Java Full Stack Development training at QSpiders, I’m strengthening my understanding of application architecture and modern backend technologies. I value readable code, thoughtful problem-solving, and continuous learning.</p><p>I’m currently seeking an entry-level Java Developer opportunity where I can contribute, learn from a collaborative team, and grow as an engineer.</p></div>
            <div className="about-facts">
              <div className="fact"><span className="fact-label">CURRENT FOCUS</span><strong>Java & Backend Development</strong></div>
              <div className="fact"><span className="fact-label">EDUCATION</span><strong>B.E. · Information Science</strong></div>
              <div className="fact"><span className="fact-label">BASED IN</span><strong>{profile.location}</strong></div>
              <div className="fact"><span className="fact-label">APPROACH</span><strong>Learn · Build · Improve</strong></div>
            </div>
          </div>
        </section>

        <section className="section-wrap content-section" id="skills">
          <SectionTitle eyebrow="02 / TOOLKIT" title="Technologies I work with." note="A practical toolkit across Java fundamentals, backend development, databases, and developer tools."/>
          <div className="skill-grid">{skills.map((group, i) => <motion.div className="skill-card" key={group.title} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.1}}><div className="skill-card-head"><span className="skill-icon"><group.icon size={19}/></span><span className="skill-index">0{i+1}</span></div><h3>{group.title}</h3><div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div></motion.div>)}</div>
        </section>

        <section className="section-wrap content-section" id="projects">
          <SectionTitle eyebrow="03 / SELECTED WORK" title="Projects built with purpose." note="A closer look at the applications I’ve designed and developed."/>
          <div className="project-list">{projects.map((p, i) => <motion.article className="project-card" key={p.number} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.12}}>
            <div className="project-number">{p.number}</div><div className="project-content"><div className="project-type">{p.type}</div><h3>{p.title}</h3><p className="project-description">{p.description}</p><ul>{p.points.map(point => <li key={point}><ChevronRight size={15}/>{point}</li>)}</ul><div className="project-footer"><div className="project-tags">{p.stack.map(t => <span key={t}>{t}</span>)}</div><div className="project-links">{p.github && <a href={p.github} target="_blank" rel="noreferrer">Code <Github size={15}/></a>}{p.live && <a href={p.live} target="_blank" rel="noreferrer">Live <ExternalLink size={14}/></a>}</div></div></div>
            <div className="project-watermark">{i === 0 ? <ShieldCheck size={100}/> : <Code2 size={100}/>}</div>
          </motion.article>)}</div>
        </section>

        <section className="section-wrap content-section" id="experience">
          <SectionTitle eyebrow="04 / EXPERIENCE & TRAINING" title="Learning through doing." note="Professional experience and structured technical training that shape my engineering foundation."/>
          <div className="timeline">
            <div className="timeline-item"><div className="timeline-icon"><BriefcaseBusiness size={18}/></div><div className="timeline-body"><div className="timeline-top"><div><span className="timeline-label">PROFESSIONAL EXPERIENCE</span><h3>Subject Matter Expert</h3><h4>Chegg India Pvt. Ltd. <span>· Contract, Freelance</span></h4></div><span className="date-pill">Apr 2023 — Sep 2025</span></div><ul><li>Solved 500+ Computer Science problems across Java, DSA, DBMS, and Operating Systems.</li><li>Maintained 80%+ solution accuracy with well-documented, high-quality answers.</li><li>Delivered solutions involving Data Structures, Algorithms, and programming concepts.</li></ul></div></div>
            <div className="timeline-item"><div className="timeline-icon"><Terminal size={18}/></div><div className="timeline-body"><div className="timeline-top"><div><span className="timeline-label">TECHNICAL TRAINING</span><h3>Java Full Stack Development</h3><h4>QSpiders</h4></div><span className="date-pill">Nov 2025 — Present</span></div><ul><li>Completed Core Java and SQL training with hands-on programming and query practice.</li><li>Practiced JDBC for Java–database connectivity and CRUD operations.</li><li>Currently learning Hibernate, JPA, Servlets, Spring, Spring Boot, and Microservices.</li><li>Developing an understanding of REST APIs, dependency injection, and ORM concepts.</li></ul></div></div>
          </div>
        </section>

        <section className="section-wrap content-section" id="education">
          <SectionTitle eyebrow="05 / EDUCATION" title="Academic foundation."/>
          <div className="education-card"><div className="education-icon"><GraduationCap size={25}/></div><div className="education-info"><span className="timeline-label">BACHELOR OF ENGINEERING</span><h3>CMR Institute of Technology</h3><p>B.E. in Information Science and Engineering</p><span className="education-grade">First Class</span></div><div className="education-date">Dec 2021 — Aug 2025<br/><span>Bangalore, India</span></div></div>
        </section>

        <section className="section-wrap content-section">
          <SectionTitle eyebrow="06 / CERTIFICATIONS & STRENGTHS" title="Always sharpening the fundamentals."/>
          <div className="credentials-grid"><div className="credential-card"><Award size={21}/><div><span className="timeline-label">CERTIFICATION · 2026</span><h3>Java Spring Boot</h3><p>Infosys Springboard</p></div></div><div className="credential-card"><Award size={21}/><div><span className="timeline-label">CERTIFICATION · 2024</span><h3>Database and SQL</h3><p>Infosys Springboard</p></div></div></div>
          <div className="soft-skills"><span>TEAM COLLABORATION</span><span>PUBLIC SPEAKING</span><span>PROBLEM-SOLVING</span><span>TIME MANAGEMENT</span><span>EFFECTIVE COMMUNICATION</span></div>
        </section>

        <section className="contact-section" id="contact"><div className="section-wrap contact-inner"><div><span className="eyebrow">07 / WHAT'S NEXT?</span><h2>Have a role or project<br/>in mind<span className="accent">?</span></h2><p>I’m open to entry-level Java Developer and backend development opportunities. Let’s connect.</p><a className="button button-primary" href={`mailto:${profile.email}`}>Say hello <ArrowUpRight size={17}/></a></div><div className="contact-details"><a href={`mailto:${profile.email}`}><span className="contact-icon"><Mail size={18}/></span><span><small>EMAIL</small>{profile.email}</span><ArrowUpRight size={16}/></a><a href={`tel:${profile.phone}`}><span className="contact-icon"><Phone size={18}/></span><span><small>PHONE</small>+91 {profile.phone}</span><ArrowUpRight size={16}/></a><div className="contact-location"><span className="contact-icon"><MapPin size={18}/></span><span><small>LOCATION</small>{profile.location}</span></div>{socials.map(s => <a key={s.label} href={s.url} target="_blank" rel="noreferrer"><span className="contact-icon"><s.icon size={18}/></span><span><small>PROFILE</small>{s.label}</span><ArrowUpRight size={16}/></a>)}</div></div></section>
      </main>
      <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">MI</span><span>md<span className="accent">imran</span></span></a><span>Designed & built with care · © {new Date().getFullYear()} Md Imran</span><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
    </div>
  )
}
export default App
