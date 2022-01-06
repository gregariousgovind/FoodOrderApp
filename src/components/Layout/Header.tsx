import React, { Fragment } from 'react';
import HeaderCartButton from '../Layout/HeaderCartButton';

import './Header.scss';

const Header = (props) => {
  return (
    <React.Fragment>
      <header className="header">
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className="main-image">
        <img
          src="https://images.pexels.com/photos/6954466/pexels-photo-6954466.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="A tabel full of delicious food!"
        />
      </div>
    </React.Fragment>
  );
};

export default Header;
