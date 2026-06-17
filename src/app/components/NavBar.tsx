'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav
      style={{
        borderBottom: '1px solid var(--navy-border)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(10,15,30,0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64,
      }}>

        {/* Logo */}
        <Link href="/" onClick={close} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="/velora-logo.png" alt="Velora Telecom" className="nav-logo-img" />
        </Link>

        {/* Desktop links */}
        <div className="nav-links-desktop">
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/faq" className="nav-link">FAQ</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
          <Link href="/waitlist" className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.8rem' }}>
            Join Waitlist
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-hamburger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="nav-mobile-menu">
          <Link href="/about" className="nav-link" onClick={close}>About</Link>
          <Link href="/faq" className="nav-link" onClick={close}>FAQ</Link>
          <Link href="/contact" className="nav-link" onClick={close}>Contact</Link>
          <Link href="/waitlist" className="btn-primary" onClick={close}>
            Join Waitlist
          </Link>
        </div>
      )}
    </nav>
  );
}
