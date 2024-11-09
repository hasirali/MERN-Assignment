import React from 'react';

const Navbar = () => {
  return (
    <>
      <div className="flex w-full p-2 justify-between items-center border-b border-gray-300 flex-wrap">
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/150?text=Logo"
            className="w-10 h-10"
            alt="Logo"
          />
          <h2 className="font-bold text-2xl text-purple-600 ml-2">TailwildFlex</h2>
        </div>
        <div className="relative flex items-center md:inline-flex w-2/6">
          <input
            type="text"
            placeholder="Search"
            className="w-full border border-gray-200 rounded-md py-1 px-2"
          />
          <svg
            className="absolute right-2 h-6 w-6 text-gray-400 hover:text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div className="flex items-center gap-2">
          <button className="border px-2 py-1 rounded-md">Home</button>
          <button className="border px-2 py-1 rounded-md">Button</button>
          <button className="border px-2 py-1 rounded-md">Service</button>
          <button className="border px-2 py-1 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray hover:text-gray-500 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="border px-2 py-1 rounded-md text-slate-800">
            About
          </button>
          <button className="border px-2 py-1 rounded-md bg-purple-600 text-white hover:bg-purple-700">
            User
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
