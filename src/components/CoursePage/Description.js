import React from 'react';
import DescriptionItem from './DescriptionItem';
import { useState } from 'react';

function Description(props) {
  const [more, setMore] = useState(false);
  const items = props.data.description
    .slice(
      0,
      more
        ? props.data.description.length
        : Math.min(3, props.data.description.length)
    )
    .map((obj) => (
      <DescriptionItem item={obj} key={Math.random()}></DescriptionItem>
    ));
  return (
    <div className='description mx-5'>
      <h4>Description</h4>
      <div>{items}</div>
      <button
        className='my-1 p-2 text-center'
        onClick={() => setMore((x) => !x)}
      >
        {more ? 'Show less' : 'Show more'}
      </button>
    </div>
  );
}

export default Description;
