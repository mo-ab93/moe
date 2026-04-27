'use client';

import { useEffect, useRef } from 'react';

interface Props {
  accent: string;
  bgColor: string;
}

export default function GeometricHero({ accent }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const mouseTargetRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    let w = 0;
    let h = 0;
    let dpr = 1;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.offsetWidth * dpr;
      h = canvas.offsetHeight * dpr;
      canvas.width = w;
      canvas.height = h;
    };
    resize();
    window.addEventListener('resize', resize);

    const handleMouse = (e: MouseEvent) => {
      mouseTargetRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };
    window.addEventListener('mousemove', handleMouse);

    // Parse accent color to RGB for canvas glow effects
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = tempCanvas.height = 1;
    const tempCtx = tempCanvas.getContext('2d')!;
    tempCtx.fillStyle = accent;
    tempCtx.fillRect(0, 0, 1, 1);
    const [ar, ag, ab] = tempCtx.getImageData(0, 0, 1, 1).data;

    // Constellation grid nodes
    const cols = 12;
    const rows = 8;
    const nodes: {
      baseX: number;
      baseY: number;
      x: number;
      y: number;
      phase: number;
      freq: number;
      amp: number;
      size: number;
    }[] = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        nodes.push({
          baseX: (c + 0.5) / cols,
          baseY: (r + 0.5) / rows,
          x: 0,
          y: 0,
          phase: Math.random() * Math.PI * 2,
          freq: 0.3 + Math.random() * 0.5,
          amp: 8 + Math.random() * 20,
          size: 1.5 + Math.random() * 2.5,
        });
      }
    }

    // Floating geometric shapes
    type ShapeType = 'diamond' | 'hexagon' | 'arc' | 'cross';
    const shapes: {
      x: number;
      y: number;
      size: number;
      rotation: number;
      rotSpeed: number;
      type: ShapeType;
      opacity: number;
      parallax: number;
    }[] = Array.from({ length: 8 }, (_, i) => ({
      x: 0.1 + Math.random() * 0.8,
      y: 0.1 + Math.random() * 0.8,
      size: 40 + Math.random() * 100,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.003,
      type: (['diamond', 'hexagon', 'arc', 'cross'] as ShapeType[])[i % 4],
      opacity: 0.04 + Math.random() * 0.06,
      parallax: 0.02 + Math.random() * 0.08,
    }));

    // Orbiting particles
    const orbiters: {
      cx: number;
      cy: number;
      radius: number;
      angle: number;
      speed: number;
      size: number;
      opacity: number;
    }[] = Array.from({ length: 24 }, () => ({
      cx: 0.3 + Math.random() * 0.4,
      cy: 0.3 + Math.random() * 0.4,
      radius: 60 + Math.random() * 200,
      angle: Math.random() * Math.PI * 2,
      speed: (0.2 + Math.random() * 0.6) * (Math.random() > 0.5 ? 1 : -1),
      size: 1 + Math.random() * 2.5,
      opacity: 0.08 + Math.random() * 0.15,
    }));

    let lastT = 0;

    const draw = (t: number) => {
      const dt = Math.min(t - lastT, 50);
      lastT = t;

      // Smooth mouse interpolation
      const m = mouseRef.current;
      const mt = mouseTargetRef.current;
      m.x += (mt.x - m.x) * 0.04;
      m.y += (mt.y - m.y) * 0.04;

      ctx.clearRect(0, 0, w, h);

      // ── Layer 1: Constellation grid ──
      const threshold = 120 * dpr;
      nodes.forEach((n) => {
        const drift = Math.sin(t * 0.001 * n.freq + n.phase) * n.amp;
        const driftY = Math.cos(t * 0.001 * n.freq * 0.7 + n.phase) * n.amp * 0.6;
        const mouseOffX = (m.x - 0.5) * 30;
        const mouseOffY = (m.y - 0.5) * 30;
        n.x = n.baseX * w + drift * dpr + mouseOffX * dpr;
        n.y = n.baseY * h + driftY * dpr + mouseOffY * dpr;
      });

      // Draw connections
      ctx.lineWidth = 0.5 * dpr;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < threshold) {
            const alpha = (1 - dist / threshold) * 0.06;
            ctx.strokeStyle = `rgba(${ar},${ag},${ab},${alpha})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((n) => {
        const distToMouse = Math.hypot(n.x - m.x * w, n.y - m.y * h);
        const proximity = Math.max(0, 1 - distToMouse / (300 * dpr));
        const glow = n.size * (1 + proximity * 3);
        ctx.globalAlpha = 0.12 + proximity * 0.5;
        ctx.fillStyle = accent;
        ctx.beginPath();
        ctx.arc(n.x, n.y, glow * dpr * 0.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      // ── Layer 2: Floating geometric shapes ──
      shapes.forEach((s) => {
        s.rotation += s.rotSpeed;
        const px = (s.x + (m.x - 0.5) * s.parallax) * w;
        const py = (s.y + (m.y - 0.5) * s.parallax) * h;
        const pulse = 1 + Math.sin(t * 0.0008 + s.x * 6) * 0.15;
        const sz = s.size * pulse * dpr;

        ctx.save();
        ctx.translate(px, py);
        ctx.rotate(s.rotation);
        ctx.strokeStyle = accent;
        ctx.lineWidth = 1.2 * dpr;
        ctx.globalAlpha = s.opacity;

        if (s.type === 'diamond') {
          ctx.beginPath();
          ctx.moveTo(0, -sz);
          ctx.lineTo(sz * 0.6, 0);
          ctx.lineTo(0, sz);
          ctx.lineTo(-sz * 0.6, 0);
          ctx.closePath();
          ctx.stroke();
        } else if (s.type === 'hexagon') {
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const a = (Math.PI / 3) * i - Math.PI / 6;
            if (i === 0) ctx.moveTo(Math.cos(a) * sz * 0.5, Math.sin(a) * sz * 0.5);
            else ctx.lineTo(Math.cos(a) * sz * 0.5, Math.sin(a) * sz * 0.5);
          }
          ctx.closePath();
          ctx.stroke();
        } else if (s.type === 'arc') {
          ctx.beginPath();
          ctx.arc(0, 0, sz * 0.5, 0, Math.PI * 1.3);
          ctx.stroke();
        } else {
          // cross
          const arm = sz * 0.4;
          ctx.beginPath();
          ctx.moveTo(-arm, 0);
          ctx.lineTo(arm, 0);
          ctx.moveTo(0, -arm);
          ctx.lineTo(0, arm);
          ctx.stroke();
        }
        ctx.restore();
      });

      // ── Layer 3: Orbiting particles ──
      orbiters.forEach((o) => {
        o.angle += o.speed * 0.001 * (dt / 16);
        const cx = (o.cx + (m.x - 0.5) * 0.03) * w;
        const cy = (o.cy + (m.y - 0.5) * 0.03) * h;
        const px = cx + Math.cos(o.angle) * o.radius * dpr;
        const py = cy + Math.sin(o.angle) * o.radius * dpr;
        const trailAlpha = o.opacity * 0.3;

        // Trail dots
        for (let tr = 1; tr <= 3; tr++) {
          const ta = o.angle - o.speed * 0.001 * tr * 8;
          const tx = cx + Math.cos(ta) * o.radius * dpr;
          const ty = cy + Math.sin(ta) * o.radius * dpr;
          ctx.globalAlpha = trailAlpha * (1 - tr / 4);
          ctx.fillStyle = accent;
          ctx.beginPath();
          ctx.arc(tx, ty, o.size * dpr * (1 - tr * 0.2), 0, Math.PI * 2);
          ctx.fill();
        }

        // Main particle
        ctx.globalAlpha = o.opacity;
        ctx.fillStyle = accent;
        ctx.beginPath();
        ctx.arc(px, py, o.size * dpr, 0, Math.PI * 2);
        ctx.fill();
      });

      // ── Layer 4: Mouse-following radial glow ──
      ctx.globalAlpha = 1;
      const grad = ctx.createRadialGradient(
        m.x * w,
        m.y * h,
        0,
        m.x * w,
        m.y * h,
        250 * dpr
      );
      grad.addColorStop(0, `rgba(${ar},${ag},${ab},0.06)`);
      grad.addColorStop(1, `rgba(${ar},${ag},${ab},0)`);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      ctx.globalAlpha = 1;
      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, [accent]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  );
}
