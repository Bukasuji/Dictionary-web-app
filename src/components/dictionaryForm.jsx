import React, { useState } from 'react';
import searchIcon from '../assets/images/icon-search.svg';
import WordDetails from './wordDetails'


const DictionaryForm = () => {
    const [word, setWord] = useState('');
    const [wordData, setWordData] = useState(null);
    const [error, setError] = useState('');
    const [fetchError, setFetchError] = useState('');

    const fetchData = async () => {
        try {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            if (response.ok) {
                const data = await response.json();
                if (data && data.length > 0) {
                    setWordData(data[0]);
                    setFetchError('');
                } else {
                    setWordData(null); 
                    setFetchError('No data found for the word.');
                }
            } else {
                setWordData(null); 
                setFetchError('Network error: ' + response.statusText);
            }
        } catch (error) {
            setWordData(null); 
            setFetchError('Error fetching data: ' + error.message);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (word.trim() === '') {
            setFetchError('');
            setError('Whoops, can’t be empty…');
        } else {
            setError('');
            setWordData(null); 
            fetchData();
        }
    };

    return (
        <div>
            <div className='flex relative mt-8'>
                <input
                    type="text"
                    className={`w-full h-[54px] bg-slate-100 dark:bg-[#2d2d2d] text-lg
                            font-bold placeholder-[#CECECE] dark:placeholder-slate-600 py-2 pl-4 focus:outline-none focus:ring-1 focus:ring-purple-500
                            ${error ? 'border border-red-500' : ''}
                            rounded-xl`}
                    value={word}
                    placeholder='Search for any word...'
                    onChange={(e) => setWord(e.target.value)}
                />

                <img
                    src={searchIcon}
                    alt='search'
                    onClick={handleSubmit}
                    className='absolute right-4 top-5 h-[14px] w-[14px] cursor-pointer'
                />
            </div>
            {fetchError && (
                <div className="text-center mt-32">
                   <div className='text-[64px]'>&#128533;</div>
                    <p className="mt-10 font-semibold text-xl">No Definitions Found</p>
                    <p className='text-[#757575] mt-6 text-md'>Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at a later time or head to the web instead.</p>
                </div>
            )}
            {error && (
                <p className="text-red-500 text-xl mt-2">{error}</p>
            )}
            {wordData && <WordDetails wordData={wordData} />}
        </div>
    );
};

export default DictionaryForm;
