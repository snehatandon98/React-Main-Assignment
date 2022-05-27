import React from 'react';
import '../App.css'
 
const Course = (props) => {
    const {tags, details, description, discounted_price, actual_price, author, title, id} = props.course;   
    
    return (
        <div className="container">
            <div className="course-card">
            <table className="table table-stripped">  
            <tbody>
                <tr>
                    <td className='course-title'>{title}</td> 
                    <td className='course-author'>{author}</td> 
                    <td className='course-price'>Rs. {actual_price}</td> 
                    <td> <button className='button' onClick={() => props.addCourse(props.course)}>ADD TO CART</button> </td>
                </tr>
                <tr className='button'>{tags}</tr>
            </tbody>
            </table>
            </div>
        </div>
    );
};
 
export default Course;