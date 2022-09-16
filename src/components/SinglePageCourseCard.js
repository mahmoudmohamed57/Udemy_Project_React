import React from 'react';

function SinglePageCourseCard(props) {
  return (
    <div className='coure-card border border-1 border-grey'>
      <img className='w-100' src={props.data.image} alt='' />
      <div className='p-3'>
        <div className='d-flex'>
          <p className='fs-1 fw-bold m-0'>E£{props.data.price}</p>
          <del className='fs-2 p-2'> E£{props.data.originalPrice}</del>
        </div>
        <div className='d-flex m-0'>
          <i className='fa-solid fa-bell pt-1'></i>
          <p className='px-2'>1 hour left at this price!</p>
        </div>
        <button className='w-100 p-2 bg-danger'>Add to cart</button>
        <button className='w-100 p-2 my-2'>Buy now</button>
        <p className='m-0'>This course includes:</p>
        <div className='d-flex'>
          <i className='fa-solid fa-play pt-1'></i>
          <p className='m-0 px-2'>
            {props.data.hoursCount}
            {' hours on-demand video'}
          </p>
        </div>
        <div className='d-flex'>
          <i className='fa-regular fa-file pt-1'></i>
          <p className='m-0 px-2'>
            {props.data.articlesCount}
            {' article'}
          </p>
        </div>
        <div className='d-flex'>
          <i className='fa-solid fa-file-arrow-down pt-1'></i>
          <p className='m-0 px-2'>
            {props.data.downloadableResource}
            {' downloadable resources'}
          </p>
        </div>
        <div className='d-flex pt-3'>
          <a className='m-0 text-black'>Share</a>
          <a className='m-0 px-4 text-black'>Gift this course</a>
          <a className='m-0 text-black'>Apply Coupon</a>
        </div>
      </div>
    </div>
  );
}

export default SinglePageCourseCard;
