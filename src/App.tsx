import React from 'react'

const cv = {
  name: 'Boniface Ngeene Muni',
  title: 'Forklift & Plant Operator',
  subtitle: '15+ Years | Kenya · UAE · Nigeria',
  email: 'bonncom2486@yahoo.com',
  phone: '+254 714 157 912',
  nationality: 'Kenyan',
  dob: '24 May 1986',
  languages: ['English', 'Kiswahili', 'Kikuyu', 'Arabic'],
  summary:
    'Forklift and Plant Operator with 15+ years of international experience across Kenya, the UAE, and Nigeria. Expert in heavy equipment operation, preventive maintenance, and site safety compliance in oil & gas, construction, and industrial manufacturing. Proven ability to deliver operational efficiency in fast-paced, high-stakes environments with minimal supervision. Experienced team leader and international manager with a track record of entrepreneurship and business ownership.',
  skills: [
    'Forklift Operation (Heavy & Light)',
    'Crane Operation',
    'Plant & Heavy Equipment Operation',
    'Preventive Maintenance',
    'Safety Compliance (OSHA-equivalent)',
    'Industrial Site Coordination',
    'Team Leadership & Management',
    'International Team Operations',
    'Entrepreneurship & Business Ownership',
    'Heavy Commercial Driving',
    'Light Vehicle Operation',
    'Locomotive Engineering',
  ],
  certifications: [
    'Forklift Operator License — Claymore Security & Safety Consultants, Dubai (2017)',
    'Heavy Commercial Driving License — Pettans Driving School, Kenya (2006)',
    'Light Vehicle Driving License — Belhasa Driving School, Dubai (2016)',
    'Locomotive Engineering — Kabete Technical Training Institute, Kenya (2006)',
  ],
  education: [
    {
      period: '2002 – 2005',
      institution: "William Ngiru Gitau Secondary School",
      credential: 'Kenya Certificate of Secondary Education (KCSE)',
    },
    {
      period: '1991 – 2001',
      institution: 'Ngemwa Primary School',
      credential: 'Kenya Certificate of Primary Education (KCPE)',
    },
  ],
  experience: [
    {
      period: '2019 – Present',
      company: 'Greenbo Africa Limited',
      role: 'Forklift Operator',
      highlights: [
        'Operate forklifts and heavy plant equipment across warehouse and industrial operations',
        'Maintain strict adherence to site safety protocols and operational standards',
        'Coordinate with floor management to optimize material handling workflows',
      ],
    },
    {
      period: '2011 – 2018',
      company: 'Valmont Irrigation FZE, Jebel Ali, Dubai',
      role: 'Senior Plant Operator',
      highlights: [
        'Led machine operation and maintenance activities for large-scale industrial projects',
        'Managed forklift operations in high-volume manufacturing and logistics environments',
        'Performed preventive and corrective maintenance to minimize equipment downtime',
      ],
    },
    {
      period: '2007 – 2011',
      company: 'IMCC (International Metal Construction Company), Abu Dhabi',
      role: 'Forklift Operator',
      highlights: [
        'Operated forklifts and heavy equipment on major energy infrastructure projects including Blue Water Energy Services and Escravos Gas To Liquids (Nigeria)',
        'Supported submersible drilling rig and Single Buoy Mooring operations',
        'Ensured compliance with international safety standards on multinational sites',
      ],
    },
    {
      period: '2006 – 2007',
      company: 'SIGMAN Oil & Gas Company',
      role: 'Plant Operator',
      highlights: [
        'Operated heavy plant machinery in oil & gas processing environments',
        'Maintained equipment readiness and supported production targets',
        'Collaborated with cross-functional teams to uphold HSE standards',
      ],
    },
  ],
  hobbies: ['Playing football', 'Travelling', 'Outdoor adventures', 'Boating & water sports', 'Exploring new cultures'],
  philosophy:
    'Life is a continuous journey of learning and discovery. Every day offers a chance to grow, adapt, and embrace new challenges — whether on a construction site, behind the wheel, or out on the water. I believe in balancing hard work with a deep appreciation for the outdoors, family, and the diverse cultures the world has to offer.',
  referees: [
    {
      name: 'Charles Gachanja',
      title: 'Production Supervisor',
      org: 'Valmont Middle East',
      phone: '+971 55 975 2564',
    },
    {
      name: 'Stephen Thuo',
      title: 'Floor Manager',
      org: 'Greenbo Africa',
      phone: '0713 575 632',
    },
    {
      name: 'Joe Ogora',
      title: 'Kabete Technical Training Institute',
      org: 'P.O. Box 318, Kiambu',
    },
  ],
}

