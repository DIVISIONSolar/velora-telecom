import Link from 'next/link';

const tiers = [
  { speed: '100/100', label: 'Essential', unit: 'Mbps', desc: 'Video calls, streaming, remote work for 1–2 users', color: '#1E2D4A', accent: '#8B9BB4' },
  { speed: '300/300', label: 'Standard', unit: 'Mbps', desc: 'Whole-home coverage, multiple devices', color: '#0F2040', accent: '#00C2FF' },
  { speed: '1000/1000', label: 'Gig', unit: 'Mbps', desc: 'Power users, home offices, 4K everywhere', color: '#0A1A35', accent: '#00C2FF', featured: true },
  { speed: '2500/2500', label: 'Ultra', unit: 'Mbps', desc: 'Future-ready for homes and small businesses', color: '#0A1A35', accent: '#00C2FF' },
];

const stats = [
  { value: '250+', label: 'Signups needed', sub: 'To trigger feasibility study' },
  { value: '$0', label: 'Cost to sign up', sub: 'No commitment required' },
  { value: '< 25ms', label: 'Target latency', sub: 'Symmetric upload & download' },
];

const whys = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 11l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Symmetric speeds',
    desc: 'Designed with modern internet usage in mind. Upload speeds matter just as much as downloads for remote work, gaming, cloud backups, and video calls.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 17h16M5 17V9l6-5 6 5v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="8.5" y="12" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Local infrastructure',
    desc: 'Built around local feedback and local needs. Every waitlist signup helps shape where Velora grows and how future service is planned.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2v4M11 16v4M4.93 4.93l2.83 2.83M14.24 14.24l2.83 2.83M2 11h4M16 11h4M4.93 17.07l2.83-2.83M14.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Reliability First',
    desc: 'Our goal is simple: provide dependable connectivity with as few interruptions as possible through careful planning, monitoring, and modern infrastructure.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M2 7h18M2 11h18M2 15h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Transparent pricing',
    desc: 'No teaser rates. No surprise increases after a few months. Just straightforward pricing and clear communication.',
  },
];

