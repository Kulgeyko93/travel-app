import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import DropDown from '../Dropdown/DropDown';
import './header.scss';

const Header = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top" expand="sm">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto" justify>
          <Nav.Item>
            <NavLink to="/">{t('header.main')}</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/country">{t('header.country')}</NavLink>
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
    </>
  );
};

export default Header;
