import React from 'react'
import './TopBanner.css'
import BannerIcon from './BannerIcon'
import { BookTableButton } from '../../UI/BookTableButton/BookTableButton'
import { ContainerTop } from '../Containers/ContainerTop/ContainerTop'

export const TopBanner = () => {
  return (
    <div className='TopBanner'>
      <ContainerTop />
      <div className='TopBannerContainer'>
        <div className='BannerIcon'>
          <BannerIcon/>
        </div>
        <div className='WelcomeBanner'>
          <h3>Welcome To Our Restaurant</h3>
          <h1>Really Fresh & Tasty</h1>
        </div>
        <div>
          <BookTableButton />
        </div>
      </div>
    </div>
  )
}
