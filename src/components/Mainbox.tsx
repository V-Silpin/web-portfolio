import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
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

interface MainboxProps {
  selectedSection: string;
}

const skills = [
  { name: 'Python', icon: pythonIcon },
  { name: 'JavaScript', icon: jsIcon },
  { name: 'React', icon: reactIcon },
  { name: 'Node.js', icon: nodeIcon },
  { name: 'Express', icon: expressIcon },
  { name: 'FastAPI', icon: fastapiIcon },
  { name: 'MongoDB', icon: mongoIcon },
  { name: 'MySQL', icon: mysqlIcon },
  { name: 'PostgreSQL', icon: postgresIcon },
  { name: 'Docker', icon: dockerIcon },
  { name: 'Kubernetes', icon: k8sIcon },
  { name: 'Git', icon: gitIcon },
  { name: 'GitHub', icon: githubIcon },
  { name: 'LangChain', icon: langchainIcon },
  { name: 'LangGraph', icon: langgraphIcon },
];

const sectionSx = {
  p: { xs: 3, sm: 4, md: 6 },
  maxWidth: 900,
  mx: 'auto',
  width: '100%',
  animation: 'fade-in-up 0.4s ease both',
};

const cardSx = {
  mb: 3,
  p: { xs: 2.5, md: 3.5 },
  background: 'var(--color-card)',
  borderRadius: 'var(--radius)',
  border: '1px solid var(--color-border)',
  transition: 'var(--transition)',
  '&:hover': {
    borderColor: 'var(--color-text-secondary)',
    boxShadow: 'var(--shadow-md)',
  },
};

const headingSx = {
  color: 'var(--color-text)',
  fontWeight: 600,
  mb: 4,
  letterSpacing: '-0.02em',
  fontSize: { xs: '1.75rem', md: '2rem' },
};

