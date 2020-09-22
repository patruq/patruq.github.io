import React from 'react';
import { Nav, NavBar, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar { 
    background-color: #000000;
    height: 75px;
   }

  a, .navbar-nav, .navbar-light .nav-link {
    color: #FFFFFF;
    font-family: Open Sans;
    font-size: 15px;
    &:hover { color: gray; }
  }
  ./ml-auto {
    color: white;
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item><Nav.Link href="/">home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/routes/about">about</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/routes/portfolio">portfolio</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/routes/contact">contact</Nav.Link></Nav.Item>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="https://github.com/patruq" target="blank">github</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="https://linkedin.com/in/patrickryanmccaul" target="blank">linkedin</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="https://twitter.com/patruq" target="blank">twitter</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)