import React from 'react'
import './Header.css'
import HeaderIcon from './HeaderIcon'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='Header'>
        <div className='BrandIcon'>
          <Link to={'/'}>
            <HeaderIcon/>
          </Link>
        </div>
        <div className='HeaderText'>CALL US: <i className='Number'>8-(800) 555 3535</i></div>
    </div>
  )
}
