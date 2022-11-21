import React, { FC } from 'react';

import Button from 'components/shared/Button/Button';

import * as classes from './AllBidsText.module.scss';

const AllBidsText: FC = () => (
  <div className={classes.root}>
    <p className="text--large">
      To już wszystkie licytacje na naszej stronie. Jeżeli chcesz zobaczyć więcej informacji o
      konkretnym dziele możesz kliknąć na któreś z powyższych dzieł lub kliknąć poniższy przycisk,
      aby sprawdzić wszystkie nasze aukcje na Allegro Charytatywni.
    </p>
    <Button
      className={classes.button}
      href="https://allegro.pl/charytatywni/fundacja-rasowy-kundel/cele/pet-portrait-x-rasowy-kundel"
      isExternal
    >
      Zobacz wszystkie licytacje
    </Button>
  </div>
);

export default AllBidsText;
