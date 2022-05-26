import React from 'react';
import { useMatch } from 'react-router-dom';
import './DishesCatalogue.css';

export const DishesCatalogue = ({menu}) => {
  let matchMenu = useMatch('/menu/');
  let matchCategory = useMatch('/menu/:category');

  const renderAllMenu = () => 
    Object.values(menu).map((dish,index) => (
        <div className='DishCard' key={index}>
            <div className='DishTitle'>{dish.title}</div>
            <img src={dish.photo} alt={dish.title}></img>
            <div className='DishDescription'>{dish.description}</div>
            <button className='DishPrice'>{dish.price}</button>
        </div>
      )
    );


  const renderDishCards = () => 
    Object.values(menu).map((dish,index) => {
      return (dish.category === matchCategory.params.category) ? (
        <div className='DishCard' key={index}>
            <div className='DishTitle'>{dish.title}</div>
            <img src={dish.photo} alt={dish.title}></img>
            <div className='DishDescription'>{dish.description}</div>
            <button className='DishPrice'>{dish.price}</button>
        </div>
      ) : null
    }
);


  return (   
      <div className='DishPage'>
        {(matchMenu) ? renderAllMenu() :  renderDishCards()}
        {/* <button onClick={fetchMenuData()}>Fetch Data</button> */}
      </div>
  )
}

