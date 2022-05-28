import React from 'react'
import Home from './Home'
import '../App.css'

const Cart = (props) =>{
  const cart=props.cart
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const course = cart[i];
    if (course.discounted_price){
      total = total + Number(course.discounted_price);
    }
    else{
      total = total + Number(course.actual_price);
    }
    
  }
const grandTotal=total
  
return (
    <div className='container'>
      <div className='cart'>
      <div className='scrollCourse'>
      <h4 >Your Cart Details</h4> <hr/>
      {
        cart.map((c, sIndex) => {
          return <p> <li className='tile'> {c.title} </li><li className='price'>Rs.{c.actual_price}/- <hr/></li></p>;
          })
      }
      <h5>Total Price: Rs.{grandTotal}/-</h5>
      </div>
      </div>
    </div>
  );
}

export default Cart