import React from 'react'
import Logo from '../images/Logo-2.png'
import Profile from '../images/noun_profile_2068277.svg'
import Shopping_cart from '../images/shopping-cart.svg'
import {NavLink} from 'react-router-dom'
import '../App.css'

function Nav() {
  return (
      <nav >
          <NavLink to='/'>
          <h3><img src={Logo} alt="Logo" /></h3>
          </NavLink>
          <ul className='nav-links'>
              <NavLink className='linkstyle' to='/courses'>
              <li className='nav-headings'>COURSES</li>
              </NavLink>
              <NavLink className='linkstyle' to='/myWishlist'>
              <li className='nav-headings'>MY WISHLIST</li>
              </NavLink>
              <NavLink to='/cartDetails'>
              <li className='nav-headings'><img src={Shopping_cart} alt="Shopping Cart" /></li>
              </NavLink>
              <NavLink to='/profile'>
              <li className='nav-headings'><img src={Profile} alt="Profile" /></li>
              </NavLink>
              
          </ul>
      </nav>
  );
}

export default Nav;