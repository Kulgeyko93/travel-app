import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image, Spinner } from 'react-bootstrap';
import {
  fetchCountry,
  selectCountryStatus,
  selectCountryError,
  selectCountryData,
} from './countrySlice';
import { statuses } from '../constants';

export default function Country(props) {
  const { match } = props;
  const { countryId } = match.params;
  const dispatch = useDispatch();
  const stableDispatch = useCallback(dispatch, []);
  const countryStatus = useSelector(selectCountryStatus);
  const countryData = useSelector(selectCountryData);
  const countryError = useSelector(selectCountryError);

  useEffect(() => {
    stableDispatch(fetchCountry(countryId));
  }, [stableDispatch, countryId]);

  let content = null;
  if (countryStatus === statuses.LOADING) {
    content = <Spinner animation="border" role="status" variant="primary" />;
  } else if (countryStatus === statuses.SUCCEEDED) {
    content = (
      <div>
        <Image width={400} src={countryData.imageUrl} fluid thumbnail />
        <h1>{countryData.name}</h1>
        <h2>{countryData.capital}</h2>
        <p>{countryData.description}</p>
      </div>
    );
  } else if (countryStatus === statuses.FAILED) {
    content = countryError.message || 'Unknown error';
  }

  return content;
}
