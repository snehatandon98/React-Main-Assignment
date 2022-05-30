import React from 'react'
import Home from './Home'
import Cart from './ShoppingCart'
import Course from '../components/Course';

const CartDetails= (props) =>{
  const cart = props
  console.log(cart)
  // function CartDetails(){
  return(
    <div className='container'>
      <h4>{
        cart.title
        }</h4>
    
      
    </div>
    
  );
}
export default CartDetails;