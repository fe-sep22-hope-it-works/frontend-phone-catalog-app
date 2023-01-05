import { Link } from 'react-router-dom';
import { NavItem } from './NavItem';

export const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src="" alt="logo" />
      </Link>
      <nav
        className="nav"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="nav__container">
          <NavItem path="/" text="Home Page" />
          <br />
          <NavItem path="/phones" text="Phones" />
          <br />
          <NavItem path="/tablets" text="Tablets" />
          <br />
          <NavItem path="/accessories" text="Accessories" />
        </div>
      </nav>
      <div className="my-puchases">
        <nav>
          <NavItem path="/favourites" text="favourites" />
          <br />
          <NavItem path="/purchases" text="purchases" />
        </nav>
      </div>
    </header>
  );
};
