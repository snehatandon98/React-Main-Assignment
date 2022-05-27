import React from 'react'
import Home from './Home'
import '../App.css'

const Cart = (props) =>{
  const cart=props.cart
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const course = cart[i];
    total = total + Number(course.actual_price);
  }
const grandTotal=total
  
return (
    <div className='container'>
      <div className='cart'>
      <h4 >Your Cart Details</h4> <hr/>
      <h6>Items Ordered: {props.cart.length}</h6>
      <h6>Product Price: ${total}</h6>
      <h5>Total Price: ${grandTotal}</h5>
      </div>
    </div>
  );
}

export default Cart