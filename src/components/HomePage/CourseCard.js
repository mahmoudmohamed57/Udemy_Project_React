import React from 'react';
import Rate from '../CourseStars/Rate';
import { Link } from 'react-router-dom';
import CourseCardHover from './CourseCardHover';

/*
Props are waiting for 
1 - The image of the course, 
2 - The title of the course, 
3 - The name of the instructor of the course, 
4 - The rating of the course, 
5 - And the price of the course.
All of these props of the functional component
*/

function CourseCard(props) {
  let instructors = props.course.instructor[0].name;
  for (let i = 1; i < props.course.instructor.length; i++) {
    instructors += ', ' + props.course.instructor[i].name;
  }
  return (
    <div className='course-card col-12 col-sm-6 col-md-4 col-lg-3'>
      <CourseCardHover course={props.course} />
      <Link
        to={`${props.course.id}/singlepage`}
        className='text-decoration-none text-dark'
      >
        <div className='mb-3'>
          <img
            className='course-image border border-2 w-100'
            src={props.course.image}
            alt='img'
          ></img>
          <h6 className='course-title m-0'>{props.course.title}</h6>
          <p className='course-author m-0'>{instructors}</p>
          <span>{props.course.rate}</span>
          <span className='p-1'></span>
          <Rate rate={props.course.rate}></Rate>
          <h5 className='course-price'>E£{props.course.price}</h5>
        </div>
      </Link>
    </div>
  );
}

export default CourseCard;
