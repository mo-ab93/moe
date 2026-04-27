'use client';

import { useState } from 'react';

interface Props {
  role: string;
  company: string;
  location: string;
  period: string;
  type?: string;
  bullets: string[];
  isLast?: boolean;
}

export default function TimelineItem({
  role,
  company,
  location,
  period,
  type,
  bullets,
  isLast = false,
}: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{ display: 'flex', gap: 32, position: 'relative', paddingBottom: isLast ? 0 : 48 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Line + dot */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          flexShrink: 0,
          width: 20,
        }}
      >
        <div
          style={{
            width: 14,
            height: 14,
            borderRadius: '50%',
            flexShrink: 0,
            background: hovered ? 'var(--accent)' : 'transparent',
            border: `2px solid ${hovered ? 'var(--accent)' : 'var(--text-muted)'}`,
            transition: 'all 0.3s',
          }}
        />
        {!isLast && (
          <div
            style={{ width: 1, flex: 1, background: 'var(--border)', marginTop: 8 }}
          />
        )}
      </div>

      {/* Content */}
      <div style={{ flex: 1 }}>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            color: 'var(--text-muted)',
            marginBottom: 6,
            letterSpacing: '0.04em',
          }}
        >
          {period}
          {type && <span style={{ opacity: 0.5 }}> · {type}</span>}
        </div>
        <h3
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(20px,2.5vw,28px)',
            fontWeight: 400,
            margin: '0 0 4px',
            color: 'var(--text-primary)',
            fontStyle: 'italic',
          }}
        >
          {role}
        </h3>
        <div style={{ fontSize: 15, color: 'var(--accent)', fontWeight: 500, marginBottom: 4 }}>
          {company}
        </div>
        <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 12 }}>{location}</div>
        <ul style={{ margin: 0, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 6 }}>
          {bullets.map((b, i) => (
            <li
              key={i}
              style={{
                fontSize: 15,
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                fontFamily: 'var(--font-sans)',
              }}
            >
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
