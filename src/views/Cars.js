import React from 'react';
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

function Cars() {
  return (
    
      <Hero hero="carsHero">
      <Banner title="Some see what's there. " subtitle=" We see beyond.">
          <Link to="/" className="btn-primary">
          Everything at a glance
          </Link>
        </Banner>        
      </Hero>    
    
  )
}

export default Cars