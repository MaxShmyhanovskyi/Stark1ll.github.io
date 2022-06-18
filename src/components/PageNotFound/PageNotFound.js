import React from 'react'
import './PageNotFound.css'
import { Link } from 'react-router-dom'
import NotFoundIcon from './NotFoundIcon'
import { FaSadCry } from 'react-icons/fa'

export const PageNotFound = () => {
  return (
    <div className='PageNotFound'>
        <div className='PageNotFoundHeader'>
          <div>Page not found <FaSadCry size='4rem' color='#f8df1f'/>
          </div>
        </div>
          <div className='ProductTitle NotFoundGoToMenu'>Go to Menu:</div>
        <div className='PageNotFoundInner'>
            <Link to='/menu'>
                <NotFoundIcon/>
            </Link>
        </div>
    </div>
  )
}
