import React from 'react';
import '../../assets/css/portfolio.css'
// import { Footer } from '../../components/footer';

export const Portfolio= (props) => (
    <body>
        <div className="top">
            <h2>Projects</h2>
        </div>
        <div className="content">
            <div className="upper-left">
                <a href="https://github.com/patruq/Mapping-Disaster-Tweets-CACampFire" target="blank">
                    <img className="upper-left-img" src={require("../../assets/images/wildfire.webp")} />
                </a>
            </div>
            <div className="upper-center">
                <a href="https://github.com/patruq/urban-at-risk" target="blank">
                    <img className="upper-center-img" src={require("../../assets/images/city.jpg")} />
                </a>
            </div>
            <div className="upper-right">
                <a href="https://github.com/patruq/reddit-nlp" target="blank">
                    <img className="upper-right-img" src={require("../../assets/images/social-media.webp")} />
                </a>
            </div>
            <div className="bottom-left">
                <a href="https://github.com/patruq/ames-housing" target="blank">
                    <img className="bottom-left-img" src={require("../../assets/images/house.webp")} />
                </a>
            </div>
            <div className="bottom-right">
                <a href="https://github.com/patruq/act-sat-performance" target="blank">
                    <img className="bottom-right-img" src={require("../../assets/images/school.webp")} />
                </a>
            </div>
        </div>
        {/* <Footer /> */}
    </body>
)