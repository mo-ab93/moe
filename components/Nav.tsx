'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Writing', href: '#writing' },
  { label: 'Contact', href: '#contact' },
];

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Nav() {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: scrolled
            ? '12px clamp(24px,4vw,48px)'
            : '20px clamp(24px,4vw,48px)',
          background: scrolled ? 'var(--nav-bg)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(1.5)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          transition: 'all 0.4s',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 22,
            fontWeight: 400,
            color: 'var(--text-primary)',
            textDecoration: 'none',
            fontStyle: 'italic',
          }}
        >
          Moe<span style={{ color: 'var(--accent)' }}>.</span>
        </a>

        {/* Desktop links */}
        <div
          className="nav-desktop"
          style={{ display: 'flex', alignItems: 'center', gap: 32 }}
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(l.href);
              }}
              style={{
                fontSize: 13,
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                color: hoveredLink === l.href ? 'var(--accent)' : 'var(--text-muted)',
                textDecoration: 'none',
                letterSpacing: '0.02em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={() => setHoveredLink(l.href)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {l.label}
            </a>
          ))}

          {/* Theme toggle pill */}
          <button
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            style={{
              background: isDark ? 'var(--accent)' : 'var(--text-primary)',
              border: 'none',
              borderRadius: 24,
              width: 52,
              height: 28,
              cursor: 'pointer',
              position: 'relative',
              transition: 'background 0.4s',
              flexShrink: 0,
            }}
          >
            <span
              style={{
                position: 'absolute',
                top: 3,
                left: isDark ? 27 : 3,
                width: 22,
                height: 22,
                borderRadius: '50%',
                background: '#fff',
                boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
                transition: 'left 0.4s cubic-bezier(0.16,1,0.3,1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 12,
                lineHeight: '1',
                color: '#1a1815',
              }}
            >
              {isDark ? '☀' : '☽'}
            </span>
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-mobile-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--text-primary)',
            fontSize: 24,
            padding: 4,
          }}
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile full-screen menu */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99,
            background: 'var(--bg)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 32,
          }}
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => {
                e.preventDefault();
                setMobileOpen(false);
                scrollTo(l.href);
              }}
              style={{
                fontSize: 28,
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                color: 'var(--text-primary)',
                textDecoration: 'none',
              }}
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => {
              toggleTheme();
              setMobileOpen(false);
            }}
            style={{
              background: 'none',
              border: '1px solid var(--border)',
              borderRadius: 20,
              padding: '8px 20px',
              cursor: 'pointer',
              fontSize: 16,
              color: 'var(--text-muted)',
            }}
          >
            {isDark ? '☀ Light mode' : '☽ Dark mode'}
          </button>
        </div>
      )}
    </>
  );
}
