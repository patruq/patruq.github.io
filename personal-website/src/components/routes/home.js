import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
    .left-half {
        position: absolute;
        left: 0px;
        width: 60%;
    }
    h1 {
        font-family: Open Sans;
        font-size: 100px;
        padding-top: 20%;
        padding-left: 30%;
    }
    h2 {
        color: #00B5FF;
        font-family: Noto Sans;
        font-size: 60px;
        padding-top: 50px;
        padding-left: 30%;
    }
`;


export const Home = (props) => (
     <Styles>
        <div className="left-half">
            <h1>Hi,<br/>I'm Patrick</h1>
            <h2>Analyst & Engineer<br/>Tech Nerd & Tinkerer</h2>
        </div>
     </Styles>
)