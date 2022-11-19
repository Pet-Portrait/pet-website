import React, { ReactNode } from 'react';

import ImageItem from './Imagetem/ImageItem';
import { ImageTile } from './types';

import * as classes from './ImagesGrid.module.scss';

interface Props {
  onItemClick?: (id: string) => void;
  additionalTiles?: ReactNode;
  items: ImageTile[];
}

const ImagesGrid = ({ items, onItemClick, additionalTiles }: Props) => (
  <div className={classes.root}>
    <ul className={classes.list}>
      {items.map((item) => (
        <ImageItem key={item.id} item={item} onClick={onItemClick} />
      ))}
      {additionalTiles}
    </ul>
  </div>
);

export default ImagesGrid;
