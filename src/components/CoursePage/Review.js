import React from 'react';
import Rate from '../CourseStars/Rate';

function Review(props) {
  var name = props.review.name,
    nikName = '';
  for (let i = 0; i < name.length; i++) {
    if (name[i] === name[i].toUpperCase() && name[i] !== name[i].toLowerCase())
      nikName += name[i];
  }

  return (
    <div>
      <div className='d-flex'>
        <div className='border border-dark rounded-circle m-3 p-3 text-light bg-dark w-auto h-25'>
          {nikName}
        </div>
        <div className='px-4 m-3'>
          <h6>{name}</h6>
          <Rate rate={props.review.rate}></Rate>
          <p>{props.review.content}</p>
          <p>
            <small>Was this review helpful?</small>
          </p>
          <div className='d-flex'>
            <div className='border border-dark border-1 rounded-circle p-2 m-1'>
              <i className='fa-regular fa-thumbs-up'></i>
            </div>
            <div className='border border-dark border-1 rounded-circle p-2 m-1'>
              <i className='fa-regular fa-thumbs-down'></i>
            </div>
            <span className='p-2 m-1'>Report</span>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Review;
