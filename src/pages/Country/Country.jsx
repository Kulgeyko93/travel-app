import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image, Spinner } from 'react-bootstrap';
// import Gallery from 'react-grid-gallery';
import {
  fetchCountry,
  selectCountryStatus,
  selectCountryError,
  selectCountryData,
} from '../../features/country/countrySlice';
import { statuses } from '../../features/constants';
import './country.scss';

// const Country = () => {
//   const country = useSelector((state) => state.main.country);
//   const IMAGES = [
//     {
//       src: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',
//       thumbnail: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg',
//       thumbnailWidth: 320,
//       thumbnailHeight: 174,
//       isSelected: true,
//       caption: 'After Rain (Jeshu John - designerspics.com)',
//     },
//     {
//       src: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
//       thumbnail: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg',
//       thumbnailWidth: 320,
//       thumbnailHeight: 212,
//       tags: [
//         { value: 'Ocean', title: 'Ocean' },
//         { value: 'People', title: 'People' },
//       ],
//       caption: 'Boats (Jeshu John - designerspics.com)',
//     },

//     {
//       src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
//       thumbnail: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg',
//       thumbnailWidth: 320,
//       thumbnailHeight: 212,
//     },
//   ];
//   return (
//     <div className="country">
//       <div className="country__name">{country}</div>
//       1 312313
//       <Gallery images={IMAGES} />
//     </div>
//   );
// };

// export default Country;

const Country = (props) => {
  const { match } = props;
  const { countryId } = match.params;
  const dispatch = useDispatch();
  const countryStatus = useSelector(selectCountryStatus);
  const countryData = useSelector(selectCountryData);
  const countryError = useSelector(selectCountryError);

  useEffect(() => {
    dispatch(fetchCountry(countryId));
  }, [dispatch, countryId]);

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
};

export default Country;
