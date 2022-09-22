import React from 'react';
import Navbar from '../components/HomePage/Navbar';
import HomePageHeader from '../components/HomePage/HomePageHeader';
import Courses from '../components/HomePage/Courses';
import Categories from '../components/HomePage/Categories';
import Footer from '../components/HomePage/Footer';

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
