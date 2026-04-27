'use client';

import { useState, type ComponentType } from 'react';
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript,
  SiHtml5, SiSass, SiTailwindcss, SiMui,
  SiNodedotjs, SiExpress, SiPhp, SiGraphql,
  SiOpenai, SiPostgresql, SiMongodb, SiMysql,
  SiRedis, SiSupabase, SiExpo,
  SiDocker, SiRailway, SiVercel,
  SiGithubactions, SiTurborepo, SiDrupal,
  SiWordpress, SiStrapi, SiJest, SiCypress,
  SiTestinglibrary, SiApple, SiSanity,
  SiAnthropic, SiAndroid,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { TbCursorText } from 'react-icons/tb';
import { MdSecurity, MdAccessibility } from 'react-icons/md';
import { BsShieldCheck } from 'react-icons/bs';
import Section from './Section';
import SectionLabel from './SectionLabel';
import ScrollReveal from './ScrollReveal';

type IconComponent = ComponentType<{ size?: number; style?: React.CSSProperties }>;

const skillIcons: Record<string, IconComponent> = {
  // Frontend
  'React': SiReact,
  'React Native (Expo)': SiReact,
  'Next.js': SiNextdotjs,
  'TypeScript': SiTypescript,
  'JavaScript ES6+': SiJavascript,
  'HTML5': SiHtml5,
  'CSS3/Sass': SiSass,
  'Tailwind CSS': SiTailwindcss,
  'Material-UI': SiMui,
  // Backend
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  'PHP': SiPhp,
  'GraphQL': SiGraphql,
  // AI & LLM
  'OpenAI GPT API': SiOpenai,
  'Claude API': SiAnthropic,
  'Claude Code': SiAnthropic,
  // Databases
  'PostgreSQL': SiPostgresql,
  'MongoDB': SiMongodb,
  'MySQL': SiMysql,
  'Redis': SiRedis,
  'Supabase': SiSupabase,
  // Mobile
  'React Native': SiReact,
  'Expo': SiExpo,
  'iOS & Android': SiAndroid,
  // DevOps & Cloud
  'AWS': FaAws,
  'Docker': SiDocker,
  'Railway': SiRailway,
  'Vercel': SiVercel,
  'GitHub Actions': SiGithubactions,
  'Turborepo': SiTurborepo,
  'Cursor': TbCursorText,
  // CMS
  'Drupal': SiDrupal,
  'Sanity CMS': SiSanity,
  'WordPress': SiWordpress,
  'Strapi': SiStrapi,
  // Testing
  'Jest': SiJest,
  'React Testing Library': SiTestinglibrary,
  'Cypress': SiCypress,
  // Compliance
  'WCAG 2.1 AA': MdAccessibility,
  'AODA': MdAccessibility,
  'ARIA': MdAccessibility,
  'FINTRAC': BsShieldCheck,
  'PIPEDA': MdSecurity,
};

const skillGroups = [
  {
    label: 'Frontend',
    items: [
      'React',
      'React Native (Expo)',
      'Next.js',
      'TypeScript',
      'JavaScript ES6+',
      'HTML5',
      'CSS3/Sass',
      'Tailwind CSS',
      'Material-UI',
    ],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express.js', 'PHP', 'REST APIs', 'GraphQL', 'OAuth/JWT'],
  },
  {
    label: 'AI & LLM',
    items: [
      'OpenAI GPT API',
      'Claude API',
      'Prompt Engineering',
      'RAG Architecture',
      'AI Assistants',
    ],
  },
  {
    label: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Supabase'],
  },
  { label: 'Mobile', items: ['React Native', 'Expo', 'iOS & Android'] },
  {
    label: 'DevOps & Cloud',
    items: [
      'AWS',
      'Platform.sh',
      'Docker',
      'Railway',
      'Vercel',
      'GitHub Actions',
      'Turborepo',
      'Cursor',
      'Claude Code',
    ],
  },
  {
    label: 'CMS',
    items: ['Drupal', 'Sanity CMS', 'WordPress', 'Strapi'],
  },
  {
    label: 'Testing',
    items: ['Jest', 'React Testing Library', 'Cypress'],
  },
  {
    label: 'Compliance',
    items: ['WCAG 2.1 AA', 'AODA', 'ARIA', 'FINTRAC', 'PIPEDA'],
  },
];

const allSkills = skillGroups.flatMap((g) => g.items);

export default function Skills() {
  const [activeGroup, setActiveGroup] = useState(0);

  return (
    <Section id="skills">
      <SectionLabel number="04" text="Skills" />
      <ScrollReveal>
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(32px,4vw,48px)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: 'var(--text-primary)',
            margin: '0 0 48px',
            lineHeight: 1.1,
          }}
        >
          Tech I <span style={{ color: 'var(--accent)' }}>work with.</span>
        </h2>
      </ScrollReveal>

      {/* Category tabs */}
      <ScrollReveal delay={0.1}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 40 }}>
          {skillGroups.map((g, i) => (
            <button
              key={i}
              onClick={() => setActiveGroup(i)}
              style={{
                padding: '8px 18px',
                borderRadius: 20,
                border: '1px solid var(--border)',
                background: activeGroup === i ? 'var(--accent)' : 'transparent',
                color: activeGroup === i ? '#fff' : 'var(--text-muted)',
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.3s',
                letterSpacing: '0.02em',
              }}
            >
              {g.label}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Skill cards with icons */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, minHeight: 100 }}>
        {skillGroups[activeGroup].items.map((item, i) => (
          <ScrollReveal key={`${activeGroup}-${i}`} delay={i * 0.04}>
            <SkillItem label={item} />
          </ScrollReveal>
        ))}
      </div>

      {/* Marquee */}
      <ScrollReveal delay={0.2}>
        <div
          style={{
            marginTop: 56,
            overflow: 'hidden',
            maskImage: 'linear-gradient(90deg,transparent,black 10%,black 90%,transparent)',
            WebkitMaskImage: 'linear-gradient(90deg,transparent,black 10%,black 90%,transparent)',
          }}
        >
          <div
            className="skills-marquee"
            style={{
              display: 'flex',
              gap: 32,
              whiteSpace: 'nowrap',
              fontFamily: 'var(--font-mono)',
              fontSize: 13,
              color: 'var(--text-muted)',
              letterSpacing: '0.04em',
              opacity: 0.4,
            }}
          >
            {[...allSkills, ...allSkills].map((s, i) => (
              <span key={i}>{s}</span>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}

function SkillItem({ label }: { label: string }) {
  const [hovered, setHovered] = useState(false);
  const Icon = skillIcons[label] ?? null;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
        padding: '18px 20px',
        borderRadius: 12,
        background: 'var(--card-bg)',
        border: `1px solid ${hovered ? 'var(--accent)' : 'var(--border)'}`,
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        color: hovered ? 'var(--accent)' : 'var(--text-primary)',
        fontWeight: 500,
        transition: 'all 0.3s',
        transform: hovered ? 'translateY(-3px)' : 'none',
        minWidth: 90,
        textAlign: 'center',
        cursor: 'default',
      }}
    >
      {Icon && (
        <Icon
          size={26}
          style={{ color: 'var(--accent)', flexShrink: 0, transition: 'transform 0.3s', transform: hovered ? 'scale(1.15)' : 'scale(1)' }}
        />
      )}
      {label}
    </div>
  );
}
