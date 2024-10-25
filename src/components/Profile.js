import React from 'react';
import { useState,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {updateProfile} from '../utils/authSlice';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

    const user = useSelector((state) => state.auth.user); 
    const dispatch = useDispatch();
    const navigate=useNavigate();

    const [name,setName] = useState(user?.name || '');
    const [email,setEmail] = useState(user?.email || '');

    useEffect(() => {
        setName(user?.name || '');
        setEmail(user?.email || ''); 
      }, [user]);

    const handleSave=(e)=>{
            e.preventDefault();
            const updatedUser={name,email}

            dispatch(updateProfile(updatedUser))
             localStorage.setItem('user', JSON.stringify({ ...user, ...updatedUser }));
             alert('Profile updated successfully!');

             navigate('/dashboard')
    }
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Edit Profile</h2>
        <form onSubmit={handleSave}>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  required
                />
                  
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
               type="email"
               className="w-full px-3 py-2 border border-gray-300 rounded-lg"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               required
            />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
                Save Changes
            </button>
        </form>

      </div>
    </div>
  )
}

export default Profile