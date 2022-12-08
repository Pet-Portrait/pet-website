import React, { FC } from 'react';

import * as classes from './FinishedText.module.scss';

const FinishedText: FC = () => (
  <section className={classes.root}>
    <h2 className={classes.heading}>Wylicytowane</h2>
    <p>
      Plakaty, obrazy, ceramika, a nawet haft! Wszystkie przedstawione poniżej zwierzakowe dzieła
      podczas tegorocznej edycji Pet Portrait, zdołały odnaleźć swojego właściciela i tym samym
      pomogły wesprzeć Rasowego Kundla. Ich widok cieszy nie tylko oko, ale także duszę - jako że są
      one niezaprzeczalnym symbolem dobra i chęci niesienia pomocy. Mamy nadzieję, że pozostaną nie
      tylko symbolem pasji i dobra, ale dla wielu staną się także inspiracją. Zainspiruj się i
      pozwól kolejnej pracy dołączyć do tego zacnego grona!
    </p>
  </section>
);

export default FinishedText;
