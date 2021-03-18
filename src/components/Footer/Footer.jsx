import * as React from 'react';
import logo from '../../assets/img/rs_school_js.svg';

const Footer = () => (
  <footer className="footer">
    <div className="footer__content">
      <span>
        &nbsp;
        <a href="https://github.com/Kulgeyko93" target="_blank" rel="noreferrer">
          Kulgeyko93
        </a>
        &nbsp;
        <a href="https://github.com/burhonov" target="_blank" rel="noreferrer">
          Burhonov
        </a>
      </span>
    </div>
    <span>
      <a href="https://rs.school/js/" target="_blank" rel="noreferrer">
        <img alt="logo" className="logo" src={logo} style={{ width: '50px', height: '50px' }} />
      </a>
      2021
    </span>
  </footer>
);

export default Footer;
