import React from 'react';
import '../../assets/css/portfolio.css'

export const Portfolio= (props) => (
    <body>
        <div className="top">
            <h2>Projects</h2>
        </div>
        <div className="content">
            <div className="upper-left">
                <img className="upper-left-img" src={require("../../assets/images/wildfire.webp")} />
            </div>
            <div className="upper-center">
                <img className="upper-center-img" src={require("../../assets/images/city.jpg")} />
            </div>
            <div className="upper-right">
                <img className="upper-right-img" src={require("../../assets/images/social-media.webp")} />
            </div>
            <div className="bottom-left">
                <img className="bottom-left-img" src={require("../../assets/images/house.webp")} />
            </div>
            <div className="bottom-right">
                <img className="bottom-right-img" src={require("../../assets/images/school.webp")} />
            </div>
        </div>
    </body>
)