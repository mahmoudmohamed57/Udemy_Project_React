import React from 'react';

function CreatedBy(props) {
  let str = '#' + props.instructor.name;
  return (
    <a href={str} className='text-primary'>
      {props.instructor.name + ' '}
    </a>
  );
}

export default CreatedBy;
