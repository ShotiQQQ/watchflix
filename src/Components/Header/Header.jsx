import React from 'react';
import s from './header.module.scss';
import Container from "../Container/Container";
import Logo from "./Logo/Logo";
import Nav from "./Nav/Nav";
import Search from "./Search/Search";
import User from "./User/User";
import {usePopularFilms} from "../../utils/hooks/usePopularFilms";

const Header = () => {
  const topFilms = usePopularFilms();
  console.log(topFilms)
  return (
    <header className={s.header}>
      <Container>
        <div className={s.container}>
          <Logo />
          <Nav />
          <Search />
          <User />
        </div>
      </Container>
    </header>
  );
};

export default Header;