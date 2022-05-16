import { Pagination } from '@mui/material';
import React from 'react';
import { parsePath, useMatch} from 'react-router-dom';
import './DishesCatalogue.css';
import { useState, useEffect } from 'react';
import axios from '../../../axios/axios';

export const DishesCatalogue = ({menu}) => {
  let matchMenu = useMatch('/menu/');
  let matchCategory = useMatch('/menu/:category');

  const [dishesCount,setDishesCount] = useState(0);
  const [page,setPage] = useState(1);
  const [currentDishes, setCurrentDishes] = useState({
  }) 
  

  //  const fetchMenuData = () => {
  //   try {
  //     axios.get('/menu/-N1waOOF-FVwIFh0Ap1b.json').then(response => {
  //       if (dishesCount === 4) {
  //         setDishesCount(0);
  //         setPage(prevPage => prevPage+1);
  //         setCurrentDishes({});
  //       } else {

  //         Object.values(response.data).forEach((dishesType,index) => {
  //             // setCurrentDishes(prevState => prevState + dishesType)    Too many re-renders
  //         })
  //       }
  //       console.log(Object.values(response.data))
  //     })
  //   }
  //   catch (error) {
  //       console.log(error)
  //     }
  // }

  const renderAllMenu = () => 
      Object.values(menu).map((dish,index) => 
        { 
          return (
            <div className='DishCard' key={index}>
                <div className='DishTitle'>{dish.title}</div>
                <img src={dish.photo} alt={dish.title}></img>
                <div className='DishDescription'>{dish.description}</div>
                <button className='DishPrice'>{dish.price}</button>
            </div>
          )
        }
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
      <div className={(matchMenu) ? 'AllMenuPage' :'DishPage'}>
        {(matchMenu) ? renderAllMenu() :  renderDishCards()}
        {/* <button onClick={fetchMenuData()}>Fetch Data</button> */}
        <Pagination count={3}/>
      </div>
  )
}
