import React from 'react';

function Footer() {
  return (
    <div className='p-10 bg-indigo-900 text-indigo-400 flex justify-between'>
      {/* Left Side */}
      <div className='md:w-1/2'>
        <h3 className='text-lg mb-2'>Join the Newsletter</h3>
        <form className='flex'>
          <input
            type='email'
            className='w-full rounded-l py-3 px-4 outline-none focus:bg-indigo-100'
          />
          <button className='bg-red-300 hover:bg-red-400 text-red-800 rounded-r px-4'>
            Join
          </button>
        </form>
      </div>

      {/* Right Side */}
      <div className='flex items-center'>
        Copyright &copy; Doggos 2020 - Infinity
      </div>
    </div>
  );
}

export default Footer;
