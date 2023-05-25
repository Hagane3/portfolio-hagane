import React from 'react';
import classes from './Technologies.module.scss';
import Tile from '@/components/UI/Tile/Tile';

import HtmlIcon from '@/assets/icons/technologies/html.svg';
import CssIcon from '@/assets/icons/technologies/css.svg';
import JsIcon from '@/assets/icons/technologies/javascript.svg';
import TsIcon from '@/assets/icons/technologies/typescript.svg';
import ReactIcon from '@/assets/icons/technologies/react.svg';
import NextIcon from '@/assets/icons/technologies/next.svg';
import GitIcon from '@/assets/icons/technologies/git.svg';
import BootstrapIcon from '@/assets/icons/technologies/bootstrap.svg';
import JestIcon from '@/assets/icons/technologies/jest.svg';
import MaterialIcon from '@/assets/icons/technologies/materialui.svg';
import ReduxIcon from '@/assets/icons/technologies/redux.svg';
import SassIcon from '@/assets/icons/technologies/sass.svg';
import TailwindIcon from '@/assets/icons/technologies/tailwindcss.svg';
import Image from 'next/image';

const Technologies = () => {
  return (
    <div className={classes.root}>
      <Tile color="#e34f26">
        <Image src={HtmlIcon} alt="html icon" />
      </Tile>
      <Tile color="#2760e5">
        <Image src={CssIcon} alt="css icon" />
      </Tile>
      <Tile color="#c36291">
        <Image src={SassIcon} alt="sass icon" />
      </Tile>
      <Tile color="#f7df1e">
        <Image src={JsIcon} alt="javascript icon" />
      </Tile>
      <Tile color="#3178c6">
        <Image src={TsIcon} alt="typescript icon" />
      </Tile>
      <Tile color="#00d8ff">
        <Image src={ReactIcon} alt="react icon" />
      </Tile>
      <Tile color="#000000">
        <Image src={NextIcon} alt="next icon" />
      </Tile>
      <Tile color="#e44d30">
        <Image src={GitIcon} alt="git icon" />
      </Tile>
      <Tile color="#7046b2">
        <Image src={ReduxIcon} alt="redux icon" />
      </Tile>
      <Tile color="#6c11ea">
        <Image src={BootstrapIcon} alt="bootstrap icon" />
      </Tile>
      <Tile color="#07adca">
        <Image src={TailwindIcon} alt="tailwind icon" />
      </Tile>
      <Tile color="#007ac1">
        <Image src={MaterialIcon} alt="materialui icon" />
      </Tile>
      <Tile color="#913f56">
        <Image src={JestIcon} alt="jest icon" />
      </Tile>
    </div>
  );
};

export default Technologies;
