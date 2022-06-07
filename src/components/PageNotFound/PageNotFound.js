import React from 'react'
import './PageNotFound.css'
import { Link } from 'react-router-dom'
import NotFoundIcon from './NotFoundIcon'

export const PageNotFound = () => {
  return (
    <div className='PageNotFound'>
        <div className='PageNotFoundHeader'>404 Page not found</div>
        <div className='PageNotFoundInner'>
            <Link to='/'>
                <NotFoundIcon />
            </Link>
        </div>
    </div>
  )
}
