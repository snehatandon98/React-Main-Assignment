import React,{useState, useEffect} from 'react'
import Home from './Home'
import Course from '../components/Course';
import CourseData from '../coursesMockResponse.json'
import Cart from './ShoppingCart'
import '../App.css'
import CartDetails from './CartDetails';
import { Link } from 'react-router-dom';

function ShopCourses() {
  
  const [course, setCourse] = useState([]);
  const [cart, setCart] = useState([]);
  const [query, setQuery] = useState("");
  const [cartCourse, setCartCourse]=useState([]);
  const sortArray = type => {
    const types = {
      0:'0',
      1:'1',
    };
    let sorted=[]
    const sortProperty = types[type];
    console.log(sortProperty)
    if (sortProperty === '0'){
      sorted = [...course].sort((a, b) => a['actual_price'] - b['actual_price']);
      setCourse(sorted);
    }
    else if  (sortProperty === '1'){
      sorted = [...course].sort((a, b) => b['actual_price'] - a['actual_price']);
      setCourse(sorted);
    }
    else{
      setCourse(CourseData)
    }
    console.log(sorted);
  }
  
  
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
        <div className='sort'>
        <li className='all-courses'>All Courses</li>&nbsp;
        <li className='sort-button'>
        <select  onChange={(e) => sortArray(e.target.value)}>
          <option value="-1">Course Price</option>
          <option value="0">Low to High</option>
          <option value="1">High to Low</option>
        </select>
        </li>
        <li>
          <input className='search-bar' placeholder='Search here' onChange={event => setQuery(event.target.value)}/>
        </li>
        </div>
        <div className='scrollCourse'>
        <div>
          {
            course.filter(pd => {
              if (query === '')
              {
                return pd;
              }
              else if (pd.title.toLowerCase().includes(query.toLowerCase())) {
                return pd;
              }
              else if ((pd.author.toLowerCase().includes(query.toLowerCase()))){
                return pd;
              }
             }).map(pd => <Course course={pd} addCourse={addCourse} key={pd.id} ></Course>)
          }
        </div>
        </div>
        <div>
          <Cart cart={cart}/>
        </div>
        {
          cart.map(pd => <CartDetails cart = {pd} ></CartDetails>) 
          
        }
        </div>
      </div>
  );
}

export default ShopCourses;