import React, { FC } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from 'components/Layout/Layout';
import blob from 'images/backgrounds/background-adoption.svg';

import * as classes from './AboutUs.module.scss';

const AboutUs: FC = () => (
  <Layout>
    <img alt="" className={classes.blob} src={blob} />
    <div className={classes.container}>
      <div className={classes.imageWrapper}>
        <StaticImage
          alt="4 psy na wystawie Pet Portrait"
          className={classes.image}
          src="../../images/dogs.jpg"
          width={700}
        />
      </div>
      <h1>O nas</h1>
      <p>
        Pet Portrait to inicjatywa stworzona z pasji do sztuki i miłości do zwierząt. Od 2020 roku
        zostały zorganizowane dwie edycje akcji, które były oparte na internetowych licytacjach
        dzieł ponad 200 polskich malarzy i grafików. Działania Pet Portrait umożliwiły przekazanie
        łącznie 40 000 zł na rzecz podopiecznych Fundacji Przyjaciele Palucha oraz Fundacji Znajdki.
      </p>
      <section>
        <h2 className={classes.subheading}>Tegoroczna edycja</h2>
        <p className={classes.paragraph}>
          W dniach 21 XI - 26 XI na platformie Allegro Charytatywni będzie można wylicytować
          zwierzakowe dzieła. Po raz pierwszy będzie można też odwiedzić w Warszawie stacjonarną
          wystawę wszystkich tegorocznych prac. Wystawa odbędzie się w Elektrowni Powiśle (ul. Dobra
          42, drugie piętro) w dniach trwania internetowej licytacji, w godz. 12:00 - 20:00.
        </p>
        <p className={classes.paragraph}>
          Trzecia edycja Pet Portrait jest realizowana we współpracy z Fundacją Rasowy Kundel, która
          działa nieformalnie od 2011 roku, jako fundacja zaś od 5 lat. Przez lata przez organizację
          przewinęły się setki psów i kotów z interwencji czy wypadków — skrzywdzonych i
          zapomnianych przez człowieka. I chociaż świadomość skali bezdomności zwierząt w Polsce
          rośnie, to ich liczba wcale nie maleje. Dlatego od 2020 roku Fundacja Rasowy Kundel skupia
          się przede wszystkim na działaniach prewencyjnych w walce z bezdomnością. W tegorocznym
          Pet Portrait bierze udział ponad 100 Artystek i Artystów, którzy przekazali na licytację:
          grafiki, ilustracje, obrazy, rękodzieła haftowane oraz ceramikę. Akcję wspierają
          charytatywnie m.in. Elektrownia Powiśle, Presejo, Psyjaciele, Piesotto oraz Muflon Studio,
          a patronują honorowo Loesje, Targi Plakatu i Prêt-à-create.
        </p>
      </section>
      <section>
        <h2 className={classes.subheading}>Nasz zespół</h2>
        <div className={classes.imageWrapper}>
          <StaticImage
            alt="Zespół pet portrait"
            placeholder="blurred"
            src="../../images/team.png"
          />
        </div>
      </section>
    </div>
  </Layout>
);

export default AboutUs;
