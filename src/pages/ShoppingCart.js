import React from 'react'
import Home from './Home'
import '../App.css'

const Cart = (props) =>{
  const cart=props.cart
  let total = 0;
const grandTotal=total
  
return (
    <div>
      <Home/>
      <div className='container'>
      <h4 >Your Cart Details</h4> <hr/>
      <h6>Items Ordered: {cart}</h6>
      <h6>Product Price: ${total}</h6>
      <h5>Total Price: ${grandTotal}</h5>
      </div>
    </div>
  );
}

export default Cart