import Link from 'next/link';

export default function Waitlist() {
  return (
    <main>
      <section style={{ padding: '96px 24px 120px' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>
            Community Interest Survey
          </div>

          <h1
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              margin: '0 0 16px',
            }}
          >
            Help Bring Better Internet to Venango County.
          </h1>

          <p
            style={{
              color: 'var(--slate)',
              lineHeight: 1.75,
              marginBottom: 48,
              fontSize: '0.95rem',
            }}
          >
            No payment. No commitment.
            <br />
            <br />
            Joining the survey helps demonstrate community demand and
            supports future engineering studies, infrastructure planning,
            investor presentations, and deployment decisions.
            <br />
            <br />
            The survey is hosted securely through Google Forms and takes
            only a few minutes to complete. We'll keep you informed as
            major milestones are reached, including planning updates,
            funding progress, and future service availability.
          </p>

          <div className="card" style={{ padding: '40px 36px' }}>
            <h3
              style={{
                margin: '0 0 20px',
                fontSize: '1.15rem',
                fontWeight: 700,
              }}
            >
              What we'll ask
            </h3>

            <p
              style={{
                color: 'var(--slate)',
                lineHeight: 1.7,
                marginBottom: 24,
                fontSize: '0.9rem',
              }}
            >
              We're focused on understanding demand and planning future
              coverage areas. The survey does not require an exact street
              address to respect your privacy and takes only a few minutes to complete.
            </p>

            <ul
              style={{
                color: 'var(--slate)',
                lineHeight: 1.9,
                marginBottom: 32,
                paddingLeft: 20,
              }}
            >
              <li>ZIP code and general area</li>
              <li>Road or street name</li>
              <li>Current internet provider</li>
              <li>Approximate monthly internet cost</li>
              <li>Residential or business service</li>
              <li>Desired internet speeds</li>
              <li>Whether you work from home</li>
              <li>Tree coverage around your property</li>
              <li>
                Potential visibility to towers, water towers, or elevated
                structures
              </li>
              <li>Contact information for future updates</li>
              <li>Able to have a small or medium sized receiver somewhere on your property (Examples can be shown upon request)</li>
            </ul>

            <a
              href="https://forms.gle/ozMiZs1hLx3bCDvKA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                width: '100%',
                justifyContent: 'center',
                padding: '15px',
                display: 'flex',
                textDecoration: 'none',
                boxSizing: 'border-box',
              }}
            >
              Open Community Interest Survey
            </a>

            <p
              style={{
                color: 'var(--slate)',
                fontSize: '0.75rem',
                textAlign: 'center',
                lineHeight: 1.6,
                marginTop: 16,
                marginBottom: 0,
              }}
            >
              Exact addresses are not required at this stage.
              Information collected is used solely for demand analysis,
              coverage planning, and project updates. Information is never
              sold or shared with third parties.
            </p>
          </div>

          <div
            style={{
              marginTop: 32,
              display: 'flex',
              gap: 24,
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {[
              'No payment required',
              'No commitment',
              'Updates as milestones are reached',
              'Information is never sold',
            ].map((t, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  color: 'var(--slate)',
                  fontSize: '0.8rem',
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <circle
                    cx="7"
                    cy="7"
                    r="6"
                    stroke="var(--cyan)"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M4.5 7l2 2 3-3"
                    stroke="var(--cyan)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {t}
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 56,
              textAlign: 'center',
            }}
          >
            <Link href="/faq" className="btn-ghost">
              Read the FAQ
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}