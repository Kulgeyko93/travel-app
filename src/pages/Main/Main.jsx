/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-useless-return */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { setCountry, setIndexSlideCountry } from '../../store/actions/actions';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import data from '../../data';
import './main.scss';

const Main = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const setCountr = (country) => dispatch(setCountry(country));
  const setIndex = (index) => dispatch(setIndexSlideCountry(index));

  const getIndex = useSelector((state) => state.main.indexCountry);
  const getCountry = useSelector((state) => state.main.country);

  const [countryNow, setCountryNow] = useState(getCountry);

  const getArrayCoutnry = (countries) => {
    const arrCountry = [];
    for (const item in countries) {
      arrCountry.push([countries[item].name, countries[item].imageUrl]);
    }
    return arrCountry;
  };

  const handleCountry = (countryIndex) => {
    switch (countryIndex) {
      case '2': {
        setCountryNow('Italy');
        setIndex(1);
        break;
      }
      case '3': {
        setCountryNow('Spain');
        setIndex(2);
        break;
      }
      case '4': {
        setCountryNow('USA');
        setIndex(3);
        break;
      }
      case '5': {
        setCountryNow('Australia');
        setIndex(4);
        break;
      }
      case '6': {
        setCountryNow('England');
        setIndex(5);
        break;
      }
      case '7': {
        setCountryNow('Irland');
        setIndex(6);
        break;
      }
      case '8': {
        setCountryNow('France');
        setIndex(7);
        break;
      }
      default: {
        setCountryNow('Brazil');
        setIndex(0);
        break;
      }
    }
  };

  useEffect(() => {
    document.querySelectorAll('.slick-dots button').forEach((item) => {
      item.addEventListener('click', () => {
        handleCountry(item.textContent);
      });
    });
  });

  return (
    <div className="main__page">
      <div className="slider">
        <Slider
          {...{
            arrows: false,
            dots: true,
            AdaptiveHeight: true,
            initialSlide: getIndex,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
          }}
        >
          {getArrayCoutnry(data).map((item) => (
            <div key={item[0]} className="slider_component">
              <h2>{t(`main.${item[0].toLowerCase()}.name`)}</h2>
              <img src={item[1]} alt={item[0]} />
            </div>
          ))}
        </Slider>
        <NavLink to="/country">
          <div className="route__btn" onClick={() => setCountr(countryNow.toLowerCase())}>
            <Button variant="light">
              {t(`main.to`)} {t(`main.${countryNow.toLowerCase()}.name`)}
            </Button>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Main;
