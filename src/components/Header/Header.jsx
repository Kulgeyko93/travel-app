import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Navbar, Form, Button, Col, InputGroup, Popover, OverlayTrigger, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Formcontrol from '../Formcontrol/Formcontrol';
import Dropdown from '../Dropdown/DropDown';
import './header.scss';
import { logout, selectUserData, selectUserStatus } from '../../features/user/userSlice';
import { statuses } from '../../features/constants';
import InlineSpinner from '../common/InlineSpinner';

const { Row } = Form;

const Header = (props) => {
  const { t } = useTranslation();
  const { openModal } = props;
  const userStatus = useSelector(selectUserStatus);
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();
  const [loggingOut, setLoggingOut] = useState(false);

  function onLogoutClick() {
    setLoggingOut(true);
  }

  useEffect(() => {
    if (loggingOut) {
      setTimeout(() => {
        dispatch(logout());
        setLoggingOut(false);
        setTimeout(() => openModal(), 500);
      }, 1000);
    }
  }, [loggingOut, dispatch, openModal]);

  let authButton;
  if (userStatus === statuses.SUCCEEDED && userData) {
    const { username, photo_url: photoUrl } = userData;
    const popover = (
      <Popover id="popover-basic">
        <Popover.Title as="h3">{username}</Popover.Title>
        <Popover.Content>
          <Image className="mb-2" width={200} src={photoUrl} rounded />
          <Button disabled={loggingOut} onClick={onLogoutClick} variant="outline-info">
            {loggingOut && <InlineSpinner />}
            &nbsp;
            {t('header.logout')}
          </Button>
        </Popover.Content>
      </Popover>
    );
    authButton = (
      <OverlayTrigger trigger="click" placement="left" overlay={popover}>
        <Button variant="outline-info">{username.slice(0, 5)}</Button>
      </OverlayTrigger>
    );
  } else {
    authButton = (
      <Button variant="outline-info" onClick={() => openModal()}>
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
              <Formcontrol />
            </InputGroup>
          </Col>
          <Col xs={2}>{authButton}</Col>
        </Row>
      </Form>
    </Navbar>
  );
};

export default Header;
