import React, { useContext } from 'react'
import ShoppingContext from '../../context/ShoppingContext'
import './ShoppingCart.css'
import { Link } from 'react-router-dom'
import { FaSadCry } from 'react-icons/fa'
import { UserAuth } from '../../context/AuthContext'
import axios from '../../axios/axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


export const ShoppingCart = (props) => {
    const {user} = UserAuth();
    const context = useContext(ShoppingContext);
    const navigate = useNavigate();
    const cartItemNumber = context.cart.reduce((count, currentItem) => count + currentItem.quantity, 0);

    const getCartPriceValue = () => 
      context.cart.reduce((summary, currentProduct) => summary += currentProduct.price, 0);

    const getOrderProducts = () => {
      const productsInfo = context.cart.map(product => product = product.title + `.` + ` ${product.quantity} pcs`).filter(Boolean);
      
      productsInfo.push(` Total Amount: ${getCartPriceValue()} UAH`, `Was placed on: ${new Date().toISOString().slice(0, 10)}`);
      
      return productsInfo;
    };

    const handleOrderSubmint = async () => {
      try {
        await axios.post(`/users/${user.uid}/orders.json`, getOrderProducts())
        toast.success('Your Order was placed!');
        navigate('/');
        localStorage.clear(getOrderProducts());
        setTimeout(() => {
          window.location.reload();
        }, '2000');
        
      } catch (error) {
        toast.error('ERROR!')
        console.log(error)
      }
    }

  return (
    <div className='ShoppingCart'>
      
      <div className='ShoppingCartContainer'>
        <div className='ShoppingCartHeader'>
          {
            context.cart.length <= 0 ? 
            <div className='EmptyShoppingCart'>
              <FaSadCry className='NoItemsEmoji'/>
              <div className='CardText'>Your Shopping cart is empty!</div> 
              <Link to='/menu'>Choose our delicious food!</Link>
            </div>
            :
            <span> Your Order details: </span>
          }
        </div>

        <div className='ShoppingCartInner'>
          <div className='ShoppingCartProducts'>
            {
            context.cart.map(product => (
                <div className='CartProductCard' key={product.id}>
                  <div className='ProductTitle'>{product.title}</div>
                  <img src={product.photo} alt={product.title}></img>
                  <div className='ProductDescription'>{product.description}</div>
                  <div>Quantitiy: {product.quantity}</div>
                  <button
                    className='ProductPrice'
                    onClick={context.removeProductFromCart.bind(
                      this,
                      product
                    )}
                  >
                    Remove
                  </button>
                </div>
              ))
            }

          </div>
            {
            context.cart.length > 0
            ? 
            <div className='OrderDetails'>
              <div>
                <span>Food: {cartItemNumber} pcs</span>
                <br/>
                <span>Total price: {getCartPriceValue()} UAH</span>
              </div>
              <button className='BookTableButton bn21' onClick={handleOrderSubmint}>Create Order!</button>
            </div>
            : 
            false
          }
          </div>
      </div>
    </div>
  )
}
