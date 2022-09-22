import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { context } from '../App';
import Navbar from '../components/CoursePage/Navbar';
import SinglePageHeader from '../components/CoursePage/SinglePageHeader';
import SinglePageCourseCard from '../components/CoursePage/SinglePageCourseCard';
import List from '../components/CoursePage/List';
import SinglePageOverview from '../components/CoursePage/SinglePageOverview';
import ContentSection from '../components/CoursePage/ContentSection';
import Requirements from '../components/CoursePage/Requirements';
import Description from '../components/CoursePage/Description';
import Instructors from '../components/CoursePage/Instructors';
import StudentFeedback from '../components/CoursePage/StudentFeedback';
import ReviewSection from '../components/CoursePage/ReviewSection';
import Footer from '../components/CoursePage/Footer';

const CoursePage = () => {
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
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 col-lg-8'>
            <List />
            <SinglePageOverview data={courseInfo} />
            <ContentSection data={courseInfo} />
            <Requirements data={courseInfo} />
            <Description data={courseInfo} />
            <Instructors data={courseInfo} />
            <StudentFeedback data={courseInfo} key={Math.random()} />
            <ReviewSection data={courseInfo} />
          </div>
          <div className='col-12 col-lg-4 d-none d-none d-lg-block'>
            <SinglePageCourseCard data={courseInfo} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CoursePage;
