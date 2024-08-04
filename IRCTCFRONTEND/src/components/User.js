import React from 'react'
import { Link } from 'react-router-dom'

const User = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <section
        className="bg-cover bg-center text-black py-20"
        style={{
          backgroundImage: `url('https://www.irctc.co.in/nget/assets/images/Bharat_Gaurav.jpg')`,
        }}
      >
        <div className="bg-white bg-opacity-70 container mx-auto text-center p-10 rounded-lg">
          <h1 className="text-4xl font-bold mb-4">Welcome to IRCTC</h1>
          <p className="text-lg mb-6">
            Your one-stop solution for all your travel needs.
          </p>
          <div className="mx-auto w-fit flex   items-center justify-center md:space-x-4   flex-col md:flex-row">
            <p className="bg-yellow-500 text-black px-6 py-3  sm:mb-3 md:mb-0 rounded hover:bg-yellow-400 transition duration-300 hover:cursor-pointer">
              <Link to="/book-train">Book Tickets Now</Link>
            </p>
            <p className="bg-yellow-500 text-black px-6 py-3 rounded hover:bg-yellow-400 transition duration-300 hover:cursor-pointer">
              <Link to="/checktrains">Check Availability</Link>
                      </p>
            <p className="bg-yellow-500 text-black px-6 py-3 rounded hover:bg-yellow-400 transition duration-300 hover:cursor-pointer">
              <Link to="/showbookings">Show My Bookings</Link>
            </p>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Online Ticket Booking
              </h3>
              <p>
                Easily book your train tickets online, check seat availability,
                and plan your journey in just a few clicks.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Train Schedules</h3>
              <p>
                Access real-time train schedules and updates for smooth travel
                planning.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Cancellation and Refunds
              </h3>
              <p>
                Manage your bookings with ease, including cancellations and
                refunds directly through our platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 IRCTC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default User
