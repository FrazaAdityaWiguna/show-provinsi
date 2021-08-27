import React from 'react';
import AboutUS from '../../components/AboutUs';
import ContactUs from '../../components/ContactUs';
import Feature from '../../components/Feature';
import Footer from '../../components/Footer';
import Jumbotron from '../../components/Jumbotron';

const Home = () => {
  return (
    <div>
      <Jumbotron />
      <Feature />
      <AboutUS />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
