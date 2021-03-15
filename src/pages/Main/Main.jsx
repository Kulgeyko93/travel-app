/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-useless-return */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useDispatch } from 'react-redux';
import Slider from 'react-slick';
import { NavLink } from 'react-router-dom';
import { setCountry } from '../../store/actions/actions';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import data from '../../data';
import './main.scss';

const Main = () => {
  const dispatch = useDispatch();
  const setCountr = (country) => dispatch(setCountry(country));

  const getArrayCoutnry = (countries) => {
    const arrCountry = [];
    for (const item in countries) {
      arrCountry.push([countries[item].name, countries[item].imageUrl]);
    }

    return arrCountry;
  };

  const handleCountry = (country) => {
    console.dir(country.textContent);
    setCountr(country);
  };

  return (
    <div className="main__page">
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
          {/* {getArrayCoutnry(data).map((item) => (
            <div key={item[0]} className="slider_component">
              <h2>{item[0]}</h2>
              <img src={item[1]} alt={item[0]} />
              <div
                className="toCountry"
                onClick={() => {
                  console.log(item[0].toLowerCase());
                  handleCountry(item[0].toLowerCase());
                }}
              >
              <NavLink
                onClick={(e) => {
                  console.log(item[0].toLowerCase());
                  handleCountry(e.target);
                }}
                to="/country"
              >
                To {item[0]}
              </NavLink>
              </div>
            </div>
          ))} */}
          <div className="slider_component">
            <h2>Brazil</h2>
            <img src="https://fainaidea.com/wp-content/uploads/2019/06/acastro_190322_1777_apple_streaming_0003.0.jpg" />
            <div className="toCountry">
              <NavLink to="/country" onClick={() => handleCountry('brazil')}>
                To Brazil
              </NavLink>
            </div>
          </div>
          <div className="slider_component">
            <h2>Italy</h2>
            <img src="https://fainaidea.com/wp-content/uploads/2019/06/acastro_190322_1777_apple_streaming_0003.0.jpg" />
            <NavLink to="/country" onClick={() => setCountr('italy')}>
              To Italy
            </NavLink>
          </div>
          <div className="slider_component">
            <h2>Spain</h2>
            <img src="https://fainaidea.com/wp-content/uploads/2019/06/acastro_190322_1777_apple_streaming_0003.0.jpg" />
            <NavLink to="/country">To Spain</NavLink>
          </div>
          <div className="slider_component">
            <h2>USA</h2>
            <img src="https://fainaidea.com/wp-content/uploads/2019/06/acastro_190322_1777_apple_streaming_0003.0.jpg" />
            <NavLink to="/country" onClick={() => handleCountry('usa')}>
              To USA
            </NavLink>
          </div>
          <div className="slider_component">
            <h2>Australia</h2>
            <img src="https://fainaidea.com/wp-content/uploads/2019/06/acastro_190322_1777_apple_streaming_0003.0.jpg" />
            <NavLink to="/country" onClick={() => handleCountry('australia')}>
              To Australia
            </NavLink>
          </div>
          <div className="slider_component">
            <h2>England</h2>
            <img src="https://fainaidea.com/wp-content/uploads/2019/06/acastro_190322_1777_apple_streaming_0003.0.jpg" />
            <NavLink to="/country" onClick={() => handleCountry('england')}>
              To England
            </NavLink>
          </div>
          <div className="slider_component">
            <h2>Ireland</h2>
            <img src="https://fainaidea.com/wp-content/uploads/2019/06/acastro_190322_1777_apple_streaming_0003.0.jpg" />
            <NavLink to="/country" onClick={() => handleCountry('irland')}>
              To Ireland
            </NavLink>
          </div>
          <div className="slider_component">
            <h2>France</h2>
            <img src="https://fainaidea.com/wp-content/uploads/2019/06/acastro_190322_1777_apple_streaming_0003.0.jpg" />
            <NavLink to="/country" onClick={() => handleCountry('france')}>
              To France
            </NavLink>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Main;
