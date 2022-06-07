import React from 'react'
import './Menu.css'
import { MenuNavbar } from '../../UI/MenuNavbar/MenuNavbar'
import { Routes,Route } from 'react-router-dom'
import { menu } from '../../constans'
import { DishesCatalogue } from './DishesCatalogue'

export const Menu = () => {
  
  return (
    <div className='Menu'>
        <div className='MenuHeader'>
          <span>Takeout is available </span>
          <span>Please, choose our dishes:</span>
        </div>
        <div className='MenuContainer'>
          <MenuNavbar />
          <div className='MenuMain'>
            <div className='MenuInner'>
              <Routes>
                <Route exact path='/'
                element={<DishesCatalogue menu={menu}/>} />
                <Route exact path='/soups'
                element={<DishesCatalogue menu={menu}/>} />
                <Route exact path='/pastas'
                element={<DishesCatalogue menu={menu}/>} />
                <Route exact path='/pizzas'
                element={<DishesCatalogue menu={menu}/>} />
                <Route exact path='/salads'
                element={<DishesCatalogue menu={menu}/>} />
                <Route exact path='/hot-dishes'
                element={<DishesCatalogue menu={menu}/>} />
              </Routes>
            </div>
          </div>
        </div>
    </div>
  )
}
