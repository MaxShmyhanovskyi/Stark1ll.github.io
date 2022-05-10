import React from 'react'
import './Menu.css'
import { ContainerTop } from '../Containers/ContainerTop/ContainerTop'
import { MenuNavbar } from '../../UI/MenuNavbar/MenuNavbar'
import { Routes,Route } from 'react-router-dom'
import { menu } from '../../constans'
import { DishesCatalogue } from './DishesCatalogue'

export const Menu = () => {
  
  const soups = Object.values(menu.soups);
  const pastas = Object.values(menu.pastas);
  const pizzas = Object.values(menu.pizzas);
  const salads = Object.values(menu.salads);
  const hotDishes = Object.values(menu.hotDishes);

  return (
    <div className='Menu'>
        <ContainerTop />
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
                element={<DishesCatalogue dishes={menu}/>} />
                <Route exact path='/soups'
                element={<DishesCatalogue dishes={soups}/>} />
                <Route exact path='/pastas'
                element={<DishesCatalogue dishes={pastas}/>} />
                <Route exact path='/pizzas'
                element={<DishesCatalogue dishes={pizzas}/>} />
                <Route exact path='/salads'
                element={<DishesCatalogue dishes={salads}/>} />
                <Route exact path='/hot-dishes'
                element={<DishesCatalogue dishes={hotDishes}/>} />
              </Routes>
            </div>
          </div>
        </div>
    </div>
  )
}
