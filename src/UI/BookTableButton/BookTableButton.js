import React from 'react'
import { Link } from 'react-router-dom'
import './BookTableButton.css'

export const BookTableButton = () => {
  return (
    <button className='BookTableButton bn21'>
        <Link to={'/table-booking'} className='BookTableButton'>Book a Table!</Link>
    </button>
  )
}
