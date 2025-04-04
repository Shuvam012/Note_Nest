import React from 'react'
import { NavLink } from 'react-router'

const NavBar = () => {
    return (
      <nav className='bg-gray-900 text-white p-4 shadow-lg'>
        <div className='container mx-auto flex justify-center space-x-6'>
          <NavLink
            to='/'
            className='text-lg font-semibold hover:text-yellow-400 transition duration-300'
          >
            Home
          </NavLink>
          <NavLink
            to='/notes'
            className='text-lg font-semibold hover:text-yellow-400 transition duration-300'
          >
            All Notes
          </NavLink>
        </div>
      </nav>
    );
  };

export default NavBar
