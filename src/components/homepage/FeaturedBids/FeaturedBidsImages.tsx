import React, { FC, useCallback, useRef } from 'react';
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

  const setImagesPosition = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      if (!isDesktop || !wrapperRef.current?.children || !entry.isIntersecting) return;

      const angle = 360 / wrapperRef.current.children.length - 1;
      const imageWidth = wrapperRef.current.children[0].clientWidth;

      const CIRCLE_RADIUS = imageWidth * 1.2;

      (Array.from(wrapperRef.current.children) as HTMLAnchorElement[]).forEach(
        (imageRef, index) => {
          if (!imageRef) return;
          if (index === 0) {
            imageRef.style.transform = `translate(-50%, -50%) rotate(0deg)`;
            return;
          }

          const rotation = angle * (index - 1);
          imageRef.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) translate(${CIRCLE_RADIUS}px) rotate(${-rotation}deg)`;
        },
      );
    },
    [isDesktop],
  );

  useIntersectionObserver(wrapperRef, setImagesPosition, { threshold: 0.4 });

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
