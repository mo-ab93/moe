import Section from './Section';
import SectionLabel from './SectionLabel';
import ScrollReveal from './ScrollReveal';
import TimelineItem from './TimelineItem';

const experienceData = [
  {
    role: 'Full Stack Developer (Freelance)',
    company: 'ALTAIF Inc.',
    location: 'Kitchener, Remote',
    period: 'Oct 2025 — Present',
    type: 'Freelance',
    bullets: [
      'Building Rafidain & Co. — a hybrid jewelry e-commerce + gold/silver trading platform across iOS, Android, web, and admin dashboard in a TypeScript Turborepo monorepo.',
      'Shipped taifco.com — production fintech for a FINTRAC-registered MSB with live FX rates, international transfers, and PIPEDA-compliant data handling.',
      'Engineered an AI customer support assistant on OpenAI GPT API with compliance-aware prompting and live chat escalation.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Therefore Interactive',
    location: 'Toronto, Remote',
    period: 'Nov 2023 — Present',
    type: 'Permanent Full-time',
    bullets: [
      'Building enterprise contest platforms for a major Canadian bank with zero-downtime releases.',
      'Ensuring WCAG 2.1 AA and AODA compliance across all deliverables, with comprehensive automated and manual testing.',
      'Contributing to projects across banking, insurance, entertainment, and public sector verticals at enterprise scale.',
    ],
  },
  {
    role: 'Full Stack Web Developer',
    company: 'Self-Employed',
    location: 'Ottawa',
    period: 'Aug 2019 — Nov 2023',
    bullets: [
      'Delivered projects across fintech, real estate, construction, e-commerce, and small business sectors.',
      'Built and maintained full-stack solutions using React, Node.js, PHP, and various CMS platforms for clients in diverse industries.',
    ],
  },
  {
    role: 'Full Stack Web Developer',
    company: 'Therefore Interactive',
    location: 'Ontario, Remote',
    period: 'Nov 2022 — Jan 2023',
    type: 'Contract Full-time',
    bullets: [
      'Contributed to enterprise Drupal and React projects for government and financial sector clients.',
      'Delivered accessible, performant components under tight deadlines.',
    ],
  },
];

export default function Experience() {
  return (
    <Section id="experience">
      <SectionLabel number="02" text="Experience" />
      <ScrollReveal>
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(32px,4vw,48px)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: 'var(--text-primary)',
            margin: '0 0 56px',
            lineHeight: 1.1,
          }}
        >
          Where I&apos;ve <span style={{ color: 'var(--accent)' }}>worked.</span>
        </h2>
      </ScrollReveal>
      {experienceData.map((exp, i) => (
        <ScrollReveal key={i} delay={i * 0.08}>
          <TimelineItem {...exp} isLast={i === experienceData.length - 1} />
        </ScrollReveal>
      ))}
    </Section>
  );
}
