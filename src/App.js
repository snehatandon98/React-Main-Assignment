import React from 'react'
import Home from './pages/Home';
import ShopCourses from './pages/ShopCourses'
import MyWishlist from './pages/MyWishlist'
import Profile from './pages/Profile'
import Cart from './pages/CartDetails'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<ShopCourses/>}/>
          <Route path='/courses' element={<ShopCourses/>}/>
          <Route path='/myWishlist' element={<MyWishlist/>}/>
          <Route path='/cartDetails' element={<Cart/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
