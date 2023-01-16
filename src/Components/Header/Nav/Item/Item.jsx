import React from 'react';
import s from '../nav.module.scss';

const Item = ({ children, href }) => {
  return (
    <li className={s.item}>
      <a className={s.link} href={href}>
        {children}
      </a>
    </li>
  );
};

export default Item;