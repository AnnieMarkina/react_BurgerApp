import React from 'react';
import classes from './Logo.css';
import BurgerLogo from '../../assets/images/burger-logo.png';

const Logo = (props) => (
  <div className={classes.Logo}>
    <img src={BurgerLogo} alt="logo" />
  </div>
);

export default Logo;
