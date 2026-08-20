import React from 'react'

const cv = {
  name: 'Boniface Ngeene Muni',
  title: 'Forklift & Plant Operator',
  subtitle: '15+ Years | Kenya · UAE · Nigeria',
  email: 'bonncom2486@yahoo.com',
  phone: '+254 714 157 912',
  nationality: 'Kenyan',
  dob: '24 May 1986',
  summary:
    'Highly skilled Forklift and Plant Operator with over 15 years of international experience in oil & gas, construction, and industrial manufacturing. Proven expertise in heavy equipment operation, preventive maintenance, and site safety compliance across Kenya, the UAE, and Nigeria. Adept at working with minimal supervision and delivering operational efficiency in fast-paced, high-stakes environments. Experienced team leader with international team management skills and a track record of entrepreneurship and business ownership.',
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

function App() {
  const [loaded, setLoaded] = React.useState(false)

  React.useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 50)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main
      style={{
        opacity: loaded ? 1 : 0,
        transform: loaded ? 'translateY(0)' : 'translateY(12px)',
        transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <header
        style={{
          background: 'linear-gradient(135deg, #1c1917 0%, #292524 50%, #1c1917 100%)',
          color: '#ffffff',
          padding: 'var(--space-xl) var(--space-lg)',
          borderRadius: 'var(--radius-lg)',
          marginBottom: 'var(--space-xl)',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 24px 48px -12px rgba(28, 25, 23, 0.25)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-50%',
            right: '-10%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(180, 83, 9, 0.15) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              marginBottom: 'var(--space-sm)',
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
            }}
          >
            {cv.title}
          </p>
          <p
            style={{
              fontSize: '0.9375rem',
              opacity: 0.7,
              marginBottom: 'var(--space-md)',
              fontWeight: 400,
              letterSpacing: '0.02em',
            }}
          >
            {cv.subtitle}
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--space-md)',
              fontSize: '0.875rem',
              opacity: 0.85,
              fontWeight: 500,
              letterSpacing: '0.01em',
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
              <span style={{ opacity: 0.7 }}>✉</span> {cv.email}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
              <span style={{ opacity: 0.7 }}>☎</span> {cv.phone}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
              <span style={{ opacity: 0.7 }}>◎</span> {cv.nationality}
            </span>
          </div>
        </div>
      </header>

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
  )
}

export default App
