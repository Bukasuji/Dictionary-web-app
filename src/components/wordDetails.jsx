import React from 'react';
import { AiFillCaretRight } from "react-icons/ai";

const WordDetails = ({ wordData }) => {
    const playAudio = (audioUrl) => {
        const audio = new Audio(audioUrl);
        audio.play();
    };

    return (
        <div>
            <div className='relative flex mt-10'>
                <div>
                    <h2 className='font-semibold text-6xl'>{wordData.word}</h2>
                    <p className='text-2xl mt-4 text-purple-500'>{wordData.phonetic}</p>
                </div>

                {wordData.phonetics.map((phonetic, index) => (
                    <div className='absolute right-0 mt-2' key={index}>
                        {phonetic.audio && (
                            <button onClick={() => playAudio(phonetic.audio)} className="relative">
                                <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75" className="hidden transition-colors duration-300 ease-in-out hover:text-white hover:bg-purple-500 rounded-full">
                                    <g fill="#A445ED" fillRule="evenodd">
                                        <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
                                        <path d="M29 27v21l21-10.5z" />
                                    </g>
                                </svg>

                                <div className='rounded-full bg-purple-300 dark:bg-purple-400 hover:text-white p-4 transition-colors duration-300 ease-in-out hover:bg-purple-500'>
                                    <AiFillCaretRight className='text-purple-700 hover:text-white text-3xl' />
                                </div>
                            </button>
                        )}
                    </div>
                ))}
            </div>

            {wordData.meanings.map((meaning, index) => (
                <div key={index}>
                    <div className='flex mt-10'>
                        <p className='font-semibold text-xl'>{meaning.partOfSpeech}</p>
                        <hr className='border-[#979797] mt-4 ml-6 w-[90%] opacity-50' />
                    </div>
                    <h3 className='mt-8 text-xl text-[#757575]'>Meaning</h3>
                    <ul className='list-disc text-xl marker:text-purple-500 marker:text-xs mt-6'>
                        {meaning.definitions.map((definition, idx) => (
                            <div key={idx}>
                                <li className='mb-3 ml-10'>{definition.definition}</li>
                                {definition.example && <p className='mb-3 ml-10 text-[#757575]'>"{definition.example}"</p>}
                            </div>
                        ))}
                    </ul>

                    {meaning.synonyms && meaning.synonyms.length > 0 && (
                        <div className='flex'>
                            <h3 className='text-[#757575] text-xl'>Synonyms</h3>
                            <ul className='flex flex-wrap ml-8'>
                                {meaning.synonyms.map((synonym, sIdx) => (
                                    <div className='' key={sIdx}>
                                        <li className='mr-2 text-xl font-semibold text-purple-500'>{synonym}</li>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            ))}
            <hr className='border-[#979797] opacity-50 w-full mt-10 mb-6' />

            <div className='flex text-lg text-xs lg:text-lg'>
                <p className='mr-4 text-[#979797]'>Source</p>
                <a href={wordData.sourceUrls} target="_blank" rel="noopener noreferrer" className='flex'>
                    <p>{wordData.sourceUrls}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className='lg:mt-2 ml-2' width="14" 
                         height="14" viewBox="0 0 14 14"><path fill="none" stroke="#838383" 
                         strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
                         d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5"/></svg>
                </a>
            </div>
        </div>
    );
};

export default WordDetails;
