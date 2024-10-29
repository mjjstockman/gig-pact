// src/TestComponent.jsx
import React from 'react';

const Test = () => {
  return (
    <div className='p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4'>
      <h1 className='text-2xl font-bold text-center'>
        Tailwind CSS is Working!
      </h1>
      <p className='text-gray-500 text-center'>
        This is a test component to check if Tailwind CSS is properly integrated
        into the project.
      </p>
      <button className='w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700'>
        Test Button
      </button>
    </div>
  );
};

export default Test;
