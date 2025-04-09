import React from 'react'
import { useTheme } from '../context/ThemeContext';

function Footer() {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={`bottom-0 w-full pt-4 shadow-md flex justify-between mt-5 px-8 fixed z-100 pb-3 ${
      isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-700'
    }`}>
      <div>
        <h5 className={`font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>Project by:</h5>
        <div className='flex'>
        <ul className='pr-10'>
            <li>L. Goutham</li>
            <li>G. Charmi Bai</li>
        </ul>
        <ul>
            <li>M. Akhila</li>
            <li>D. L. Sarvani</li>
        </ul>
        </div>
      </div>  
      <div>
        <h5 className={`font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>Project Guided by: </h5>
        <ul className='p-0'>
            <li>Dr. V. Baby, HOD [CSE, VNRVJIET]</li>
            <li>Dr. B.V. Kiranmayee, Professor [CSE, VNRVJIET]</li>
            <li>Mr. P. Sudheer Benarji, Assistant Professor [CSE, VNRVJIET]</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer