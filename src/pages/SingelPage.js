import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { context } from '../App';
import Navbar from '../components/NavBar';
import SinglePageHeader from '../components/SinglePageHeader';
import SinglePageCourseCard from '../components/SinglePageCourseCard';
import List from '../components/List';
import SinglePageOverview from '../components/SinglePageOverview';
import ContentSection from '../components/ContentSection';
import Requirements from '../components/Requirements';
import Description from '../components/Description';
import Instructors from '../components/Instructors';
import StudentFeedback from '../components/StudentFeedback';
import ReviewSection from '../components/ReviewSection';
import Footer from '../components/Footer';

const SingelPage = () => {
  const { id } = useParams();
  const { data } = useContext(context);
  if (!Array.isArray(data) || !data[0].courses) {
    return (
      <div className='d-flex justify-content-center'>
        <div className='spinner-border' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
      </div>
    );
  }
  const courseInfo = data[0].courses.find((idcourse) => idcourse.id == id);

  return (
    <div className='single-page'>
      <Navbar />
      <SinglePageHeader data={courseInfo} />
      <SinglePageCourseCard data={courseInfo} />
      <List />
      <SinglePageOverview data={courseInfo} />
      <ContentSection data={courseInfo} />
      <Requirements data={courseInfo} />
      <Description data={courseInfo} />
      <Instructors data={courseInfo} />
      <StudentFeedback data={courseInfo} key={Math.random()} />
      <ReviewSection data={courseInfo} />
      <Footer></Footer>
    </div>
  );
};

export default SingelPage;
