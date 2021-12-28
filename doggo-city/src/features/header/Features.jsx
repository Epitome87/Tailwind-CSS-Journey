import React from 'react';

function Features() {
  return (
    <div className='md:flex py-16 px-10 bg-indigo-800 text-indigo-200 text-center'>
      <div className='mr-2 mt-8 text-center'>
        <img
          src='https://images.unsplash.com/photo-1534985111090-85c477f9d813?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
          alt=''
          className='w-full  mb-4 rounded border-solid border-2 border-indigo-400 '
        />
        <p>Cuddles!</p>
      </div>
      <div className='mr-2 text-center'>
        <img
          src='https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          alt=''
          className='w-full  mb-4 rounded border-solid border-2 border-indigo-400 '
        />
        <p>Smiles!</p>
      </div>
      <div className='mr-2 text-center'>
        <img
          src='https://images.unsplash.com/photo-1562176566-e9afd27531d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          alt=''
          className='w-full  mb-4 rounded border-solid border-2 border-indigo-400 '
        />
        <p>Games!</p>
      </div>
      <div className='mr-2 mt-8 text-center'>
        <img
          src='https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
          alt=''
          className='w-full mb-4 rounded border-solid border-2 border-indigo-400 '
        />
        <p>Swims!</p>
      </div>
    </div>
  );
}

export default Features;
