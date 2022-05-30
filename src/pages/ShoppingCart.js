import React from 'react'
import { useNavigate } from "react-router-dom";
import Home from './Home'
import '../App.css'

const Cart = (props) =>{
  const cart=props.cart
  let total = 0;
  let real_price=''
  for (let i = 0; i < cart?.length; i++) {
    const course = cart[i];
    if (course?.discounted_price){
      total = total + Number(course?.discounted_price);
    }
    else{
      total = total + Number(course?.actual_price);
    } 
  }
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = '/cartDetails'; 
    navigate(path);
  }
  const grandTotal=total
return (
    <div className='container'>
      <div className='cart'>
      <div className='scrollCourse'>
      <h4>Your Cart Details</h4> <hr/>
      {
        cart?.map((c, sIndex) => {
          real_price=""
          if(c.discounted_price){
            real_price=c.discounted_price
          }
          else{
            real_price=c.actual_price
          }
          return <p> <li className='tile'> {c.title} </li><li className='price'>Rs.{real_price}/- <hr/></li></p>;
          })
      }
      <h5>Total Price: Rs.{grandTotal}/-</h5>
      <button className='button' onClick={routeChange}>Checkout</button>
      </div>
      </div>
    </div>
  );
}

export default Cart