import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { setLang } from '../../store/actions/actions';
// import { countryAction } from '../../store/reducers/countryReducer';

const DropDown = () => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const language = useSelector((state) => state.main.lang);

  const setLanguage = (lang) => dispatch(setLang(lang));

  const changeLanguage = (lng) => {
    const lang = lng || 'en';
    i18n.changeLanguage(lang);
    setLanguage(lang);
    // const setGameSettings = (lngToSet) => dispatch(setLanguage(lngToSet));
    // setParamToStorage('lang', lang);
  };
  return (
    <DropdownButton id="dropdown-basic-button" title={language}>
      <Dropdown.Item onSelect={(eventKey, e) => changeLanguage('en')}>English</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onSelect={(eventKey, e) => changeLanguage('ru')}>Russian</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onSelect={(eventKey, e) => changeLanguage('fr')}>French</Dropdown.Item>
    </DropdownButton>
  );
};

export default DropDown;
