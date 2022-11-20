import React, { FC, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'gatsby';

import { sendCookiesDecision } from 'utils/analytics';

import Button from '../Button/Button';

import './modal.scss';
import * as classes from './CookieBanner.module.scss';

Modal.setAppElement('#___gatsby');

const TIME_TO_SHOW_COOKIE_BANNER = 3000;
const COOKIES_ACCEPTED = 'COOKIES_ACCEPTED';

const CookieBanner: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!localStorage.getItem(COOKIES_ACCEPTED)) {
      timeout = setTimeout(() => setIsOpen(true), TIME_TO_SHOW_COOKIE_BANNER);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const handleAccept = () => {
    setIsOpen(false);
    localStorage.setItem(COOKIES_ACCEPTED, 'true');
    sendCookiesDecision(true);
  };

  const handleReject = () => {
    setIsOpen(false);
    localStorage.setItem(COOKIES_ACCEPTED, 'false');
    sendCookiesDecision(true);
  };

  return (
    <Modal
      className={classes.modal}
      closeTimeoutMS={400}
      isOpen={isOpen}
      onRequestClose={handleReject}
      overlayClassName={classes.overlay}
      shouldFocusAfterRender={false}
    >
      <div className={classes.content}>
        <section>
          <h3 className={classes.heading}>Pomóż nam pomagać zwierzakom lepiej!</h3>
          <p>
            Dzięki wykorzystaniu rozwiązań takich jak pliki Cookie, możemy dowiedzieć się jak
            rozwijać naszą stronę, i dzięki temu działać jeszcze lepiej i jeszcze bardziej pomagać
            zwierzętom. Wyrażając zgodę na przechowywanie informacji na urządzeniu końcowym lub
            dostęp do nich, przetwarzanie danych, w tym w obszarze profilowania, analiz rynkowych i
            statystycznych, pomagasz nam dostosować stronę, aby była jak najbardziej przystępna dla
            Ciebie, a także innych użytkowników.
          </p>
          <Link className={classes.link} to="/politka-prywatnosci">
            Kliknij tutaj i sprawdź naszą politykę cookies oraz przetwarzania danych osobowych.
          </Link>
        </section>
      </div>
      <div className={classes.buttons}>
        <Button className={classes.reject} onClick={handleReject}>
          Nie zgadzam się
        </Button>
        <Button className={classes.accept} onClick={handleAccept}>
          Zgadzam się
        </Button>
      </div>
    </Modal>
  );
};

export default CookieBanner;
