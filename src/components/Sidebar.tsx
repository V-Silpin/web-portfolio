import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

interface SidebarProps {
  selectedSection: string;
  onSectionChange: (section: string) => void;
}

function Sidebar({ selectedSection, onSectionChange }: SidebarProps) {
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
              <ListItem sx={{ p: 0 }}>
                <a href="https://www.linkedin.com/in/varun-mohanta-620764282/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}>
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
                      {/* LinkedIn */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-icon)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </ListItemIcon>
                  </ListItemButton>
                </a>
              </ListItem>
              <ListItem sx={{ p: 0 }}>
                <a href="https://github.com/V-Silpin" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}>
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
                      {/* GitHub */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-icon)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"></path></svg>
                    </ListItemIcon>
                  </ListItemButton>
                </a>
              </ListItem>
              <ListItem sx={{ p: 0 }}>
                <a href="https://x.com/Master_MalloC" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}>
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
                      {/* X (Twitter) */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-icon)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.53 6.47 6.47 17.53M18 18l-6-6m-6-6 6 6"/></svg>
                    </ListItemIcon>
                  </ListItemButton>
                </a>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Box>
    );
}

export default Sidebar;
