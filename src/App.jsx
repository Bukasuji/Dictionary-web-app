import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Nav from './components/nav';
import Dictonary from '../src/components/dictionaryForm'
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedFont, setSelectedFont] = useState('mono'); // Initial font

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

 

  // Function to handle font change
  const handleFontChange = (font) => {
    setSelectedFont(font);
  };


  return (
    <>
      <div className={`${isDarkMode ? 'dark' : 'light'}`}>
        <div className='dark:bg-black dark:text-white  min-h-screen pb-20 px-6'>
            <main className={`font-${selectedFont} max-w-[737px] pt-10 mx-auto`}>
              <Nav isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} onFontChange={handleFontChange} selectedFont={selectedFont} />
              <Dictonary/>
            </main>
        </div>
      </div>
    </>
  );
}

export default App;
