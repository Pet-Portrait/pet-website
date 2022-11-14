import React, { FC } from 'react';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import { StaticImage } from 'gatsby-plugin-image';

import LogoIcon from 'components/shared/LogoIcon/LogoIcon';

import * as classes from './Footer.module.scss';

const Footer: FC = () => (
  <>
    <div className={classes.blob}>
      <StaticImage
        alt=""
        className={classes.blobMobile}
        layout="fullWidth"
        placeholder="tracedSVG"
        src="../../../images/footer-blob-mobile.png"
      />
      <StaticImage
        alt=""
        className={classes.blobDesktop}
        layout="fullWidth"
        placeholder="tracedSVG"
        src="../../../images/footer-blob-desktop.png"
      />
    </div>
    <footer className={classes.root}>
      <div className={classes.container}>
        <LogoIcon className={classes.logo} />
        <ul className={classes.list}>
          <li className={classes.heading}>Nawigacja</li>
          <li className={classes.listItem}>
            <Link className={classes.link} to="/">
              Strona główna
            </Link>
          </li>
          <li className={classes.listItem}>
            <Link className={classes.link} to="/o-nas">
              Kim jesteśmy
            </Link>
          </li>
          <li className={classes.listItem}>
            <Link className={classes.link} to="/licytacje">
              Licytacje
            </Link>
          </li>
          <li className={classes.listItem}>
            <Link className={classes.link} to="/artysci">
              Artyści i artystki
            </Link>
          </li>
          <li className={classes.listItem}>
            <Link className={classes.link} to="/psiaki-adopcyjne">
              Psiaki adopcyjne
            </Link>
          </li>
        </ul>
        <ul className={classes.list}>
          <li className={classes.heading}>Inne</li>
          <li className={classes.listItem}>
            <Link className={classes.link} to="/polityka-prywatnosci">
              Polityka prywatności
            </Link>
          </li>
          <li className={classes.listItem}>
            <OutboundLink
              className={classes.link}
              href="https://rasowykundel.org/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Strona fundacji
            </OutboundLink>
          </li>
          <li className={classes.listItem}>
            <Link className={classes.link} to="/TODO">
              Dla mediów
            </Link>
          </li>
        </ul>
        <ul className={classes.list}>
          <li className={classes.heading}>Kontakt</li>
          <li className={classes.listItem}>
            <OutboundLink className={classes.link} href="mailto:petxportrait@gmail.com">
              petxportrait@gmail.com
            </OutboundLink>
          </li>
        </ul>
        <div className={classes.socialsWrapper}>
          <h3>Pozostań z nami!</h3>
          <ul className={classes.socials}>
            <li className={classes.listItem}>
              <OutboundLink
                href="https://www.facebook.com/petxportrait"
                rel="noopener noreferrer"
                target="_blank"
              >
                <StaticImage
                  alt="Facebook"
                  placeholder="tracedSVG"
                  src="../../../images/facebook.png"
                />
              </OutboundLink>
            </li>
            <li className={classes.listItem}>
              <OutboundLink
                href="https://www.instagram.com/petxportrait/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <StaticImage
                  alt="Instagram"
                  placeholder="tracedSVG"
                  src="../../../images/instagram.png"
                />
              </OutboundLink>
            </li>
            <li className={classes.listItem}>
              <OutboundLink href="mailto:petxportrait@gmail.com">
                <StaticImage
                  alt="Facebook"
                  placeholder="tracedSVG"
                  src="../../../images/envelope.png"
                />
              </OutboundLink>
            </li>
          </ul>
        </div>
      </div>
      <p className={classes.copy}>pet portrait &copy; 2022</p>
    </footer>
  </>
);

export default Footer;