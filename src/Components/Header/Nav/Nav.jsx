import React from 'react';
import Item from "./Item/Item";
import s from './nav.module.scss';

const Nav = () => {
  return (
    <nav>
      <ul className={s.list}>
        <Item>Home</Item>
        <Item>Movies</Item>
        <Item>TV Show</Item>
        <Item>Video</Item>
        <Item>FAQ</Item>
        <Item>Pricing</Item>
      </ul>
    </nav>
  );
};

export default Nav;