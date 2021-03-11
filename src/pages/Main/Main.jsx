import React from 'react';
import { useSelector } from 'react-redux';
// import { countryAction } from '../../store/reducers/countryReducer';

const Main = () => {
  const balbla = 'Main';
  const country = useSelector((state) => state);
  console.log(country);
  return <div className="Main">{balbla}</div>;
};

export default Main;
