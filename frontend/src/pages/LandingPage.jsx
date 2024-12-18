import React from 'react'
import { NavLink } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="flex justify-center h-screen ">
      <div className="flex justify-center text-center m-auto  flex-col p-4">
        <span className="text-3xl md:text-5xl font-semibold">Weclome to BookEasy</span>
        <div className="my-2">
          <p className="text-3xl">
            A one stop solution for all your travel needs
          </p>
        </div>
        <div className="my-4 flex items-center mx-auto gap-6">
          <NavLink to="/admin/login">
            <button className="border border-black px-6 py-4 rounded-md bg-black text-white hover:bg-white hover:text-black hover:font-semibold">
              Admin Login
            </button>
          </NavLink>
          <NavLink to="/Home">
          <button className="border border-black px-6 py-4 rounded-md bg-black text-white hover:bg-white hover:text-black hover:font-semibold">
            User Login
          </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default LandingPage
