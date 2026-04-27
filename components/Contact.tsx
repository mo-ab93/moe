'use client';

import { useState } from 'react';
import Section from './Section';
import SectionLabel from './SectionLabel';
import ScrollReveal from './ScrollReveal';
import MagneticButton from './MagneticButton';

const socialLinks = [
  { label: 'LinkedIn', url: 'https://linkedin.com/in/mohammed-abbas93' },
  { label: 'GitHub', url: 'https://github.com/mo-ab93' },
  { label: 'Email', url: 'mailto:mohammed.abbas1193@gmail.com' },
];

function SocialLink({ label, url }: { label: string; url: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        color: hovered ? 'var(--accent)' : 'var(--text-muted)',
        textDecoration: 'none',
        letterSpacing: '0.04em',
        transition: 'color 0.2s',
        borderBottom: `1px solid ${hovered ? 'var(--accent)' : 'transparent'}`,
      }}
    >
      {label}
    </a>
  );
}

export default function Contact() {
  return (
    <Section id="contact">
      <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
        <ScrollReveal>
          <SectionLabel number="06" text="Contact" />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(40px,6vw,72px)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: 'var(--text-primary)',
              margin: '0 0 24px',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
            }}
          >
            Let&apos;s build
            <br />
            <span style={{ color: 'var(--accent)' }}>something.</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
              margin: '0 0 40px',
            }}
          >
            Open to remote full-time, contract, and freelance work across Canada and North America.
            Whether you need a senior developer or a technical partner — let&apos;s talk.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 16,
              flexWrap: 'wrap',
              marginBottom: 48,
            }}
          >
            <MagneticButton href="mailto:mohammed.abbas1193@gmail.com" variant="primary">
              Get in touch
            </MagneticButton>
            <MagneticButton href="tel:+16132935615" variant="secondary">
              613-293-5615
            </MagneticButton>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.4}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 32 }}>
            {socialLinks.map((link) => (
              <SocialLink key={link.label} {...link} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
