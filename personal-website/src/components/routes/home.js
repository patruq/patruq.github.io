import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
    .left-half {
        position: absolute;
        left: 0px;
    }
    img {
        position: absolute;
        right: 0px;
        height: 100%;
    }
    h1 {
        font-family: Open Sans;
        font-size: 100px;
        padding-top: 250px;
        padding-left: 300px;
    }
    h2 {
        color: #00B5FF;
        font-family: PT Sans;
        font-size: 60px;
        padding-top: 50px;
        padding-left: 300px;
    }
`;


export const Home = (props) => (
     <Styles>
        <div className="left-half">
            <h1>Hi,<br/>I'm Patrick</h1>
            <h2>Analyst & Engineer<br/>Tech Nerd & Tinkerer</h2>
        </div>
        <img src={require("../../assets/images/black-white-brick copy.jpg")} />
     </Styles>
)