import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';
// import { HeaderNavLinks } from '../../types/HeaderNavLinks';
import './BurgerMenu.scss';

import heartIcon from '../../img/header/favourites.svg';
import shopIcon from '../../img/header/purchases.svg';

interface Props {
  navLinks: {
    to: string;
    text: string;
  }[];
  burgerMenu: boolean;
  isBurgerMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BurgerMenu: React.FC<Props> = ({
  navLinks,
  burgerMenu,
  isBurgerMenu,
}) => {
  return (
    <div
      className={classNames('burger__menu', {
        'burger__menu-open': burgerMenu,
      })}
    >
      <nav className="burger__menu__nav">
        <ul className="burger__menu__nav__list">
          {navLinks.map((link) => (
            <li key={link.text} className="burger__menu__nav__item">
              <NavLink
                to={link.to}
                onClick={() => isBurgerMenu(false)}
                className={({ isActive }) => classNames(
                  'burger__menu__nav__link',
                  {
                    'burger__menu__is-active': isActive,
                  },
                )}
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="burger__menu__buttons">
        <button className="burger__menu__buttons-bottom" type="button">
          <img
            src={heartIcon}
            alt="Favourites"
            className="burger__menu__buttons-images"
          />
        </button>

        <button className="burger__menu__buttons-bottom" type="button">
          <img
            src={shopIcon}
            alt="Shop"
            className="burger__menu__buttons-images"
          />
        </button>
      </div>
    </div>
  );
};
