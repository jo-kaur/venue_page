import React from 'react'
import Zoom from 'react-reveal/Zoom'
import CalenderIcon from '../../resources/icons/calender.png'
import LocationIcon from '../../resources/icons/location.png'

function VenueNfo() {
    return(
        <div className='bck_black'>
            <div className='center_wrapper'>
                <div className='vn_wrapper'>
                    <Zoom duration={500}>
                        <div className='vn_item'>
                            <div className='vn_outer'>
                                <div className='vn_inner'>
                                    <div className='vn_icon_square bck_red'></div>
                                    <div
                                        className='vn_icon'
                                        style={{
                                            background:`url(${CalenderIcon})`
                                        }}
                                    ></div>
                                    <div className='vn_title'>
                                        Event Date & Time
                                    </div>
                                    <div className='vn_desc'>
                                        April 1st 2021,
                                        April 2nd 2021 
                                        starting at 6pm
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                    <Zoom duration={500} delay={500}>
                        <div className='vn_item'>
                            <div className='vn_outer'>
                                <div className='vn_inner'>
                                    <div className='vn_icon_square bck_yellow'></div>
                                    <div
                                        className='vn_icon'
                                        style={{
                                            background:`url(${LocationIcon})`
                                        }}
                                    ></div>
                                    <div className='vn_title'>
                                        Event Location
                                    </div>
                                    <div className='vn_desc'>
                                        620 Atlantic Ave, Brooklyn, NY 11217
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                </div>
            </div>
        </div>
    )
}

export default VenueNfo