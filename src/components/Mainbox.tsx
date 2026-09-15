import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import bitmapBanner from '../assets/bitmap.png';
import profilePic from '../assets/profile-pic.JPG';
import pythonIcon from '../assets/python.svg';
import jsIcon from '../assets/js.svg';
import reactIcon from '../assets/react.svg';
import nodeIcon from '../assets/nodejs.svg';
import expressIcon from '../assets/express.svg';
import fastapiIcon from '../assets/fastapi-original.svg';
import mongoIcon from '../assets/mongo.svg';
import mysqlIcon from '../assets/mysql.svg';
import postgresIcon from '../assets/postgresql.svg';
import dockerIcon from '../assets/docker.svg';
import k8sIcon from '../assets/kubernetes.svg';
import gitIcon from '../assets/git.svg';
import githubIcon from '../assets/github.svg';
import langchainIcon from '../assets/langchain.svg';
import langgraphIcon from '../assets/langgraph.svg';
import langfuseIcon from '../assets/langfuse.svg';
import csharpIcon from '../assets/csharp.svg';
import dotnetIcon from '../assets/dotnet.svg';
import {
  VerifiedBadgeIcon,
  GamepadIcon,
  ExternalLinkIcon,
  LinkedInIcon,
  GitHubIcon,
  XIcon,
  ItchIoIcon,
} from './Icons';

const skills = [
  { name: 'Python', icon: pythonIcon },
  { name: 'LangChain', icon: langchainIcon },
  { name: 'LangGraph', icon: langgraphIcon },
  { name: 'Langfuse', icon: langfuseIcon },
  { name: 'FastAPI', icon: fastapiIcon },
  { name: 'React', icon: reactIcon },
  { name: 'Node.js', icon: nodeIcon },
  { name: 'Express', icon: expressIcon },
  { name: 'JavaScript', icon: jsIcon },
  { name: 'C#', icon: csharpIcon },
  { name: '.NET', icon: dotnetIcon },
  { name: 'PostgreSQL', icon: postgresIcon },
  { name: 'MongoDB', icon: mongoIcon },
  { name: 'MySQL', icon: mysqlIcon },
  { name: 'Docker', icon: dockerIcon },
  { name: 'Kubernetes', icon: k8sIcon },
  { name: 'Git', icon: gitIcon },
  { name: 'GitHub', icon: githubIcon },
];

const topSkills = [
  'Multi-agent Systems',
  'Azure Cognitive Services',
  'Optical Character Recognition (OCR)',
  'Elevenlabs',
  'LangChain',
  'LangGraph',
  'Azure AI Search',
];

const experiences = [
  {
    role: 'Advanced App Engineering Analyst',
    company: 'Accenture',
    period: 'Jul 2026 – Present',
    type: 'Full-time',
    description:
      'Architecting and deploying cutting-edge agentic AI workflows, enterprise automation backends, and multi-agent coordination pipelines. Designing resilient systems that scale across enterprise production environments.',
    tags: ['Agentic AI', 'Multi-Agent Systems', 'Enterprise Architecture', 'Full-stack'],
    accentTag: 'Current Role',
  },
  {
    role: 'AI/ML Intern',
    company: 'TeamLease Regtech Pvt. Ltd.',
    period: 'Feb 2025 – Jun 2026',
    type: 'Internship',
    description:
      'Spearheaded multi-agent architectures, Azure AI Search integrations, and voice agent workflows applied to the regulatory compliance sector. Implemented state-of-the-art Optical Character Recognition (OCR) pipelines to extract, structure, and verify compliance documentation at scale.',
    tags: ['Multi-agent Systems', 'Azure Cognitive Services', 'OCR', 'Voice Agents', 'Regulatory Compliance'],
  },
  {
    role: 'Summer Intern',
    company: 'EY (Ernst & Young)',
    period: 'May 2024 – Jul 2024',
    type: 'Internship',
    description:
      'Engineered reporting and analytics solutions for automotive sector use cases. Designed interactive KPI Dashboards and Driver Tree frameworks to decompose operational metrics and identify key business revenue drivers.',
    tags: ['KPI Dashboards', 'Driver Tree Analysis', 'Data Analytics', 'Automotive'],
  },
];

