import React from 'react';
import ChildMenu from '../components/ChildMenu';
import { IoSearchSharp } from "react-icons/io5";
import { IoFilter } from "react-icons/io5";
import { student } from '../assets/students.json';
import { useState } from 'react';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredStudents = student.filter((s) =>
    s.student_name.trim().toLowerCase().includes(searchTerm.toLowerCase().trim()));
  const [statusFilter, setStatusFilter] = useState('');
  const [yearFilter, setYearFilter] = useState('');


  return (
    <div className="bg-gray-100 min-h-full">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Certificate Verification Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Verification Status Section */}
            <div className="bg-white shadow-sm rounded-lg">
              <div className="p-6">
                <h3 className="text-lg font-medium text-indigo-600 mb-4">Quick Actions</h3>
                <div className="space-y-4">
                  <button className="w-full bg-indigo-50 text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-100 transition-colors duration-200">
                    Verify New Student
                  </button>
                  <button className="w-full bg-indigo-50 text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-100 transition-colors duration-200">
                    View Pending Verifications
                  </button>
                  <button className="w-full bg-indigo-50 text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-100 transition-colors duration-200">
                    Generate Reports
                  </button>
                </div>
              </div>
            </div>

            {/* Statistics Section */}
            <div className="bg-white overflow-hidden shadow-sm rounded-lg">
              <div className="p-6">
                <h3 className="text-lg font-medium text-indigo-600 mb-4">Verification Statistics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Pending Verifications</span>
                    <span className="text-indigo-600 font-semibold">25</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Verified Today</span>
                    <span className="text-green-600 font-semibold">12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Processed</span>
                    <span className="text-indigo-600 font-semibold">150</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity Section */}
          <div className="mt-8 bg-white shadow-sm rounded-lg mb-10">
            <div className="p-6">
              <div className="flex justify-between mb-4">
                <h3 className="text-lg font-medium text-indigo-600 mb-4">Student Verification Activity</h3>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search by Name"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="bg-white w-64 pl-6 pr-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    />
                    <IoSearchSharp className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7 p-1 text-gray-400 cursor-pointer hover:bg-indigo-400 hover:text-gray-200 rounded transition-colors" />
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year of Admission
                        <ChildMenu
                          l={[...new Set(student.map(s => s.year_of_admission))]}
                          Name="All Years"
                          onSelect={(value) => setYearFilter(value)}
                        />
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredStudents.map((s, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{s.student_name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{s.year_of_admission}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              s.status === "Verified" ? "bg-green-100 text-green-800" : ""
                            } ${
                              s.status === "Pending" ? "bg-yellow-100 text-yellow-800" : ""
                            } ${
                              s.status === "Not Verified" ? "bg-red-100 text-red-800" : ""
                            }`}
                          >
                            {s.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{s.date}</td>
                      </tr>
                    ))}
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
