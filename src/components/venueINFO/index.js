import React from'react';
import Zoom from 'react-reveal/Zoom';

import icon_calendar from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';

const VunueNfo =() => {
    return(
        <div className="bck_black">
            <div className="center_wrapper">
                <div className="vn_wrapper4">

                    <Zoom duration={500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className= "vn_icon_square bck_red"></div>
                                    <div className="vn_icon"
                                    style={{
                                        background:`url(${icon_calendar})`
                                    }}
                                ></div>
                                <div classNAme="vn_desc">
                                    1 April 2017 @ 13.05
                                </div>
                                </div>
                            </div>
                        </div>

                    </Zoom>

                </div>
                <Zoom duration={500} delay={500}>
                    <div className="vn_item">
                        <dive className="vn_outer">
                            <div className="vn_inner">
                                <div className="vn_icon_square bck_yellow"></div>
                                <div
                                className="vn_icon"
                                style={{
                                    backgorund:`url(${icon_location})`
                                }}
                            ></div>
                            </div>
                        </dive>
                    </div>
                </Zoom>

            </div>
        </div>
    );
};

export default VunueNfo;