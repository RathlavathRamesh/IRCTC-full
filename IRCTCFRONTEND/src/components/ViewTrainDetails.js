import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const ViewTrainDetails = () => {
  const { id } = useParams;
  console.log(id);
  const [train, setTrain] = useState({
    name: 'Express Train',
    id: '12345',
    totalSeats: 100,
    availableSeats: 20,
  })

  useEffect(() => {}, [id])
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full max-w-md">
      <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">
        Train Details
      </h2>
      <div className="bg-[#0d1d3b] rounded-lg shadow-lg overflow-hidden border border-gray-300 hover:border-blue-500 transition duration-300">
        <div className="p-6">
          <div className="flex flex-col space-y-4">
            <div className="py-2 border-b border-gray-300">
              <p className="text-sm md:text-md text-white mb-2">
                <span className="font-semibold">Train Name:</span> {train.name}
              </p>
              <p className="text-sm md:text-md text-white mb-2">
                <span className="font-semibold">Train ID:</span> {train.id}
              </p>
              <p className="text-sm md:text-md text-white mb-2">
                <span className="font-semibold">Total Seats:</span>{' '}
                {train.totalSeats}
              </p>
              <p className="text-sm md:text-md text-white mb-2">
                <span className="font-semibold">Available Seats:</span>{' '}
                {train.availableSeats}
              </p>
            </div>
            <div className="flex justify-center">
              <Link
                to="/book-train"
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Book Train
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewTrainDetails
