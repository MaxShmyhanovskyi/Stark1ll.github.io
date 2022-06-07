import React from 'react'
import './Chefs.css'
import { ContainerTop } from '../Containers/ContainerTop/ContainerTop'
import chef1 from './chef1.jpg'
import chef2 from './chef2.jpg'
import chef3 from './chef3.jpg'
import { FaInstagram, FaFacebook, FaTwitter, FaGooglePlus} from 'react-icons/fa'

export const Chefs = () => {
  return (
    <div className='Chefs'>
        <div className='ChefsContainer'>
          <div className='ChefsHeader'>
            <h3> Great Team</h3>
            <h1> Talented Chefs</h1>
          </div>

          <div className='ChefsInfo'>
            <div className='ChefsCard'>
              <img src={chef1} alt='chef1'/>
              
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className='ChefsSocials'>
                  <FaInstagram className='Icon' />
                  <FaFacebook className='Icon' />
                  <FaTwitter className='Icon' />
                  <FaGooglePlus className='Icon' />
                </div>
            </div>
              
            <div className='ChefsCard'>
              <img src={chef2} alt='chef2'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className='ChefsSocials'>
                <FaInstagram className='Icon' />
                <FaFacebook className='Icon' />
                <FaTwitter className='Icon' />
                <FaGooglePlus className='Icon' />
              </div>
            </div>

            <div className='ChefsCard'>
              <img src={chef3} alt='chef3'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className='ChefsSocials'>
                <FaInstagram className='Icon' />
                <FaFacebook className='Icon' />
                <FaTwitter className='Icon' />
                <FaGooglePlus className='Icon' />
              </div>
            </div>

          </div>
        </div>
    </div>
  )
}
