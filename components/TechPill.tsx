export default function TechPill({ label }: { label: string }) {
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '6px 14px',
        borderRadius: 20,
        fontSize: 12,
        fontFamily: 'var(--font-mono)',
        fontWeight: 500,
        background: 'var(--pill-bg)',
        color: 'var(--pill-text)',
        letterSpacing: '0.02em',
        lineHeight: 1,
      }}
    >
      {label}
    </span>
  );
}
