import { useState, useEffect } from 'react'
import logo from '../assets/images/logo.svg'
import dropdown from '../assets/images/icon-arrow-down.svg'
import newWindow from '../assets/images/icon-new-window.svg'
import moon from '../assets/images/icon-moon.svg'
import search from '../assets/images/icon-search.svg'

function Nav({ isDarkMode, toggleDarkMode, onFontChange, selectedFont }) {
  const [isOpen, setIsOpen] = useState(false);
  
  
  const fonts = ['sans', 'serif', 'mono'];
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  {/*const [selectedFont, setSelectedFont] = useState('Sans Serif');
  //function for dropdown menu
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  //function for font chaange handle
  const handleFontChange = (font) => {
    setSelectedFont(font);
    setIsOpen(false);
  };*/}


  return (
    <>
      <div className='max-w-[737px] mx-auto flex dark:text-white'>
        <img src={logo} alt='logo' className='h-[36px] w-[32px]'/>

        <div className='flex ml-auto'>
          <div className='relative'>
            <div className='flex items-center dark:text-white'>
              <span className="mr-2 mt-1 font-semibold text-black text-xl dark:text-white">{selectedFont}</span>
              <div className='pt-2 mr-0' onClick={toggleDropdown}>
                <img src={dropdown} alt='dropdownicon' className='h-[8px] w-[14px] cursor-pointer'/>
              </div>
            </div>  
    
          {isOpen && (
            <div className="absolute font-semibold right-0 mt-4 p-2.5 w-40 bg-white dark:bg-[#2d2d2d] drop-shadow-xl  dark:drop-shadow-[0px_12px_12px_rgba(164,69,237)]  rounded-xl z-10">
              {fonts.map((font) => (
                <p
                  key={font}
                  className="cursor-pointer px-4 py-2 hover:text-[#a445ed]"
                  onClick={() => onFontChange(font)}
                >
                  {font}
                </p>
              ))}
            </div>
        )}
          </div>
          <div className='border-l border-slate-200 mx-6  h-[36px]'/>

          <label className="cursor-pointer mr-4 mt-2">
            <div className="relative">
              <input
                type="checkbox"
                className="sr-only"
                checked={isDarkMode}
                onChange={toggleDarkMode}
              />
              <div
                className={`block bg-gray-500 w-8 h-4 rounded-full dark:bg-purple-500
                }`}
              ></div>
              <div
                className={`dot absolute left-1 top-0.5 bg-white w-3 h-3 rounded-full transition-transform ${
                  isDarkMode ? 'transform translate-x-full' : ''
                }`}
              ></div>
            </div>
          </label>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            className={`mt-1 ${isDarkMode ? 'stroke-[#a445ed]' : 'stroke-[#838383]'}`}
          >
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
            />
          </svg>
        </div>
      </div>
    </>
  )
}

export default Nav
