import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Card, CardDeck, Spinner } from 'react-bootstrap';
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
      const key = country.name.toLowerCase();
      const countryName = t(`main.${key}.name`);
      const capitalName = t(`main.${key}.capital`);
      return (
        <Card key={country.name}>
          <Img variant="top" src={country.imageUrl} />
          <Body>
            <Title>{countryName}</Title>
            <Text>{capitalName}</Text>
            <NavLink to={`/country/${key}`}>{t('messages.learn_more')}</NavLink>
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
