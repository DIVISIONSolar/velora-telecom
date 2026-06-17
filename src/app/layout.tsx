import Link from 'next/link';
import NavBar from './components/NavBar';
// @ts-ignore
import './globals.css';

export const metadata = {
  title: 'Velora Telecom — Modern Broadband for Franklin, PA',
  description: 'Community broadband initiative bringing fast, reliable internet to Franklin, Rocky Grove, the Heights and surrounding areas.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ background: 'var(--navy)', color: 'var(--white)', margin: 0 }}>

        <NavBar />

        {children}

        {/* Footer */}
        <footer style={{ borderTop: '1px solid var(--navy-border)', padding: '48px 24px', marginTop: 0 }}>
          <div className="footer-inner" style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontWeight: 800, fontSize: '0.95rem', marginBottom: 6 }}>
                <img src="/velora-icon.png" alt="" style={{ height: 18, width: 'auto' }} />
                Velora Telecom
              </div>
              <div style={{ color: 'var(--slate)', fontSize: '0.8rem' }}>Franklin, PA · Rocky Grove · The Heights · Surrounding Communities</div>
            </div>
            <div className="footer-links">
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
