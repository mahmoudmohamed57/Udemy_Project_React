import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer text-light bg-dark mt-5 p-5'>
      <div className='d-flex flex-wrap justify-content-between'>
        <h5 className='px-2 mt-1'>
          Top companies choose Udemy Business to build in-demand career skills.
        </h5>
        <div>
          <img
            alt='Nasdaq'
            src='https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg'
          ></img>
          <img
            alt='Volkswagen'
            src='https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg'
          ></img>
          <img
            alt='Box'
            src='https://s.udemycdn.com/partner-logos/v4/box-light.svg'
          ></img>
          <img
            alt='NetApp'
            src='https://s.udemycdn.com/partner-logos/v4/netapp-light.svg'
          ></img>
          <img
            alt='Eventbrite'
            src='https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg'
          ></img>
        </div>
      </div>
      <hr />
      <div className='d-flex flex-wrap justify-content-between py-3'>
        <ul>
          <li>Udemy Business</li>
          <li>Teach on Udemy</li>
          <li>Get the app</li>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
        <ul>
          <li>Careers</li>
          <li>Blog</li>
          <li>Help and Support</li>
          <li>Affiliate</li>
          <li>Investors</li>
        </ul>
        <ul>
          <li>Terms</li>
          <li>Privacy policy</li>
          <li>Cookie settings</li>
          <li>Sitemap</li>
          <li>Accessibility statement</li>
        </ul>
        <ul className='d-flex border border-2 h-25 p-2 mx-4'>
          <li className='earth fa-solid fa-globe mt-1'></li>
          <li className='mx-2'>English</li>
        </ul>
      </div>
      <div className='d-flex flex-wrap justify-content-between'>
        <Link to='/' className='mx-4'>
          <img
            src='https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg'
            alt='Udemy'
            width='90'
            height='35'
          ></img>
        </Link>
        <p className='mx-4'>© 2022 Udemy, Inc.</p>
      </div>
    </div>
  );
}

export default Footer;
