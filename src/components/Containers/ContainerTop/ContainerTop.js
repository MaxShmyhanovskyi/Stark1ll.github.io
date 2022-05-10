import React from 'react'
import './ContainerTop.css'
import { Navbar } from './Navbar/Navbar'
import { Header } from './Header/Header'

export const ContainerTop = () => {
  return (
    <div className='ContainerTop'>
        <Header />
        <Navbar />
    </div>
  )
}
