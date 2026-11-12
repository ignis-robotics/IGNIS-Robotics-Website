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
          <Route path="/prospectus" element={<Prospectus />} />
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
            <h2>Six weeks to build an industrial robot.</h2>
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
        link: 'https://www.apple.com/',
      },
      {
        name: 'NASA',
        logo: './images/NASA_Logo.svg',
        link: 'https://www.nasa.gov/',
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
        link: 'https://www.google.com/',
      },
      {
        name: 'Protocase',
        logo: './images/Protocase_Logo_White.png',
        link: 'https://www.protocase.com/',
      },
    ],
  },
]

const prospectusTiers = [
  {
    name: 'Silver',
    range: '$200 – $999',
    website: true,
    shirt: '1″ logo',
    robot: '1″ logo',
    booklet: true,
    video: false,
  },
  {
    name: 'Gold',
    range: '$1,000 – $2,999',
    website: true,
    shirt: '2″ logo',
    robot: '1″ logo',
    booklet: true,
    video: false,
  },
  {
    name: 'Core',
    range: '$3,000 – $4,999',
    website: true,
    shirt: '2.5″ logo',
    robot: '2.5″ logo',
    booklet: true,
    video: true,
  },
  {
    name: 'Title',
    range: '$5,000+',
    featured: true,
    website: true,
    shirt: '2.5″ logo',
    robot: '3″ prominent logo',
    booklet: true,
    video: true,
  },
]

