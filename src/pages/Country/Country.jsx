import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Gallery from 'react-grid-gallery';
import Spinner from 'react-bootstrap/Spinner';
import { useTranslation } from 'react-i18next';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import data from '../../data';
import './country.scss';

const Country = () => {
  const { t } = useTranslation();
  const country = useSelector((state) => state.main.country);

  const [isLoad, setIsLoad] = useState(false);

  const { imageUrl, galery, videoUrl } = data[`${country}`];

  const GALARY = galery.map((item, index) => {
    return {
      src: item.img,
      thumbnail: item.img,
      thumbnailWidth: 100,
      thumbnailHeight: 50,
      isSelected: true,
      caption: t(`main.${country}.galery${index}`),
    };
  });

  useEffect(() => {
    setTimeout(() => setIsLoad(true), 1000);
  }, [country]);

  return (
    <div className="country">
      {!isLoad ? (
        <Spinner animation="border" variant="success" />
      ) : (
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
            <Gallery images={GALARY} enableLightbox backdropClosesModal />
          </div>
          <div className="video">
            <VideoPlayer videoId={videoUrl} />
          </div>
        </>
      )}
    </div>
  );
};

export default Country;
