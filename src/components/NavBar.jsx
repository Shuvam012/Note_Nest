import React from 'react'
import { NavLink } from 'react-router'

const NavBar = () => {
    return (
        <div className='flex flex-row gap-6 place-content-evenly
        '>
            
            <NavLink
            to="/"
            >
                Home
            </NavLink>

            <NavLink
            to='/notes'
            >
                All Notes
            </NavLink>
            
        </div>
       
    )
}

export default NavBar
