import React from 'react';
import './home.scss';
import Slider from '../../components/Slider/Slider'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Categories from '../../components/Category/Category';
import Contact from '../../components/Contact/Contact';

const Home = () => {
  return (
    <div>
      <Slider/>
      <FeaturedProducts type="featured"/>
      <Categories/>
      <FeaturedProducts type="trending"/>
      <Contact/>

    </div>
  )
}

export default Home