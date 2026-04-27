'use client';

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right';

interface Props {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
  distance?: number;
  style?: CSSProperties;
  className?: string;
}

const dirMap: Record<Direction, [number, number]> = {
  up: [0, 40],
  down: [0, -40],
  left: [40, 0],
  right: [-40, 0],
};

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  distance = 40,
  style = {},
  className = '',
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const [tx, ty] = dirMap[direction] ?? [0, distance];

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translate(0,0)' : `translate(${tx}px,${ty}px)`,
        transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
