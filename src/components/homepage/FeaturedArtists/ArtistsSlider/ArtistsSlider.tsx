import React, { FC } from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

import { Artist } from 'types/artist';

import ArtistsSliderItem from './ArtistsSliderItem/ArtistsSliderItem';

import 'swiper/css';
import './slider.scss';

interface Props {
  artists: Artist[];
}
const sliderSettings: SwiperProps = {
  spaceBetween: 16,
  slidesPerView: 'auto',
  loopedSlides: 5,
  loop: true,
  touchEventsTarget: 'container',
};

const ArtistsSlider: FC<Props> = ({ artists }) => (
  <Swiper {...sliderSettings}>
    {artists.map((artist) => (
      <SwiperSlide key={artist.id}>
        <ArtistsSliderItem avatar={artist.avatar} id={artist.id} name={artist.name} />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default ArtistsSlider;
