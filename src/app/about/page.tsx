import Link from 'next/link';

export default function About() {
  return (
    <main>
      <section style={{ padding: '96px 24px 80px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>About Velora</div>

          <h1
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              margin: '0 0 32px',
            }}
          >
            Built for Venango County. Driven by Community Demand.
          </h1>

          <p
            style={{
              color: 'var(--slate)',
              lineHeight: 1.8,
              fontSize: '1.05rem',
              marginBottom: 28,
            }}
          >
            Velora Telecom is a proposed broadband provider currently in the
            research and planning phase. We're exploring the feasibility of
            deploying modern broadband infrastructure throughout Franklin,
            Rocky Grove, the Heights, and surrounding communities, with a
            long-term vision of expanding high-speed connectivity across the
            region.
          </p>

          <p
            style={{
              color: 'var(--slate)',
              lineHeight: 1.8,
              fontSize: '1.05rem',
              marginBottom: 28,
            }}
          >
            Many residents and businesses have expressed concerns regarding
            internet reliability, outages, limited provider choice, upload
            speeds, download performance during peak hours, and rising monthly
            costs. Our goal is to determine whether a locally focused provider
            can deliver another option built around reliability, transparency,
            performance, and long-term investment in the communities we serve.
          </p>

          <p
            style={{
              color: 'var(--slate)',
              lineHeight: 1.8,
              fontSize: '1.05rem',
              marginBottom: 56,
            }}
          >
            We're not asking for funding. We're asking for interest.
            <br />
            <br />
            Every waitlist signup helps demonstrate community demand and
            provides valuable information for future engineering studies,
            investor presentations, infrastructure planning, and deployment
            decisions. If enough households and businesses show interest, we
            can begin taking the next steps toward turning this concept into
            reality.
          </p>

          <div
            style={{
              borderTop: '1px solid var(--navy-border)',
              paddingTop: 48,
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 32,
            }}
          >
            {[
              {
                title: 'Fixed Wireless First',
                body:
                  'Modern fixed wireless infrastructure can be deployed significantly faster and at a lower cost than traditional fiber construction. This approach helps bring service to communities sooner while long-term expansion plans are developed.',
              },
              {
                title: 'Long-Term Fiber Vision',
                body:
                  "Fixed wireless is not the destination, it's the starting point. As the network grows, Velora intends to evaluate fiber expansion opportunities wherever technically and economically feasible.",
              },
              {
                title: 'Symmetrical Speeds',
                body:
                  "Today's internet isn't just about downloading. Remote work, cloud storage, video conferencing, gaming, and content creation all depend on strong upload performance. Our vision centers around symmetrical service tiers whenever possible.",
              },
              {
                title: 'Built Locally',
                body:
                  'Velora is being designed with local communities in mind. Local feedback, local knowledge, and direct community engagement will help shape how the network grows and where future service becomes available.',
              },
            ].map((item, i) => (
              <div key={i} className="card" style={{ padding: '28px 24px' }}>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    marginBottom: 10,
                  }}
                >
                  {item.title}
                </div>

                <div
                  style={{
                    color: 'var(--slate)',
                    fontSize: '0.875rem',
                    lineHeight: 1.65,
                  }}
                >
                  {item.body}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 56, display: 'flex', gap: 12 }}>
            <Link href="/waitlist" className="btn-primary">
              Join the waitlist
            </Link>

            <Link href="/faq" className="btn-ghost">
              Read the FAQ
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}