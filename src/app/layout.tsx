import Link from 'next/link';
// @ts-ignore
import './globals.css';

export const metadata = {
  title: 'Velora Telecom — Modern Broadband for Franklin, PA',
  description: 'Community broadband initiative bringing fast, reliable internet to Franklin, Rocky Grove, the Heights and surrounding areas.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ background: 'var(--navy)', color: 'var(--white)', margin: 0 }}>

        {/* Navigation */}
        <nav style={{
          borderBottom: '1px solid var(--navy-border)',
          position: 'sticky', top: 0, zIndex: 50,
          background: 'rgba(10,15,30,0.92)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>

            {/* Logo */}
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 14a1 1 0 100 2 1 1 0 000-2z" fill="#0A0F1E"/>
                  <path d="M5.5 10.5C6.8 9.2 7.85 8.5 9 8.5s2.2.7 3.5 2" stroke="#0A0F1E" strokeWidth="1.8" strokeLinecap="round"/>
                  <path d="M2.5 7.5C4.6 5.3 6.7 4 9 4s4.4 1.3 6.5 3.5" stroke="#0A0F1E" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>
              <span style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--white)', letterSpacing: '-0.01em' }}>Velora Telecom</span>
            </Link>

            {/* Links */}
            <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
              <Link href="/about" className="nav-link">About</Link>
              <Link href="/faq" className="nav-link">FAQ</Link>
              <Link href="/contact" className="nav-link">Contact</Link>
              <Link href="/waitlist" className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.8rem' }}>
                Join Waitlist
              </Link>
            </div>

          </div>
        </nav>

        {children}

        {/* Footer */}
        <footer style={{ borderTop: '1px solid var(--navy-border)', padding: '48px 24px', marginTop: 0 }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 24 }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.95rem', marginBottom: 6 }}>Velora Telecom</div>
              <div style={{ color: 'var(--slate)', fontSize: '0.8rem' }}>Franklin, PA · Rocky Grove · The Heights · Surrounding Communities</div>
            </div>
            <div style={{ display: 'flex', gap: 32 }}>
              <Link href="/about" className="nav-link" style={{ fontSize: '0.8rem' }}>About</Link>
              <Link href="/faq" className="nav-link" style={{ fontSize: '0.8rem' }}>FAQ</Link>
              <Link href="/waitlist" className="nav-link" style={{ fontSize: '0.8rem' }}>Waitlist</Link>
              <Link href="/contact" className="nav-link" style={{ fontSize: '0.8rem' }}>Contact</Link>
            </div>
            <div style={{ color: 'var(--slate)', fontSize: '0.75rem' }}>
              © 2025 Velora Telecom · Research & Community Interest Phase
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
