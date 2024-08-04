import React from 'react'
import { Link } from 'react-router-dom'

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-[#426CAD] text-white py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/11/IRCTC-Logo.png"
            alt="IRCTC Logo"
            className="h-10"
          />
          <nav className="flex space-x-4">
            <Link
              to="/add-train"
              className="text-lg font-semibold hover:underline"
            >
              Add Trains
            </Link>
            <Link
              to="/update-seats"
              className="text-lg font-semibold hover:underline"
            >
              Update Seat Availability
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">Admin Dashboard</h1>
        <p className="text-lg text-center mb-8">
          Welcome to the IRCTC Admin Dashboard. Here you can manage train
          schedules, update seat availability, and ensure smooth operations for
          our passengers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Manage Trains</h2>
            <p className="mb-2">
              Add new trains, view existing train schedules, and edit details.
            </p>
            <Link to="/add-train" className="text-blue-600 hover:underline">
              Go to Add Trains
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">
              Update Seat Availability
            </h2>
            <p className="mb-2">
              Check and update seat availability for all trains. Ensure your
              passengers have accurate information.
            </p>
            <Link to="/update-seats" className="text-blue-600 hover:underline">
              Go to Update Seats
            </Link>
          </div>
        </div>

        <footer className="mt-8 text-center">
          <p className="text-gray-600">
            &copy; 2024 IRCTC. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  )
}

export default AdminDashboard
