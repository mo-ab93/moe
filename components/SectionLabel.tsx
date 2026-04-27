interface Props {
  number: string;
  text: string;
}

export default function SectionLabel({ number, text }: Props) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginBottom: 48,
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'var(--accent)',
        fontWeight: 500,
      }}
    >
      <span style={{ opacity: 0.5 }}>{number}</span>
      <span style={{ width: 40, height: 1, background: 'var(--accent)', opacity: 0.4 }} />
      <span>{text}</span>
    </div>
  );
}
