import React from 'react';
import styled from 'styled-components';

const GridWrapper = styled.div`
    display: grid;
    grid-gap: 10px;
    margin-top: 1em;
    margin-left: 6em;
    margin-right: 6em;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: minmax(25px, auto);
`;

export const Contact= (props) => (
    <GridWrapper>
        <p>This is the CONTACT page</p>
    </GridWrapper>
)