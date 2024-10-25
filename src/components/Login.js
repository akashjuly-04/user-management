import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginSucess } from '../utils/authSlice'
import {useNavigate} from 'react-router-dom'


const Login = () => {

 const[name,setName]=useState('')
 const[email,setEmail]=useState('')
 const[password,setPassword]=useState('')
 const dispatch=useDispatch();
 const navigate=useNavigate();

 const handleSubmit=(e)=>{
    e.preventDefault();
    if(name==="Testuser" && email==="testuser@gmail.com" && password==="Testuser@Oct2024"){

        const authToken="sampleAuthToken123"
        dispatch(loginSucess({name:name,email:email}));

        localStorage.setItem('user',JSON.stringify({name,email,authToken}))
        navigate('/dashboard')
        // alert("Login Successful")
    }else{
        alert("Iinvalid Credentials")
    }
 }


  return (
  <div className="flex justify-center items-center h-screen bg-gray-100">
    <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
    <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
                Name
            </label>
            <input
              className="w-full px-3 py-2 border border-blue-500 focus:border-blue-500 rounded-lg"
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              required
            />
        </div>

        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              className="w-full px-3 border border-gray-300 focus:border-blue-500 rounded-lg" 
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)} 
              required
            />
        </div>

        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              className="w-full px-3 py-2 border border-gray-300 focus:border-blue-500 rounded-lg"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

        
        <button
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            type="submit"
        >
        Login
        </button>
    </form>
    </div>
  </div>
  )
}

export default Login