import React from 'react'
import { Element } from 'react-scroll'
import Header from './components/Header'
import Featured from './components/Featured'
import VenueNfo from './components/venueNfo/VenueNfo'
import Calendar from './components/Calendar'
import Highlights from './components/highlights/Highlights'
import Pricing from './components/Pricing'
import Bios from './components/Bios'
import Location from './components/Location'
import Faq from './components/Faq'
import Footer from './components/Footer'
import './styles.css'

function App() {
    return (
      <div className='App'>
        <Header/>
        <Element name='featured'>
          <Featured/>
        </Element>
        <Element name='venuenfo'>
          <VenueNfo/>
        </Element>
        <Element name='calendar'>
          <Calendar/>
        </Element>
        <Element name='highlights'>
          <Highlights/>
        </Element>
        <Element name='pricing'>
          <Pricing/>
        </Element>
        <Element name='bios'>
          <Bios/>
        </Element>
        <Element name='location'>
          <Location/>
        </Element>
        <Element name='faq'>
          <Faq/>
        </Element>
        <Footer/>
      </div>
    )
  }

export default App