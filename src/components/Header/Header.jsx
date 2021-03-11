import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectCountriesStatus,
  selectCountriesData,
} from '../../features/countries/countriesSlice';
import { statuses } from '../../features/constants';

const Header = () => {
  const Main = 'Main';
  const countriesStatus = useSelector(selectCountriesStatus);
  const countriesData = useSelector(selectCountriesData);

  let countryLinks = null;
  if (countriesStatus === statuses.SUCCEEDED) {
    countryLinks = countriesData.reduce((acc, country) => {
      const countryLink = (
        <NavLink key={country.id} to={`/countries/${country.id}`}>
          {country.name}
        </NavLink>
      );
      return acc === null ? [' ', countryLink] : [...acc, ' ', countryLink];
    }, null);
  }

  return (
    <div className="Header">
      <NavLink to="/">{Main}</NavLink>
      {countryLinks}
    </div>
  );
};

export default Header;
