import React from 'react';
// import bgImage from '../videos/Background-video.mp4';
import bgImage from '../videos/Garmin_Rally.mp4'

function Source() {
    return (
       <div>
         <video autoPlay loop muted>
           <source src={bgImage} type="video/mp4" />
         </video>
         <div className="text-wrapper">
           <h1>EMPOWERING <br></br>
                  ATHLETS <br></br>
                   FOR LIFE</h1>
         </div>
      </div>
    ) 
}


export default Source;