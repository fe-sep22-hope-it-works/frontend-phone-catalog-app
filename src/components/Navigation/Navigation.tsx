import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavLinks } from '../../types/NavLinks';

interface Props {
  navigationLinks: NavLinks[];
  burgerMenuOpen: boolean;
  isBurgerMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navigation: React.FC<Props> = ({
  navigationLinks,
  burgerMenuOpen,
  isBurgerMenuOpen,
}) => {
  return (
    <ul
      className={classNames(
        { 'header__content__nav__list menu-moved': !burgerMenuOpen },
        { burger__menu__nav__list: burgerMenuOpen },
      )}
    >
      {navigationLinks.map((link) => (
        <li
          key={link.text}
          className={classNames(
            { header__content__nav__item: !burgerMenuOpen },
            { burger__menu__nav__item: burgerMenuOpen },
          )}
        >
          <NavLink
            to={link.to}
            onClick={() => isBurgerMenuOpen(false)}
            className={({ isActive }) => classNames(
              'header__content__nav__link',
              { burger__menu__nav__link: burgerMenuOpen },
              { 'header__is-active': isActive },
              { 'burger__menu__is-active': isActive && burgerMenuOpen },
            )}
          >
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
