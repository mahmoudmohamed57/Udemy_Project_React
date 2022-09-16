import React from 'react';
import HomePageItemOverview from './HomePageItemOverview';

function HomePageOverview(props) {
  const items = props.response.overview.map((obj) => (
    <HomePageItemOverview item={obj} key={Math.random()}></HomePageItemOverview>
  ));
  return (
    <div className='overview m-5 w-50'>
      <div className='mx-5 p-3  border border-2'>
        <h4>What you'll learn</h4>
        <div className='row'>{items}</div>
      </div>
    </div>
  );
}

export default HomePageOverview;
