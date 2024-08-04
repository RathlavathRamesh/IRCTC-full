import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import BASE_URL from '../Helper';
import Cookies from 'js-cookie';

const Login = () => {
  const [username, setuserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const LoginUser = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      return console.log("both the feilds required");
    }
    const userData = { username, password };
    setPassword('');
    setPassword('');
    const modifiedData = JSON.stringify(userData);
    const url = `${BASE_URL}/user/login`
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      credentials: 'include',
      body:modifiedData
    })
      const data =await response.json();
     if (!response.ok) {
      throw new Error(data.message);
     }
    console.log('Role of the User', data.userrole);
    alert(data.message);
    if (data.userrole === 'user') {
      Cookies.set('user_token', data.jwtToken, { expires: 2 })
      navigate('/user');
    }
    else if (data.userrole === 'admin') {
      Cookies.set('admin_token', data.jwtToken, { expires: 10 });
      navigate('/admin');
    }
  }
  catch (err) {
    console.log(err.message);
    alert(err.message);
  }
  }
  return (
    <div className="flex justify-center">
      <div className="bg-white px-6 py-2 rounded-lg shadow-md w-96 mt-[5em]">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form className="h-fit pb-16" onSubmit={LoginUser}>
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
              value={username}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your username"
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
              value={password}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your password"
              onChange={(e)=>setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500 transition duration-300"
          >
            Login
          </button>
          <p className="mt-4 text-center">
            Don't have an account?{' '}
            <Link to="/register-page" className="text-blue-600 hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