function Mainbox({ selectedSection }: MainboxProps) {
  return (
    <Box sx={{ flex: 1, background: 'var(--color-bg)', minHeight: '100vh', transition: 'var(--transition)', display: 'flex', flexDirection: 'column' }}>
      {/* Header — photo & name */}
      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'center',
        gap: { xs: 2.5, sm: 4 },
        p: { xs: 3, sm: 4, md: 6 },
        maxWidth: 900,
        mx: 'auto',
        width: '100%',
        borderBottom: '1px solid var(--color-border)',
        textAlign: { xs: 'center', sm: 'left' },
      }}>
        <Box
          component="img"
          src={profilePic}
          alt="Varun Mohanta"
          sx={{
            width: { xs: '112px', sm: '128px', md: '140px' },
            height: { xs: '112px', sm: '128px', md: '140px' },
            borderRadius: '50%',
            objectFit: 'cover',
            border: '1px solid var(--color-border)',
            flexShrink: 0,
          }}
        />
        <Box>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              color: 'var(--color-text)',
              fontWeight: 700,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '2.75rem' },
              letterSpacing: '-0.03em',
              mb: 0.5,
            }}
          >
            Varun Mohanta
          </Typography>
          <Typography
            sx={{
              color: 'var(--color-text-secondary)',
              fontWeight: 400,
              fontSize: { xs: '1.05rem', sm: '1.15rem' },
              letterSpacing: '0.01em',
            }}
          >
            AI Systems Developer
          </Typography>
        </Box>
      </Box>

      {/* About */}
      {selectedSection === 'About' && (
        <Box sx={sectionSx}>
          <Typography
            sx={{
              color: 'var(--color-text)',
              fontSize: { xs: '1rem', md: '1.075rem' },
              lineHeight: 1.85,
              fontWeight: 400,
              mb: 5,
            }}
          >
            I have a proven ability to design and implement AI systems capable of reasoning, decision-making, and autonomously executing complex tasks. My experience in building multi-agent systems for personalized recommendations and my proficiency in Python and Agentic AI frameworks like Langgraph and Autogen align with the challenges of creating innovative automation solutions.
            <br /><br />
            I am eager to contribute to a dynamic team, leverage my problem-solving skills, and quickly master emerging technologies to help clients solve their most critical challenges.
          </Typography>

          <Typography sx={{ ...headingSx, fontSize: { xs: '1.25rem', md: '1.4rem' }, mb: 3 }}>
            Skills &amp; Tools
          </Typography>
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(3, 1fr)', sm: 'repeat(4, 1fr)', md: 'repeat(5, 1fr)' },
            gap: { xs: 1.5, md: 2 },
          }}>
            {skills.map((skill) => (
              <Box
                key={skill.name}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 1,
                  p: { xs: 1.5, md: 2 },
                  borderRadius: 'var(--radius)',
                  border: '1px solid var(--color-border)',
                  background: 'var(--color-card)',
                  transition: 'var(--transition)',
                  '&:hover': {
                    borderColor: 'var(--color-accent-text)',
                    transform: 'translateY(-3px)',
                    boxShadow: 'var(--shadow-md)',
                  },
                }}
              >
                <Box
                  component="img"
                  src={skill.icon}
                  alt={skill.name}
                  sx={{ width: { xs: 28, md: 34 }, height: { xs: 28, md: 34 }, objectFit: 'contain' }}
                />
                <Typography sx={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', textAlign: 'center', fontWeight: 500 }}>
                  {skill.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      )}

      {/* Projects */}
      {selectedSection === 'Projects' && (
        <Box sx={sectionSx}>
          <Typography variant="h4" sx={headingSx}>Projects</Typography>

          <Box sx={cardSx}>
            <Typography variant="h5" sx={{ color: 'var(--color-text)', fontWeight: 600, mb: 0.5, fontSize: '1.2rem' }}>
              Natural Language to SQL Agent
            </Typography>
            <Typography variant="caption" sx={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', mb: 2, display: 'block' }}>
              June 2024 – July 2024
            </Typography>
            <Typography variant="body2" sx={{ color: 'var(--color-text)', fontSize: '0.95rem', lineHeight: 1.75, fontWeight: 400, mb: 2 }}>
              • Developed an advanced agent to convert complex, natural language business questions into executable, high-performance SQL queries, demonstrating expertise in Advanced SQL.
              <br />
              • Designed to empower non-technical stakeholders to perform self-serve data analysis, bridging the gap between business questions and data-driven insights.
            </Typography>
            <Box
              component="a"
              href="https://github.com/V-Silpin/sql-ag-v2"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'var(--color-accent-text)',
                fontSize: '0.9rem',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                borderBottom: '1px solid transparent',
                pb: '2px',
                '&:hover': { color: 'var(--color-accent-text)', borderColor: 'var(--color-accent-text)' },
              }}
            >
              View Project →
            </Box>
          </Box>

          <Box sx={cardSx}>
            <Typography variant="h5" sx={{ color: 'var(--color-text)', fontWeight: 600, mb: 0.5, fontSize: '1.2rem' }}>
              Smart India Hackathon Project
            </Typography>
            <Typography variant="caption" sx={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', mb: 2, display: 'block' }}>
              August 2023 – June 2024
            </Typography>
            <Typography variant="body2" sx={{ color: 'var(--color-text)', fontSize: '0.95rem', lineHeight: 1.75, fontWeight: 400 }}>
              • Analyzed and optimized complex hospital operational workflows, including patient queuing models, bed availability, and admission processes to improve efficiency.
              <br />
              • Designed a data-driven software solution to solve logistical challenges and enhance inventory management, showcasing the ability to tackle open-ended business problems.
            </Typography>
          </Box>

          <Box sx={cardSx}>
            <Typography variant="h5" sx={{ color: 'var(--color-text)', fontWeight: 600, mb: 0.5, fontSize: '1.2rem' }}>
              AI-Powered Health &amp; Environment Analysis
            </Typography>
            <Typography variant="caption" sx={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', mb: 2, display: 'block' }}>
              Tredence AI Hackathon – March 2024
            </Typography>
            <Typography variant="body2" sx={{ color: 'var(--color-text)', fontSize: '0.95rem', lineHeight: 1.75, fontWeight: 400 }}>
              • Built a system to analyze diverse locality data and provide personalized, health-based environmental recommendations.
              <br />
              • Identified key data drivers and used them to derive and communicate actionable insights for users with specific health conditions.
            </Typography>
          </Box>
        </Box>
      )}

      {/* Experiences */}
      {selectedSection === 'Experiences' && (
        <Box sx={sectionSx}>
          <Typography variant="h4" sx={headingSx}>Experience</Typography>

          <Box sx={cardSx}>
            <Typography variant="h5" sx={{ color: 'var(--color-text)', fontWeight: 600, mb: 0.5, fontSize: '1.2rem' }}>
              AI Systems Developer
            </Typography>
            <Typography variant="caption" sx={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', mb: 2, display: 'block' }}>
              Company Name • Jan 2023 – Present
            </Typography>
            <Typography variant="body2" sx={{ color: 'var(--color-text)', fontSize: '0.95rem', lineHeight: 1.75, fontWeight: 400 }}>
              • Designed and implemented autonomous agentic workflows using Langgraph and Autogen.<br />
              • Integrated complex LLM-driven features to streamline business processes and improve efficiency.
            </Typography>
          </Box>

          <Box sx={cardSx}>
            <Typography variant="h5" sx={{ color: 'var(--color-text)', fontWeight: 600, mb: 0.5, fontSize: '1.2rem' }}>
              Full Stack Software Engineer
            </Typography>
            <Typography variant="caption" sx={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', mb: 2, display: 'block' }}>
              Company Name • Jun 2021 – Dec 2022
            </Typography>
            <Typography variant="body2" sx={{ color: 'var(--color-text)', fontSize: '0.95rem', lineHeight: 1.75, fontWeight: 400 }}>
              • Developed robust backend APIs utilizing Python and Node.js for scalability.<br />
              • Built responsive UI interfaces using React JS and optimized database queries in SQL.
            </Typography>
          </Box>
        </Box>
      )}

    </Box>
  );
}

export default Mainbox;
