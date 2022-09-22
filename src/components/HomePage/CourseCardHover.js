import React from 'react';
import { Link } from 'react-router-dom';
import HomePageItemOverview from './HomePageItemOverview';

function CourseCardHover({ course }) {
  const items = course.overview.map((obj) => (
    <HomePageItemOverview item={obj} key={Math.random()}></HomePageItemOverview>
  ));
  return (
    <div className='course-hover'>
      <Link
        to={`${course.id}/singlepage`}
        className='text-decoration-none text-dark'
      >
        <h5 className='title'>hello World: {course.title}</h5>
      </Link>
      <p className='text-success m-0 p-0'>Updated September 2022</p>
      <div className='d-flex'>
        <p className='my-2'>
          {course.totalLength}
          {' total hours'}
        </p>
        <h4 className='px-1'>.</h4>
        <p className='my-2'>{'sections'}</p>
        <h4 className='px-1'>.</h4>
        <p className='my-2'>{'lectures'}</p>
      </div>
      <div>{items}</div>
      <div>
        <button className='bg-info w-75 p-2'>Add to cart</button>
        <i className='fa-solid fa-heart border border-dark rounded-circle mx-2 p-3'></i>
      </div>
    </div>
  );
}

export default CourseCardHover;
