import React, { useContext, useEffect} from 'react'
import ShoppingContext from '../../context/ShoppingContext'
import './ShoppingCart.css'

export const ShoppingCart = () => {
    const context = useContext(ShoppingContext);

    // useEffect(() => {
    //   console.log(context);
    // }, []);

  return (
    <div className='ShoppingCart'>
      <div className='ShoppingCartContainer'>
        <div className='ShoppingCartHeader'>
          {context.cart.length <= 0 ? 
          <span className='ShoppingCartTitle'>No Item in the Cart!</span> : 
          <span className='ShoppingCartTitle'> Your Order details: </span>}
        </div>
        <div className='ShoppingCartInner'>
          {context.cart.map(product => (
              <div className='ProductCard' key={product.id}>
                <div className='ProductTitle'>{product.title}</div>
                <img src={product.photo} alt={product.title}></img>
                <div className='ProductDescription'>{product.description}</div>
                {product.quantity}
                <button
                  className='ProductPrice'
                  onClick={context.removeProductFromCart.bind(
                    this,
                    product.id
                  )}
                >
                  Remove from Cart
                </button>
              </div>
          ))}
        </div>
      </div>
    </div>
  )
}
