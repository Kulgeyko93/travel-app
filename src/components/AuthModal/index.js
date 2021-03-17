import React from 'react';
import { Modal, Tabs, Tab } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const { Title, Header, Body } = Modal;

export default function AuthModal(props) {
  const { t } = useTranslation();
  const { show, setShow } = props;

  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Header closeButton>
        <Title>{t('header.auth')}</Title>
      </Header>
      <Body>
        <Tabs defaultActiveKey="login" id="uncontrolled-tab-example">
          <Tab eventKey="login" title={t('header.login')}>
            <LoginForm />
          </Tab>
          <Tab eventKey="register" title={t('header.register')}>
            <RegisterForm setShow={setShow} />
          </Tab>
        </Tabs>
      </Body>
    </Modal>
  );
}
