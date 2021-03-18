import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Gallery from 'react-grid-gallery';
import Spinner from 'react-bootstrap/Spinner';
import { useTranslation } from 'react-i18next';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import './country.scss';
import { fetchCountry, selectCountryData, selectCountryStatus } from '../../features/country/countrySlice';
import { statuses } from '../../features/constants';

const Country = (props) => {
  const { match } = props;
  const { name } = match.params;
  const dispatch = useDispatch();
  const countryStatus = useSelector(selectCountryStatus);
  const countryData = useSelector(selectCountryData);

  const { t } = useTranslation();
  const country = useSelector((state) => state.main.country);

  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    dispatch(fetchCountry(name));
  }, [dispatch, name]);

  useEffect(() => {
    setTimeout(() => setIsLoad(true), 1000);
  }, [name]);

  let content = null;
  if (countryStatus === statuses.LOADING || !isLoad) {
    content = <Spinner animation="border" variant="primary" />;
  } else if (countryStatus === statuses.SUCCEEDED) {
    const { imageUrl, gallery, videoUrl } = countryData;

    const GALLERY = gallery.map((item, index) => {
      return {
        src: item.img,
        thumbnail: item.img,
        thumbnailWidth: 100,
        thumbnailHeight: 50,
        isSelected: true,
        caption: t(`main.${country}.galery${index}`),
      };
    });

    content = (
      <>
        <div className="country__main-info">
          <div className="country__main-info__img">
            <img src={imageUrl} alt={`country-${country}`} />
          </div>
          <div className="country__main-info__info">
            <div className="text">{t(`main.${country}.description`)}</div>
          </div>
        </div>
        <div className="country__galary">
          <Gallery images={GALLERY} enableLightbox backdropClosesModal />
        </div>
        <div className="video">
          <VideoPlayer videoId={videoUrl} />
        </div>
      </>
    );
  } else if (countryStatus === statuses.FAILED) {
    content = t('messages.error');
  }

  return <div className="country">{content}</div>;
};

export default Country;
