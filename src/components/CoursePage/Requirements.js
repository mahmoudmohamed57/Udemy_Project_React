import React from 'react';
import RequirementItem from './RequirementItem';

function Requirements(props) {
  const items = props.data.requirements.map((obj) => (
    <RequirementItem item={obj} key={Math.random()}></RequirementItem>
  ));
  return (
    <div className='requirements m-5'>
      <h4>Requirements</h4>
      <ol>{items}</ol>
    </div>
  );
}

export default Requirements;