const projectsData = [
  {
    id: 'crust-driller',
    category: 'Game Dev',
    title: 'Crust Driller',
    subtitle: 'Solo Game Dev Project · Published on Itch.io',
    tagline: 'A meditative descent into a living, breathing world.',
    description:
      'An atmospheric simulation game built and shipped solo on Itch.io. Features responsive browser controls, tactile drilling physics, procedural soundscapes, and an immersive exploratory descent into subterranean terrain.',
    tags: ['Itch.io', 'Game Dev', 'Simulation', 'Browser Playable', 'Solo Dev'],
    link: 'https://v-silpin.itch.io/crust-driller',
    linkText: 'Play on Itch.io →',
    isPlayable: true,
  },
  {
    id: 'sql-agent',
    category: 'Agentic AI',
    title: 'Natural Language to SQL Agent',
    subtitle: 'Autonomous Data Intelligence',
    tagline: 'Self-serve analytics powered by multi-agent reasoning.',
    description:
      'Engineered an advanced autonomous agent that translates complex natural language business queries into verified, high-performance SQL. Empowers non-technical stakeholders to perform instantaneous self-serve data analysis.',
    tags: ['LangGraph', 'Python', 'Advanced SQL', 'Autonomous Agents', 'FastAPI'],
    link: 'https://github.com/V-Silpin/sql-ag-v2',
    linkText: 'View on GitHub →',
    isPlayable: false,
  },
];

const filterCategories = ['All', 'Agentic AI', 'Game Dev'];

