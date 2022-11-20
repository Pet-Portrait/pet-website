import React, { FC, useCallback, useRef } from 'react';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { BidImages } from 'queries/bid';

import useIntersectionObserver from 'hooks/useIntersectionObserver';
import useResponsive from 'hooks/useResponsive';
import { Orientation } from 'types/utils';

import * as classes from './FeaturedBidsImages.module.scss';

interface Props {
  bids: BidImages;
}

const FeaturedBidsImages: FC<Props> = ({ bids }) => {
  const { isDesktop } = useResponsive();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const verticalImages = bids.vertical.map((bid) => ({
    ...bid,
    orientation: Orientation.VERTICAL,
    image: getImage(bid.image),
  }));
  const horizontalImages = bids.horizontal.map((bid) => ({
    ...bid,
    orientation: Orientation.HORIZONTAL,
    image: getImage(bid.image),
  }));
  const slicedVerticalImages = verticalImages.slice(
    0,
    verticalImages.length % 2 === 0 ? verticalImages.length : verticalImages.length - 1,
  );

  const [firstImage, ...restImages] = horizontalImages;
  const images = [firstImage, ...slicedVerticalImages, ...restImages];

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
        <OutboundLink
          key={image.title}
          className={`${classes.link} ${
            image.orientation === Orientation.HORIZONTAL ? classes.imageHorizontal : ''
          }`}
          href={image.url}
          rel="noopener noreferrer"
          target="_blank"
        >
          {image.image && <GatsbyImage alt={image.title} image={image.image} />}
        </OutboundLink>
      ))}
    </div>
  );
};

export default FeaturedBidsImages;
