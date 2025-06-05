import React from 'react';
import { useTheme } from '../ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme} 
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {/* Sun icon for dark mode */}
      <svg 
        className="sun-icon" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="currentColor"
      >
        <path d="M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm-9 4c0-.55.45-1 1-1h2c.55 0 1 .45 1 1s-.45 1-1 1h-2c-.55 0-1-.45-1-1zm15 0c0-.55.45-1 1-1h2c.55 0 1 .45 1 1s-.45 1-1 1h-2c-.55 0-1-.45-1-1zm-4.79-7.38l1.42-1.42c.39-.39 1.02-.39 1.42 0 .39.39.39 1.02 0 1.42l-1.42 1.42c-.39.39-1.02.39-1.42 0-.39-.39-.39-1.02 0-1.42zm0 14.76c.39.39.39 1.02 0 1.42-.39.39-1.02.39-1.42 0l-1.42-1.42c-.39-.39-.39-1.02 0-1.42.39-.39 1.02-.39 1.42 0l1.42 1.42zM12 0c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1s-1-.45-1-1V1c0-.55.45-1 1-1zm0 19c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1s-1-.45-1-1v-2c0-.55.45-1 1-1z" />
      </svg>
      
      {/* Moon icon for light mode */}
      <svg 
        className="moon-icon" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="currentColor"
      >
        <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z" />
      </svg>
    </button>
  );
};

export default ThemeToggle; 