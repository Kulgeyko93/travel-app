import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Form, FormControl, Button, Col, InputGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Search } from 'react-bootstrap-icons';
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
      <div className="mr-rd">
        <Dropdown />
      </div>
      <Form>
        <Row>
          <Col xs="auto">
            <InputGroup style={{ display: 'flex' }}>
              <FormControl
                placeholder={t('header.search')}
                aria-label={t('header.search')}
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button variant="outline-info">
                  <Search />
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
          <Col xs={2}>
            <Button variant="outline-info">{t('header.login')}</Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
};

export default Header;
