import React from 'react';
import '../assets/css/footer.css'
import styled from 'styled-components'

const Styles = styled.div`
    .copyright {
        font-family: PT Sans;
    }

    .main-footer {
        background-color: black;
        background-size: 100% 100%;
        bottom: 0;
        color: white;
        height: 55px;
        margin: 0 auto;
        position: fixed;
        width: 100%;
        text-align: center;
    }
`;

export const Footer = () => (
    <Styles>
        <div className="main-footer">
            <div className="icons">
            <h4>Icons</h4>
                <div className="copyright">
                    <h6>Copyright Info</h6>
                </div>
            </div>
        </div>
    </Styles>
)