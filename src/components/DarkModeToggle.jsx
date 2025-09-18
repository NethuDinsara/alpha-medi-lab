import React from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="dark-mode-toggle" onClick={toggleDarkMode}>
      <i className={isDarkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
    </div>
  );
};

export default DarkModeToggle;