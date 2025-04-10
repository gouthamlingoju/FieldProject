// import './styles.css';
import image from '../assets/image.png';
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

function Vnrheader() {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <header className={`shadow-lg fixed top-0 left-0 w-full z-50 px-5 py-2 ${
            isDarkMode ? 'bg-gray-800 shadow-gray-900' : 'bg-white shadow-gray-200'
        }`}>
            <div className='flex justify-between items-center max-w-7xl mx-auto'>
                <div className='flex items-center'>
                    <img className="w-12 h-12 mx-3" src={image} alt="VNR Logo" />
                    <p className={`text-3xl font-bold tracking-wide ${
                        isDarkMode ? 'text-red-400' : 'text-red-600'
                    }`}>VNRVJIET</p>
                </div>
                <button
                    onClick={toggleTheme}
                    className={`p-2 rounded-full ${
                        isDarkMode 
                            ? 'text-yellow-300 hover:bg-gray-700' 
                            : 'text-gray-600 hover:bg-gray-100'
                    }`}
                >
                    {isDarkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
                </button>
            </div>
        </header>
    );
}

export default Vnrheader;