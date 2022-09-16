import React from 'react';

function Instructor(props) {
  return (
    <div id={props.instructor.name}>
      <h6>{props.instructor.name}</h6>
      <p>{props.instructor.Intro}</p>
      <div className='d-flex'>
        <img
          className='rounded-circle w-25'
          src={props.instructor.Image}
          alt='Nature'
        ></img>
        <div className='px-4 pt-3'>
          <div className='d-flex'>
            <i className='fa-solid fa-star px-1 mt-1'></i>
            <p className='px-1'>
              {props.instructor.Rating}
              {' Instructor Rating'}
            </p>
          </div>
          <div className='d-flex'>
            <i className='fa-solid fa-medal px-1 mt-1'></i>
            <p className='px-1'>
              {props.instructor.reviewsNumber}
              {' Reviews'}
            </p>
          </div>
          <div className='d-flex'>
            <i className='fa-solid fa-user-group px-1 mt-1'></i>
            <p className='px-1'>
              {props.instructor.studentsNumber}
              {' Students'}
            </p>
          </div>
          <div className='d-flex'>
            <i className='fa-solid fa-circle-play px-1 mt-1'></i>
            <p className='px-1'>
              {props.instructor.coursesNumber}
              {' Courses'}
            </p>
          </div>
        </div>
      </div>
      <p>{props.instructor.description}</p>
    </div>
  );
}

export default Instructor;
