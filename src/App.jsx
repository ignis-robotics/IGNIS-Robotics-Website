import { useEffect, useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'

const navItems = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/sponsors', 'Sponsors'],
  ['/contact', 'Contact'],
]

function App() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <div className="app-shell">
      <header className="site-header">
        <Link className="brand" to="/" aria-label="IGNIS Robotics home">
          <img src="./images/Team logo.png" alt="IGNIS Robotics logo" />
          <div className="brand-text">
            <span className="brand-title">IGNIS Robotics</span>
            <span className="brand-subtitle">FRC Team 12034 · Milpitas, CA</span>
          </div>
        </Link>
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          aria-label="Toggle navigation menu"
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          id="site-nav"
          className={`site-nav ${menuOpen ? 'is-open' : ''}`}
          aria-label="Main navigation"
        >
          {navItems.map(([path, label]) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {label}
            </NavLink>
          ))}
          <Link className="nav-cta" to="/contact">
            Join the team
          </Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="section-wrap footer-content">
          <div className="footer-meta">
            <span className="footer-team-id">IGNIS Robotics · FRC Team 12034</span>
            <span className="footer-location">Milpitas High School · Milpitas, California</span>
            <p className="footer-nonprofit">
              Fiscally sponsored by The Hack Foundation (Hack Club), a 501(c)(3) tax-exempt public charity.
            </p>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/sponsors">Sponsors</Link>
            <Link to="/contact">Contact</Link>
            <a
              href="https://hcb.hackclub.com/donations/start/ignis-robotics"
              target="_blank"
              rel="noreferrer"
            >
              Hack Club Bank ↗
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function SectionTag({ children }) {
  return <div className="section-tag">{children}</div>
}

function PageIntro({ tag, title, copy }) {
  return (
    <section className="page-intro section-wrap">
      {tag && <SectionTag>{tag}</SectionTag>}
      <h1>{title}</h1>
      {copy && <p>{copy}</p>}
    </section>
  )
}

function Home() {
  return (
    <>
      <section className="hero section-wrap">
        <div className="hero-copy">
          <SectionTag>FRC Team 12034 · Milpitas High School</SectionTag>
          <h1>Engineering competition robots from the ground up.</h1>
          <p className="hero-lede">
            We are a student-founded and student-led FIRST Robotics Competition team at Milpitas High School.
            Each season, we design, machine, wire, and program a 120-pound competition robot on a strict six-week timeline.
          </p>
          <div className="hero-actions">
            <Link className="btn-primary" to="/about">
              About our program
            </Link>
            <a
              className="btn-secondary"
              href="https://www.firstinspires.org/programs/frc/"
              target="_blank"
              rel="noreferrer"
            >
              What is FRC? ↗
            </a>
          </div>
          <p className="hero-manifesto">
            We welcome any Milpitas High student regardless of prior background. Experienced members teach CAD, shop tools, wiring, and robot code during our fall training cycle.
          </p>
        </div>
        <div className="hero-media">
          <div className="hero-image-wrap">
            <img src="./images/Frontpageimage.png" alt="IGNIS Robotics team members gathered together" />
          </div>
        </div>
      </section>

      <section className="section-wrap home-pillars">
        <SectionTag>How we operate</SectionTag>
        <div className="pillar-grid">
          <article className="pillar-card">
            <span className="pillar-index">01</span>
            <h3>Student-led operations</h3>
            <p>
              Students lead every part of the team: CAD modeling, CNC machining, electrical wiring, autonomous software, sponsor outreach, and logistics.
            </p>
          </article>
          <article className="pillar-card">
            <span className="pillar-index">02</span>
            <h3>Six-week build season</h3>
            <p>
              From the January game reveal to regional competitions in March, we prototype, fabricate, and calibrate an industrial-sized machine under hard deadlines.
            </p>
          </article>
          <article className="pillar-card">
            <span className="pillar-index">03</span>
            <h3>Hands-on fall training</h3>
            <p>
              Before build season begins, we run weekly workshops teaching Onshape, power tools, safety protocols, electronics, and WPILib Java programming.
            </p>
          </article>
        </div>
      </section>

      <section className="section-wrap">
        <div className="home-cta-strip">
          <div>
            <h2>Interested in joining or supporting the team?</h2>
            <p>
              We are always open to prospective students, engineering mentors from the community, and sponsor partnerships.
            </p>
          </div>
          <Link className="btn-primary" to="/contact">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  )
}

