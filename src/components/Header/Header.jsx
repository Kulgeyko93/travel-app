import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Form, FormControl, Button, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Dropdown from '../Dropdown/DropDown';
import './header.scss';

const { Row } = Form;

const Header = () => {
  const { t } = useTranslation();

  return (
    <Navbar bg="dark" variant="dark" sticky="top" expand="sm">
      <Navbar.Brand className="mr-auto">
        <NavLink to="/">{t('header.main')}</NavLink>
      </Navbar.Brand>
      <div className="lang">
        <Dropdown />
      </div>
      <Form>
        <Row>
          <Col xs={9}>
            <FormControl type="text" placeholder={t('header.search')} />
          </Col>
          <Col xs={3}>
            <Button variant="outline-info">{t('header.search')}</Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
};

export default Header;
