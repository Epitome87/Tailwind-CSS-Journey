import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className='md:flex justify-between py-20 px-10 bg-indigo-600 text-indigo-100'>
      {/* Left Side */}
      <div className='md:w-1/2 mb-10 md:mb-0'>
        <h2 className='text-2xl md:text-4xl lg:text-6xl text-white mb-6'>
          Welcome to Doggo City
        </h2>
        <p className='mb-6'>There is never a sad day here!</p>
        <Link
          to=''
          className='inline-block py-3 px-6 text-lg bg-gray-400 hover:bg-gray-300 text-gray-800 rounded mr-2'
        >
          Learn More
        </Link>
        <Link
          to=''
          className='inline-block py-3 px-6 text-lg bg-orange-400 hover:bg-orange-300 text-orange-800 rounded'
        >
          Get Started
        </Link>
      </div>

      {/* Right Side */}
      <div className='md:w-1/2 '>
        <img
          src='https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
          alt='Happiest Doggo'
          className='w-full rounded shadow-2xl'
        />
      </div>
    </div>
  );
}

export default Hero;
