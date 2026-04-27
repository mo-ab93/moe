'use client';

import { useState } from 'react';
import Section from './Section';
import SectionLabel from './SectionLabel';
import ScrollReveal from './ScrollReveal';

const blogPosts = [
  {
    title: 'Building AI Assistants for Regulated Fintech',
    topic: 'AI + Compliance',
    date: 'Coming soon',
    excerpt:
      'How I engineered compliance-aware prompt systems for a FINTRAC-registered money services business.',
  },
  {
    title: 'Monorepo at Scale with Turborepo',
    topic: 'Architecture',
    date: 'Coming soon',
    excerpt:
      'Lessons from building a TypeScript monorepo spanning web, mobile, and admin across multiple deployment targets.',
  },
];

function BlogCard({
  title,
  topic,
  date,
  excerpt,
}: {
  title: string;
  topic: string;
  date: string;
  excerpt: string;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: 'clamp(24px,3vw,40px)',
        borderRadius: 16,
        background: 'var(--card-bg)',
        border: `1px solid ${hovered ? 'var(--accent)' : 'var(--border)'}`,
        transition: 'border-color 0.3s',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 12,
          color: 'var(--accent)',
          marginBottom: 12,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
        }}
      >
        {topic} · {date}
      </div>
      <h3
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(22px,2.5vw,30px)',
          fontWeight: 400,
          fontStyle: 'italic',
          color: 'var(--text-primary)',
          margin: '0 0 12px',
        }}
      >
        {title}
      </h3>
      <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--text-secondary)', margin: 0 }}>
        {excerpt}
      </p>
    </div>
  );
}

export default function Writing() {
  return (
    <Section id="writing" style={{ background: 'var(--bg-alt)' }}>
      <SectionLabel number="05" text="Writing" />
      <ScrollReveal>
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(32px,4vw,48px)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: 'var(--text-primary)',
            margin: '0 0 48px',
            lineHeight: 1.1,
          }}
        >
          Thoughts &amp; <span style={{ color: 'var(--accent)' }}>writing.</span>
        </h2>
      </ScrollReveal>
      <div style={{ display: 'grid', gap: 24 }}>
        {blogPosts.map((post, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <BlogCard {...post} />
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
