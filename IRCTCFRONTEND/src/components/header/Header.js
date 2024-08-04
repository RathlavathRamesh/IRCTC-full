import React from 'react'

import { Link } from 'react-router-dom'
import '../../index.css'

const Header = () => {
  return (
    <nav className="bg-[#426CAD] px-4 py-2 relative">
      <div className="flex justify-between items-center">
        <div>
          <img
            src="https://logos-world.net/wp-content/uploads/2020/11/IRCTC-Logo.png"
            alt="Logo"
            className="h-11 w-20"
          />
        </div>
        <div className="flex text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg">
          <Link to="/">
            <button className="mr-5 sm:gap-0 sm:hidden md:block relative text-white underline-transition transition duration-300 ease-in-out">
              Home
            </button>
          </Link>
          <Link to="/login-page">
            <button className="mr-5 relative text-white underline-transition transition duration-300 ease-in-out">
              Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header
