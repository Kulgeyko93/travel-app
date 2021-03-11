import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const Main = 'Main';

  return (
    <div className="Header">
      <NavLink to="/">{Main}</NavLink>
      <NavLink to="/Country">Country</NavLink>
    </div>
  );
};

export default Header;
