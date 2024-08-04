import React, { useState } from 'react'
import Cookies from 'js-cookie';
import BASE_URL from '../Helper';


const UpdateSeats = () => {
  const [train_number, settrain_number] = useState();
  const [updated_seats, setUpdatedSeats] = useState('');
  const AdminToken = Cookies.get('admin_token');

  const UpdatateSeats = async (e) => {
    e.preventDefault();
    if (!train_number || !updated_seats) {
      alert("All the feilds required");
      return console.log("all feilds required");
    }
    console.log("write the logic here");
    const details = { train_number, updated_seats: parseInt(updated_seats) }
    settrain_number('');
    setUpdatedSeats('');
    const modifiedData = JSON.stringify(details);
    console.log(modifiedData);
    const url = `${BASE_URL}/admin/updateseats`;
     try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${AdminToken}`
        },
         credentials: 'include',
         body:modifiedData
      })
      const data =await response.json();
       if (!response.ok) {
       throw new Error(data.message);
       }
       console.log(data.message);
       alert(data.message);
    }
    catch (err) {
      console.log(err);
      alert(err);
    }

  }
  return (
    <div className="bg-white p-5 rounded-lg shadow-md max-w-md md:max-w-xl mx-auto mt-10">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Update Seat Availability
      </h2>
      <form onSubmit={UpdatateSeats}>
        <div className="mb-4">
          <label
            htmlFor="trainNumberUpdate"
            className="block text-sm font-medium text-gray-700"
          >
            Train Number
          </label>
          <input
            type="text"
            value={train_number}
            onChange={(e)=>settrain_number(e.target.value)}
            id="trainNumberUpdate"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter train number"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="seatCount"
            className="block text-sm font-medium text-gray-700"
          >
            Available Seats
          </label>
          <input
            type="number"
            id="seatCount"
            value={updated_seats}
            onChange={(e)=>setUpdatedSeats(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter number of available seats"
            required
          />
        </div>
        <button
          type="submit"
          className="px-5 bg-blue-600 text-white py-2 rounded hover:bg-blue-500 transition duration-300"
        >
          Update Availability
        </button>
      </form>
    </div>
  )
}

export default UpdateSeats
