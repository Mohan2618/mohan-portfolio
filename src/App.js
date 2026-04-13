import React, { useState, useEffect } from 'react';
import './App.css';

// ─── NAVBAR ─────────────────────────────────────────────────────────────────
function Navbar({ current, setPage }) {
  const links = ['HOME', 'ABOUT', 'SKILLS', 'RESUME', 'CONTACT'];
  return (
    <nav className="navbar">
      <div className="nav-logo" onClick={() => setPage('HOME')}>ML</div>
      <div className="nav-links">
        {links.map(l => (
          <button
            key={l}
            className={`nav-btn ${current === l ? 'active' : ''}`}
            onClick={() => setPage(l)}
          >
            {l}
          </button>
        ))}
      </div>
    </nav>
  );
}

// ─── HOME ────────────────────────────────────────────────────────────────────
function Home({ setPage }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);
  return (
    <div className="page home-page">
      <div className="home-bg">
        <div className="grid-overlay"></div>
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
      </div>
      <div className={`home-content ${visible ? 'visible' : ''}`}>
        <p className="home-greeting">Hello! I'm</p>
        <h1 className="home-name">MOHAN<br /><span>L K</span></h1>
        <p className="home-role">Web Developer &amp; Machine Learning Engineer</p>
        <div className="home-btns">
          <button className="btn-primary" onClick={() => setPage('ABOUT')}>About Me</button>
          <button className="btn-secondary" onClick={() => setPage('CONTACT')}>Get In Touch</button>
        </div>
      </div>
      <div className="home-scroll-hint">scroll ↓</div>
    </div>
  );
}

// ─── ABOUT ───────────────────────────────────────────────────────────────────
function About() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);
  return (
    <div className="page about-page">
      <div className="glow glow-1"></div>
      <div className={`about-content ${visible ? 'visible' : ''}`}>
        <div className="about-photo-wrap">
          <div className="about-photo-border">
            <img src="resumepic.jpeg" alt="Mohan" className="about-photo"
              onError={e => { e.target.style.display='none'; }} />
            <div className="about-photo-placeholder">ML</div>
          </div>
        </div>
        <div className="about-text">
          <h2 className="section-title">About <span>Me</span></h2>
          <p>Hello! I'm <strong>Mohan Lingabathina</strong>, graduating at SRM University AP, pursuing Computer Science and Engineering.</p>
          <p>I have a passion for learning and exploring new technologies. I enjoy understanding how websites and applications work and how ideas can be turned into real projects.</p>
          <p>I'm interested in <strong>web development</strong> and <strong>machine learning</strong>. I love experimenting with different tools, learning new concepts, and building things that help me grow.</p>
          <p>Apart from studies, I enjoy playing cricket, listening to music, and watching movies. I stay updated with the latest trends in tech.</p>
          <p className="about-quote">— "Continuous learning and practice help me grow both as a student and as a developer."</p>
        </div>
      </div>
    </div>
  );
}

// ─── SKILLS ──────────────────────────────────────────────────────────────────
function Skills() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  const areas = [
    { title: 'Web Development', icon: '🌐', desc: 'Building responsive websites using HTML, CSS, JavaScript and React.' },
    { title: 'Machine Learning', icon: '🤖', desc: 'Exploring ML algorithms, data analysis, and building intelligent applications.' },
    { title: 'New Technologies', icon: '🚀', desc: 'Always learning and experimenting with latest tools and frameworks.' },
  ];

  const techs = [
    { name: 'Java', src: 'https://toppng.com/uploads/preview/java-logo-vector-free-download-115742383154zj1d34hyu.png' },
    { name: 'Python', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv8e8DY2HEtxzguVyTkNj1DmaQglni2j9SRw&s' },
    { name: 'C++', src: 'https://cdn-icons-png.flaticon.com/512/6132/6132222.png' },
    { name: 'HTML/CSS', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN2Ob42L45hStICYlml7RTjH9p4q0E89vc6Q&s' },
  ];

  return (
    <div className="page skills-page">
      <div className="glow glow-2"></div>
      <div className={`skills-content ${visible ? 'visible' : ''}`}>
        <h2 className="section-title">What I <span>Do</span></h2>
        <div className="skills-cards">
          {areas.map((a, i) => (
            <div className="skill-card" key={i} style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="skill-icon">{a.icon}</div>
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
            </div>
          ))}
        </div>
        <h3 className="tech-title">Technologies &amp; Languages</h3>
        <div className="tech-icons">
          {techs.map((t, i) => (
            <div className="tech-item" key={i}>
              <img src={t.src} alt={t.name} />
              <span>{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── RESUME ──────────────────────────────────────────────────────────────────
function Resume() {
  return (
    <div className="page resume-page">
      <div className="glow glow-1"></div>
      <div className="resume-content">
        <h2 className="section-title">My <span>Resume</span></h2>
        <p className="resume-sub">View or download my resume below</p>
        <div className="resume-frame-wrap">
          <iframe
            src="public/Resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
            title="Resume"
            className="resume-frame"
          />
        </div>
        <a href="public/Resume.pdf" download className="btn-primary" style={{ display: 'inline-block', marginTop: '20px' }}>
          ⬇ Download Resume
        </a>
      </div>
    </div>
  );
}

// ─── CONTACT ─────────────────────────────────────────────────────────────────
function Contact() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  const items = [
    { icon: '👤', label: 'Name', value: 'Mohana Lakshmi Kumar L' },
    { icon: '📧', label: 'Email', value: 'mohanlingabathina8@gmail.com', link: 'mailto:mohanlingabathina8@gmail.com' },
    { icon: '📞', label: 'Phone', value: '+91 7601036027', link: 'tel:+917601036027' },
    { icon: '📍', label: 'Address', value: 'Kandukur, Nellore, Andhra Pradesh' },
  ];

  return (
    <div className="page contact-page">
      <div className="glow glow-2"></div>
      <div className={`contact-content ${visible ? 'visible' : ''}`}>
        <h2 className="section-title">Get In <span>Touch</span></h2>
        <p className="contact-sub">Feel free to reach out — I'm always open to new opportunities!</p>
        <div className="contact-cards">
          {items.map((item, i) => (
            <div className="contact-card" key={i} style={{ animationDelay: `${i * 0.12}s` }}>
              <div className="contact-icon">{item.icon}</div>
              <div className="contact-info">
                <span className="contact-label">{item.label}</span>
                {item.link
                  ? <a href={item.link} className="contact-value link">{item.value}</a>
                  : <span className="contact-value">{item.value}</span>
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── APP ROOT ─────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState('HOME');

  const pages = { HOME: <Home setPage={setPage} />, ABOUT: <About />, SKILLS: <Skills />, RESUME: <Resume />, CONTACT: <Contact /> };

  return (
    <div className="app">
      <Navbar current={page} setPage={setPage} />
      <main className="main-content">
        {pages[page]}
      </main>
    </div>
  );
}