function Mainbox() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filteredProjects = projectsData.filter((project) => {
    if (selectedFilter === 'All') return true;
    return project.category === selectedFilter;
  });

  return (
    <Box
      component="main"
      sx={{
        flex: 1,
        minWidth: 0,
        background: 'var(--color-bg)',
        minHeight: '100vh',
        transition: 'var(--transition)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      {/* Unified Main Container: Guarantees consistent left and right boundaries across every section */}
      <Box
        sx={{
          width: '100%',
          maxWidth: 1040,
          px: { xs: 2.5, sm: 4, md: 6, lg: 7 },
          py: { xs: 3, sm: 4, md: 5 },
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 5, md: 7 },
        }}
      >
        {/* ─────────────────────────────────────────────────────────────
            1. HERO HEADER — BANNER & PROFILE PIC (LINKEDIN STYLE)
            ───────────────────────────────────────────────────────────── */}
        <Box id="about" sx={{ width: '100%' }}>
          {/* Banner above the name: The Creative Hand (bitmap.png) */}
          <Box
            sx={{
              width: '100%',
              height: { xs: '150px', sm: '210px', md: '250px' },
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-md)',
              background: '#1b7082',
              position: 'relative',
            }}
          >
            <Box
              component="img"
              src={bitmapBanner}
              alt="The Creative Hand Banner"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                display: 'block',
              }}
            />
          </Box>

          {/* Profile Picture overlapping the bottom of the banner */}
          <Box sx={{ px: { xs: 2, sm: 3 } }}>
            <Box
              component="img"
              src={profilePic}
              alt="Varun Mohanta"
              sx={{
                width: { xs: 104, sm: 130 },
                height: { xs: 104, sm: 130 },
                borderRadius: '50%',
                objectFit: 'cover',
                objectPosition: 'center top',
                border: '4px solid var(--color-bg)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
                mt: { xs: '-52px', sm: '-65px' },
                position: 'relative',
                zIndex: 2,
                display: 'block',
                background: 'var(--color-card)',
              }}
            />
          </Box>

          {/* Profile Name & Tagline */}
          <Box sx={{ px: { xs: 1, sm: 2 }, mt: 1.5 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2, mb: 0.8 }}>
              <Typography
                variant="h1"
                sx={{
                  fontFamily: 'Inter',
                  fontSize: { xs: '2rem', sm: '2.6rem', md: '3rem' },
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  color: 'var(--color-text)',
                  lineHeight: 1.1,
                }}
              >
                Varun Mohanta
              </Typography>
              <Box sx={{ display: 'inline-flex', alignItems: 'center' }} title="Verified Profile">
                <VerifiedBadgeIcon />
              </Box>
            </Box>

            <Typography
              sx={{
                fontFamily: 'Inter',
                fontSize: { xs: '1rem', sm: '1.15rem' },
                color: 'var(--color-accent)',
                fontWeight: 500,
                mb: 1.5,
                letterSpacing: '-0.01em',
              }}
            >
              Soy Dev @Accenture | Accelerated Agentic AI | Solo Game Dev
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexWrap: 'wrap' }}>
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 0.8,
                  px: 1.5,
                  py: 0.4,
                  borderRadius: '20px',
                  background: 'var(--color-accent-subtle)',
                  color: 'var(--color-accent)',
                  border: '1px solid rgba(145, 132, 217, 0.25)',
                  fontFamily: 'JetBrains Mono',
                  fontSize: '0.78rem',
                }}
              >
                <GamepadIcon />
                <span>Solo Game Creator</span>
              </Box>
            </Box>

            {/* Quick CTAs */}
            <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', mt: 2.5 }}>
              <Box
                component="a"
                href="#projects"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2.6,
                  py: 1.1,
                  borderRadius: '8px',
                  background: 'var(--color-accent)',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  transition: 'var(--transition)',
                  boxShadow: '0 2px 10px var(--color-accent-glow)',
                  '&:hover': {
                    background: 'var(--color-accent-hover)',
                    color: '#ffffff',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <span>Explore Projects &amp; Games</span>
                <span>↓</span>
              </Box>

              <Box
                component="a"
                href="https://v-silpin.itch.io/crust-driller"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2.6,
                  py: 1.1,
                  borderRadius: '8px',
                  background: 'var(--color-card)',
                  color: 'var(--color-text)',
                  border: '1px solid var(--color-border)',
                  fontWeight: 500,
                  fontSize: '0.88rem',
                  transition: 'var(--transition)',
                  '&:hover': {
                    borderColor: 'var(--color-accent)',
                    color: 'var(--color-accent)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <ItchIoIcon />
                <span>Play Crust Driller</span>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* ─────────────────────────────────────────────────────────────
            2. STAT BAND CARD (PERFECTLY ALIGNED WITH CONTENT)
            ───────────────────────────────────────────────────────────── */}
        <Box
          sx={{
            background: 'var(--color-stat-bg)',
            border: '1px solid var(--color-stat-border)',
            borderRadius: '14px',
            p: { xs: 3, sm: 3.5, md: 4 },
            boxShadow: 'var(--shadow-md)',
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: { xs: 3, md: 3 },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: 'Inter',
                fontWeight: 700,
                fontSize: { xs: '1.75rem', md: '2.1rem' },
                color: '#ffffff',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
              }}
            >
              1+ yrs
            </Typography>
            <Typography
              sx={{
                fontSize: '0.82rem',
                color: 'rgba(255, 255, 255, 0.75)',
                mt: 0.5,
                fontWeight: 400,
              }}
            >
              building production &amp; agentic AI
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                fontFamily: 'Inter',
                fontWeight: 700,
                fontSize: { xs: '1.75rem', md: '2.1rem' },
                color: '#ffffff',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
              }}
            >
              Accenture
            </Typography>
            <Typography
              sx={{
                fontSize: '0.82rem',
                color: 'rgba(255, 255, 255, 0.75)',
                mt: 0.5,
                fontWeight: 400,
              }}
            >
              Advanced App Engineering Analyst
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                fontFamily: 'Inter',
                fontWeight: 700,
                fontSize: { xs: '1.75rem', md: '2.1rem' },
                color: '#ffffff',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
              }}
            >
              Crust Driller
            </Typography>
            <Typography
              sx={{
                fontSize: '0.82rem',
                color: 'rgba(255, 255, 255, 0.75)',
                mt: 0.5,
                fontWeight: 400,
              }}
            >
              shipped solo game on Itch.io
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                fontFamily: 'Inter',
                fontWeight: 700,
                fontSize: { xs: '1.75rem', md: '2.1rem' },
                color: '#ffffff',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
              }}
            >
              Multi-Agent
            </Typography>
            <Typography
              sx={{
                fontSize: '0.82rem',
                color: 'rgba(255, 255, 255, 0.75)',
                mt: 0.5,
                fontWeight: 400,
              }}
            >
              architectures &amp; Azure AI Search
            </Typography>
          </Box>
        </Box>

        {/* ─────────────────────────────────────────────────────────────
            3. ABOUT & BIO SECTION
            ───────────────────────────────────────────────────────────── */}
        <Box sx={{ width: '100%' }}>
          <Box sx={{ mb: 3.5 }}>
            <Typography
              sx={{
                fontFamily: 'JetBrains Mono',
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--color-accent)',
                fontWeight: 600,
                mb: 1,
              }}
            >
              01 / Background
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontFamily: 'Inter',
                fontSize: { xs: '1.6rem', md: '2rem' },
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: 'var(--color-text)',
              }}
            >
              About Me
            </Typography>
          </Box>

          <Box
            sx={{
              color: 'var(--color-text-secondary)',
              fontSize: { xs: '0.98rem', md: '1.05rem' },
              lineHeight: 1.85,
              mb: 4,
              display: 'flex',
              flexDirection: 'column',
              gap: 2.2,
            }}
          >
            <Typography sx={{ fontSize: 'inherit', lineHeight: 'inherit' }}>
              I'm a software developer with 1+ years of experience building and experimenting with cutting-edge AI systems.
              I specialize in <strong>multi-agent architectures</strong>, <strong>Azure AI Search</strong>, and <strong>voice agents</strong>—primarily
              applying these technologies in the regulatory compliance sector.
            </Typography>

            <Typography sx={{ fontSize: 'inherit', lineHeight: 'inherit' }}>
              What excites me most is the complexity: how to make multiple AI agents coordinate, how to extract and
              understand information at scale, how to build conversational interfaces that truly understand. It's
              technical, it's challenging, and it's deeply satisfying.
            </Typography>

            <Typography sx={{ fontSize: 'inherit', lineHeight: 'inherit' }}>
              Outside of work, I'm a builder and tinkerer. Whether it's exploring new AI frameworks, experimenting with
              emerging tech stacks, or diving into game development, I'm constantly learning and shipping. I believe the
              best engineers are curious, hands-on, and unafraid to break things in pursuit of innovation.
            </Typography>

            <Typography sx={{ fontSize: 'inherit', lineHeight: 'inherit' }}>
              Open to collaborating on AI challenges, mentorship, and technical conversations.
            </Typography>
          </Box>

          {/* Top Skills Badges */}
          <Box
            sx={{
              p: { xs: 2.5, md: 3 },
              borderRadius: 'var(--radius)',
              background: 'var(--color-card)',
              border: '1px solid var(--color-border)',
              mb: 4.5,
            }}
          >
            <Typography
              sx={{
                fontFamily: 'JetBrains Mono',
                fontSize: '0.72rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--color-accent)',
                fontWeight: 600,
                mb: 1.5,
              }}
            >
              Featured Core Competencies
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {topSkills.map((skill) => (
                <span key={skill} className="tag tag-accent">
                  {skill}
                </span>
              ))}
            </Box>
          </Box>

          {/* Skills & Tooling Grid */}
          <Box>
            <Typography
              sx={{
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: '1.25rem',
                letterSpacing: '-0.015em',
                color: 'var(--color-text)',
                mb: 2.5,
              }}
            >
              Technical Tooling &amp; Stack
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: 'repeat(3, 1fr)', sm: 'repeat(4, 1fr)', md: 'repeat(6, 1fr)' },
                gap: 1.5,
              }}
            >
              {skills.map((skill) => (
                <Box
                  key={skill.name}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 1,
                    p: 1.8,
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-border)',
                    background: 'var(--color-card)',
                    transition: 'var(--transition)',
                    '&:hover': {
                      borderColor: 'var(--color-accent)',
                      transform: 'translateY(-3px)',
                      boxShadow: 'var(--shadow-md)',
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={skill.icon}
                    alt={skill.name}
                    sx={{ width: 28, height: 28, objectFit: 'contain' }}
                  />
                  <Typography
                    sx={{
                      fontSize: '0.75rem',
                      color: 'var(--color-text-secondary)',
                      textAlign: 'center',
                      fontWeight: 500,
                      fontFamily: 'Inter',
                    }}
                  >
                    {skill.name}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* ─────────────────────────────────────────────────────────────
            4. EXPERIENCE SECTION
            ───────────────────────────────────────────────────────────── */}
        <Box id="experience" sx={{ width: '100%' }}>
          <Box sx={{ mb: 3.5 }}>
            <Typography
              sx={{
                fontFamily: 'JetBrains Mono',
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--color-accent)',
                fontWeight: 600,
                mb: 1,
              }}
            >
              02 / Work &amp; Research
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontFamily: 'Inter',
                fontSize: { xs: '1.6rem', md: '2rem' },
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: 'var(--color-text)',
              }}
            >
              Experience
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
            {experiences.map((exp) => (
              <Box
                key={exp.company + exp.role}
                sx={{
                  p: { xs: 2.8, md: 3.5 },
                  background: 'var(--color-card)',
                  borderRadius: 'var(--radius)',
                  border: '1px solid var(--color-border)',
                  transition: 'var(--transition)',
                  '&:hover': {
                    borderColor: 'var(--color-border-hover)',
                    boxShadow: 'var(--shadow-md)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'space-between',
                    alignItems: { xs: 'flex-start', sm: 'baseline' },
                    mb: 1.5,
                    gap: 0.5,
                  }}
                >
                  <Box>
                    <Typography
                      variant="h3"
                      sx={{
                        fontFamily: 'Inter',
                        fontSize: '1.25rem',
                        fontWeight: 600,
                        color: 'var(--color-text)',
                        letterSpacing: '-0.015em',
                      }}
                    >
                      {exp.role}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: 'Inter',
                        fontSize: '0.98rem',
                        color: 'var(--color-accent)',
                        fontWeight: 500,
                      }}
                    >
                      {exp.company}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {exp.accentTag && <span className="tag tag-accent">{exp.accentTag}</span>}
                    <Typography
                      sx={{
                        fontFamily: 'JetBrains Mono',
                        fontSize: '0.8rem',
                        color: 'var(--color-text-secondary)',
                      }}
                    >
                      {exp.period}
                    </Typography>
                  </Box>
                </Box>

                <Typography
                  sx={{
                    color: 'var(--color-text-secondary)',
                    fontSize: '0.92rem',
                    lineHeight: 1.7,
                    mb: 2.5,
                  }}
                >
                  {exp.description}
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
                  {exp.tags.map((tag) => (
                    <span key={tag} className="tag tag-neutral">
                      {tag}
                    </span>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* ─────────────────────────────────────────────────────────────
            5. PROJECTS & GAMES SECTION (2 FLAGSHIP PROJECTS)
            ───────────────────────────────────────────────────────────── */}
        <Box id="projects" sx={{ width: '100%' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: { xs: 'flex-start', sm: 'flex-end' },
              mb: 3.5,
              gap: 2,
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: 'JetBrains Mono',
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: 'var(--color-accent)',
                  fontWeight: 600,
                  mb: 1,
                }}
              >
                03 / Selected Creations
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: 'Inter',
                  fontSize: { xs: '1.6rem', md: '2rem' },
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  color: 'var(--color-text)',
                }}
              >
                Projects &amp; Game Dev
              </Typography>
            </Box>

            {/* Filter Pills */}
            <Box sx={{ display: 'flex', gap: 0.8, flexWrap: 'wrap' }}>
              {filterCategories.map((cat) => {
                const active = selectedFilter === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedFilter(cat)}
                    style={{
                      background: active ? 'var(--color-accent)' : 'var(--color-card)',
                      color: active ? '#ffffff' : 'var(--color-text-secondary)',
                      border: active ? '1px solid var(--color-accent)' : '1px solid var(--color-border)',
                      borderRadius: '6px',
                      padding: '5px 12px',
                      fontFamily: 'Inter',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      cursor: 'pointer',
                      transition: 'var(--transition)',
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </Box>
          </Box>

          {/* 2 Flagship Projects Cards Grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: 2.5,
            }}
          >
            {filteredProjects.map((project) => (
              <Box
                key={project.id}
                sx={{
                  p: { xs: 3, md: 3.5 },
                  background: 'var(--color-card)',
                  borderRadius: 'var(--radius)',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'var(--transition)',
                  '&:hover': {
                    borderColor: 'var(--color-border-hover)',
                    boxShadow: 'var(--shadow-md)',
                    transform: 'translateY(-3px)',
                  },
                }}
              >
                <Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Typography
                      sx={{
                        fontFamily: 'JetBrains Mono',
                        fontSize: '0.72rem',
                        color: 'var(--color-accent)',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                      }}
                    >
                      {project.subtitle}
                    </Typography>
                    {project.isPlayable && (
                      <span className="tag tag-accent">
                        <GamepadIcon /> Playable
                      </span>
                    )}
                  </Box>

                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: 'Inter',
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      color: 'var(--color-text)',
                      letterSpacing: '-0.02em',
                      mb: 0.8,
                    }}
                  >
                    {project.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: 'Inter',
                      fontSize: '0.88rem',
                      fontWeight: 500,
                      color: 'var(--color-text)',
                      mb: 1.5,
                      fontStyle: 'italic',
                    }}
                  >
                    "{project.tagline}"
                  </Typography>

                  <Typography
                    sx={{
                      color: 'var(--color-text-secondary)',
                      fontSize: '0.9rem',
                      lineHeight: 1.65,
                      mb: 2.5,
                    }}
                  >
                    {project.description}
                  </Typography>
                </Box>

                <Box>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.6, mb: 2.5 }}>
                    {project.tags.map((t) => (
                      <span key={t} className="tag tag-neutral">
                        {t}
                      </span>
                    ))}
                  </Box>

                  {project.link && (
                    <Box
                      component="a"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 0.8,
                        fontSize: '0.88rem',
                        fontWeight: 600,
                        color: 'var(--color-accent)',
                        '&:hover': {
                          color: 'var(--color-accent-hover)',
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      <span>{project.linkText}</span>
                      <ExternalLinkIcon />
                    </Box>
                  )}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* ─────────────────────────────────────────────────────────────
            6. CONTACT & COLLABORATION (NO SEND EMAIL BUTTON)
            ───────────────────────────────────────────────────────────── */}
        <Box id="contact" sx={{ width: '100%' }}>
          <Box
            sx={{
              p: { xs: 3.5, md: 4.5 },
              borderRadius: 'var(--radius-lg)',
              background: 'var(--color-card)',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-md)',
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1.2fr 1fr' },
              gap: 4,
              alignItems: 'center',
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: 'JetBrains Mono',
                  fontSize: '0.72rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: 'var(--color-accent)',
                  fontWeight: 600,
                  mb: 1,
                }}
              >
                04 / Connect
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: 'Inter',
                  fontSize: { xs: '1.65rem', md: '2rem' },
                  fontWeight: 700,
                  letterSpacing: '-0.025em',
                  color: 'var(--color-text)',
                  mb: 1.5,
                  lineHeight: 1.15,
                }}
              >
                Let's build systems that reason &amp; stay up.
              </Typography>
              <Typography
                sx={{
                  color: 'var(--color-text-secondary)',
                  fontSize: '0.94rem',
                  lineHeight: 1.7,
                }}
              >
                Open to collaborating on agentic AI challenges, multi-agent frameworks, mentorship, and indie game dev conversations.
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Box
                component="a"
                href="https://www.linkedin.com/in/varun-mohanta-620764282/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1.2,
                  py: 1.2,
                  px: 3,
                  borderRadius: '8px',
                  background: 'var(--color-accent)',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '0.92rem',
                  transition: 'var(--transition)',
                  boxShadow: '0 2px 10px var(--color-accent-glow)',
                  '&:hover': {
                    background: 'var(--color-accent-hover)',
                    color: '#ffffff',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <LinkedInIcon />
                <span>Connect on LinkedIn</span>
              </Box>

              <Box
                component="a"
                href="https://itch.io/profile/v-silpin"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1.2,
                  py: 1.2,
                  px: 3,
                  borderRadius: '8px',
                  background: 'var(--color-card)',
                  color: 'var(--color-text)',
                  border: '1px solid var(--color-border)',
                  fontWeight: 500,
                  fontSize: '0.92rem',
                  transition: 'var(--transition)',
                  '&:hover': {
                    borderColor: 'var(--color-accent)',
                    color: 'var(--color-accent)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <ItchIoIcon />
                <span>Explore Itch.io Profile</span>
              </Box>

              <Box
                component="a"
                href="https://github.com/V-Silpin"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1.2,
                  py: 1.2,
                  px: 3,
                  borderRadius: '8px',
                  background: 'var(--color-card)',
                  color: 'var(--color-text)',
                  border: '1px solid var(--color-border)',
                  fontWeight: 500,
                  fontSize: '0.92rem',
                  transition: 'var(--transition)',
                  '&:hover': {
                    borderColor: 'var(--color-accent)',
                    color: 'var(--color-accent)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <GitHubIcon />
                <span>Follow on GitHub</span>
              </Box>

              <Box
                component="a"
                href="https://x.com/Master_MalloC"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1.2,
                  py: 1.2,
                  px: 3,
                  borderRadius: '8px',
                  background: 'var(--color-card)',
                  color: 'var(--color-text)',
                  border: '1px solid var(--color-border)',
                  fontWeight: 500,
                  fontSize: '0.92rem',
                  transition: 'var(--transition)',
                  '&:hover': {
                    borderColor: 'var(--color-accent)',
                    color: 'var(--color-accent)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <XIcon />
                <span>Connect on X</span>
              </Box>
            </Box>
          </Box>

          {/* Clean Footer info */}
          <Box
            sx={{
              mt: 5,
              pt: 3,
              borderTop: '1px solid var(--color-divider)',
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 1.5,
              fontFamily: 'JetBrains Mono',
              fontSize: '0.75rem',
              color: 'var(--color-text-muted)',
            }}
          >
            <span>© 2026 Varun Mohanta. Built with React &amp; Vite.</span>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <a href="https://github.com/V-Silpin" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://v-silpin.itch.io" target="_blank" rel="noopener noreferrer">
                Itch.io
              </a>
              <a href="https://x.com/Master_MalloC" target="_blank" rel="noopener noreferrer">
                X (Twitter)
              </a>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Mainbox;
