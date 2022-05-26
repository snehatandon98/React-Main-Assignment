import React from 'react';
import '../App.css'
 
const Course = (props) => {
    const {tags, details, description, discounted_price, actual_price, author, title, id} = props.course;   
    return (
        <div className="container">
            <div className="course-card">
            <ul className="course-detail">  
            <li className='course-title'>{title}</li> 
            <li className='course-author'>{author}</li> 
            <li className='course-price'>{actual_price}</li> 
            <li> <button onClick={() => props.addCourse(props.course)}>ADD TO CART</button> </li>
            </ul>
            </div>
        </div>
    );
};
 
export default Course;