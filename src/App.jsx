import React, { useState, useEffect } from 'react';
import Nav from '../src/components/nav'
import DictionaryForm from '../src/components/dictionaryForm';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedFont, setSelectedFont] = useState('sans'); // Initial font

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const handleFontChange = (font) => {
    setSelectedFont(font);
  };

  return (
    <div className={`${isDarkMode ? 'dark' : 'light'}`}>
      <div className='dark:bg-black dark:text-white min-h-screen pb-20 px-6'>
        <main className={`font-${selectedFont} max-w-[737px] pt-10 mx-auto`}>
          <Nav isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} onFontChange={handleFontChange} selectedFont={selectedFont} />
          <DictionaryForm />
        </main>
      </div>
    </div>
  );
}

export default App;
