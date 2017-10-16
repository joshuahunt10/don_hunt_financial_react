import React, { Component } from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap'
import {Link} from 'react-router-dom'


class BaseLayout extends Component {

  render() {
    return (
      <div>
        <Navbar fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#Home">Don Hunt Financial</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#AboutMe">About Me</NavItem>
              <NavItem eventKey={2} href="#Companies">Companies I Work With</NavItem>
              <NavItem eventKey={3} href="#">Contact</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {this.props.children}
        <div className="foot">
          <div className="jumboFoot">
            <ul className="footLinks">
              <li><Link to="#Home">Home</Link> | </li>
              <li><Link to="#AboutMe">About Me</Link> | </li>
              <li><Link to="#Companies">Companies I Work With</Link> | </li>
              <li><Link to="#">Contact</Link></li>
            </ul>
          </div>
          {/* <img src={skyline}/> */}
        </div>
      </div>
    );
  }

}

export default BaseLayout;
