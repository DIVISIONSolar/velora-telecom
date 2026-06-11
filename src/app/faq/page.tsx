const faqs = [
{
q: 'Is service available right now?',
a: 'No. Velora Telecom is currently in the research and community interest phase. We are evaluating demand, infrastructure requirements, and deployment feasibility before moving forward with engineering studies and investment discussions. No service contracts are being offered at this time.',
},
{
q: 'What does joining the waitlist do?',
a: 'The waitlist helps demonstrate community demand and provides valuable information for future planning efforts. Interest from households and businesses helps guide engineering studies, infrastructure planning, coverage priorities, and future investment discussions. There is no commitment, contract, or payment required.',
},
{
q: 'Why fixed wireless instead of fiber right away?',
a: 'Modern fixed wireless infrastructure can be deployed significantly faster and at a lower cost than traditional fiber construction. This allows service to reach communities sooner while long-term fiber expansion opportunities are evaluated and planned.',
},
{
q: 'Will fiber service be offered in the future?',
a: 'Fiber expansion is part of Velora’s long-term vision. As the network grows, opportunities for fiber deployment will be evaluated wherever technically and economically feasible.',
},
{
q: 'What areas are being considered?',
a: 'Current planning efforts are focused on Franklin, Rocky Grove, the Heights, and surrounding communities throughout Venango County. Final coverage areas will depend on engineering studies, infrastructure availability, and community demand.',
},
{
q: 'What speeds are you planning to offer?',
a: 'Current planning includes symmetrical service tiers ranging from 100 Mbps to 2.5 Gbps. Final offerings will depend on the results of engineering and feasibility studies.',
},
{
q: 'Will there be data caps?',
a: 'No. Velora plans to offer unlimited data across all service tiers. To ensure a consistent experience for all customers, service may be subject to a reasonable fair use policy designed to prevent network abuse, unlawful activity, or usage patterns that negatively impact other subscribers.',
},
{
q: 'What will pricing look like?',
a: 'Pricing has not yet been finalized. Our goal is straightforward monthly pricing with clear communication, no confusing promotional rates, and no unexpected surprises on your bill.',
},
{
q: 'Will Velora respect customer privacy?',
a: 'Yes. Privacy and transparency are important principles for Velora. As planning progresses, we intend to provide clear information about how customer data is handled and what privacy-focused options may be available.',
},
{
q: 'How can I stay updated?',
a: 'Joining the waitlist is the best way to stay informed. We plan to provide updates as major milestones are reached, including engineering studies, infrastructure planning, funding progress, and future launch announcements. Please do check your spam folder just in case, and feel free to reach out with any questions or feedback.',
},
{
q: 'Will I receive a public IPv4 address?',
a: 'To help conserve limited IPv4 address space and keep costs lower, residential services may utilize Carrier-Grade NAT (CGNAT) by default. Most customers will not notice any difference in everyday activities such as streaming, browsing, gaming, video conferencing, and remote work. Customers who require a dedicated public IPv4 address for self-hosting, inbound connections, VPNs, or advanced networking may be able to purchase one as an optional add-on, subject to availability.',
},
{
q: 'Will IPv6 be supported?',
a: 'Yes. Velora intends to support IPv6 throughout the network. IPv6 provides a modern foundation for internet connectivity and helps reduce dependence on limited IPv4 address space.',
},
];


export default function FAQ() {
  return (
    <main>
      <section style={{ padding: '96px 24px 120px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>Questions &amp; answers</div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.03em', margin: '0 0 64px' }}>
            Frequently Asked Questions
          </h1>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {faqs.map((item, i) => (
              <div key={i} className="card" style={{ padding: '28px 32px', borderRadius: 12 }}>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: 10 }}>{item.q}</div>
                <div style={{ color: 'var(--slate)', fontSize: '0.875rem', lineHeight: 1.72 }}>{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
