import React from 'react';

function SinglePageItemOverview(props) {
  return (
    <div className='col-12 col-md-6'>
      <i className='fa-solid fa-check'></i>
      <span className='item px-2'>{props.item}</span>
    </div>
  );
}

export default SinglePageItemOverview;
