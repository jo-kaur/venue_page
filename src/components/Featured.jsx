import React from 'react'
import Carrousel from './Carrousel'
import TimeUntil from './TimeUntil'

function Featured() {
    return(
        <div style={{ position: 'relative' }}>
            <Carrousel/>
            <div className='event_name'>
                <div className='wrapper'>
                </div>
            </div>
            <TimeUntil/>
        </div>
    )
}

export default Featured