import React from 'react';
import Rate from '../CourseStars/Rate';

function prog(bar) {
  return (
    <div
      className='border border-1 border-gray m-2'
      style={{ height: '15px', width: '300px', background: 'white' }}
    >
      <div
        style={{
          height: 100 + '%',
          width: bar + `%`,
          background: '#566573  ',
        }}
      ></div>
    </div>
  );
}

function draw(bar, rate) {
  return (
    <div className='d-flex' key={Math.random()}>
      <span> {prog(bar)}</span>
      <span>
        <Rate rate={rate.toFixed(1)} />
      </span>
      <p className='px-2'>{bar.toFixed(0)}%</p>
    </div>
  );
}

function drawAll(array) {
  let cur = [0, 0, 0, 0, 0, 0];
  for (let i = 0; i < array.length; i++) {
    cur[array[i].rate]++;
  }

  let ans = [];

  for (let i = 5; i >= 1; i--) {
    let now = cur[i] / array.length;
    ans.push(draw(now * 100, i));
  }
  return ans;
}

function StudentFeedback(props) {
  return (
    <div className='student-feedback mx-5' id='student-feedback'>
      <h4>Student feedback</h4>
      <div className='d-flex'>
        <div>
          <p className='display-2 fw-bold text-warning m-0'>
            {props.data.rate}
          </p>
          <Rate rate={props.data.rate} />
          <p className='fw-bold text-warning'>course rating</p>
        </div>
        <div className='container-fluid'>{drawAll(props.data.reviews)}</div>
      </div>
    </div>
  );
}

export default StudentFeedback;
