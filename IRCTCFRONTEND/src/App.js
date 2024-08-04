import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './components/header/Home'
import Login from './components/Forms/Login'
import Register from './components/Forms/Register'
import AdminDashboard from './components/Admin/AdminDashboard'
import AddTrain from './components/Admin/AddTrain'
import UpdateSeats from './components/Admin/UpdateSeats'
import TrainBooking from './components/Forms/TrainBooking'
import ViewTrainDetails from './components/ViewTrainDetails'
import User from './components/User'
import CheckTrains from './components/Forms/CheckTrains'
import Bookings from './components/Bookings'

const App = () => {
  const location = useLocation()
  return (
    <>
      {location.pathname !== '/admin' && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login-page" element={<Login />} />
        <Route path="/register-page" element={<Register />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/add-train" element={<AddTrain />} />
        <Route path="/update-seats" element={<UpdateSeats />} />
        <Route path="/book-train" element={<TrainBooking />} />
        <Route path="/train/view/:id" element={<ViewTrainDetails />} />
        <Route path="/user" element={<User />} />
        <Route path='/checktrains' element={<CheckTrains />} />
        <Route path='/showbookings' element={<Bookings/>}/>
      </Routes>
    </>
  )
}

export default App
