import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import '../../styles/Header.scss';

type Props = {
  path: string,
  text: string,
  classname?: string,
};

export const NavItem: React.FC<Props> = ({ path, text, classname }) => (
  <NavLink
    className={({ isActive }) => classNames(classname, {
      nav__link: !classname,
      'nav__link--active': isActive && !classname,
      'my-puchases__img--active': isActive && classname,
    })}
    to={path}
  >
    {text}
  </NavLink>
);
