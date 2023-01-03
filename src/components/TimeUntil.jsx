import React, { useState, useEffect } from 'react'
import Slide from 'react-reveal/Slide'

function TimeUntil() {
    const initialTime = {
        deadline: 'Apr, 1, 2021',
        days:'0',
        hours:'0',
        minutes:'0',
        seconds:'0'
    }

    const [time, setTime] = useState(initialTime)

    const getTimeUntil = (deadline) => {
        const time = Date.parse(deadline) - Date.parse(new Date())
        
        if(time < 0) {
            console.log('Date passed')
        } else {
            const seconds = Math.floor((time/1000) % 60)
            const minutes = Math.floor((time/1000/60) % 60)
            const hours = Math.floor((time/(1000*60*60)) % 24)
            const days = Math.floor(time/(1000*60*60*24))

            setTime({
                days,
                hours,
                minutes,
                seconds
            })
        }
    }

    useEffect(() => {
        const interval = setInterval(() => getTimeUntil(time.deadline), 1000)

        return () => clearInterval(interval)
    }, [time.deadline])
    
    return(
        <Slide left delay={1000}>
            <div className='countdown_wrapper'>
                <div className='countdown_top'>
                    Event starts in
                </div>
                <div className='countdown_bottom'>
                    <div className='countdown_item'>
                        <div className='countdown_time'>
                            {time.days}
                        </div>
                        <div className='countdown_tag'>
                            Days
                        </div>
                    </div>
                    <div className='countdown_item'>
                        <div className='countdown_time'>
                            {time.hours}
                        </div>
                        <div className='countdown_tag'>
                            Hs
                        </div>
                    </div>
                    <div className='countdown_item'>
                        <div className='countdown_time'>
                            {time.minutes}
                        </div>
                        <div className='countdown_tag'>
                            Min
                        </div>
                    </div>
                    <div className='countdown_item'>
                        <div className='countdown_time'>
                            {time.seconds}
                        </div>
                        <div className='countdown_tag'>
                            Sec
                        </div>
                    </div>
                </div>
            </div>
        </Slide>
    )
}

export default TimeUntil