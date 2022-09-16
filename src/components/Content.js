import React from 'react';

function Content(props) {
  return (
    <div className='d-flex'>
      <i className='fa-solid fa-circle-play py-1'></i>
      <h5 className='px-3'>{props.item}</h5>
    </div>
  );
}

export default Content;
