import React from 'react'
import { Route,useMatch} from 'react-router-dom';
import './DishesCatalogue.css'

export const DishesCatalogue = ({dishes}) => {
  let match = useMatch('/menu/');


  const renderAllMenu = () => 
    Object.values(dishes).map((dishesCategories) => 
     Object.values(dishesCategories).map((dish,index) => 
        (
          <div className='DishCard' key={index}>
              <div className='DishTitle'>{dish.title}</div>
              <img src={dish.photo} alt={dish.title}></img>
              <div className='DishDescription'>{dish.description}</div>
              <button className='DishPrice'>{dish.price}</button>
          </div>
        )
      )
    );


  const renderDishCards = () => {
    return dishes.map((dish,index) => {
      return (
        <div className='DishCard' key={index}>
            <div className='DishTitle'>{dish.title}</div>
            <img src={dish.photo} alt={dish.title}></img>
            <div className='DishDescription'>{dish.description}</div>
            <button className='DishPrice'>{dish.price}</button>
        </div>
      )
    })
  }


  return (   
      <div className={(match) ? 'AllMenuPage' :'DishPage'}>
        {(match) ? renderAllMenu() :  renderDishCards()}
      </div>
  )
}
