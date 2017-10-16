import React, { Component } from 'react';
import {Nav, Navbar, NavItem, MenuItem, NavDropdown, Jumbotron} from 'react-bootstrap'
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
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.4}>Separated link</MenuItem>
              </NavDropdown>
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
