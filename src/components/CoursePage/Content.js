import React from 'react';

function Content(props) {
  return (
    <div className='d-flex justify-content-between'>
      <div className='d-flex'>
        <i className='fa-solid fa-circle-play py-1'></i>
        <h5 className='px-3'>{props.item}</h5>
      </div>
      <div>
        <div className='d-flex'>
          <a href=''>preview</a>
          <p className='px-2'>
            0{Math.floor(Math.random() * 10)}:{Math.floor(Math.random() * 10)}
            {Math.floor(Math.random() * 10)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Content;
