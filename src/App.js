import React from 'react'
import { Element } from 'react-scroll'
import './resources/styles.css'
import Featured from './components/Featured'
import VenueNfo from './components/venueNfo/VenueNfo'
import Calendar from './components/Calendar'
import Highlight from './components/highlights/Highlight'
import Pricing from './components/Pricing'

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
        <Element name="bios">
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