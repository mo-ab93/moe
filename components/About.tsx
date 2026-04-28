import Image from 'next/image';
import Section from './Section';
import SectionLabel from './SectionLabel';
import ScrollReveal from './ScrollReveal';

export default function About() {
  return (
    <Section id="about" style={{ background: 'var(--bg-alt)' }}>
      <SectionLabel number="01" text="About" />
      <div
        className="about-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.4fr)',
          gap: 'clamp(40px,6vw,80px)',
          alignItems: 'center',
        }}
      >
        <ScrollReveal direction="left">
          <div style={{ position: 'relative' }}>
            <div
              style={{
                width: '100%',
                aspectRatio: '3/4',
                borderRadius: 16,
                overflow: 'hidden',
                background: 'var(--card-bg)',
                position: 'relative',
              }}
            >
              <Image
                src="/moe-photo.jpeg"
                alt="Mohammed Abbas"
                fill
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  filter: 'grayscale(20%)',
                }}
                priority
              />
            </div>
            {/* Decorative offset frame */}
            <div
              style={{
                position: 'absolute',
                inset: 12,
                borderRadius: 16,
                border: '1.5px solid var(--accent)',
                opacity: 0.3,
                pointerEvents: 'none',
                transform: 'translate(12px,12px)',
              }}
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(32px,4vw,52px)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: 'var(--text-primary)',
              margin: '0 0 24px',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            I build things that
            <br />
            <span style={{ color: 'var(--accent)' }}>ship &amp; scale.</span>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--text-secondary)', margin: 0 }}>
              I&apos;m Moe — a Senior Full Stack Developer with 5+ years shipping production
              software. I&apos;m currently at{' '}
              <strong style={{ color: 'var(--text-primary)' }}>Therefore Interactive</strong>,
              building enterprise platforms for many clients, and running{' '}
              <strong style={{ color: 'var(--text-primary)' }}>ALTAIF Inc.</strong>, where I build
              fintech products that handle real money, real compliance, and real users.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--text-secondary)', margin: 0 }}>
              My engineering foundation comes from a Bachelor of Engineering degree and Full Stack
              training at Lighthouse Labs. I work across the entire stack — from React Native mobile
              apps to AI-powered assistants to payment infrastructure.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--text-secondary)', margin: 0 }}>
              I care about craft, accessibility, and building software that earns trust. Whether
              it&apos;s a bank contest platform serving millions or a currency exchange handling
              FINTRAC compliance — I treat every project like it matters, because it does.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
