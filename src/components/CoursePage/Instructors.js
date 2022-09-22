import React from 'react';
import Instructor from './Instructor';

function Instructors(props) {
  const Instructors = props.data.instructor.map((obj) => (
    <Instructor instructor={obj} key={Math.random()}></Instructor>
  ));
  return (
    <div className='instructors m-5' id='instructors'>
      <h4>Instructors</h4>
      {Instructors}
    </div>
  );
}

export default Instructors;
