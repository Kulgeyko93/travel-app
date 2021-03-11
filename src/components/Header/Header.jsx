import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { selectCountriesStatus, selectCountriesData } from '../../features/countries/countriesSlice';
import { statuses } from '../../features/constants';
import DropDown from '../Dropdown/DropDown';
import './header.scss';

const Header = () => {
  const { t } = useTranslation();

  const Main = t('header.main');

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
            <NavLink to="/">{t('header.main')}</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/Country">{t('header.country')}</NavLink>
          </Nav.Item>
          <Nav.Item>
            <DropDown />
          </Nav.Item>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder={t('header.search')} className="mr-sm-2" />
          <Button variant="outline-info">{t('header.search')}</Button>
        </Form>
      </Navbar>
      <div className="Header">
        <NavLink to="/">{Main}</NavLink>
        {countryLinks}
      </div>
    </>
  );
};

export default Header;
