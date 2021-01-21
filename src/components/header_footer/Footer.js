import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer=()=>{
    return(
        <footer>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">
                Barclays Center Music
                </div>
                <div className="footer_copyright">
                Barclays Center. All rights reserved. Images courtesy of Google.
                </div>
                <div>
                    <ul>
                        <a href="https://twitter.com/?lang=en"><i id="tw" className="fa fa-twitter-square fa-2x"></i></a>
                        <a href="https://www.youtube.com/"><i id="yt" className="fa fa-youtube-square fa-2x"></i></a>
                        <a href="https://github.com/"><i id="gh" className="fa fa-github fa-2x"></i></a>
                        <a href="https://www.facebook.com/"><i id="fb" className="fa fa-facebook-square fa-2x"></i></a>
                    </ul>
               </div>
            </Fade>
        </footer>
    );
};

export default Footer;