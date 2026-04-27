import type { CSSProperties, ReactNode } from 'react';

interface Props {
  id?: string;
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

export default function Section({ id, children, style = {}, className = '' }: Props) {
  return (
    <section
      id={id}
      className={className}
      style={{
        padding: 'clamp(80px,12vw,160px) clamp(24px,6vw,120px)',
        position: 'relative',
        ...style,
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>{children}</div>
    </section>
  );
}
