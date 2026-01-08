
import Sidebar from './components/Sidebar';
import Mainbox from './components/Mainbox';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState(() => {
    // Try to use system preference or fallback to light
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  const [selectedSection, setSelectedSection] = useState('About');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <div style={{ position: 'fixed', top: 24, right: 32, zIndex: 2000 }}>
        <button onClick={toggleTheme} style={{
          background: 'var(--color-btn-bg)',
          color: 'var(--color-btn-text)',
          border: 'none',
          borderRadius: '16px',
          padding: '0.75em 1.5em',
          cursor: 'pointer',
          boxShadow: 'var(--shadow-lg)',
          fontWeight: 200,
          fontSize: '1em',
          transition: 'var(--transition)',
          backdropFilter: 'blur(10px)',
          letterSpacing: '0.5px',
        }}>
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' },
        minHeight: '100vh', 
        width: '100vw',
        overflow: 'hidden'
      }}>
        <Sidebar selectedSection={selectedSection} onSectionChange={setSelectedSection} />
        <Mainbox selectedSection={selectedSection} />
      </Box>
    </>
  );
}

export default App;