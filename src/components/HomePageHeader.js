import React from 'react';

function HomePageHeader() {
  return (
    <div className='udemy-header'>
      <div className='text'>
        <h1>Natural Wonders</h1>
        <p>
          World's Most Beautiful Natural Wonders — PhotosWorld's Most Beautiful
        </p>
      </div>
      <img
        className='image'
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4NfV-NxO5Cxc6OLhTw86jXx1hMHWrQQseQQ&usqp=CAU'
        alt='natural photo'
      />
    </div>
  );
}

export default HomePageHeader;
