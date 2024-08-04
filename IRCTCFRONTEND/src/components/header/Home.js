import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <section
        className="bg-cover bg-center text-black py-20"
        style={{
          backgroundImage: `url('https://www.irctc.co.in/nget/assets/images/Bharat_Gaurav.jpg')`,
        }}
      >
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

export default Home
