import React from 'react';

function HomePageItemOverview(props) {
  return (
    <div>
      <i className='fa-solid fa-check'></i>
      <span className='item mx-3'>
        <small>{props.item}</small>
      </span>
    </div>
  );
}

export default HomePageItemOverview;
