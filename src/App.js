import React, { Component } from 'react';
import './resources/styles.css';
import {Element} from 'react-scroll';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueNfo from './components/venueNfo';
import Highlight from './components/Highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Faq from './components/featured/Faq';
import Footer from './components/header_footer/Footer';
import Faq from './components/featured/Faq';
import Bios from './components/artistBios/Bios';

class App extends Component {
  render(){
    return (
      <div className="App" style={{height:"1500px",background:'cornflowerblue'}}>
      <Header/>

      <Element name="featured">
      <Featured/>
      </Element>

      <Element name="venuenfo">
      <VenueNfo/>
      </Element>

      <Element name="highlights">
      <Highlight/>
      </Element>

      <Element name="pricing">
      <Pricing/>
      </Element>

      <Element name="artistBios">
      <Bios/>
      </Element>
      
      <Element name="faq">
      <Faq/>
      </Element>

      <Element name="location">
      <Location/>
      </Element>

      <Element name="Faq">
      <Faq/>
      </Element>

      <Footer/>
      
      </div>
    );
  }
}

export default App;