import React, { useState } from 'react';
import BASE_URL from '../Helper';
import Cookies from 'js-cookie';

const TrainBooking = () => {
  const [trainNumber, setTrainNumber] = useState('');
  const [seats, setSeats] = useState('');
  const userToken = Cookies.get('user_token');

  const bookSeats = async (e) => {
    console.log("clicked");
    e.preventDefault();
    if (!seats || !trainNumber) {
      return console.log("All the fields are required");
    }

    const details = { train_number: trainNumber, seats: parseInt(seats) };
   // console.log(details);
     const url = `${BASE_URL}/user/bookTrains`
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userToken}`
        },
        credentials:'include',
        body: JSON.stringify(details)
      });
      console.log(await response.json())

      if (response.ok) {
        const result = await response.json();
        console.log('Booking successful:', result);
      } else {
        console.error('Booking failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-md max-w-md md:max-w-xl mt-10 mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">Train Booking</h2>
      <form onSubmit={bookSeats}>
        <div className="mb-4">
          <label
            htmlFor="trainNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Train Number
          </label>
          <input
            type="text"
            id="trainNumber"
            value={trainNumber}
            onChange={(e) => setTrainNumber(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter train number"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="number"
            className="block text-sm font-medium text-gray-700"
          >
            No of tickets/seats
          </label>
          <input
            type="number"
            id="number"
            value={seats}
            onChange={(e) => setSeats(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter number of seats"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500 transition duration-300"
        >
          Book Train
        </button>
      </form>
    </div>
  );
};

export default TrainBooking;
