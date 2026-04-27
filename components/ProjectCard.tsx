'use client';

import { useState } from 'react';
import TechPill from './TechPill';
import ScrollReveal from './ScrollReveal';

interface Props {
  name: string;
  tagline: string;
  role: string;
  tech: string[];
  url?: string;
  status?: string;
  index: number;
}

export default function ProjectCard({ name, tagline, role, tech, url, status, index }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <ScrollReveal delay={index * 0.08}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => url && window.open(url, '_blank')}
        style={{
          padding: 'clamp(28px,4vw,48px)',
          background: 'var(--card-bg)',
          borderRadius: 16,
          border: `1px solid ${hovered ? 'var(--accent)' : 'var(--border)'}`,
          transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
          transform: hovered ? 'translateY(-4px)' : 'none',
          boxShadow: hovered ? '0 20px 60px var(--card-shadow)' : 'none',
          cursor: url ? 'pointer' : 'default',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {status && (
          <div
            style={{
              display: 'inline-block',
              padding: '4px 12px',
              borderRadius: 20,
              fontSize: 11,
              fontFamily: 'var(--font-mono)',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: 16,
              background: 'var(--accent)',
              color: '#fff',
              opacity: 0.9,
            }}
          >
            {status}
          </div>
        )}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 16,
            marginBottom: 12,
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(24px,3vw,36px)',
              fontWeight: 400,
              margin: 0,
              color: 'var(--text-primary)',
              fontStyle: 'italic',
              lineHeight: 1.2,
            }}
          >
            {name}
          </h3>
          {url && (
            <span
              style={{
                color: 'var(--accent)',
                fontSize: 20,
                flexShrink: 0,
                transform: hovered ? 'translate(3px,-3px)' : 'none',
                transition: 'transform 0.3s',
              }}
            >
              ↗
            </span>
          )}
        </div>
        <p
          style={{
            fontSize: 15,
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            margin: '0 0 8px',
            maxWidth: 560,
          }}
        >
          {tagline}
        </p>
        <div
          style={{
            fontSize: 13,
            color: 'var(--text-muted)',
            fontWeight: 500,
            marginBottom: 16,
          }}
        >
          {role}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {tech.map((t, i) => (
            <TechPill key={i} label={t} />
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
