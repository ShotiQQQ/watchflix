import React from 'react';
import s from './user.module.scss';
import Avatar from "./Avatar/Avatar";
import Name from "./Name/Name";

const User = () => {
  return (
    <div className={s.user}>
      <Avatar />
      <Name />
    </div>
  );
};

export default User;