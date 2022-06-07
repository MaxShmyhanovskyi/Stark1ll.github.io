import React from 'react';
import { useMatch } from 'react-router-dom';
import './DishesCatalogue.css';
import ShoppingContext from '../../../context/ShoppingContext';

export const DishesCatalogue = () => {
  let matchMenu = useMatch('/menu/');
  let matchCategory = useMatch('/menu/:category');

  const renderAllMenu = (context) => 
    Object.values(context.products).map((product,index) => (
        <div className='ProductCard' key={index}>
            <div className='ProductTitle'>{product.title}</div>
            <img src={product.photo} alt={product.title}></img>
            <div className='ProductDescription'>{product.description}</div>
            <button className='ProductPrice' onClick={context.addProductToCart.bind(this, product)}>{product.price} UAH</button>
        </div>
      )
    );


  const renderDishCards = (context) => 
    Object.values(context.products).map((product,index) => {
      return (product.category === matchCategory.params.category) ? (
        <div className='ProductCard' key={product.id}>
            <div className='ProductTitle'>{product.title}</div>
            <img src={product.photo} alt={product.title}></img>
            <div className='ProductDescription'>{product.description}</div>
            <button className='ProductPrice' onClick={context.addProductToCart.bind(this, product)}>{product.price} UAH</button>
        </div>
      ) : null
    }
);


  return (
    <ShoppingContext.Consumer>
      {context => (
        <div className='ProductPage'>
          {(matchMenu) ? renderAllMenu(context) :  renderDishCards(context)}
        </div>
      )}
    </ShoppingContext.Consumer>
  )
}

