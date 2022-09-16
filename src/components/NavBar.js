import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { context } from '../App';
import { fetchData } from '../hooks/userFetchData';

function Navbar() {
  const [searchValue, setSearchValue] = useState('');
  const { setData } = useContext(context);
  const handleFromSbumit = (e) => {
    e.preventDefault();
    (async () => {
      setData(
        await fetchData(`http://localhost:3001/${searchValue.toLowerCase()}`)
      );
    })();
  };
  return (
    <nav className='udemy-navbar'>
      <i className='menu fa-solid fa-bars'></i>
      <Link to='/' className='px-2'>
        <img
          src='https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg'
          alt='Udemy'
          width='90'
          height='35'
        ></img>
      </Link>
      <p id='categories'>Categories</p>
      <div className='input'>
        <form onSubmit={handleFromSbumit}>
          <input
            id='search'
            type='text'
            name='search'
            placeholder='Search for Courses'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button id='button-search' type='submit'>
            Search
          </button>
        </form>
      </div>
      <p id='type-first'>Udemy Buisnes</p>
      <p id='type-last'>Teach on Udemy</p>
      <i className='shopping fa-solid fa-cart-shopping'></i>
      <button id='button-primary'>Login</button>
      <button id='button-default'>Sign Up</button>
      <i className='earth fa-solid fa-globe'></i>
    </nav>
  );
}

export default Navbar;
