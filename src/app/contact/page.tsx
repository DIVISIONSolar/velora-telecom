import Link from 'next/link';

export default function Contact() {
  return (
    <main>
      <section className="pad-g">
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>Get in touch</div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 900, letterSpacing: '-0.03em', margin: '0 0 16px' }}>
            Contact Velora.
          </h1>
          <p style={{ color: 'var(--slate)', lineHeight: 1.75, marginBottom: 56, fontSize: '0.95rem' }}>
            We're in the early stages and a small team. Reach out with questions, coverage suggestions, or interest in partnering with us.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 56 }}>
            <div className="card" style={{ padding: '24px 28px', display: 'flex', alignItems: 'center', gap: 20 }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(0,194,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="2" y="4" width="16" height="12" rx="2" stroke="var(--cyan)" strokeWidth="1.5"/>
                  <path d="M2 7l8 5 8-5" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>Email</div>
                <a href="mailto:contact@veloratelecom.com" style={{ color: 'var(--white)', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none' }}>
                  contact@veloratelecom.com
                </a>
              </div>
            </div>

            <div className="card" style={{ padding: '24px 28px', display: 'flex', alignItems: 'center', gap: 20 }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(0,194,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2C7.24 2 5 4.24 5 7c0 4 5 11 5 11s5-7 5-11c0-2.76-2.24-5-5-5z" stroke="var(--cyan)" strokeWidth="1.5"/>
                  <circle cx="10" cy="7" r="1.5" stroke="var(--cyan)" strokeWidth="1.5"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>Service area</div>
                <div style={{ color: 'var(--white)', fontWeight: 600, fontSize: '0.95rem' }}>Franklin, PA · Venango County</div>
              </div>
            </div>
          </div>

          <div style={{ background: 'rgba(0,194,255,0.06)', border: '1px solid rgba(0,194,255,0.2)', borderRadius: 12, padding: '24px 28px' }}>
            <div style={{ fontWeight: 700, marginBottom: 8, fontSize: '0.9rem' }}>Want to be notified as we progress?</div>
            <p style={{ color: 'var(--slate)', fontSize: '0.875rem', lineHeight: 1.65, marginBottom: 16 }}>
              The fastest way to stay updated is the waitlist. We'll send milestone updates — no spam.
            </p>
            <Link href="/waitlist" className="btn-primary" style={{ fontSize: '0.875rem', padding: '11px 22px' }}>
              Join the waitlist
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
