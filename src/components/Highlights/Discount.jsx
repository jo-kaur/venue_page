import React, { useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'

function Discount() {
    const [discountStart, setDiscountStart] = useState(0)
    const [discountEnd, setDiscountEnd] = useState(30)

    const percentage = () => {
        if(discountStart < discountEnd) {
            setDiscountStart(discountStart + 1)
        }
    }

    useEffect(() => {
        const timer = setTimeout(()=>{
            percentage()
        }, 30)

        return () => clearTimeout(timer)
    }, [])

    return(
        <div className='center_wrapper'>
            <div className='discount_wrapper'>
                <Fade onReveal={()=>percentage()}>
                    <div className='discount_percentage'>
                        <span>{discountStart}%</span>
                        <span>OFF</span>
                    </div>
                </Fade>
                    <Slide right>
                        <div className='discount_description'>
                            <h3>Purchase tickets before 1st APRIL</h3>
                            <p> Be there to experience the history making Barclay Bash. With limited seating, get your hands on these tickets now. </p>
                                <MyButton
                                    text='Purchase tickets'
                                    bck='#ffa800'
                                    color='#ffffff'
                                    link='http://google.com'
                                />
                        </div>
                    </Slide>
                </div>
        </div>
    )
}

export default Discount