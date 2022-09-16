import React from 'react';

function SinglePageItemOverview(props) {
  return (
    <div className='col-12 col-md-6'>
      <i className='fa-solid fa-check'></i>
      <span className='item mx-2'>
        <small>{props.item}</small>
      </span>
    </div>
  );
}

export default SinglePageItemOverview;
