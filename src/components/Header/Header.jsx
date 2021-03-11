import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import './header.scss';

const Header = () => {
  const Main = 'Main';

  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top" expand="md">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto" justify>
          <Nav.Item>
            <NavLink to="/">{Main}</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/Country">Country</NavLink>
          </Nav.Item>
          <Nav.Item>
            <DropdownButton id="dropdown-basic-button" title="Language">
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Russian</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Something else</Dropdown.Item>
            </DropdownButton>
          </Nav.Item>
          <Nav.Item>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
