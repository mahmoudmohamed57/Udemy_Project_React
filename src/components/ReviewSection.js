import React from 'react';
import Review from './Review';
import { useState } from 'react';

function ReviewSection(props) {
  const [more, setMore] = useState(false);
  const reviews = props.data.reviews
    .slice(
      0,
      more ? props.data.reviews.length : Math.min(3, props.data.reviews.length)
    )
    .map((obj) => <Review review={obj} key={Math.random()}></Review>);

  return (
    <div className='review m-5' id='review'>
      <h4>Reviews</h4>
      <form className='d-flex'>
        <input
          className='w-75 m-1 p-2'
          placeholder='Search reviews'
          type='text'
        ></input>
        <select className='m-1 p-2' name='cars' id='cars'>
          <option value='All ratings'>All ratings</option>
          <option value='Five stars'>Five stars</option>
          <option value='Four stars'>Four stars</option>
          <option value='Three stars'>Three stars</option>
          <option value='Two stars'>Two stars</option>
          <option value='One star'>One star</option>
        </select>
      </form>
      <div>{reviews}</div>
      <button
        className='my-1 p-2 text-center'
        onClick={() => setMore((x) => !x)}
      >
        {more ? 'Show less' : 'Show more'}
      </button>
    </div>
  );
}

export default ReviewSection;
