import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import About from '../components/sections/About';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import ContactForm from '../components/sections/ContactForm';

const Home = () => {

  return (
    <>
      <Hero/>
      <FeaturesSplit/>
      <About/>
    </>
  );
}

export default Home;