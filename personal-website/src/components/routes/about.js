import React from 'react';
import '../../assets/css/about.css'

// var ReactFitText = require('react-fittext');

export const About = () => (
    <body>
        <div className="upper-section">
            {/* <ReactFitText compressor=".5" minFontSize="calc(1em + 2vmin)" maxFontSize="calc(1em + 4vmin)"> */}
                <p className="heading">Data | Engineering | Analysis</p>
            {/* </ReactFitText> */}
            <img className="img-fluid" src={require("../../assets/images/pat-profile-pic-crop.png")} />
        </div>
        <div className="middle-section">
            <p className="about-statement">Data and technology are changing how companies do business, and in turn changing the ways we live as residents, citizens, and consumers. <br/><br/>My core professional philosophy is to achieve goals using eagerness, cooperation, and humility. <br/><br/>I believe in taking an analytical approach <br/>towards the solving the problems facing our communities.</p>
        </div>
        <div className="bottom-section">
            <br/>
        </div>
    </body>
)