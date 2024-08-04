import React, { useEffect, useState } from 'react'
import BASE_URL from './Helper';
import Cookies from 'js-cookie';

const Bookings = () => {
    const [trains, setTrains] = useState([]);
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
    const userToken = Cookies.get('user_token');
    const getTheBookings = async () => {
        const url = `${BASE_URL}/user/bookings`
          try {
         const response = await fetch(url, {
         method: 'POST',
         headers: {
          'Content-Type': 'application/json',
            'Authorization': `Bearer ${userToken}`
        },
         credentials: 'include',
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
    useEffect(()=> {
    getTheBookings();
    }, [1])
    console.log('your trains', trains);
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full mt-16">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow overflow-hidden rounded-lg border-b border-gray-200">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                User ID
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
                Seats bookd
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {isDataReady && currentTrainData.map((train) => (
              <tr key={train.id} className="bg-gray-50 odd:bg-gray-100">
                <td className="text-left py-3 px-4">{train.user_id}</td>
                <td className="text-left py-3 px-4">{train.train_name}</td>
                <td className="text-left py-3 px-4">{train.source}</td>
                <td className="text-left py-3 px-4">{train.destination}</td>
                <td className="text-left py-3 px-4">{train.seats_booked}</td>
              </tr>
            ))}
            { currentTrainData.length===0 && (
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
  )
}

export default Bookings
