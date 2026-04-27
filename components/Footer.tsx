export default function Footer() {
  return (
    <footer
      style={{
        padding: '32px clamp(24px,6vw,120px)',
        borderTop: '1px solid var(--border)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 16,
      }}
    >
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>
        © 2026 Mohammed Abbas
      </span>
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 12,
          color: 'var(--text-muted)',
          opacity: 0.5,
        }}
      >
        Built with care in Kitchener-Waterloo
      </span>
    </footer>
  );
}
