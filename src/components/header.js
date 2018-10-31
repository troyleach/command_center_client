//TODO need to bring my user data from ... somewhere
import React from 'react';

import './header.css';

import Gravatar from 'react-gravatar';

import {
  Row,
  Container,
  Col,
  Navbar,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

const AVATAR = 'https://www.gravatar.com/avatar/429e504af19fc3e1cfa5c4326ef3394c?s=240&d=mm&r=pg';

class Header extends React.Component {
  constructor(props) {
    super(props);

    // NOTE not used at this time
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <header>
        <Navbar fixed="top" color="dark" dark expand="xs" className="border-bottom border-gray bg-balck" style={{ height: 60 }}>
          <Row noGutters className="position-relative w-100 align-items-center">

            <Col className="d-none d-lg-flex justify-content-start">
              <Nav className="mrx-auto" navbar>
                <NavItem className="d-flex align-items-center text-white">
                  <span>Command Center</span>
                </NavItem>
              </Nav>
            </Col>

            <Col className="d-flex justify-content-xs-start justify-content-lg-center">
              <Gravatar email="troyleach29@gmail.com" size={50} className="customAvatar-image" />
            </Col>

            <Col className="d-flex d-lg-flex justify-content-end">
              <Nav className="ml-auto" navbar>
                <NavItem className="d-none d-lg-flex">
                  <NavLink href="/components/">Something else</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/troyleach">GitHub</NavLink>
                </NavItem>
              </Nav>
            </Col>

          </Row>
        </Navbar>
      </header>
    );
  }
}

export default Header;
