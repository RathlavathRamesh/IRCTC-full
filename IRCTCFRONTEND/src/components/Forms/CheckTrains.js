import React, { useState } from 'react'
import BASE_URL from '../Helper';
import Cookies from 'js-cookie';

const CheckTrains = () => {
    const [fromtrain, setFromStation] = useState('');
    const [toTrain, setToStation] = useState('');
    const [trains, setTrains] = useState();
    const userToken = Cookies.get('user_token');
    const [currentPage, setCurrentPage] = useState(1)
    const [isDataReady, setisDataReady] = useState(false);
    const [dataPerPage] = useState(10)
    const indexOfLastData = currentPage * dataPerPage
    const indexOfFirstData = indexOfLastData - dataPerPage
    let currentTrainData; 
    if (trains) {
        currentTrainData = trains.slice(indexOfFirstData, indexOfLastData)
    }

    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    

    const CheckTrains = async (e) => {
        e.preventDefault();
        console.log(fromtrain, toTrain);
        if (!fromtrain || !toTrain) {
            return console.log("both the feilds are required");
        }
        const userData = {fromtrain,toTrain};
        setFromStation('');
        setToStation('');
        const modifiedData = JSON.stringify(userData);
        const url = `${BASE_URL}/user/checktrains`
         try {
         const response = await fetch(url, {
         method: 'POST',
         headers: {
          'Content-Type': 'application/json',
            'Authorization': `Bearer ${userToken}`
        },
         credentials: 'include',
         body:modifiedData
    })
    const data = await response.json();     
     if (!response.ok) {
      throw new Error(data.message);
     }
             setTrains(data.trains) 
             setisDataReady(true);
  }
  catch (err) {
    console.log(err.message);
  }
        
    }
    console.log(trains);
  return (
   <>
  {!isDataReady && (
        <div className="bg-white p-5 rounded-lg shadow-md max-w-md md:max-w-xl mt-10  mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">Check Trains</h2>
      <form onSubmit={CheckTrains}>
        <div className="mb-4">
          <label
            htmlFor="from"
            className="block text-sm font-medium text-gray-700"
          >
            From
          </label>
          <input
            type="text"
            id="from"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter departure station"
                      onChange={(e) => setFromStation(e.target.value)} 
            value={fromtrain}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="to"
            className="block text-sm font-medium text-gray-700"
          >
            To
          </label>
          <input
            type="text"
            id="to"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter arrival station"
            onChange={(e) => setToStation(e.target.value)}
            value={toTrain}          
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500 transition duration-300"
        >
         Check Trains
        </button>
      </form>
    </div> 
    )}
    {isDataReady && (
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full mt-16">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow overflow-hidden rounded-lg border-b border-gray-200">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                Train Number
              </th>
               <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                Train Name
              </th>
              <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                From
              </th>
              <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                To
              </th>
               <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                Available Seats
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {currentTrainData.map((train) => (
              <tr key={train.id} className="bg-gray-50 odd:bg-gray-100">
                <td className="text-left py-3 px-4">{train.train_number}</td>
                <td className="text-left py-3 px-4">{train.train_name}</td>
                <td className="text-left py-3 px-4">{train.source}</td>
                <td className="text-left py-3 px-4">{train.destination}</td>
                <td className="text-left py-3 px-4">{train.available_seats}</td>
              </tr>
            ))}
            {trains.length === 0 && (
              <tr>
                <td colSpan="3" className="text-center py-4">
                 No Data Found;
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="relative flex justify-center mt-4 mb-6">
        <button
          className={`bg-blue-500 text-white px-4 py-2 mx-2 rounded-md ${
            currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <button
          className={`bg-blue-500 text-white px-4 py-2 mx-2 rounded-md ${
            indexOfLastData >= trains.length
              ? 'opacity-50 cursor-not-allowed'
              : ''
          }`}
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastData >= trains.length}
        >
          Next
        </button>
      </div>
    </div>
    )}
   </>
  )
}

export default CheckTrains
