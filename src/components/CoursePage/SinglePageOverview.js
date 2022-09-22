import React from 'react';
import SinglePageItemOverview from './SinglePageItemOverview';

function SinglePageOverview(props) {
  const items = props.data.overview.map((obj) => (
    <SinglePageItemOverview
      item={obj}
      key={Math.random()}
    ></SinglePageItemOverview>
  ));

  return (
    <div className='m-5' id='overview'>
      <div className='overview border border-2 p-2'>
        <h4>What you'll learn</h4>
        <div className='row'>{items}</div>
      </div>
    </div>
  );
}

export default SinglePageOverview;
