import { Button, Form, Image } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import axios from '../../api';
import { fetchUser } from '../../features/user/userSlice';

const FIELD_NAMES = {
  USERNAME: 'username',
  PASSWORD: 'password',
  PASSWORD_CONFIRM: 'password_confirm',
  PHOTO: 'photo',
};

export default function RegisterForm(props) {
  const { setShow } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [submittable, setSubmittable] = useState(true);
  const [submittedData, setSubmittedData] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const photoField = e.target[FIELD_NAMES.PHOTO];
    if (photoField.files.length) {
      try {
        setSubmittable(false);
        const uploadFile = photoField.files[0];
        const formData = new FormData();
        formData.append('file', uploadFile);
        const photoRes = await axios.post('/upload', formData);
        const { url } = photoRes.data;
        const hasEmpty = Object.values(FIELD_NAMES).some((key) => {
          return key !== FIELD_NAMES.PHOTO && e.target[key].value.length < 1;
        });
        if (!hasEmpty) {
          const registerRes = await axios.post('/register', {
            ...Object.values(FIELD_NAMES).reduce((acc, fieldName) => {
              if (fieldName === FIELD_NAMES.PHOTO) {
                return acc;
              }
              return { ...acc, [fieldName]: e.target[fieldName].value };
            }, {}),
            photo_url: url,
          });
          setSubmittedData(registerRes.data);
        }
      } catch (err) {
        setSubmittedData(null);
      } finally {
        setSubmittable(true);
      }
    }
  }

  useEffect(() => {
    if (submittedData) {
      dispatch(fetchUser());
      setTimeout(() => setShow(false), 5000);
    }
  }, [setShow, submittedData, dispatch]);

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

        <Form.Group>
          <Form.Label>{t('auth.password')}</Form.Label>
          <Form.Control type="password" placeholder={t('auth.confirm_password')} name={FIELD_NAMES.PASSWORD_CONFIRM} />
        </Form.Group>

        <Form.Group>
          <Form.File id="photoUrl" label={t('auth.upload')} name={FIELD_NAMES.PHOTO} />
        </Form.Group>

        <Button disabled={!submittable} variant="primary" type="submit">
          {t('header.register')}
        </Button>
      </Form>
    );
  }

  return content;
}
