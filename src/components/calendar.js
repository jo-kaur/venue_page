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
          { title: 'Shawn Mendes, BTS and Doja Cat', start: '2021-03-31 18:00', end:'2021-03-31 22:00'},
          { title: 'Post Malone, Doja Cat and Megan Thee Stallion', start: '2021-04-01 18:00', end:'2021-04-01 22:00' },
          { title: 'April Fools Comedy Jam', start: '2021-04-02 19:30', end:'2021-04-02 22:00' },
          { title: 'BROOKLYN NETS VS. MIAMI HEAT', start: '2021-01-23 10:30', end:'2021-01-23 13:00' },
          { title: 'BROOKLYN NETS VS. MIAMI HEAT', start: '2021-01-25 9:00', end:'2021-01-25 12:00' },
          { title: 'BROOKLYN NETS VS. LOS ANGELES CLIPPERS', start: '2021-02-02 15:00', end:'2021-02-02 18:00' },
          { title: 'BROOKLYN NETS VS. LOS ANGELES CLIPPERS', start: '2021-02-05 15:00', end:'2021-02-05 18:00' },
          { title: 'BROOKLYN NETS VS. TORONTO RAPTORS', start: '2021-02-10 15:00', end:'2021-02-10 18:00' },
          { title: 'BROOKLYN NETS VS. TORONTO RAPTORS', start: '2021-02-23 16:00', end:'2021-02-23 19:00' },
          { title: 'BROOKLYN NETS VS. SACRAMENTO KINGS', start: '2021-02-25 15:00', end:'2021-02-25 18:00' },
          { title: 'BROOKLYN NETS VS. DALLAS MAVERICKS', start: '2021-02-27 15:00', end:'2021-02-27 19:00' },
          { title: '2021 ATLANTIC 10 MENS BASKETBALL CHAMPIONSHIP', start: '2021-03-10 15:00', end:'2021-03-14 19:00' },
          { title: 'Soda Stereo', start: '2021-04-09 15:00', end:'2021-04-09 19:00' }
         ]}
      />
      </div>
    )
  }
}
