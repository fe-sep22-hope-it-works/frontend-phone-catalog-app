import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  path: string,
  text: string,
};

export const NavItem: React.FC<Props> = ({ path, text }) => (
  <NavLink
    className={({ isActive }) => classNames({
      'nav__active-link': isActive,
    })}
    to={path}
  >
    {text}
  </NavLink>
);
