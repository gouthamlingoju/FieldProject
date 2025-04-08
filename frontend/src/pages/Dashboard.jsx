import React from 'react';

const Dashboard = () => {
  return (
    <div className="h-full bg-gray-100">
      <nav className="bg-indigo-600 shadow-lg sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-white">Student Certificate Management System</h1>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Certificate Verification Dashboard</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Required Certificates Section */}
            <div className="bg-white overflow-hidden shadow-sm rounded-lg">
              <div className="p-6">
                <h3 className="text-lg font-medium text-indigo-600 mb-4">Required Documents</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    SSC (10th) Certificate
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Intermediate (12th) Certificate
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Transfer Certificate
                  </li>
                </ul>
              </div>
            </div>

            {/* Verification Status Section */}
            <div className="bg-white overflow-hidden shadow-sm rounded-lg">
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
          <div className="mt-8 bg-white shadow-sm rounded-lg">
            <div className="p-6">
              <h3 className="text-lg font-medium text-indigo-600 mb-4">Recent Activity</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Document Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">John Doe</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">SSC Certificate</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Verified</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-02-20</td>
                    </tr>
                    {/* Add more rows as needed */}
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
