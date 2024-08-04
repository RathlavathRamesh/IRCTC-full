import React, { useState } from 'react'
import Cookies from 'js-cookie';
import BASE_URL from '../Helper';


const AddTrain = () => {
  const [train_number, settrain_number] = useState();
  const [train_name, settrain_name] = useState('');
  const [source, setsource] = useState('');
  const [destination, setdestination] = useState();
  const [total_seats, settotal_seats] = useState();
  const AdminToken = Cookies.get('admin_token');

  const AddTrain = async (e) => {
    e.preventDefault();
    if (!train_name || !train_number || !source || !destination || !total_seats) {
      alert('All the filds are required');
      return console.log("All the filds are required");
    }
    const url = `${BASE_URL}/admin/addtrains`;
    const trainDetails = { train_name, train_number, source, destination, total_seats:parseInt(total_seats) };
    setdestination('');
    settrain_name('');
    settotal_seats(0);
    setsource('');
    settrain_number('');
    const jsonDetails = JSON.stringify(trainDetails);
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${AdminToken}`
        },
         credentials: 'include',
         body:jsonDetails
      })
      const data =await response.json();
       if (!response.ok) {
       throw new Error(data.message);
       }
      console.log(data);
      alert(data.message);
    }
    catch (err) {
      console.log(err);
      alert(err);
    }
    console.log("write the logic here");
  }

  return (
    <div className="bg-white p-5 rounded-lg shadow-md  max-w-md md:max-w-xl  mt-10 mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">Add Trains</h2>
      <form onSubmit={AddTrain}>
        <div className="mb-4">
          <label
            htmlFor="trainName"
            className="block text-sm font-medium text-gray-700"
          >
            Train Name
          </label>
          <input
            type="text"
            value={train_name}
            id="trainName"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter train name"
            onChange={(e)=>settrain_name(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="trainNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Train Number
          </label>
          <input
            type="text"
            value={train_number}
            id="trainNumber"
            onChange={(e)=>settrain_number(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter train number"
            required
          />
        </div>
          <div className="mb-4">
          <label
            htmlFor="Source"
            className="block text-sm font-medium text-gray-700"
          >
           Source
          </label>
          <input
            type="text"
            id="source"
            value={source}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter Source Station Name"
            onChange={(e)=>setsource(e.target.value)}
            required
          />
        </div>
          <div className="mb-4">
          <label
            htmlFor="Destination"
            className="block text-sm font-medium text-gray-700"
          >
            Destination 
          </label>
          <input
            type="text"
            id="destination"
            value={destination}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter Destination Station Name"
            onChange={(e)=>setdestination(e.target.value)}
            required
          />
        </div>
          <div className="mb-4">
          <label
            htmlFor="total seats"
            className="block text-sm font-medium text-gray-700"
          >
           Total Number of Seats
          </label>
          <input
            type="number"
            id="total seats"
            value={total_seats}
            onChange={(e)=>settotal_seats(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter total number of seats"
            required
          />
        </div>
        <button
          type="submit"
          className="px-5 bg-blue-600 text-white py-2 rounded hover:bg-blue-500 transition duration-300"
        >
          Add Train
        </button>
      </form>
    </div>
  )
}

export default AddTrain
