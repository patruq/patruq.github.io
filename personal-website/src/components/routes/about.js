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
            <p className="about-statement">Data and technology are changing how companies do business, and in turn changing the ways we live as residents, citizens, and consumers. <br/><br/>My core professional philosophy is to achieve goals leveraging eagerness, cooperation, and humility. <br/><br/>I believe in taking an analytical approach <br/>towards the solving the problems facing our communities.</p>
        </div>
        <div className="bottom-section">
            <div className="left">
                <h2 className="tech-types">Web</h2>
                <ul>
                    <li><img className="img-logo" src={require("../../assets/images/javascript-logo.png")} /></li>
                    <li><img className="img-logo" src={require("../../assets/images/react-logo.svg")} /></li>
                    <li><img className="img-logo" src={require("../../assets/images/npm-logo-red.svg")} /></li>
                </ul>
            </div>
            <div className="center">
                <h2 className="tech-types">Programming</h2>
                <ul>
                    <li><img className="img-logo" src={require("../../assets/images/python-logo-generic.svg")} /></li>
                    <li><img className="img-logo" src={require("../../assets/images/pandas-logo.svg")} /></li>
                    <li><img className="img-logo" src={require("../../assets/images/scikit-learn-logo-notext.png")} /></li>
                    <li><img className="img-logo" src={require("../../assets/images/logo-mysql-170x115.png")} /></li>
                </ul>
            </div>
            <div className="right">
                <h2 className="tech-types">Technical</h2>
                <ul>
                    <li><img className="img-logo" src={require("../../assets/images/git-Icon-Black.png")} /></li>
                    <li><img className="img-logo" src={require("../../assets/images/bash-logo.png")} /></li>
                </ul>
            </div>
        </div>
    </body>
)