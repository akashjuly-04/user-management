import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../utils/authSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const user = useSelector((state) => state.auth.user); 

 const handleLogout=()=>{
    dispatch(logout());
    navigate('/')
 }

  const handleUserClick = () => {
    if (user) {
      navigate('/dashboard'); 
  };
  }
  return (
    <header className="bg-gray-800 p-4 flex justify-between items-center text-white">
      <h1 className="text-xl font-bold">User Management App</h1>
      {user ? (
        <div className="flex items-center space-x-4">
        <div onClick={handleUserClick} className="cursor-pointer hover:underline">
          {user.name}
        </div>
        <button
        onClick={handleLogout}
        className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
      >
        Logout
      </button>
      </div>
      ) : (
        <Link to="/" className="hover:underline">
          Login
        </Link>
      )}
    </header>
  );
};

export default Header;
