import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

const Lightswitch = () => {
  const darkModeContext = useContext(DarkModeContext);

  // Ensure context is not undefined
  if (!darkModeContext) {
    throw new Error('Lightswitch must be used within a DarkModeProvider');
  }

  const { darkMode, toggleDarkMode } = darkModeContext;

  const handleClick = () => {
    toggleDarkMode();
  };

  return (
    <div className="Lightswitch">
      <img
        src={darkMode ? '../icons/moon-fill.png' : '../icons/sun-fill.png'}
        alt="toggle button"
        onClick={handleClick}
      />
    </div>
  );
};

// Light Switch design by Jeremy Loyd, US - Public Domain
export default Lightswitch;
