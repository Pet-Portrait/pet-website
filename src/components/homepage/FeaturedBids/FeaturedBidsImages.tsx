import React, { FC, useEffect, useRef } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import useIntersectionObserver from 'hooks/useIntersectionObserver';
import useResponsive from 'hooks/useResponsive';

import { FeaturedImage } from '../Homepage.types';

import * as classes from './FeaturedBidsImages.module.scss';

interface Props {
  images: FeaturedImage[];
}

const FeaturedBidsImages: FC<Props> = ({ images }) => {
  const { isDesktop } = useResponsive();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(wrapperRef, { threshold: 0.4 });

  useEffect(() => {
    const setImagesPosition = () => {
      if (!isDesktop || !wrapperRef.current?.children) return;
      const angle = 360 / wrapperRef.current.children.length - 1;
      const CIRCLE_RADIUS = 300;

      (Array.from(wrapperRef.current.children) as HTMLAnchorElement[]).forEach(
        (imageRef, index) => {
          if (!imageRef) return;
          if (index === 0) {
            imageRef.style.transform = `translate(50%, 50%) rotate(0deg)`;
            return;
          }

          const rotation = angle * (index - 1);
          imageRef.style.transform = `translate(50%, 50%) rotate(${rotation}deg) translate(${CIRCLE_RADIUS}px) rotate(${-rotation}deg)`;
        },
      );
    };

    if (isInView) setImagesPosition();
  }, [isDesktop, isInView]);

  return (
    <div ref={wrapperRef} className={classes.images}>
      {images.map((image) => (
        <a
          key={image.alt}
          className={classes.link}
          href={image.url}
          rel="noopener noreferrer"
          target="_blank"
        >
          <GatsbyImage alt={image.alt} className={classes.image} image={image.image} />
        </a>
      ))}
    </div>
  );
};

export default FeaturedBidsImages;
