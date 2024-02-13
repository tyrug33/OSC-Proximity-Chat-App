// SettingsMenu.tsx

'use client'

import React, { useState } from 'react';

interface SettingsMenuProps {
  darkMode: boolean;
  fontSize: string;
  onToggleDarkMode: () => void;
  onFontSizeChange: (size: string) => void;
}

const SettingsMenu: React.FC<SettingsMenuProps> = ({ darkMode, fontSize, onToggleDarkMode, onFontSizeChange }) => {
  return (
    <div>
      <h2>Echologator Settings</h2>
      <div>
        <label>
          Dark Mode On/Off:
          <input type="checkbox" checked={darkMode} onChange={onToggleDarkMode} />
        </label>
      </div>
      <div>
        <label>
          Font Size:
          <select value={fontSize} onChange={(e) => onFontSizeChange(e.target.value)}>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default SettingsMenu;
