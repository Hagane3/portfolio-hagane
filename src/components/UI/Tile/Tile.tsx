import React from 'react';
import classes from './Tile.module.scss';

type Props = {
  href: string;
  children: React.ReactNode;
  color: string;
};

const Tile = ({ href, children, color }: Props) => {
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <a href={href} target="_blank">
        {children}
      </a>
    </div>
  );
};

export default Tile;
