import React from 'react';
import StarSolid from './StarSolid';
import StarRegularStroke from './StarRegularStroke';
import StarRegular from './StarRegular';

function Rate(props) {
  function getRate() {
    let stars = [0, 0, 0, 0, 0];
    let rate = props.rate.split('.');
    let starSolid = parseInt(rate[0]);
    let starStroke = parseInt(rate[1]);
    if (starStroke >= 5) starStroke = 1;
    else starStroke = 0;
    let cnt = 0;
    for (let i = 0; i < starSolid; i++) stars[cnt++] = 1;
    if (starStroke) stars[cnt++] = 0.5;
    return stars;
  }
  const rateList = getRate();
  return rateList.map(function (value) {
    if (value === 1) return <StarSolid key={Math.random()}></StarSolid>;
    else if (value === 0.5)
      return <StarRegularStroke key={Math.random()}></StarRegularStroke>;
    else return <StarRegular key={Math.random()}></StarRegular>;
  });
}

export default Rate;
