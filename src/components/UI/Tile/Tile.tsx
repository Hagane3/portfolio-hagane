import React from 'react';
import classes from './Tile.module.scss';

type Props = {
  href?: string;
  children: React.ReactNode;
  color: string;
  popup?: string;
};

const Tile = ({ href, children, color, popup }: Props) => {
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <a href={href} target="_blank">
        {children}
      </a>
      {popup && <span className={classes.popup}>{popup}</span>}
    </div>
  );
};

export default Tile;
