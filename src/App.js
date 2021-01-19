import React from 'react';
import Fade from'react-reveal/Fade';

const Footer = () =>{
  return(
    <footer className="bck_red">
      <Fade delay={500}>
        <div className="font_righteous footer_logo_venue">Yankee Stadium
          <div className="footer_copyright">
            New York Yankees. All rigthts reserved. 
          </div>
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;
