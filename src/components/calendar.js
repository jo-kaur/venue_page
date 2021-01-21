import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'

export default class Calendar extends React.Component {
  render() {
    return (
      <FullCalendar
        plugins={[ timeGridPlugin ]}
        initialView="timeGridWeek"
      />
    )
  }
}
