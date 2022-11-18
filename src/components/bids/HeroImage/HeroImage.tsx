import React, { FC } from 'react';

import * as classes from './HeroImage.module.scss';

const HeroImage: FC = () => (
  <section>
    <div>
      <h1 className={classes.heading}>Weź udział w licytacji i wesprzyj bezdomne zwierzaki!</h1>
      <p>
        Myślę, że warto podać zwycięski skład Kaiserslautern z meczu z Bayernem w sezonie 97/98:
        Renke, Kadlec, H. Koch (31. Hristov), Kuka, Marschall, Ratinho (75. Reich), Roos,
        Schjönberg, Schäfer, Sforza, M. Wagner. I jeszcze Ballack.
      </p>
    </div>
  </section>
);

export default HeroImage;
