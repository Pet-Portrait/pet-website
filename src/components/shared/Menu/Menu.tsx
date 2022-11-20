import React, { FC, useEffect, useState } from 'react';
import { Link } from 'gatsby';

import useResponsive from 'hooks/useResponsive';

import Hamburger from './Hamburger/Hamburger';

import * as classes from './Menu.module.scss';

const TIME_TO_APPEAR_IN_MS = 1000;

const Menu: FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { isDesktop } = useResponsive();

  const handleClick = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, TIME_TO_APPEAR_IN_MS);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className={`${classes.root} ${isVisible ? classes.isVisible : ''}`}>
      <button
        className={`${classes.button} ${isActive ? classes.buttonActive : ''}`}
        onClick={handleClick}
        type="button"
      >
        Menu
        <Hamburger isOpen={isActive} />
      </button>
      <ul className={`${classes.list} ${isActive ? classes.listActive : ''}`}>
        <li className={classes.listItem}>
          <Link
            activeClassName={classes.activeLink}
            className={classes.link}
            tabIndex={isActive || isDesktop ? 0 : -1}
            to="/"
          >
            Strona główna
          </Link>
        </li>
        <li className={classes.listItem}>
          <Link
            activeClassName={classes.activeLink}
            className={classes.link}
            tabIndex={isActive || isDesktop ? 0 : -1}
            to="/licytacje"
          >
            Licytacje
          </Link>
        </li>
        <li className={classes.listItem}>
          <Link
            activeClassName={classes.activeLink}
            className={classes.link}
            tabIndex={isActive || isDesktop ? 0 : -1}
            to="/artysci"
          >
            Artystki i Artyści
          </Link>
        </li>
        <li className={classes.listItem}>
          <Link
            activeClassName={classes.activeLink}
            className={classes.link}
            tabIndex={isActive || isDesktop ? 0 : -1}
            to="/o-nas"
          >
            Kim jesteśmy
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
