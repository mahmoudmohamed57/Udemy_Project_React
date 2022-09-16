import React from 'react';

function List() {
  return (
    <div>
      <div className='list pt-3'>
        <a href='#overview' className='a'>
          Overview
        </a>
        <a href='#content' className='a'>
          Curriculum
        </a>
        <a href='#instructors' className='a'>
          Instructrs
        </a>
        <a href='#review' className='a'>
          Reviews
        </a>
      </div>
      <hr />
    </div>
  );
}

export default List;
