import React from 'react';
import { useRouteError } from 'react-router-dom';
import { Link } from 'react-router-dom';
import robot from "../assets/error/robot.svg";

const Error = () => {
  const err = useRouteError(); //to show what type of error we're having, using this hook.

  return (
    <div className='flex flex-col md:flex-row justify-center items-center h-screen'>
      {/* left side */}
      <div className='md:mr-20'>
        <h2 className='text-4xl md:text-9xl font-extrabold'>{err.status}</h2>
        <h1 className='text-xl md:text-6xl font-semibold'>Oops !!</h1>
        <h2 className='text-xl md:text-4xl font-semibold'>{err.statusText}</h2>
        <p className='text-lg md:text-xl text-gray-600'>This page doesn't exist or was<br />removed. We suggest you go back to home.</p>
        <Link to="/" className="flex self-baseline gap-1 mt-6">
          <button className="mx-auto sm:mx-0 font-medium rounded-lg drop-shadow-xl text-sm px-4 py-2 text-center bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300">
            Back to Home
          </button>
        </Link>
      </div>
      {/* right side */}
      <img src={robot} alt="robot" width={250} height={250} className='mt-10 md:mt-0 md:w-1/3 md:h-auto' />
    </div>
  )
}

export default Error;
