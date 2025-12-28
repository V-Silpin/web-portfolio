
import Sidebar from './components/Sidebar';
import Mainbox from './components/Mainbox';
import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState(() => {
    // Try to use system preference or fallback to light
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <div style={{ position: 'fixed', top: 16, right: 24, zIndex: 2000 }}>
        <button onClick={toggleTheme} style={{
          background: 'var(--color-btn-bg)',
          color: 'var(--color-btn-text)',
          border: '1px solid var(--color-border)',
          borderRadius: '8px',
          padding: '0.5em 1em',
          cursor: 'pointer',
          boxShadow: '0 2px 8px 0 rgba(60,60,60,0.06)',
          fontWeight: 500,
          fontSize: '1em',
          transition: 'background 0.25s, color 0.25s',
        }}>
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </div>
      <div style={{ display: 'flex', minHeight: '100vh', width: '100vw' }}>
        <Sidebar />
        <Mainbox />
      </div>
    </>
  );
}

export default App;