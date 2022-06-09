 import React from 'react'
 import { Link, NavLink } from 'react-router-dom'
 import './MenuNavbar.css'
 import BannerIcon from '../../components/TopBanner/BannerIcon'
 import { FaShoppingBasket } from 'react-icons/fa'
 
 export const MenuNavbar = () => {
   return (
     <div className='MenuNavbar'>
        <div className='MenuNavbarLogo'>
            <Link to='/' >
                <BannerIcon />
            </Link>
        </div>
        <div>
            <NavLink to='/shopping-cart' className='MenuNavbarShoppingCart'>
                Shopping Cart
            </NavLink>
        </div>
        <div className='MenuNavbarInner'>
            <NavLink to='/menu/'>
                Menu
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
 