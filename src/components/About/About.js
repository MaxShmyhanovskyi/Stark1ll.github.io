import React from 'react'
import { ContainerTop } from '../Containers/ContainerTop/ContainerTop'
import about1 from '../About/about1.jpg'
import about2 from '../About/about2.jpg'
import './About.css'
import { Link } from 'react-router-dom'

export const About = () => {
  return (
    <div className='About'>
        <ContainerTop />
        <div className='AboutContainer'>
            <div className='WorkingSchedule'>
                <p>Opening Times</p>
                <h2>Working Times</h2>
                <h4> Monday - Thursday:<br/>   7:00am - 12:00 pm</h4>
                <h4> Friday - Saturday :<br/>  7:00am - 12:00 pm</h4>
                <h4> Saturday - Sunday :<br/>  7:00am - 12:00 pm</h4>
            </div>
            <div className='RestaurantCards'>
                <div className='Card'>
                    <Link to='/table-booking' className='CardText'>
                        <span>Visit Us!</span>
                        <img src={about1} alt='VisitUs'/>
                    </Link>
                    
                </div>
                <div className='Card'>
                    <Link to='/menu' className='CardText'>
                        <span>Delicious!</span>
                        <img src={about2} alt='Menu'/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
