import React from 'react';
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import Services from '../components/Services';





export const Home = () => {
  return (
    <>
      <Hero>
        <Banner title="With us  " subtitle="you’ll find the right vehicle for every requirement">
          <Link to="/cars" className="btn-primary">
          Discover our current offers
          </Link>
        </Banner>
      </Hero>
      
      <Services/>  
        
        
    </>
  )
}
