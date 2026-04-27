'use client';

import { useRef, useState, type CSSProperties, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  style?: CSSProperties;
}

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = 'primary',
  style = {},
}: Props) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setOffset({ x: (e.clientX - cx) * 0.2, y: (e.clientY - cy) * 0.2 });
  };

  const baseStyle: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: variant === 'primary' ? '16px 36px' : '14px 32px',
    fontSize: 16,
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    borderRadius: 60,
    cursor: 'pointer',
    textDecoration: 'none',
    transform: `translate(${offset.x}px,${offset.y}px)`,
    transition:
      'transform 0.3s cubic-bezier(0.16,1,0.3,1), background 0.3s, color 0.3s, box-shadow 0.3s',
    border: variant === 'primary' ? 'none' : '1.5px solid var(--accent)',
    background: variant === 'primary' ? 'var(--accent)' : 'transparent',
    color: variant === 'primary' ? '#fff' : 'var(--accent)',
    letterSpacing: '-0.01em',
    ...style,
  };

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        style={baseStyle}
        onMouseMove={handleMove}
        onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      style={baseStyle}
      onMouseMove={handleMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
    >
      {children}
    </button>
  );
}
