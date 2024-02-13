// Home.tsx

'use client'

import React, { useState } from 'react';
import SettingsMenu from './SettingsMenu';

const Home: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState('medium');

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleFontSizeChange = (size: string) => {
    setFontSize(size);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Echologator</h1>
      <SettingsMenu
        darkMode={darkMode}
        fontSize={fontSize}
        onToggleDarkMode={handleToggleDarkMode}
        onFontSizeChange={handleFontSizeChange}
      />
      <div>
        {/* Rest of your home page content */}
        <p>Echologator 2024</p>
      </div>
    </main>
  );
};

export default Home;
