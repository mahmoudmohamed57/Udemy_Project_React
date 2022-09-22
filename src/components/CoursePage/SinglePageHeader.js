import React from 'react';
import Rate from '../CourseStars/Rate';
import CreatedBy from './CreatBy';
import { AiFillExclamationCircle } from 'react-icons/ai';

function SinglePageHeader(props) {
  const Instructors = props.data.instructor.map((obj) => (
    <CreatedBy instructor={obj} key={Math.random()}></CreatedBy>
  ));
  return (
    <div className='header text-white bg-dark'>
      <div className='p-5'>
        <div className='develop d-flex pb-2'>
          <p>Development</p>
          <span className='mb-2 mx-2'>{'>'}</span>
          <p>Programming Languages</p>
          <span className='mb-2 mx-2'>{'>'}</span>
          <p>{props.data.topic}</p>
        </div>
        <h2 className='title'>{props.data.title}</h2>
        <h6 className='sub-title'>{props.data.Introduction}</h6>
        <div className='rate d-flex'>
          <p>{parseFloat(props.data.rate).toFixed(1)}</p>
          <div className='mx-2'>
            <Rate rate={parseFloat(props.data.rate).toFixed(1)}></Rate>
          </div>
          <p>
            <a href='#student-feedback'>({props.data.ratingCount} ratings)</a>{' '}
            {props.data.enrollCount}
            {' students'}
          </p>
        </div>
        <div>Created by {Instructors}</div>
        <div className='d-flex flex-wrap'>
          <div className='last-update'>
            <AiFillExclamationCircle className='fs-5'></AiFillExclamationCircle>
            <span className='text m-3'>
              Last updated {props.data.lastUpdate}
            </span>
          </div>
          <div className='last-update'>
            <i className='fa-solid fa-globe'></i>
            <span className='text m-3'>English</span>
          </div>
          <div className='last-update'>
            <i className='fa-solid fa-closed-captioning'></i>
            <span className='text m-3'>English [Auto]</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePageHeader;
