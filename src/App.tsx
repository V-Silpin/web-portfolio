import Sidebar from './components/Sidebar';
import Mainbox from './components/Mainbox';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) return saved;
    return 'dark'; // Nocturne Dark is default
  });

  const [selectedSection, setSelectedSection] = useState('About');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  // Active section scroll spy
  useEffect(() => {
    const sectionIds = ['about', 'experience', 'projects', 'contact'];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 220;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          const capitalized = id.charAt(0).toUpperCase() + id.slice(1);
          setSelectedSection(capitalized);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        minHeight: '100vh',
        width: '100%',
        background: 'var(--color-bg)',
      }}
    >
      <Sidebar
        selectedSection={selectedSection}
        onSectionChange={setSelectedSection}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <Mainbox />
    </Box>
  );
}

export default App;