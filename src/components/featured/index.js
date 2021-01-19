import React from 'react';
import Carrousel from './Carrousel';
import TimeUntil from './TimeUntil';


const Featured = () =>  {
  return(
    <div style ={{position:'relative'}}>

      <Carrousel/>

      <div className="event_name">
        <div className="wrapper">
          Opening Day
        </div>
      
      </div>

    </div>
    );
};

export default Featured;
