import React from 'react';
import CourseContent from './CourseContent';
import { useState } from 'react';

function ContentSection(props) {
  const [more, setMore] = useState(false);
  const [isExpand, setIsExpand] = useState(false);
  const content = props.data.content
    .slice(
      0,
      more ? props.data.content.length : Math.min(5, props.data.content.length)
    )
    .map((obj, idx) => (
      <CourseContent
        index={idx}
        content={obj}
        isExpand={isExpand}
        key={Math.random()}
      ></CourseContent>
    ));

  return (
    <div className='content px-5' id='content'>
      <h4>Course content</h4>
      <div className='d-flex justify-content-between'>
        <div className='d-flex'>
          <p className='my-2 px-1'>
            {props.data.sectionsCount}
            {'  sections '}
          </p>
          <h4>.</h4>
          <p className='my-2 px-1'>
            {props.data.lecturesCount}
            {'lectures'}
          </p>
          <h4>.</h4>
          <p className='my-2 px-1'>
            {props.data.totalLength}
            {'total length'}
          </p>
        </div>
        <button
        className='m-1'
          onClick={() => {
            setIsExpand((x) => !x);
            setMore((x) => !x);
          }}
        >
          {isExpand ? 'Collapse all sections' : 'Expand all sections'}
        </button>
      </div>
      <div>{content}</div>
      <button 
      className='w-100 my-1 p-2 text-center'
      onClick={() => setMore((x) => !x)}>
        {more ? 'Show less' : 'Show more'}
      </button>
    </div>
  );
}

export default ContentSection;
