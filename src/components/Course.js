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
                    <td className='course-discount'>{discounted_price}</td>
                    <td className='course-wishlist'>< input type='checkbox' id='wishlist-button'/></td>
                    <td> <button className='button' onClick={() => props.addCourse(props.course)}>ADD TO CART</button> </td>
                </tr>
                <tr ><td>
                    {
                        tags.map((tag, sIndex) => {
                            return <td className='tag'> {tag} </td>;
                          })
                    }
                    </td>
                </tr>
            </tbody>
            </table>
            </div>
        </div>
    );
};
 
export default Course;