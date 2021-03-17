import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Navbar, Form, FormControl, Button, Col, InputGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Search } from 'react-bootstrap-icons';
import Dropdown from '../Dropdown/DropDown';
import './header.scss';
import { selectUserData, selectUserStatus } from '../../features/user/userSlice';
import { statuses } from '../../features/constants';

const { Row } = Form;

const Header = (props) => {
  const { t } = useTranslation();
  const { setAuthShown } = props;
  const userStatus = useSelector(selectUserStatus);
  const userData = useSelector(selectUserData);

  let authButton;
  if (userStatus === statuses.SUCCEEDED) {
    authButton = <Button variant="outline-info">{userData.name}</Button>;
  } else {
    authButton = (
      <Button variant="outline-info" onClick={() => setAuthShown(true)}>
        {t('header.login')}
      </Button>
    );
  }

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
          <Col xs={2}>{authButton}</Col>
        </Row>
      </Form>
    </Navbar>
  );
};

export default Header;
