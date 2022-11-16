import React, { FC, useState } from 'react';
import { Link } from 'gatsby';

import Hamburger from './Hamburger/Hamburger';

import * as classes from './Menu.module.scss';

const Menu: FC = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };
  return (
    <div className={classes.root}>
      <ul className={`${classes.list} ${isActive ? classes.listActive : ''}`}>
        <li className={classes.listItem}>
          <Link className={classes.link} to="/">
            Licytacje
          </Link>
        </li>
        <li className={classes.listItem}>
          <Link className={classes.link} to="/">
            Artystki i Artyści
          </Link>
        </li>
        <li className={classes.listItem}>
          <Link className={classes.link} to="/o-nas">
            Kim jesteśmy
          </Link>
        </li>
        <li className={classes.listItem}>
          <Link className={classes.link} to="/psiaki-adopcyjne">
            Psiaki adopcyjne
          </Link>
        </li>
      </ul>
      <button
        className={`${classes.button} ${isActive ? classes.buttonActive : ''}`}
        onClick={handleClick}
        type="button"
      >
        Menu
        <Hamburger isOpen={isActive} />
      </button>
    </div>
  );
};

export default Menu;
