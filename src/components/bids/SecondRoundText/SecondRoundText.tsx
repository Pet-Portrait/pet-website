import React, { FC } from 'react';

import * as classes from './SecondRoundText.module.scss';

const SecondRoundText: FC = () => (
  <section className={classes.root}>
    <h2 className={classes.heading}>Dogrywka</h2>
    <p>
      Nie udało Ci się wylicytować żadnej pracy w tegorocznej edycji Pet Portrait? Głowa do góry,
      nic straconego! Nie przegap ostatniej szansy i już teraz wylicytuj jedną z 15 wspaniałych
      zwierzakowych prac. W drugiej turze licytacji możesz również zakupić nasze „cegiełki”
      autorstwa Muflon Studio - to do list oraz planery w dwóch wersjach kolorystycznych. Dogrywka
      licytacji odbywa się w dniach 5 - 9 XII do godziny 20:00 na platformie Allegro Charytatywni.
      Trzymamy kciuki za udane licytacje!
    </p>
  </section>
);

export default SecondRoundText;
