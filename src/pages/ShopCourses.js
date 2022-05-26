import React,{useState, useEffect} from 'react'
import Home from './Home'
import Course from '../components/Course';
import CourseData from '../coursesMockResponse.json'
import Cart from './ShoppingCart'

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
      <div>
        {
          course.map(pd => <Course course={pd} addCourse={addCourse}></Course>)
       }
      </div>

      <div>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
}

export default ShopCourses;