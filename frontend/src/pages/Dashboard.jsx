import React from 'react';
import { IoSearchSharp } from "react-icons/io5";
import { student } from '../assets/students.json';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { isDarkMode } = useTheme();

  const filteredStudents = student.filter((s) =>
    s.student_name.trim().toLowerCase().includes(searchTerm.toLowerCase().trim())
  );
  return (
    <div className={`min-h-full ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h2 className={`text-2xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Certificate Verification Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Verification Status Section */}
            <div className={`overflow-hidden shadow-sm rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="p-6">
                <h3 className="text-lg font-medium text-indigo-400 mb-4">Quick Actions</h3>
                <div className="space-y-4">
                  <button className={`w-full px-4 py-2 rounded-md transition-colors duration-200 ${isDarkMode ? 'bg-gray-600 text-indigo-300 hover:bg-gray-500' : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'}`}>
                    Verify New Student
                  </button>
                  <button className={`w-full px-4 py-2 rounded-md transition-colors duration-200 ${isDarkMode ? 'bg-gray-600 text-indigo-300 hover:bg-gray-500' : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'}`}>
                    View Pending Verifications
                  </button>
                  <button className={`w-full px-4 py-2 rounded-md transition-colors duration-200 ${isDarkMode ? 'bg-gray-600 text-indigo-300 hover:bg-gray-500' : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'}`}>
                    Generate Reports
                  </button>
                </div>
              </div>
            </div>

            {/* Statistics Section */}
            <div className={`overflow-hidden shadow-sm rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="p-6">
                <h3 className="text-lg font-medium text-indigo-400 mb-4">Verification Statistics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Pending Verifications</span>
                    <span className="text-indigo-400 font-semibold">25</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Verified Today</span>
                    <span className="text-green-400 font-semibold">12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Total Processed</span>
                    <span className="text-indigo-400 font-semibold">150</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity Section */}
          <div className={`mt-8 shadow-sm rounded-lg mb-10 ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
            <div className="p-6">
              <div className="flex justify-between mb-4">
                <h3 className="text-lg font-medium text-indigo-400 mb-4">Student Verification Activity</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search by Name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={`w-64 pl-6 pr-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 ${
                      isDarkMode ? 'bg-gray-600 border-gray-500 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                  />
                  <IoSearchSharp className="absolute right-2 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 cursor-pointer hover:bg-gray-500 hover:text-gray-200 rounded transition-colors" />
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className={`min-w-full divide-y ${isDarkMode ? 'divide-gray-600' : 'divide-gray-200'}`}>
                  <thead>
                    <tr>
                      <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>Student Name</th>
                      <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>Year of Admission</th>
                      <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>Status</th>
                      <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>Date</th>
                    </tr>
                  </thead>
                  
                  <tbody className={`divide-y ${isDarkMode ? 'divide-gray-600' : 'divide-gray-200'}`}>
                    {                          
                    filteredStudents.map((s, index)=> {
                      return(
                        <tr key={index} className={`${isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-50'}`}>
                          <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{s.student_name}</td>
                          <td className={`px-6 py-4 whitespace-nowrap text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>{s.year_of_admission}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              s.status === "Verified" ? (isDarkMode ? "bg-green-900 text-green-300" : "bg-green-100 text-green-800") : ""
                            } ${
                              s.status === "Pending" ? (isDarkMode ? "bg-yellow-900 text-yellow-300" : "bg-yellow-100 text-yellow-800") : ""
                            } ${
                              s.status === "Not Verified" ? (isDarkMode ? "bg-red-900 text-red-300" : "bg-red-100 text-red-800") : ""
                            }`}>{s.status}</span>
                          </td>
                          <td className={`px-6 py-4 whitespace-nowrap text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>{s.date}</td>
                        </tr>
                      )
                    })  
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
