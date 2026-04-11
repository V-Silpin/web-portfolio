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
              style={{
                background: 'var(--color-card)',
                color: 'var(--color-primary)',
                border: '1px solid var(--color-border)',
                borderRadius: '12px',
                padding: '0.5em',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-sm)',
                transition: 'var(--transition)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '40px',
                minHeight: '40px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)';
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--color-card)';
                e.currentTarget.style.borderColor = 'var(--color-border)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
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
            {['About', 'Projects', 'Experiences', 'Contact'].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  sx={{
                    borderRadius: '12px',
                    mx: 1,
                    my: 0.5,
                    fontWeight: 200,
                    letterSpacing: '0.5px',
                    color: selectedSection === text ? '#ffffff' : 'var(--color-text)',
                    background: selectedSection === text ? 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)' : 'none',
                    boxShadow: selectedSection === text ? 'var(--shadow-md)' : 'none',
                    '&:hover': {
                      background: selectedSection === text 
                        ? 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)'
                        : 'var(--color-bg-alt)',
                      color: selectedSection === text ? '#ffffff' : 'var(--color-primary)',
                      boxShadow: 'var(--shadow-sm)',
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
                      borderRadius: '16px',
                      background: 'var(--color-card)',
                      color: 'var(--color-primary)',
                      border: '1px solid var(--color-border)',
                      boxSizing: 'border-box',
                      minWidth: 52,
                      minHeight: 52,
                      boxShadow: 'var(--shadow-sm)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)',
                        color: '#ffffff',
                        borderColor: 'transparent',
                        boxShadow: 'var(--shadow-md)',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'var(--transition)',
                    }}>
                      <ListItemIcon sx={{ minWidth: 0 }}>
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
