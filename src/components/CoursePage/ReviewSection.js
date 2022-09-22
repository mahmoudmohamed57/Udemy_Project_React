import React from 'react';
import Review from './Review';
import { useState } from 'react';

function ReviewSection(props) {
  const [more, setMore] = useState(false);
  const [starsCount, setStarsCount] = useState('all');
  console.log({starsCount})
  const reviews = props.data.reviews
    .slice(0, more ? props.data.reviews.length : Math.min(3, props.data.reviews.length))
    .map((obj) => {
      if (starsCount === 'all' || starsCount == Math.round(+obj.rate)) {
        return <Review review={obj} key={Math.random()}></Review>;
      }
    });

  return (
    <div className='review m-5' id='review'>
      <h4>Reviews</h4>
      <form className='d-flex'>
        <input className='w-75 m-1 p-2' placeholder='Search reviews' type='text'></input>
        <select
          className='m-1 p-2'
          name='cars'
          id='cars'
          onChange={(e) => setStarsCount(e.target.value)}
        >
          <option value='all'>All ratings</option>
          <option value='5'>Five stars</option>
          <option value='4'>Four stars</option>
          <option value='3'>Three stars</option>
          <option value='2'>Two stars</option>
          <option value='1'>One star</option>
        </select>
      </form>
      <div>{reviews}</div>
      <button className='my-1 p-2 text-center' onClick={() => setMore((x) => !x)}>
        {more ? 'Show less' : 'Show more'}
      </button>
    </div>
  );
}

export default ReviewSection;
