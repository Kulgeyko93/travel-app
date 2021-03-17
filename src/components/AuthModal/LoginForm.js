import { Button, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const FIELD_NAMES = {
  USERNAME: 'username',
  PASSWORD: 'password',
};

export default function LoginForm() {
  const { t } = useTranslation();

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <Form.Group controlId="formUsername">
        <Form.Label>{t('auth.username')}</Form.Label>
        <Form.Control type="text" placeholder={t('auth.enter_username')} />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>{t('auth.password')}</Form.Label>
        <Form.Control type="password" placeholder={t('auth.enter_password')} />
      </Form.Group>
      <Button variant="primary" type="submit">
        {t('header.login')}
      </Button>
    </Form>
  );
}
