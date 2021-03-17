import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button, Card, CardDeck, Spinner } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { fetchCountries, selectCountriesStatus, selectCountriesData } from '../../features/countries/countriesSlice';
import { statuses } from '../../features/constants';
import './main.scss';

const { Img, Body, Title, Text } = Card;

const Main = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const countriesStatus = useSelector(selectCountriesStatus);
  const countriesData = useSelector(selectCountriesData);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  let content = null;
  if (countriesStatus === statuses.LOADING) {
    content = <Spinner animation="border" variant="primary" />;
  } else if (countriesStatus === statuses.SUCCEEDED) {
    const cardElements = countriesData.map((country) => {
      const countryName = t(`main.${country.name.toLowerCase()}.name`);
      const capitalName = t(`main.${country.name.toLowerCase()}.capital`);
      return (
        <Card key={country.name}>
          <Img variant="top" src={country.imageUrl} />
          <Body>
            <Title>{countryName}</Title>
            <Text>{capitalName}</Text>
            <NavLink to="/">{}</NavLink>
            <Button variant="primary">{t('messages.learn_more')}</Button>
          </Body>
        </Card>
      );
    });
    content = <CardDeck className="deck">{cardElements}</CardDeck>;
  } else if (countriesStatus === statuses.FAILED) {
    content = t('messages.error');
  }

  return <div className="main__page">{content}</div>;
};

export default Main;
