 import React from 'react'
 import { Link, NavLink } from 'react-router-dom'
 import './MenuNavbar.css'
 import BannerIcon from '../../components/TopBanner/BannerIcon'
 
 export const MenuNavbar = () => {
   return (
     <div className='MenuNavbar'>
        <div className='MenuNavbarLogo'>
            <Link to='/' >
                <BannerIcon />
            </Link>
        </div>

        <div className='MenuNavbarInner'>
            <NavLink to='/menu/'>
                Everything
            </NavLink>
            <NavLink to='/menu/soups'>
                Soups
            </NavLink>
            <NavLink to='/menu/pastas'>
                Pasta
            </NavLink>
            <NavLink to='/menu/pizzas'>
                Pizza
            </NavLink>
            <NavLink to='/menu/salads'>
                Salads
            </NavLink>
            <NavLink to='/menu/hot-dishes'>
                Meat
            </NavLink>
        </div>
     </div>
   )
 }
 