import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className='bg-indigo-700 p-4 flex justify-between items-center'>
      {/* Left Side */}
      <div className='flex items-center'>
        <img
          src='https://cdn2.iconfinder.com/data/icons/icontober/64/Inkcontober_Trail-256.png'
          alt='Logo'
          width='50'
          className='mr-2'
        />
        <NavLink
          to='/'
          className='inline-block p-2 text-indigo-200 mr-2 hover:text-indigo-100'
        >
          Home
        </NavLink>
        <NavLink
          to='/'
          className='inline-block p-2 text-indigo-200 hover:text-indigo-100'
        >
          About
        </NavLink>
      </div>
      {/* Right Side */}
      <div className='hidden md:block'>
        <NavLink
          to='/'
          className='inline-block p-2 text-indigo-200  hover:text-indigo-100 mr-2'
        >
          Login
        </NavLink>
        <NavLink
          to='/'
          className='inline-block py-2 px-4 text-yellow-700 bg-yellow-400 hover:bg-yellow-300 hover:text-yellow-800 rounded transition ease-in duration-150'
        >
          Signup
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