function About() {
  return (
    <>
      <PageIntro
        tag="The Program"
        title="Hands-on engineering under real competition constraints."
        copy="FIRST Robotics Competition gives high school students practical experience in mechanical design, electrical routing, embedded programming, and team operations."
      />
      <section className="section-wrap about-sections">
        <article className="editorial-block">
          <div className="editorial-media">
            <img src="./images/What-is-FRC.jpg" alt="Robots competing in a FIRST Robotics match" />
          </div>
          <div className="editorial-content">
            <SectionTag>The Challenge</SectionTag>
            <h2>Six weeks to field a competition machine.</h2>
            <p>
              In early January, FIRST releases a brand-new game challenge with specific scoring objectives and field obstacles. Teams receive the rules and have six weeks to brainstorm game strategy, prototype intake and shooter mechanisms, design full assemblies in CAD, machine aluminum components, and wire control electronics.
            </p>
            <p>
              Every robot must stay within strict size and weight constraints (typically 125 pounds without battery and bumpers) while operating reliably across dozens of high-intensity matches.
            </p>
          </div>
        </article>

        <article className="editorial-block reverse">
          <div className="editorial-media">
            <img src="./images/mission image.jpeg" alt="IGNIS Robotics team working on hardware" />
          </div>
          <div className="editorial-content">
            <SectionTag>Our Approach</SectionTag>
            <h2>Lowering the barrier to competitive robotics.</h2>
            <p>
              Around 60% of our members join with little to no previous STEM or robotics experience. Rather than reserving robot development for seniors, we run a structured fall training curriculum where new members handle shop tools, assemble test mechanisms, and write robot code immediately.
            </p>
            <p>
              Students learn through direct peer mentorship, taking ownership of entire subassemblies and competition systems.
            </p>
          </div>
        </article>

        <div className="training-callout">
          <h3>Fall Training Curriculum</h3>
          <p>
            Workshops run weekly throughout the fall semester at Milpitas High School. Modules cover 3D modeling in Onshape, shop tool safety, motor and gearbox selection, sensor integration, and Java programming with WPILib. No prior experience required.
          </p>
        </div>
      </section>
    </>
  )
}

const sponsorTiers = [
  {
    tier: 'Title Sponsors',
    sponsors: [
      {
        name: 'Apple',
        logo: './images/Apple_Logo_White_lg.svg',
      },
    ],
  },
  {
    tier: 'Core Sponsors',
    sponsors: [
      {
        name: 'Argosy Foundation',
        logo: './images/Argosy_Foundation_Logo_White.png',
        link: 'https://www.argosyfnd.org/',
      },
    ],
  },
  {
    tier: 'Gold Sponsors',
    sponsors: [
      {
        name: 'Google',
        logo: './images/Google_Logo.svg',
      },
    ],
  },
]

const teamSupport = {
  name: 'FRC Team 3256 — WarriorBorgs',
  logo: './images/WarriorBorgs_3256_Logo.png',
  link: 'https://www.thebluealliance.com/team/3256',
}

