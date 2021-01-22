import React from 'react'
import FullCalendar from '@fullcalendar/react'
// import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid'

export default class Calendar extends React.Component {
  render() {
    return (
        <div className="calendar">
        {/* <center><button onClick={this.gotoDate}>Upcoming Events</button></center> */}
      <FullCalendar
        plugins={[ timeGridPlugin ]}
        initialView="timeGridWeek"
        // style={{
        //     backgroundColor: this.state.headerShow ? '#240090' : 'transparent',
        //     boxShadow: 'none',
        //     padding: '10px 0px'
        // }}
        events={[
          { title: 'Shawn Mendes', start: '2021-03-31 19:30', end:'2021-03-31 22:00'},
          { title: 'BTS', start: '2021-04-01 19:30', end:'2021-04-01 22:00' },
          { title: 'Post Malone', start: '2021-04-02 19:30', end:'2021-04-02 22:00' },
          { title: 'Doja Cat', start: '2021-04-03 19:30', end:'2021-04-03 22:00' },
          { title: 'Megan Thee Stallion', start: '2021-04-04 19:30', end:'2021-04-04 22:00' }
         ]}
      />
      </div>
    )
  }
}
