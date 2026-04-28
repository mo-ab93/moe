import Section from './Section';
import SectionLabel from './SectionLabel';
import ScrollReveal from './ScrollReveal';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    name: 'Rafidain & Co.',
    tagline:
      'Client-facing jewelry e-commerce + precious metals (gold/silver) trading platform with iOS, Android, web, and admin dashboard. Hybrid TypeScript monorepo architecture.',
    role: 'Lead Developer',
    tech: ['TypeScript', 'Next.js', 'React Native', 'Turborepo', 'Supabase'],
    status: 'In Development',
  },
  {
    name: 'ALTAIF Currency Exchange',
    tagline:
      'Production fintech for a FINTRAC-registered MSB. Currency exchange, international transfers, remittance to 50+ countries with live FX rates.',
    role: 'Full Stack Developer — ALTAIF Inc.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase', 'Sanity CMS'],
    url: 'https://taifco.com',
  },
  {
    name: 'Taifco AI Assistant',
    tagline:
      'AI-powered customer support on OpenAI GPT API with human live chat escalation. Compliance-aware prompt engineering for regulated financial services.',
    role: 'Full Stack Developer — ALTAIF Inc.',
    tech: ['OpenAI GPT API', 'Next.js', 'TypeScript', 'Prompt Engineering'],
  },
  {
    name: 'Banking Contest Platforms',
    tagline:
      'Enterprise contest platforms for a major Canadian bank — Student, Insurance, and Music Award contests. Zero-downtime releases with full WCAG 2.1 AA / AODA compliance.',
    role: 'Full Stack Developer — Therefore Interactive',
    tech: ['React', 'Next.js', 'TypeScript', 'WCAG 2.1 AA'],
  },
  {
    name: 'Winsa Candles',
    tagline:
      'Full e-commerce platform for an artisan candle brand. Custom product catalog, cart, and checkout flow.',
    role: 'Developer',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Supabase'],
    url: 'https://winsacandles.com',
  },
];

export default function Projects() {
  return (
    <Section id="projects" style={{ background: 'var(--bg-alt)' }}>
      <SectionLabel number="03" text="Projects" />
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
          Selected <span style={{ color: 'var(--accent)' }}>work.</span>
        </h2>
      </ScrollReveal>
      <div style={{ display: 'grid', gap: 24 }}>
        {projectsData.map((p, i) => (
          <ProjectCard key={i} {...p} index={i} />
        ))}
      </div>
    </Section>
  );
}