export default function Home() {
  return (
    <main>

      {/* ── Hero ── */}
      <section className="pad-a" style={{ position: 'relative', overflow: 'hidden' }}>

        {/* Background grid */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: 'linear-gradient(rgba(0,194,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,194,255,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }} />

        {/* Radial glow */}
        <div style={{
          position: 'absolute', top: '10%', left: '55%', width: 700, height: 700,
          background: 'radial-gradient(ellipse at center, rgba(0,194,255,0.1) 0%, transparent 65%)',
          transform: 'translateX(-50%)', zIndex: 0,
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: 80, flexWrap: 'wrap' }}>

          {/* Text */}
          <div style={{ flex: '1 1 480px' }}>
            <div className="eyebrow" style={{ marginBottom: 20 }}>Research &amp; Community Interest Phase</div>
            <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', fontWeight: 900, lineHeight: 1.06, letterSpacing: '-0.03em', margin: '0 0 24px' }}>
              Fast internet is coming to{' '}
              <span className="gradient-text">Franklin, PA.</span>
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--slate)', lineHeight: 1.7, maxWidth: 520, margin: '0 0 40px' }}>
              Velora Telecom is exploring modern fixed-wireless broadband infrastructure for Franklin, Rocky Grove, the Heights, and the surrounding communities of Venango County.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/waitlist" className="btn-primary">
                Reserve your spot
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
              <Link href="/about" className="btn-ghost">Learn how it works</Link>
            </div>
          </div>

          {/* Signal pulse graphic */}
          <div style={{ flex: '0 0 260px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', height: 260 }}>
            <div className="pulse-ring-2" style={{ position: 'absolute', width: 220, height: 220, borderRadius: '50%', border: '1px solid rgba(0,194,255,0.25)' }} />
            <div className="pulse-ring-1" style={{ position: 'absolute', width: 160, height: 160, borderRadius: '50%', border: '1px solid rgba(0,194,255,0.4)' }} />
            <div style={{ width: 96, height: 96, borderRadius: '50%', background: 'linear-gradient(135deg, #00C2FF22, #00C2FF44)', border: '1.5px solid rgba(0,194,255,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                <path d="M22 32a2 2 0 100 4 2 2 0 000-4z" fill="#00C2FF"/>
                <path d="M14 24c2.2-2.4 4.9-3.8 8-3.8s5.8 1.4 8 3.8" stroke="#00C2FF" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M8 18c3.8-4.2 8.5-6.5 14-6.5s10.2 2.3 14 6.5" stroke="#00C2FF" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.55"/>
                <path d="M2 12C7.5 5.8 14.3 2.5 22 2.5S36.5 5.8 42 12" stroke="#00C2FF" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.25"/>
              </svg>
            </div>
          </div>

        </div>
      </section>

      {/* ── Stats bar ── */}
      <section style={{ borderTop: '1px solid var(--navy-border)', borderBottom: '1px solid var(--navy-border)', background: 'var(--navy-mid)' }}>
        <div className="stats-grid" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          {stats.map((s, i) => (
            <div key={i} style={{ padding: '36px 24px' }}>
              <div style={{ fontSize: '2rem', fontWeight: 900, letterSpacing: '-0.04em', color: 'var(--cyan)' }}>{s.value}</div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem', marginTop: 4 }}>{s.label}</div>
              <div style={{ color: 'var(--slate)', fontSize: '0.8rem', marginTop: 2 }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why Velora ── */}
      <section className="section pad-b">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>Why it matters</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 56px', maxWidth: 520 }}>
            Internet built around you, not a cable franchise.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 2 }}>
            {whys.map((w, i) => (
              <div key={i} className="card card-hover" style={{ padding: '32px 28px' }}>
                <div style={{ color: 'var(--cyan)', marginBottom: 18 }}>{w.icon}</div>
                <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: 10 }}>{w.title}</div>
                <div style={{ color: 'var(--slate)', fontSize: '0.875rem', lineHeight: 1.65 }}>{w.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Speed tiers ── */}
      <section className="pad-c">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>Service tiers under consideration</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 12px' }}>
            Speeds that actually keep up.
          </h2>
          <p style={{ color: 'var(--slate)', fontSize: '0.95rem', marginBottom: 48, maxWidth: 480 }}>
            All tiers deliver symmetric speeds, upload equals download. Pricing subject to feasibility study.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
            {tiers.map((t, i) => (
              <div key={i} className="card card-hover" style={{
                padding: '32px 28px',
                position: 'relative',
                overflow: 'hidden',
                border: t.featured ? '1px solid rgba(0,194,255,0.5)' : '1px solid var(--navy-border)',
              }}>
                {t.featured && (
                  <div style={{ position: 'absolute', top: 16, right: 16 }}>
                    <span className="tier-badge" style={{ background: 'rgba(0,194,255,0.15)', color: 'var(--cyan)', border: '1px solid rgba(0,194,255,0.3)' }}>
                      Most popular
                    </span>
                  </div>
                )}
                <div style={{ color: 'var(--slate)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10 }}>{t.label}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 8 }}>
                  <span style={{ fontSize: '2.2rem', fontWeight: 900, letterSpacing: '-0.04em', color: t.featured ? 'var(--cyan)' : 'var(--white)' }}>{t.speed}</span>
                  <span style={{ color: 'var(--slate)', fontSize: '0.85rem', fontWeight: 500 }}>{t.unit}</span>
                </div>
                <div style={{ color: 'var(--slate)', fontSize: '0.83rem', lineHeight: 1.6 }}>{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="pad-c">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="card roadmap-card" style={{ background: 'var(--navy-mid)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48, alignItems: 'center' }}>
              <div>
                <div className="eyebrow" style={{ marginBottom: 16 }}>The roadmap</div>
                <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 24px' }}>
                  From interest to infrastructure.
                </h2>
                <p style={{ color: 'var(--slate)', lineHeight: 1.75, marginBottom: 32, fontSize: '0.95rem' }}>
                  We need to demonstrate real demand before approaching investors, commissioning engineering studies, and negotiating upstream bandwidth. Your spot on the waitlist is what makes this real.
                </p>
                <Link href="/waitlist" className="btn-primary">
                  Join the waitlist, it's free and helps us show investors the demand in Franklin.
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[
                  { n: '01', title: 'Waitlist hits 250+', desc: 'Enough demand to justify the next steps.' },
                  { n: '02', title: 'Feasibility & engineering', desc: 'Tower sites, coverage maps, hardware specs.' },
                  { n: '03', title: 'Investor presentations', desc: 'Funding locked in, buildout timeline confirmed.' },
                  { n: '04', title: 'Service launches', desc: 'Installs begin, service goes live.' },
                ].map(step => (
                  <div key={step.n} style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                    <div style={{ fontWeight: 900, fontSize: '0.7rem', color: 'var(--cyan)', letterSpacing: '0.08em', paddingTop: 3, minWidth: 24 }}>{step.n}</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: 2 }}>{step.title}</div>
                      <div style={{ color: 'var(--slate)', fontSize: '0.83rem' }}>{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="pad-d">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', padding: 'clamp(48px, 10vw, 80px) clamp(20px, 5vw, 32px)', background: 'linear-gradient(135deg, rgba(0,194,255,0.08), rgba(0,194,255,0.03))', border: '1px solid rgba(0,194,255,0.2)', borderRadius: 24 }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>Be part of it</div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 900, letterSpacing: '-0.04em', margin: '0 0 16px' }}>
              Ready for real broadband?
            </h2>
            <p style={{ color: 'var(--slate)', maxWidth: 480, margin: '0 auto 40px', lineHeight: 1.7, fontSize: '0.95rem' }}>
              No commitment, no payment. Just join the waitlist so we can show investors that Franklin wants this.
            </p>
            <Link href="/waitlist" className="btn-primary" style={{ fontSize: '1rem', padding: '16px 36px' }}>
              Reserve your spot
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9h12M10 5l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
