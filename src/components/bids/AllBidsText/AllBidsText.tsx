import React, { FC } from 'react';

import Button from 'components/shared/Button/Button';

import * as classes from './AllBidsText.module.scss';

const AllBidsText: FC = () => (
  <div className={classes.root}>
    <p className="text--large">
      To już wszystkie licytacje na naszej stronie. Jeżeli chcesz zobaczyć więcej informacji o
      konkretnym dziele możesz kliknąć na któreś z powyższych dzieł lub kliknąć poniższy przycisk,
      aby sprawdzić wszystkie nasze aukcje na Allegro Charytatywni. PKP Intercity jest znakomity,
      rodem z kroniki filmowej PRL. Czytamy na stornie internetowej wpis z 15 grudnia: „pomimo
      trudnych warunków pogodowych PKP Intercity z powodzeniem i nieprzerwanie prowadzi ruch
      pociągów, a pasażerowie docierają do stacji docelowych”. (…) Czytamy dalej: wystartował
      niezwykły projekt Intercity Kino Polska. Pasażerom serwuje się filmy Barei: Poszukiwany,
      poszukiwana, albo Lekarstwo na miłość. A może poleciłby pan panie ministrze projekcję
      tasiemców filmowych na długą podróż – na przykład Niewolnica Isaura, albo dla rozrywki Pociąg
      widmo? Niestety horroru nie polecam, horror przeżywają pasażerowie.
    </p>
    <Button className={classes.button} to="">
      Zobacz wszystkie licytacje
    </Button>
  </div>
);

export default AllBidsText;
