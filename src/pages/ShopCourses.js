import React,{useState, useEffect} from 'react'
import Home from './Home'
import Course from '../components/Course';
import CourseData from '../coursesMockResponse.json'
import Cart from './ShoppingCart'
import '../App.css'

function ShopCourses() {
  
  const [course, setCourse] = useState([]);
  const [cart, setCart] = useState([]);
  
  
  useEffect(() => {
    setCourse(CourseData);
}, []);
  const addCourse = (course) => {
    const newCart = [...cart, course]
    setCart(newCart);
  }

  return (
    <div>
      <Home/>
      <div className='main'>
        <div className='pageBanner'> Discover Latest Courses on React</div>
        <h4>All Courses</h4>
        <div>
          {
            course.map(pd => <Course course={pd} addCourse={addCourse}></Course>)
          }
        </div>
        <div>
          <Cart cart={cart}></Cart>
        </div>
        </div>
      </div>
  );
}

export default ShopCourses;