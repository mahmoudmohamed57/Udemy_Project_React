import React, { useContext } from 'react';
import CourseCard from './CourseCard';
import { context } from '../App';

/*
Props are waiting for 
1 - The title of section courses
2 - The description of section courses
3 - Button to explore courses
4 - Courses to be rendered
All of these props of the functional component
*/

function CardsSection() {
  const { data, loading } = useContext(context);
  return (
    <div>
      <div className='mx-4'>
        <h1 className='title'>A broad selection of courses</h1>
        <h5 className='sub-title text-secondary'>
          Choose from 204,000 online video courses with new additions published
          every month
        </h5>
        <ul className='filter-list d-flex flex-wrap p-0'>
          <li className='px-2 h6'>Python</li>
          <li className='px-2 h6'>Excel </li>
          <li className='px-2 h6'>Web Development</li>
          <li className='px-2 h6'>Javascript</li>
          <li className='px-2 h6'>Data Science</li>
          <li className='px-2 h6'>AWS Certification</li>
          <li className='px-2 h6'>Drawing</li>
        </ul>
      </div>
      {loading ? (
        <div className='d-flex justify-content-center'>
          <div className='spinner-border' role='status'>
            <span className='sr-only'>Loading...</span>
          </div>
        </div>
      ) : (
        data &&
        data[0] &&
        data[0].title &&
        data[0].description &&
        data[0].courses && (
          <div className='cards-section border border-2 m-4 p-4'>
            <h3>{data[0].title}</h3>
            <p>{data[0].description}</p>
            <button className='mb-3'>Explore Python</button>
            {Array.isArray(data[0].courses) && (
              <div className='row'>
                {data[0].courses.map((obj) => (
                  <CourseCard course={obj} key={obj.id}></CourseCard>
                ))}
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
}

export default CardsSection;
