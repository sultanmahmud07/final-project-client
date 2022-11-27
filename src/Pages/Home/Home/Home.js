import React from 'react';
import Banner from './Banner/Banner';
import '../../../commonStyles/style.css';
import { Link } from 'react-router-dom';
import About from '../About/About';
import RecentlyPost from '../ResentlyPost/RecentlyPost';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <RecentlyPost></RecentlyPost>
      <About></About>
    </div>
  );
};

export default Home;