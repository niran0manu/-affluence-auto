import React from 'react';
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

function Error() {
  return (
    
    <Hero hero="errorHero">
        <Banner title="404  " subtitle="Lost your way?">
          <Link to="/" className="btn-primary">
          Let me take you home
          </Link>
        </Banner>
      </Hero>

    
  )
}

export default Error