import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import './header.scss';
import { useSelector } from 'react-redux';
import { selectCountriesStatus, selectCountriesData } from '../../features/countries/countriesSlice';
import { statuses } from '../../features/constants';

const Header = () => {
  const Main = 'Main';
  const countriesStatus = useSelector(selectCountriesStatus);
  const countriesData = useSelector(selectCountriesData);

  let countryLinks = null;
  if (countriesStatus === statuses.SUCCEEDED) {
    countryLinks = countriesData.reduce((acc, country) => {
      const countryLink = (
        <NavLink key={country.id} to={`/countries/${country.id}`}>
          {country.name}
        </NavLink>
      );
      return acc === null ? [' ', countryLink] : [...acc, ' ', countryLink];
    }, null);
  }

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
      <div className="Header">
        <NavLink to="/">{Main}</NavLink>
        {countryLinks}
      </div>
    </>
  );
};

export default Header;