const styles = {
  section: {
    marginBottom: 'var(--space-xl)',
  },
  sectionTitle: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: '1.5rem',
    fontWeight: 700,
    color: 'var(--color-dark)',
    marginBottom: 'var(--space-md)',
    paddingBottom: 'var(--space-xs)',
    borderBottom: '2px solid var(--color-dark)',
    display: 'inline-block',
    letterSpacing: '-0.01em',
  },
  card: {
    background: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-lg)',
    padding: 'var(--space-md)',
    transition: 'box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
  },
  periodBadge: {
    display: 'inline-block',
    fontSize: '0.75rem',
    fontWeight: 700,
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    color: 'var(--color-accent)',
    background: 'var(--color-accent-soft)',
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    whiteSpace: 'nowrap',
    fontFamily: "'Inter', sans-serif",
  },
}

function ExperienceCard({
  period,
  title,
  subtitle,
  highlights,
}: {
  period: string
  title: string
  subtitle: string
  highlights?: string[]
}) {
  const [hovered, setHovered] = React.useState(false)

  return (
    <div
      style={{
        ...styles.card,
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: hovered
          ? '0 20px 40px -12px rgba(0,0,0,0.12), 0 0 0 1px rgba(180, 83, 9, 0.08)'
          : '0 1px 3px rgba(0,0,0,0.04)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 'var(--space-sm)',
          marginBottom: 'var(--space-xs)',
        }}
      >
        <div>
          <div style={{ fontWeight: 700, fontSize: '1.0625rem', color: 'var(--color-dark)', lineHeight: 1.3 }}>
            {title}
          </div>
          <div style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', marginTop: '0.125rem', fontWeight: 500 }}>
            {subtitle}
          </div>
        </div>
        <span style={styles.periodBadge}>{period}</span>
      </div>
      {highlights && (
        <ul
          style={{
            paddingLeft: '1.25rem',
            fontSize: '0.9375rem',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.7,
            marginTop: 'var(--space-sm)',
          }}
        >
          {highlights.map((h, i) => (
            <li key={i} style={{ marginBottom: '0.375rem' }}>{h}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>{title}</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
        {children}
      </div>
    </section>
  )
}

function App() {
  const [loaded, setLoaded] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 50)
    return () => clearTimeout(timer)
  }, [])

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px) saturate(180%)' : 'none',
          borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
          padding: 'var(--space-sm) var(--space-md)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '960px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              border: '2px solid var(--color-dark)',
              overflow: 'hidden',
              flexShrink: 0,
            }}
          >
            <img
              src="/headshot.jpg"
              alt="Boniface Mwangi"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <span
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontSize: '1.125rem',
              color: 'var(--color-dark)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {cv.name}
          </span>
        </div>
      </nav>

      <main
        style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(12px)',
          transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <header
          style={{
            position: 'relative',
            borderRadius: 'var(--radius-lg)',
            marginBottom: 'var(--space-xl)',
            overflow: 'hidden',
            minHeight: '420px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #1c1917 0%, #292524 50%, #1c1917 100%)',
            color: '#ffffff',
            boxShadow: '0 24px 48px -12px rgba(28, 25, 23, 0.25)',
            paddingTop: 'var(--space-xl)',
          }}
        >
          <div
            style={{
              width: '140px',
              height: '140px',
              borderRadius: '50%',
              border: '4px solid var(--color-accent)',
              overflow: 'hidden',
              marginBottom: 'var(--space-md)',
              boxShadow: '0 24px 48px -12px rgba(28, 25, 23, 0.35)',
              flexShrink: 0,
            }}
          >
            <img
              src="/headshot.jpg"
              alt="Boniface Mwangi"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div style={{ position: 'relative', zIndex: 2, padding: '0 var(--space-lg) var(--space-xl)' }}>
            <h1
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                marginBottom: 'var(--space-sm)',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              }}
            >
              {cv.name}
            </h1>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(1rem, 2.5vw, 1.375rem)',
                fontWeight: 600,
                opacity: 0.95,
                marginBottom: 'var(--space-xs)',
                letterSpacing: '-0.01em',
                textShadow: '0 1px 2px rgba(0,0,0,0.3)',
              }}
            >
              {cv.title}
            </p>
            <p
              style={{
                fontSize: '0.9375rem',
                opacity: 0.85,
                marginBottom: 'var(--space-md)',
                fontWeight: 400,
                letterSpacing: '0.02em',
                textShadow: '0 1px 2px rgba(0,0,0,0.3)',
              }}
            >
              {cv.subtitle}
            </p>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 'var(--space-md)',
                fontSize: '0.875rem',
                opacity: 0.9,
                fontWeight: 500,
                letterSpacing: '0.01em',
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                <span style={{ opacity: 0.8 }}>✉</span> {cv.email}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                <span style={{ opacity: 0.8 }}>☎</span> {cv.phone}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                <span style={{ opacity: 0.8 }}>◎</span> {cv.nationality}
              </span>
            </div>
          </div>
        </header>

        <Section title="Professional Experience">
          {cv.experience.map((job, i) => (
            <ExperienceCard
              key={i}
              period={job.period}
              title={job.role}
              subtitle={job.company}
              highlights={job.highlights}
            />
          ))}
        </Section>

        <Section title="Professional Summary">
          <p
            style={{
              fontSize: '1.0625rem',
              lineHeight: 1.75,
              color: 'var(--color-text-secondary)',
              fontWeight: 400,
            }}
          >
            {cv.summary}
          </p>
        </Section>

        <Section title="Skills & Certifications">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--space-md)',
            }}
          >
            <div style={styles.card}>
              <h3
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '1.0625rem',
                  fontWeight: 700,
                  marginBottom: 'var(--space-sm)',
                  color: 'var(--color-dark)',
                }}
              >
                Core Competencies
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {cv.skills.map((skill, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: '0.8125rem',
                      background: 'var(--color-dark)',
                      color: '#ffffff',
                      padding: '0.375rem 0.875rem',
                      borderRadius: 'var(--radius)',
                      fontWeight: 600,
                      letterSpacing: '0.01em',
                      transition: 'transform 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-1px)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div style={styles.card}>
              <h3
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '1.0625rem',
                  fontWeight: 700,
                  marginBottom: 'var(--space-sm)',
                  color: 'var(--color-dark)',
                }}
              >
                Licenses & Certifications
              </h3>
              <ul
                style={{
                  paddingLeft: '1.25rem',
                  fontSize: '0.9375rem',
                  lineHeight: 1.75,
                  color: 'var(--color-text-secondary)',
                }}
              >
                {cv.certifications.map((cert, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section title="Entrepreneurship & Leadership">
          <div style={styles.card}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--color-text-secondary)', marginBottom: 'var(--space-sm)' }}>
              Experienced entrepreneur and business owner with a strong background in managing operations, teams, and client relationships. Combines hands-on technical expertise with business acumen to drive growth and efficiency.
            </p>
            <ul style={{ paddingLeft: '1.25rem', fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              <li style={{ marginBottom: '0.375rem' }}>Proven ability to lead and manage international teams across diverse cultural environments</li>
              <li style={{ marginBottom: '0.375rem' }}>Skilled in business development, operational planning, and strategic decision-making</li>
              <li style={{ marginBottom: '0.375rem' }}>Demonstrated success in building and sustaining profitable business ventures</li>
            </ul>
          </div>
        </Section>

        <Section title="Life & Outdoors">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'var(--space-md)',
            }}
          >
            <div style={{ ...styles.card, padding: 0, overflow: 'hidden' }}>
              <div
                style={{
                  height: '220px',
                  backgroundImage: 'url(/boat-adventure.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div style={{ padding: 'var(--space-md)' }}>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1.0625rem',
                    fontWeight: 700,
                    marginBottom: 'var(--space-sm)',
                    color: 'var(--color-dark)',
                  }}
                >
                  Adventure & The Outdoors
                </h3>
                <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
                  When not on site, Boniface is an avid outdoorsman who finds renewal in nature, water sports, and exploring new horizons — both literally and figuratively.
                </p>
              </div>
            </div>

            <div style={{ ...styles.card, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '1.0625rem',
                  fontWeight: 700,
                  marginBottom: 'var(--space-sm)',
                  color: 'var(--color-dark)',
                }}
              >
                Hobbies & Interests
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {cv.hobbies.map((hobby, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: '0.8125rem',
                      background: 'var(--color-accent-soft)',
                      color: 'var(--color-accent)',
                      padding: '0.375rem 0.875rem',
                      borderRadius: 'var(--radius)',
                      fontWeight: 600,
                      letterSpacing: '0.01em',
                    }}
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section title="Personal Philosophy">
          <div
            style={{
              ...styles.card,
              background: 'linear-gradient(135deg, #1c1917 0%, #292524 100%)',
              color: '#ffffff',
              border: 'none',
            }}
          >
            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                fontStyle: 'italic',
                opacity: 0.95,
              }}
            >
              "{cv.philosophy}"
            </p>
          </div>
        </Section>

        <Section title="Education">
          {cv.education.map((edu, i) => (
            <div key={i} style={styles.card}>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: 'var(--space-sm)',
                }}
              >
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1.0625rem', color: 'var(--color-dark)', lineHeight: 1.3 }}>
                    {edu.institution}
                  </div>
                  <div style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', marginTop: '0.125rem', fontWeight: 500 }}>
                    {edu.credential}
                  </div>
                </div>
                <span style={styles.periodBadge}>{edu.period}</span>
              </div>
            </div>
          ))}
        </Section>

        <Section title="Languages">
          <div style={styles.card}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {cv.languages.map((lang, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: '0.9375rem',
                    background: 'var(--color-accent-soft)',
                    color: 'var(--color-accent)',
                    padding: '0.5rem 1rem',
                    borderRadius: 'var(--radius)',
                    fontWeight: 600,
                  }}
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </Section>

        <Section title="Referees">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 'var(--space-md)',
            }}
          >
            {cv.referees.map((ref, i) => (
              <div key={i} style={styles.card}>
                <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--color-dark)' }}>{ref.name}</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', marginTop: '0.25rem', fontWeight: 500 }}>
                  {ref.title}
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--color-muted)', marginTop: '0.125rem' }}>
                  {ref.org}
                </div>
                {ref.phone && (
                  <div
                    style={{
                      fontSize: '0.8125rem',
                      color: 'var(--color-accent)',
                      marginTop: '0.5rem',
                      fontWeight: 600,
                      letterSpacing: '0.02em',
                    }}
                  >
                    {ref.phone}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Section>

        <div
          style={{
            position: 'relative',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            marginBottom: 'var(--space-xl)',
            minHeight: '280px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 24px 48px -12px rgba(28, 25, 23, 0.25)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'url(/driver.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.3,
              filter: 'saturate(0.8)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(28,25,23,0.9) 0%, rgba(28,25,23,0.75) 100%)',
            }}
          />
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              padding: 'var(--space-xl) var(--space-lg)',
              color: '#ffffff',
              textAlign: 'center',
              maxWidth: '640px',
            }}
          >
            <p style={{ fontSize: '1.0625rem', lineHeight: 1.7, opacity: 0.95, marginBottom: 'var(--space-md)' }}>
              Looking for a reliable heavy equipment operator or a collaborative partner? Let's connect and discuss how Boniface can bring value to your next project.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'var(--space-sm)' }}>
              <a
                href={`mailto:${cv.email}`}
                style={{
                  display: 'inline-block',
                  background: '#ffffff',
                  color: 'var(--color-dark)',
                  padding: '0.625rem 1.5rem',
                  borderRadius: 'var(--radius)',
                  fontWeight: 700,
                  fontSize: '0.9375rem',
                  textDecoration: 'none',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                Get in Touch
              </a>
              <a
                href={`tel:${cv.phone.replace(/\s/g, '')}`}
                style={{
                  display: 'inline-block',
                  background: 'transparent',
                  color: '#ffffff',
                  padding: '0.625rem 1.5rem',
                  borderRadius: 'var(--radius)',
                  fontWeight: 700,
                  fontSize: '0.9375rem',
                  textDecoration: 'none',
                  border: '2px solid rgba(255,255,255,0.3)',
                  transition: 'transform 0.2s ease, border-color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.borderColor = '#ffffff'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
                }}
              >
                Call Now
              </a>
            </div>
          </div>
        </div>

        <footer
          style={{
            marginTop: 'var(--space-xl)',
            paddingTop: 'var(--space-md)',
            borderTop: '1px solid var(--color-border)',
            fontSize: '0.8125rem',
            color: 'var(--color-muted)',
            textAlign: 'center',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}
        >
          Boniface Mwangi — Forklift & Plant Operator
        </footer>
      </main>
    </>
  )
}

export default App
