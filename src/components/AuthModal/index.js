import React, { useState } from 'react';
import { Modal, Tabs, Tab } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const { Title, Header, Body } = Modal;

const TAB_NAMES = {
  LOGIN: 'login',
  REGISTER: 'register',
};

export default function AuthModal(props) {
  const { t } = useTranslation();
  const { show, closeModal } = props;
  const [currentTab, setCurrentTab] = useState(TAB_NAMES.LOGIN);

  const openLogin = () => setCurrentTab(TAB_NAMES.LOGIN);

  return (
    <Modal show={show} onHide={closeModal}>
      <Header closeButton>
        <Title>{t('header.auth')}</Title>
      </Header>
      <Body>
        <Tabs defaultActiveKey={TAB_NAMES.LOGIN} activeKey={currentTab} onSelect={(k) => setCurrentTab(k)}>
          <Tab eventKey={TAB_NAMES.LOGIN} title={t('header.login')}>
            <LoginForm closeModal={closeModal} />
          </Tab>
          <Tab eventKey={TAB_NAMES.REGISTER} title={t('header.register')}>
            <RegisterForm openLogin={openLogin} />
          </Tab>
        </Tabs>
      </Body>
    </Modal>
  );
}
