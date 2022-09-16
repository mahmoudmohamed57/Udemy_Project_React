import React from 'react';
import Navbar from '../components/NavBar';
import HomePageHeader from '../components/HomePageHeader';
import Courses from '../components/Courses';
import Categories from '../components/Categories';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <section className='home-page'>
      <Navbar />
      <HomePageHeader />
      <Courses />
      <Categories />
      <Footer />
    </section>
  );
};

export default HomePage;
