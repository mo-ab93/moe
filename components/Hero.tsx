'use client';

import { useTheme } from '@/contexts/ThemeContext';
import GeometricHero from './GeometricHero';
import ScrollReveal from './ScrollReveal';
import MagneticButton from './MagneticButton';

export default function Hero() {
  const { accentColor, isDark } = useTheme();
  const bgColor = isDark ? '#0f0e0c' : '#faf7f2';

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding:
          'clamp(120px,15vw,180px) clamp(24px,6vw,120px) clamp(80px,10vw,120px)',
      }}
    >
      <GeometricHero accent={accentColor} bgColor={bgColor} />

      {/* Grain overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.03,
          pointerEvents: 'none',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
          width: '100%',
        }}
      >
        <ScrollReveal>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 13,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: 24,
              fontWeight: 500,
            }}
          >
            Senior Full Stack Developer
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 400,
              fontStyle: 'italic',
              fontSize: 'clamp(48px,9vw,120px)',
              lineHeight: 0.95,
              margin: '0 0 24px',
              color: 'var(--text-primary)',
              letterSpacing: '-0.03em',
            }}
          >
            Mohammed
            <br />
            <span style={{ color: 'var(--accent)' }}>Abbas</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p
            style={{
              fontSize: 'clamp(17px,2vw,21px)',
              lineHeight: 1.6,
              maxWidth: 540,
              color: 'var(--text-secondary)',
              margin: '0 0 16px',
              fontFamily: 'var(--font-sans)',
            }}
          >
            Building production&#8209;grade web, mobile, and AI&#8209;powered products.
            Enterprise platforms to fintech—shipped and scaling.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 13,
              color: 'var(--text-muted)',
              marginBottom: 40,
              letterSpacing: '0.02em',
            }}
          >
            Kitchener-Waterloo / Toronto, Canada · Open to remote
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <MagneticButton href="#contact" variant="primary">
              Get in touch
            </MagneticButton>
            <MagneticButton href="#projects" variant="secondary">
              View work
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