const prospectusBudget = [
  ['FRC registration', '$6,300', 'Entry to the competition season'],
  ['Motors & electronics', '$3,000', 'Actuators, wiring, vision, computing'],
  ['COTS parts', '$4,000', 'Gearboxes, bearings, belts, fasteners'],
  ['Material stock', '$2,000', 'Aluminum, polycarbonate, wood'],
  ['Machinery & tools', '$5,000', 'CNC, saws, hand tools'],
  ['Field elements & contingency', '$1,000', 'Practice field, unexpected costs'],
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
              <Link className="btn-primary" to="/prospectus">
                Read the sponsorship prospectus →
              </Link>
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

function Prospectus() {
  return (
    <article className="prospectus">
      <section className="pros-cover section-wrap">
        <SectionTag>Sponsorship Prospectus · 2026–27 Season</SectionTag>
        <h1>Partner with IGNIS Robotics.</h1>
        <p className="pros-lede">
          IGNIS Robotics is FRC Team 12034, a student-founded, student-led team at
          Milpitas High School. We take students, most with zero experience, and turn
          them into engineers who design, machine, wire, and program industrial-scale
          competition robots. Your sponsorship pays for the parts, tools, and
          registrations that make that possible. It is tax-deductible through our
          501(c)(3) fiscal sponsor.
        </p>
        <ul className="pros-facts">
          <li>FRC Team 12034 · Milpitas, CA</li>
          <li>100% student-led</li>
          <li>Tax-deductible giving</li>
          <li>$21,300 season budget</li>
        </ul>
        <div className="pros-actions">
          <a
            className="btn-primary"
            href="https://hcb.hackclub.com/donations/start/ignis-robotics"
            target="_blank"
            rel="noreferrer"
          >
            Donate ↗
          </a>
          <Link className="btn-secondary" to="/contact">
            Become a sponsor →
          </Link>
          <button className="btn-secondary" type="button" onClick={() => window.print()}>
            Print / save PDF
          </button>
        </div>
        <div className="pros-cover-media">
          <img src="./images/Frontpageimage.png" alt="IGNIS Robotics team members gathered together" />
        </div>
      </section>

      <section className="section-wrap pros-section">
        <SectionTag>The competition</SectionTag>
        <h2>What is the FIRST Robotics Competition?</h2>
        <p>
          The FIRST Robotics Competition (FRC) is an international competition where
          high school students collaborate to design, build, and program a robot to
          complete a specific challenge. Each team is given just six weeks from
          kickoff to competition to create a fully functional robot, operating like
          a real engineering company under a real deadline.
        </p>
        <p>
          FRC is widely considered one of the most advanced high school engineering
          competitions in the world, for three reasons:
        </p>
        <div className="pillar-grid">
          <article className="pillar-card">
            <span className="pillar-index">01</span>
            <h3>The scale of the robots</h3>
            <p>
              FRC robots weigh up to 120 pounds and measure around 3 feet in size,
              significantly larger and more complex than those in most student
              competitions.
            </p>
          </article>
          <article className="pillar-card">
            <span className="pillar-index">02</span>
            <h3>The complexity of the challenge</h3>
            <p>
              Every January brings a brand-new game: alliance play, precision scoring
              tasks, and match strategy that demand real engineering trade-offs.
            </p>
          </article>
          <article className="pillar-card">
            <span className="pillar-index">03</span>
            <h3>The funding it takes</h3>
            <p>
              Registration, industrial parts, and professional tooling make FRC
              resource-intensive by design, which is exactly why sponsors are the
              reason teams like ours exist.
            </p>
          </article>
        </div>
        <p className="pros-subhead">Students gain hands-on experience in:</p>
        <ul className="pros-facts">
          <li>Mechanical engineering</li>
          <li>Electrical systems</li>
          <li>Software development</li>
        </ul>
        <p className="pros-follow">
          Teams use industry-grade tools such as CAD software like Onshape, and are
          responsible for designing, manufacturing, and programming every aspect of
          their robot.
        </p>
        <div className="pros-cover-media">
          <img src="./images/What-is-FRC.jpg" alt="Robots competing in a FIRST Robotics match" />
        </div>
      </section>

      <section className="section-wrap pros-section">
        <SectionTag>The team</SectionTag>
        <h2>Who we are and what your sponsorship builds.</h2>
        <p>
          IGNIS Robotics is a student-led organization at Milpitas High School. We
          work closely with our school to give students the opportunity to compete in
          FRC and other robotics competitions and to prepare them for future STEM
          careers through real-world engineering experience, not classroom exercises.
        </p>
        <p>
          Our mission is to expand access to STEM through competitive robotics. That
          means training students with no prior STEM experience (around 60% of our
          members join as complete beginners), providing hands-on learning from day
          one, and building skills in engineering, teamwork, and leadership while growing
          a strong STEM culture on our campus and in our community.
        </p>
        <div className="pros-stat-grid">
          <div className="pros-stat">
            <span className="pros-stat-value">83%</span>
            <span className="pros-stat-label">of FIRST alumni pursue a STEM major by their fourth year of college</span>
          </div>
          <div className="pros-stat">
            <span className="pros-stat-value">51%</span>
            <span className="pros-stat-label">of female FIRST alumni major in engineering or computer science</span>
          </div>
          <div className="pros-stat">
            <span className="pros-stat-value">63%</span>
            <span className="pros-stat-label">of FIRST alumni are employed in a STEM field</span>
          </div>
        </div>
      </section>

      <section className="section-wrap pros-section">
        <SectionTag>Where the money goes</SectionTag>
        <h2>A $21,300 season, item by item.</h2>
        <p>
          Every dollar goes directly to designing, building, and competing: parts,
          tools, registration, and travel. No salaries, no overhead.
        </p>
        <div className="pros-table-scroll">
          <table className="pros-table">
            <thead>
              <tr>
                <th scope="col">Item</th>
                <th scope="col">Cost</th>
                <th scope="col">What it covers</th>
              </tr>
            </thead>
            <tbody>
              {prospectusBudget.map(([item, cost, detail]) => (
                <tr key={item}>
                  <td className="pros-table-item">{item}</td>
                  <td className="pros-table-cost">{cost}</td>
                  <td>{detail}</td>
                </tr>
              ))}
              <tr className="pros-table-total">
                <td className="pros-table-item">Total season budget</td>
                <td className="pros-table-cost">$21,300</td>
                <td>Registration, robot, tools, field, contingency</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section-wrap pros-section">
        <SectionTag>Sponsorship tiers</SectionTag>
        <h2>Pick a tier. Get recognized everywhere we compete.</h2>
        <p>
          These tiers are completely flexible. We are not selling a product, we are
          building a long-term partnership. Tell us what works for you and we will
          work something out. In-kind donations of tools, materials, and parts, as
          well as engineering mentorship, are equally welcome.
        </p>
        <div className="pros-table-scroll">
          <table className="pros-table pros-tier-table">
            <thead>
              <tr>
                <th scope="col">Benefit</th>
                {prospectusTiers.map((tier) => (
                  <th scope="col" key={tier.name} className={tier.featured ? 'pros-tier-featured' : undefined}>
                    {tier.name}
                    <span className="pros-tier-range">{tier.range}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pros-table-item">Website &amp; social media recognition</td>
                {prospectusTiers.map((tier) => (
                  <td key={tier.name}>{tier.website ? '✓' : '·'}</td>
                ))}
              </tr>
              <tr>
                <td className="pros-table-item">Logo on team T-shirt</td>
                {prospectusTiers.map((tier) => (
                  <td key={tier.name}>{tier.shirt}</td>
                ))}
              </tr>
              <tr>
                <td className="pros-table-item">Logo on the competition robot</td>
                {prospectusTiers.map((tier) => (
                  <td key={tier.name}>{tier.robot}</td>
                ))}
              </tr>
              <tr>
                <td className="pros-table-item">Recognition page in team booklet</td>
                {prospectusTiers.map((tier) => (
                  <td key={tier.name}>{tier.booklet ? 'Full page' : '·'}</td>
                ))}
              </tr>
              <tr>
                <td className="pros-table-item">Custom “Why you matter to us” video</td>
                {prospectusTiers.map((tier) => (
                  <td key={tier.name}>{tier.video ? '✓' : '·'}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="pros-note">
          <h3>Feature video program for Core and Title sponsors</h3>
          <p>
            We produce a custom video showing exactly how your company or product
            moves our team forward: the CAD software we design in, the tools we
            machine with, the technology inside our robot. If your product is not
            directly part of the build, we show how your support carried the team
            through the season instead, showing the impact of your partnership on camera.
          </p>
        </div>
      </section>

      <section className="section-wrap pros-section">
        <SectionTag>Social proof</SectionTag>
        <h2>Join the companies already behind us.</h2>
        <div className="pros-logo-band">
          {/* Single source of truth: renders every sponsor in sponsorTiers,
              in tier order, with links wherever the Sponsors page has them.
              Add/remove a sponsor there and this band follows automatically. */}
          {sponsorTiers.flatMap(({ sponsors }) => sponsors).map((sponsor) => (
            <span className="pros-logo" key={sponsor.name}>
              {sponsor.link ? (
                <a href={sponsor.link} target="_blank" rel="noreferrer" aria-label={`${sponsor.name} website`}>
                  <img src={sponsor.logo} alt={`${sponsor.name} logo`} />
                </a>
              ) : (
                <img src={sponsor.logo} alt={`${sponsor.name} logo`} />
              )}
            </span>
          ))}
        </div>
      </section>

      <section className="section-wrap pros-section">
        <SectionTag>How to give</SectionTag>
        <h2>Start with a conversation.</h2>
        <ol className="pros-steps">
          <li>
            <span className="pros-step-index">1</span>
            <div>
              <h3>Talk to us first</h3>
              <p>
                Email{' '}
                <a href="mailto:ignisrobotics@gmail.com">ignisrobotics@gmail.com</a>{' '}
                and tell us you are interested. We will set up a time to talk through
                tiers, recognition, and what works for both sides. Nothing is
                one-size-fits-all.
              </p>
            </div>
          </li>
          <li>
            <span className="pros-step-index">2</span>
            <div>
              <h3>Agree on the partnership</h3>
              <p>
                Pick a tier or a custom amount, an in-kind donation of parts or tools,
                or mentorship time. We confirm logo placement and recognition details
                together before any money moves.
              </p>
            </div>
          </li>
          <li>
            <span className="pros-step-index">3</span>
            <div>
              <h3>Donate through our fiscal sponsor</h3>
              <p>
                Once we have talked, complete your gift through The Hack Foundation
                (Hack Club), a 501(c)(3) tax-exempt public charity, EIN 81-2908499.{' '}
                <a
                  href="https://hcb.hackclub.com/donations/start/ignis-robotics"
                  target="_blank"
                  rel="noreferrer"
                >
                  Donation portal ↗
                </a>
              </p>
            </div>
          </li>
        </ol>
        <div className="pros-actions">
          <a className="btn-primary" href="mailto:ignisrobotics@gmail.com">
            Email the team
          </a>
          <a
            className="btn-secondary"
            href="https://hcb.hackclub.com/donations/start/ignis-robotics"
            target="_blank"
            rel="noreferrer"
          >
            Donation portal ↗
          </a>
        </div>
      </section>
    </article>
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
            <Link className="link-inline" to="/prospectus">
              Read the sponsorship prospectus →
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
