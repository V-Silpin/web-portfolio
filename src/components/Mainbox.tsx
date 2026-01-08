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
              Hi I love building cool and fun stuff with the current tech.<br />
              Cause its just for fun and enjoyment.
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
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'var(--color-text-secondary)', 
              fontSize: '1.1em',
              fontWeight: 200,
              letterSpacing: '0.3px'
            }}
          >
            Coming soon: A showcase of my favorite projects!
          </Typography>
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
            Coming soon: My professional and learning journey!
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default Mainbox;