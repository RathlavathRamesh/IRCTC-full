import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'; 
import BASE_URL from '../Helper';

const Register = () => {
  const [username, setuserName] = useState('');
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const RegisterUesr = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      return console.log("both the feilds required");
    }
    const role = "user";
    const userData = { username, password,role };
    const modifiedData = JSON.stringify(userData);
    const url = `${BASE_URL}/user/register`
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      credentials: 'include',
      body:modifiedData
    })
    const data = await response.json();
    console.log(data);
    if (!response.ok) {
      throw new Error(data.message);
    }
    alert(data.message);
    navigate('/login-page')
  }
  catch (err) {
    console.log(err.message);
     alert(err.message);
  }
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <form onSubmit={RegisterUesr}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Choose a username"
               onChange={(e)=>setuserName(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Create a password"
              onChange={(e)=>setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500 transition duration-300"
          >
            Register
          </button>
          <p className="mt-4 text-center">
            Already have an account?
            <a href="login-page" className="text-blue-600 hover:underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Register
