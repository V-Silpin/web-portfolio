import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { MoonIcon, SunIcon, LinkedInIcon, GitHubIcon, XIcon } from './Icons';

interface SidebarProps {
  selectedSection: string;
  onSectionChange: (section: string) => void;
  theme: string;
  toggleTheme: () => void;
}

function Sidebar({ selectedSection, onSectionChange, theme, toggleTheme }: SidebarProps) {
    const drawerWidth = 240;

    return (
      <Box sx={{ 
        display: 'flex',
        width: { xs: '100%', md: drawerWidth },
        flexShrink: 0
      }}>
        <CssBaseline />
        <Drawer
          sx={{
            width: { xs: '100%', md: drawerWidth },
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: { xs: '100%', md: drawerWidth },
              boxSizing: 'border-box',
              position: 'relative',
              background: 'var(--color-sidebar)',
              color: 'var(--color-text)',
              borderRight: { xs: 'none', md: '1px solid var(--color-border)' },
              borderBottom: { xs: '1px solid var(--color-border)', md: 'none' },
              transition: 'var(--transition)',
              fontWeight: 200,
              boxShadow: 'var(--shadow-sm)',
            },
          }}
          variant="permanent"
          anchor="left"
        >
          {/* Theme toggle button in top right corner */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              pt: { xs: 2, md: 3 },
              pr: 2,
            }}
          >
            <button
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              style={{
                background: 'var(--color-card)',
                color: 'var(--color-text)',
                border: '1px solid var(--color-border)',
                borderRadius: '10px',
                padding: '0.5em',
                cursor: 'pointer',
                transition: 'var(--transition)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '40px',
                minHeight: '40px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-text-secondary)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {theme === 'light' ? <MoonIcon /> : <SunIcon />}
            </button>
          </Box>
          <Divider sx={{ display: { xs: 'none', md: 'block' } }} />
          <List sx={{ 
            flexGrow: 1,
            display: 'flex',
            flexDirection: { xs: 'row', md: 'column' },
            gap: { xs: 1, md: 0 },
            p: { xs: 1, md: 0 },
            justifyContent: { xs: 'space-around', md: 'flex-start' }
          }}>
            {['About', 'Projects', 'Experiences'].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  sx={{
                    borderRadius: '10px',
                    mx: 1,
                    my: 0.5,
                    fontWeight: 500,
                    letterSpacing: '0.01em',
                    color: selectedSection === text ? '#ffffff' : 'var(--color-text)',
                    background: selectedSection === text ? 'var(--color-accent)' : 'none',
                    '&:hover': {
                      background: selectedSection === text
                        ? 'var(--color-accent)'
                        : 'var(--color-bg-alt)',
                      color: selectedSection === text ? '#ffffff' : 'var(--color-accent-text)',
                    },
                    transition: 'var(--transition)',
                  }}
                  onClick={() => onSectionChange(text)}
                >
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider sx={{ display: { xs: 'none', md: 'block' } }} />
          {/* Social media buttons at the bottom */}
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              pb: { xs: 2, md: 4 },
              mb: { xs: 1, md: 4 },
            }}
          >
            <List sx={{ display: 'flex', flexDirection: 'row', gap: 2, p: 0 }}>
              {[
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/varun-mohanta-620764282/', icon: <LinkedInIcon /> },
                { name: 'GitHub', url: 'https://github.com/V-Silpin', icon: <GitHubIcon /> },
                { name: 'X', url: 'https://x.com/Master_MalloC', icon: <XIcon /> }
              ].map((social) => (
                <ListItem key={social.name} sx={{ p: 0 }}>
                  <a href={social.url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}>
                    <ListItemButton sx={{
                      borderRadius: '10px',
                      background: 'var(--color-card)',
                      color: 'var(--color-text)',
                      border: '1px solid var(--color-border)',
                      boxSizing: 'border-box',
                      minWidth: 48,
                      minHeight: 48,
                      display: 'flex',
                      justifyContent: 'center',
                      '&:hover': {
                        background: 'var(--color-accent)',
                        color: '#ffffff',
                        borderColor: 'var(--color-accent)',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'var(--transition)',
                    }}>
                      <ListItemIcon sx={{ minWidth: 0, color: 'inherit' }}>
                        {social.icon}
                      </ListItemIcon>
                    </ListItemButton>
                  </a>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
    );
}

export default Sidebar;