function Sponsors() {
  return (
    <>
      <PageIntro
        tag="Sponsors"
        title="Sponsors."
        copy="Funding from these organizations pays for parts, tools, registration, and travel for Team 12034."
      />

      <section className="section-wrap sponsor-section">
        <div className="sponsor-tiers">
          {sponsorTiers.map(({ tier, sponsors }) => {
            const slug = tier.split(' ')[0].toLowerCase()
            return (
              <div className={`sponsor-tier-row tier-${slug}`} key={tier}>
                <div className="sponsor-tier-label">
                  <h2>{tier}</h2>
                </div>
                <div className="sponsor-tier-entries">
                  {sponsors.map((sponsor) => (
                    <div className="sponsor-entry" key={sponsor.name}>
                      <div className="sponsor-logo">
                        {sponsor.link ? (
                          <a href={sponsor.link} target="_blank" rel="noreferrer" aria-label={`${sponsor.name} website`}>
                            <img src={sponsor.logo} alt={`${sponsor.name} logo`} />
                          </a>
                        ) : (
                          <img src={sponsor.logo} alt={`${sponsor.name} logo`} />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}

          <div className="mentor-panel">
            <div className="mentor-label">
              <h2>Substantial Supporter</h2>
            </div>
            <a
              className="mentor-entry"
              href={teamSupport.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`${teamSupport.name} page`}
            >
              <img src={teamSupport.logo} alt={`${teamSupport.name} logo`} />
              <span className="mentor-team-id">Team 3256</span>
            </a>
          </div>
        </div>

        <div className="sponsor-info-grid">
          <div className="sponsor-info-card">
            <h2>What funding covers</h2>
            <ul className="sponsor-cost-list">
              <li>
                <span>Registration</span>
                <span>$6,500 base registration + advancement fees</span>
              </li>
              <li>
                <span>Motors and Electronics</span>
                <span>Actuators, wiring, vision, and computing</span>
              </li>
              <li>
                <span>Parts and Materials</span>
                <span>Aluminum, polycarbonate, bearings, belts, fasteners</span>
              </li>
              <li>
                <span>Tools</span>
                <span>CNCs, saws, and hand tools</span>
              </li>
            </ul>
          </div>

          <div className="sponsor-info-card">
            <h2>Become a sponsor</h2>
            <p>
              Sponsorships and material donations go through our fiscal sponsor, The Hack Foundation
              (Hack Club), a 501(c)(3). Donations are tax-deductible.
            </p>
            <div className="action-buttons">
              <a
                className="btn-primary"
                href="https://docs.google.com/document/d/1VcobJuTHBTYQPiitCKM2Ftywepp1LyxhzjxF4hCkPEA/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Sponsor packet ↗
              </a>
              <a
                className="btn-secondary"
                href="https://hcb.hackclub.com/donations/start/ignis-robotics"
                target="_blank"
                rel="noreferrer"
              >
                Donate ↗
              </a>
              <Link className="link-inline" to="/contact">
                Contact the team →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function Contact() {
  return (
    <>
      <PageIntro
        tag="Contact"
        title="Get in touch with the team."
        copy="Whether you are a student interested in joining, an engineer interested in mentoring, or a sponsor looking to partner, we would love to hear from you."
      />

      <section className="section-wrap contact-grid">
        <div className="contact-card-primary">
          <SectionTag>Direct Email</SectionTag>
          <h2>General Inquiries</h2>
          <a className="contact-email-link" href="mailto:ignisrobotics@gmail.com">
            ignisrobotics@gmail.com
          </a>
          <div className="contact-info-list">
            <div className="contact-info-item">
              <span className="contact-info-label">School & Workshop Location</span>
              <span className="contact-info-val">Milpitas High School · 1285 Escuela Pkwy, Milpitas, CA 95035</span>
            </div>
            <div className="contact-info-item">
              <span className="contact-info-label">Response Time</span>
              <span className="contact-info-val">We are a student-run team and review inbox messages regularly throughout the school week.</span>
            </div>
            <div className="contact-info-item">
              <span className="contact-info-label">Fiscal Sponsorship</span>
              <span className="contact-info-val">The Hack Foundation (Hack Club), 501(c)(3) tax-exempt public charity.</span>
            </div>
          </div>
        </div>

        <div className="contact-sidebar">
          <div className="sidebar-box">
            <h3>Student Sign-Up</h3>
            <p>
              Looking to join the team for the upcoming season? Submit your information to receive meeting dates, training schedules, and parent permission forms.
            </p>
            <a
              className="btn-primary"
              href="https://docs.google.com/forms/d/1l_R-9AmQ9DnoN7g5jBsZwCWisd5Go2GexUSvODv12KM/viewform"
              target="_blank"
              rel="noreferrer"
            >
              Student Sign-up Form ↗
            </a>
          </div>

          <div className="sidebar-box">
            <h3>Sponsor & Mentor Inquiries</h3>
            <p>
              We welcome corporate sponsorships, tool/material donations, and technical industry mentors in mechanical, electrical, or software engineering.
            </p>
            <Link className="link-inline" to="/sponsors">
              Review our sponsorship prospectus →
            </Link>
          </div>

          <div className="sidebar-box">
            <h3>Follow Team 12034</h3>
            <p>Watch match recordings and see build season updates:</p>
            <div className="social-links">
              <a
                className="social-link"
                href="https://www.youtube.com/channel/UCkX5yUeLi_zcfDNouJ_GSyA"
                target="_blank"
                rel="noreferrer"
              >
                YouTube ↗
              </a>
              <a
                className="social-link"
                href="https://www.instagram.com/ignis_robotics/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function NotFound() {
  return (
    <section className="not-found-wrap section-wrap">
      <SectionTag>404 Error</SectionTag>
      <h1>Page not found</h1>
      <p>The page you requested does not exist or has been moved.</p>
      <Link className="btn-primary" to="/">
        Return to Home
      </Link>
    </section>
  )
}

export default App
