import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface MainboxProps {
  selectedSection: string;
}

function Mainbox({ selectedSection }: MainboxProps) {
  return (
    <Box sx={{ flex: 1, background: 'var(--color-bg)', minHeight: '100vh', transition: 'var(--transition)', display: 'flex', flexDirection: 'column' }}>
      {/* Image & Name section - at the top */}
      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'center',
        gap: { xs: 2, sm: 3, md: 4 },
        p: { xs: 2, sm: 3, md: 4 },
        background: 'var(--color-card)',
        borderRadius: { xs: 0, md: '0 0 24px 24px' },
        boxShadow: 'var(--shadow-lg)',
        borderBottom: '1px solid var(--color-border)',
        mb: { xs: 2, md: 3 },
        transition: 'var(--transition)',
        position: 'relative',
        textAlign: { xs: 'center', sm: 'left' },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, var(--color-primary) 0%, var(--color-accent) 100%)',
        }
      }}>
        <Box
          component="img"
          src="src/assets/profile-pic.JPG"
          alt="Varun Mohanta"
          sx={{
            width: { xs: '120px', sm: '150px', md: '180px' },
            height: { xs: '120px', sm: '150px', md: '180px' },
            borderRadius: { xs: '24px', md: '32px' },
            objectFit: 'cover',
            border: 'none',
            boxShadow: 'var(--shadow-lg)',
            background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)',
            p: '4px',
          }}
        />
        <Box>
          <Typography 
            variant="h3" 
            component="h1" 
            sx={{ 
              background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: 200, 
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
              letterSpacing: '1px',
              mb: 1
            }}
          >
            Varun Mohanta
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              color: 'var(--color-text-secondary)', 
              fontWeight: 200, 
              fontSize: { xs: '1.3rem', sm: '1.6rem', md: '1.8rem' },
              letterSpacing: '0.5px'
            }}
          >
            Soy Dev
          </Typography>
        </Box>
      </Box>

      {/* Content sections */}
      {selectedSection === 'About' && (
        <Box sx={{ 
          p: { xs: 2, sm: 3, md: 4 }, 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          gap: { xs: 3, md: 4 }, 
          alignItems: 'center' 
        }}>
          <Box sx={{ flex: 1, width: '100%' }}>
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'var(--color-text)', 
                fontSize: { xs: '1em', sm: '1.15em', md: '1.25em' }, 
                lineHeight: 1.8,
                fontWeight: 200,
                letterSpacing: '0.3px',
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              I have a proven ability to design and implement AI systems capable of reasoning, decision-making, and autonomously executing complex tasks. My experience in building multi-agent systems for personalized recommendations and my proficiency in Python and Agentic AI frameworks like Langgraph and Autogen align with the challenges of creating innovative automation solutions.
              <br /><br />
              I am eager to contribute to a dynamic team, leverage my problem-solving skills, and quickly master emerging technologies to help clients solve their most critical challenges.
              <br /><br />
              <strong>Skills:</strong>
              <br />
              <span style={{ color: 'var(--color-primary)' }}>Programming:</span> Python, JavaScript, SQL
              <br />
              <span style={{ color: 'var(--color-primary)' }}>ML/AI:</span> Scikit-learn, Pandas, NumPy, Langchain, Langgraph, Autogen, Langfuse, DeepEval, Mem0
              <br />
              <span style={{ color: 'var(--color-primary)' }}>Web/DB:</span> Flask, FastAPI, React, Node.js, Express, MongoDB, MySQL
              <br />
              <span style={{ color: 'var(--color-primary)' }}>DevOps/Tools:</span> Git, Github, Docker, Kubernetes
            </Typography>
          </Box>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', width: '100%' }}>
            <Box
              component="img"
              src="src/assets/skills.svg"
              alt="Skills"
              sx={{
                width: '100%',
                maxWidth: { xs: '250px', sm: '350px', md: '400px' },
                height: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.1))',
              }}
            />
          </Box>
        </Box>
      )}
      {selectedSection === 'Projects' && (
        <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
          <Typography 
            variant="h4" 
            sx={{ 
              background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: 200, 
              mb: 3,
              letterSpacing: '0.5px'
            }}
          >
            Projects
          </Typography>
          
          {/* Project 1 */}
          <Box sx={{ 
            mb: 4, 
            p: 3, 
            background: 'var(--color-card)', 
            borderRadius: '20px',
            boxShadow: 'var(--shadow-md)',
            border: '1px solid var(--color-border)',
            transition: 'var(--transition)',
            '&:hover': {
              boxShadow: 'var(--shadow-lg)',
              transform: 'translateY(-4px)',
            }
          }}>
            <Typography 
              variant="h5" 
              sx={{ 
                color: 'var(--color-primary)',
                fontWeight: 300,
                mb: 1,
                letterSpacing: '0.5px'
              }}
            >
              Natural Language to SQL Agent
            </Typography>
            <Typography 
              variant="caption" 
              sx={{ 
                color: 'var(--color-text-secondary)',
                fontSize: '0.9em',
                mb: 2,
                display: 'block'
              }}
            >
              June 2024 - July 2024
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'var(--color-text)',
                fontSize: '1em',
                lineHeight: 1.7,
                fontWeight: 200,
                mb: 2
              }}
            >
              • Developed an advanced agent to convert complex, natural language business questions into executable, high-performance SQL queries, demonstrating expertise in Advanced SQL.
              <br />
              • This tool was designed to empower non-technical stakeholders to perform self-serve data analysis, bridging the gap between business questions and data-driven insights.
            </Typography>
            <a 
              href="https://github.com/V-Silpin/sql-ag-v2" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: 'var(--color-primary)',
                textDecoration: 'none',
                fontSize: '0.95em',
                fontWeight: 300,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'var(--transition)',
              }}
            >
              View Project →
            </a>
          </Box>

          {/* Project 2 */}
          <Box sx={{ 
            mb: 4, 
            p: 3, 
            background: 'var(--color-card)', 
            borderRadius: '20px',
            boxShadow: 'var(--shadow-md)',
            border: '1px solid var(--color-border)',
            transition: 'var(--transition)',
            '&:hover': {
              boxShadow: 'var(--shadow-lg)',
              transform: 'translateY(-4px)',
            }
          }}>
            <Typography 
              variant="h5" 
              sx={{ 
                color: 'var(--color-primary)',
                fontWeight: 300,
                mb: 1,
                letterSpacing: '0.5px'
              }}
            >
              Smart India Hackathon Project
            </Typography>
            <Typography 
              variant="caption" 
              sx={{ 
                color: 'var(--color-text-secondary)',
                fontSize: '0.9em',
                mb: 2,
                display: 'block'
              }}
            >
              August 2023 - June 2024
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'var(--color-text)',
                fontSize: '1em',
                lineHeight: 1.7,
                fontWeight: 200
              }}
            >
              • Analyzed and optimized complex hospital operational workflows, including patient queuing models, bed availability, and admission processes to improve efficiency.
              <br />
              • Designed a data-driven software solution to solve logistical challenges and enhance inventory management, showcasing the ability to tackle open-ended business problems.
            </Typography>
          </Box>

          {/* Project 3 */}
          <Box sx={{ 
            mb: 4, 
            p: 3, 
            background: 'var(--color-card)', 
            borderRadius: '20px',
            boxShadow: 'var(--shadow-md)',
            border: '1px solid var(--color-border)',
            transition: 'var(--transition)',
            '&:hover': {
              boxShadow: 'var(--shadow-lg)',
              transform: 'translateY(-4px)',
            }
          }}>
            <Typography 
              variant="h5" 
              sx={{ 
                color: 'var(--color-primary)',
                fontWeight: 300,
                mb: 1,
                letterSpacing: '0.5px'
              }}
            >
              AI-Powered Health & Environment Analysis
            </Typography>
            <Typography 
              variant="caption" 
              sx={{ 
                color: 'var(--color-text-secondary)',
                fontSize: '0.9em',
                mb: 2,
                display: 'block'
              }}
            >
              Tredence AI Hackathon - March 2024
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'var(--color-text)',
                fontSize: '1em',
                lineHeight: 1.7,
                fontWeight: 200
              }}
            >
              • Built a system to analyze diverse locality data and provide personalized, health-based environmental recommendations.
              <br />
              • The project involved identifying key data drivers and using them to derive and communicate actionable insights for users with specific health conditions.
            </Typography>
          </Box>
        </Box>
      )}
      {selectedSection === 'Experiences' && (
        <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
          <Typography 
            variant="h4" 
            sx={{ 
              background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: 200, 
              mb: 3,
              letterSpacing: '0.5px'
            }}
          >
            Experiences
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'var(--color-text-secondary)', 
              fontSize: '1.1em',
              fontWeight: 200,
              letterSpacing: '0.3px'
            }}
          >
            To be Added Soon
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default Mainbox;