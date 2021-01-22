import React from 'react'
import FullCalendar from '@fullcalendar/react'
// import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid'

export default class Calendar extends React.Component {
  render() {
    return (
        <div className="calendar">
      <FullCalendar
        plugins={[ timeGridPlugin ]}
        initialView="timeGridWeek"
        // style={{
        //     backgroundColor: this.state.headerShow ? '#240090' : 'transparent',
        //     boxShadow: 'none',
        //     padding: '10px 0px'
        // }}
      />
      </div>
    )
  }
}
