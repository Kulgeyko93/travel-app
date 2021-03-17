import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FormControl, Button, InputGroup } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import { useTranslation } from 'react-i18next';

const Formcontrol = () => {
  const { t } = useTranslation();
  const [cuntryInput, setCountryInput] = useState('');
  const [routeTrue, setRouteTrue] = useState(false);
  const country = ['brazil', 'spain', 'italy', 'usa', 'australia', 'england', 'irland', 'france'];

  return (
    <>
      <FormControl
        placeholder={t('header.search')}
        aria-label={t('header.search')}
        aria-describedby="basic-addon2"
        onChange={(e) => {
          setCountryInput(e.target.value);
          setRouteTrue(country.includes(e.target.value));
        }}
      />
      <InputGroup.Append>
        {routeTrue ? (
          <NavLink to={`/country/${cuntryInput.toLowerCase()}`}>
            <Button variant="outline-info">
              <Search />
            </Button>
          </NavLink>
        ) : (
          <Button variant="outline-info">
            <Search />
          </Button>
        )}
      </InputGroup.Append>
    </>
  );
};

export default Formcontrol;
