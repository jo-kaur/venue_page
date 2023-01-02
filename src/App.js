import React from 'react'
import {Element} from 'react-scroll'
import './resources/styles.css'
import Header from './components/Header'
import Featured from './components/Featured'
import VenueNfo from './components/venueNfo'
import Highlight from './components/Highlights'
import Pricing from './components/Pricing'
import Location from './components/Location'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Bios from './components/Bios'
import Calendar from './components/Calendar'

function App() {
    return (
      <div className="App" style={{height:"1500px",background:'cornflowerblue'}}>
        <Header/>
        <Element name="featured">
          <Featured/>
        </Element>
        <Element name="venuenfo">
          <VenueNfo/>
        </Element>
        <Element name="calendar">
          <Calendar/>
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
        <Element name="location">
          <Location/>
        </Element>
        <Element name="faq">
          <Faq/>
        </Element>
        <Footer/>
      </div>
    )
  }

export default App