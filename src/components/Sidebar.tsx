import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { MoonIcon, SunIcon, LinkedInIcon, GitHubIcon, XIcon, ItchIoIcon } from './Icons';

interface SidebarProps {
  selectedSection: string;
  onSectionChange: (section: string) => void;
  theme: string;
  toggleTheme: () => void;
}

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/varun-mohanta-620764282/', icon: <LinkedInIcon />, label: 'LinkedIn' },
  { name: 'GitHub', url: 'https://github.com/V-Silpin', icon: <GitHubIcon />, label: 'GitHub' },
  { name: 'X', url: 'https://x.com/Master_MalloC', icon: <XIcon />, label: 'X (Twitter)' },
  { name: 'Itch.io', url: 'https://itch.io/profile/v-silpin', icon: <ItchIoIcon />, label: 'Itch.io' },
];

function Sidebar({ selectedSection, onSectionChange, theme, toggleTheme }: SidebarProps) {
  const handleNavClick = (sectionId: string, label: string) => {
    onSectionChange(label);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      component="aside"
      sx={{
        width: { xs: '100%', md: 260 },
        minWidth: { md: 260 },
        maxWidth: { md: 260 },
        flexShrink: 0,
        height: { xs: 'auto', md: '100vh' },
        position: { xs: 'relative', md: 'sticky' },
        top: 0,
        background: 'var(--color-sidebar)',
        borderRight: { xs: 'none', md: '1px solid var(--color-sidebar-border)' },
        borderBottom: { xs: '1px solid var(--color-sidebar-border)', md: 'none' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        p: { xs: 2.5, md: '28px 20px 24px' },
        zIndex: 100,
        boxSizing: 'border-box',
        overflowY: { xs: 'visible', md: 'auto' },
      }}
    >
      {/* Top Header: Brand dot & Theme Toggle (redundant banner/name widget removed) */}
      <Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: { xs: 2.5, md: 4 },
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: 'var(--color-accent)',
                display: 'inline-block',
                boxShadow: '0 0 10px var(--color-accent)',
              }}
            />
            <Typography
              sx={{
                fontFamily: 'JetBrains Mono',
                fontSize: '0.78rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--color-text)',
              }}
            >
              VM
            </Typography>
          </Box>

          <button
            onClick={toggleTheme}
            aria-label="Toggle dark/light theme"
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            style={{
              background: 'var(--color-card)',
              color: 'var(--color-text)',
              border: '1px solid var(--color-border)',
              borderRadius: '8px',
              padding: '6px',
              cursor: 'pointer',
              transition: 'var(--transition)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '34px',
              height: '34px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-accent)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-border)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </button>
        </Box>

        {/* Navigation Links */}
        <List
          sx={{
            p: 0,
            display: 'flex',
            flexDirection: { xs: 'row', md: 'column' },
            gap: { xs: 0.5, md: 0.8 },
            flexWrap: 'wrap',
          }}
        >
          {navItems.map((item) => {
            const isActive = selectedSection.toLowerCase() === item.id;
            return (
              <ListItem key={item.id} disablePadding sx={{ width: { xs: 'auto', md: '100%' } }}>
                <ListItemButton
                  onClick={() => handleNavClick(item.id, item.label)}
                  sx={{
                    borderRadius: '8px',
                    px: { xs: 1.5, md: 2 },
                    py: 1,
                    fontFamily: 'Inter',
                    fontWeight: isActive ? 600 : 400,
                    fontSize: '0.9rem',
                    color: isActive ? 'var(--color-accent)' : 'var(--color-text)',
                    background: isActive ? 'var(--color-accent-subtle)' : 'transparent',
                    border: isActive ? '1px solid rgba(145, 132, 217, 0.3)' : '1px solid transparent',
                    transition: 'var(--transition)',
                    '&:hover': {
                      background: isActive ? 'var(--color-accent-subtle)' : 'rgba(255, 255, 255, 0.04)',
                      color: 'var(--color-accent)',
                    },
                  }}
                >
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          fontSize: '0.88rem',
                          fontWeight: isActive ? 600 : 500,
                          letterSpacing: '-0.01em',
                          color: 'inherit',
                        }}
                      >
                        {item.label}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>

      {/* Bottom Rail: Socials (with Itch.io) & Live Status */}
      <Box sx={{ mt: { xs: 2.5, md: 4 } }}>
        <Typography
          sx={{
            fontFamily: 'JetBrains Mono',
            fontSize: '0.68rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: 'var(--color-text-muted)',
            mb: 1.5,
            display: { xs: 'none', md: 'block' },
          }}
        >
          Socials &amp; Games
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.2,
            flexWrap: 'wrap',
          }}
        >
          {socialLinks.map((social) => (
            <Box
              key={social.name}
              component="a"
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              title={social.label}
              aria-label={social.label}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 38,
                height: 38,
                borderRadius: '8px',
                background: 'var(--color-card)',
                color: 'var(--color-text)',
                border: '1px solid var(--color-border)',
                transition: 'var(--transition)',
                '&:hover': {
                  borderColor: 'var(--color-accent)',
                  color: 'var(--color-accent)',
                  background: 'var(--color-accent-subtle)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              {social.icon}
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            mt: 2.5,
            pt: 2,
            borderTop: '1px solid var(--color-sidebar-border)',
            display: { xs: 'none', md: 'block' },
          }}
        >
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'JetBrains Mono',
              color: '#4ade80',
              fontWeight: 500,
              fontSize: '0.72rem',
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                backgroundColor: '#4ade80',
                display: 'inline-block',
                boxShadow: '0 0 8px #4ade80',
              }}
            />
            Available for AI &amp; Game Dev
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Sidebar;
