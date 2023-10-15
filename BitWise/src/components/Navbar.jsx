import React from 'react'
import {FaCoins} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <NavLink to="/">
                <div className="navbar">
                    <FaCoins size={30} className='icon' />
                    <h1>Bit<span>Wise</span></h1>
                </div>
            </NavLink>
        </>
    )
}

export default Navbar
