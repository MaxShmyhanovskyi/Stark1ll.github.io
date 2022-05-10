import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='Navbar'>
        <NavLink to={'/about'} >About Us</NavLink>
        <NavLink to={'/menu'} >Our Menu</NavLink>
        <NavLink to={'/chefs'} >Chefs</NavLink>
        <NavLink to={'/table-booking'} >Visit Us</NavLink>
    </div>
  )
}
