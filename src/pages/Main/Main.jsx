/* eslint-disable no-useless-return */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Slider from 'react-slick';
import { setCountry } from '../../store/actions/actions';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './main.scss';

const Main = () => {
  const dispatch = useDispatch();
  const setCountr = (country) => dispatch(setCountry(country));

  const handleClickSlider = (e) => {
    if (e.className === 'slick-dots') return;
    switch (e.textContent) {
      case '1': {
        setCountr('spain');
        break;
      }
      case '2': {
        setCountr('brazil');
        break;
      }
      case '3': {
        setCountr('usa');
        break;
      }
      case '4': {
        setCountr('netherlands');
        break;
      }
      case '5': {
        setCountr('new york');
        break;
      }
      case '6': {
        setCountr('australia');
        break;
      }
      case '7': {
        setCountr('italy');
        break;
      }
      default: {
        setCountr('england');
      }
    }
  };

  useEffect(() => {
    document.querySelector('.slider ul').addEventListener('click', (e) => handleClickSlider(e.target));
  });

  return (
    <div className="Main">
      <div className="slider">
        <Slider
          {...{
            dots: true,
            AdaptiveHeight: true,
            initialSlide: 0,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
          }}
        >
          <div className="slider_component">
            <h2>Spain</h2>
            <img src="https://fainaidea.com/wp-content/uploads/2019/06/acastro_190322_1777_apple_streaming_0003.0.jpg" />
          </div>
          <div className="slider_component">
            <h2>Brazil</h2>
            <img src="https://fainaidea.com/wp-content/uploads/2019/06/acastro_190322_1777_apple_streaming_0003.0.jpg" />
          </div>
          <div className="slider_component">
            <h2>USA</h2>
            <img src="https://fainaidea.com/wp-content/uploads/2019/06/acastro_190322_1777_apple_streaming_0003.0.jpg" />
          </div>
          <div className="slider_component">
            <h2>Netherlands</h2>
            <img src="https://fainaidea.com/wp-content/uploads/2019/06/acastro_190322_1777_apple_streaming_0003.0.jpg" />
          </div>
          <div className="slider_component">
            <h2>New York</h2>
            <img src="https://fainaidea.com/wp-content/uploads/2019/06/acastro_190322_1777_apple_streaming_0003.0.jpg" />
          </div>
          <div className="slider_component">
            <h2>Australia</h2>
            <img src="https://fainaidea.com/wp-content/uploads/2019/06/acastro_190322_1777_apple_streaming_0003.0.jpg" />
          </div>
          <div className="slider_component">
            <h2>Italy</h2>
            <img src="https://fainaidea.com/wp-content/uploads/2019/06/acastro_190322_1777_apple_streaming_0003.0.jpg" />
          </div>
          <div className="slider_component">
            <h2>England</h2>
            <img src="https://fainaidea.com/wp-content/uploads/2019/06/acastro_190322_1777_apple_streaming_0003.0.jpg" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Main;
