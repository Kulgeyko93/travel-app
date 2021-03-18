import { Button, Form, Image } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import axios from '../../api';
import { fetchUser } from '../../features/user/userSlice';
import InlineSpinner from '../common/InlineSpinner';

const FIELD_NAMES = {
  USERNAME: 'username',
  PASSWORD: 'password',
};

export default function LoginForm(props) {
  const { closeModal } = props;
  const { t } = useTranslation();
  const [submittable, setSubmittable] = useState(true);
  const [submittedData, setSubmittedData] = useState(null);
  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();
    const hasEmpty = Object.values(FIELD_NAMES).some((key) => {
      return e.target[key].value.length < 1;
    });
    if (!hasEmpty) {
      try {
        setSubmittable(false);
        const loginRes = await axios.post(
          '/login',
          Object.values(FIELD_NAMES).reduce((acc, fieldName) => {
            return { ...acc, [fieldName]: e.target[fieldName].value };
          }, {}),
        );
        setSubmittedData(loginRes.data);
      } catch (err) {
        setSubmittedData(null);
      } finally {
        setSubmittable(true);
      }
    }
  }

  useEffect(() => {
    if (submittedData) {
      setTimeout(() => {
        closeModal();
        dispatch(fetchUser());
      }, 3000);
    }
  }, [closeModal, submittedData, dispatch]);

  let content;
  if (submittedData) {
    content = (
      <div>
        <h4>{submittedData.username}</h4>
        <Image src={submittedData.photo_url} rounded />
      </div>
    );
  } else {
    content = (
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>{t('auth.username')}</Form.Label>
          <Form.Control type="text" placeholder={t('auth.enter_username')} name={FIELD_NAMES.USERNAME} />
        </Form.Group>

        <Form.Group>
          <Form.Label>{t('auth.password')}</Form.Label>
          <Form.Control type="password" placeholder={t('auth.enter_password')} name={FIELD_NAMES.PASSWORD} />
        </Form.Group>
        <Button disabled={!submittable} variant="primary" type="submit">
          {!submittable && <InlineSpinner />}
          {t('header.login')}
        </Button>
      </Form>
    );
  }

  return content;
}
