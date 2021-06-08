import React, { useContext } from 'react';
import context from '@context/appContext.js';
import { Link } from 'react-router-dom';
import '@styles/components/Header.styl';
import logo from '@assets/gndx.png';
import Title from '@components/title';

const Header = () => {
  const card = useContext(context);

  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">
          <img src={logo} alt="logo" width={32} />
          <Title title="Platzi Store :c" />
        </Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket" />
        </Link>
        {card.cart.length > 0 && (
          <div className="Header-alert">{card.cart.length}</div>
        )}
      </div>
    </div>
  );
};

export default Header;
