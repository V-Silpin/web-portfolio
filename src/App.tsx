
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
    <Box sx={{ 
      display: 'flex', 
      flexDirection: { xs: 'column', md: 'row' },
      minHeight: '100vh', 
      width: '100vw',
      overflow: 'hidden'
    }}>
      <Sidebar 
        selectedSection={selectedSection} 
        onSectionChange={setSelectedSection}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <Mainbox selectedSection={selectedSection} />
    </Box>
  );
}

export default App;