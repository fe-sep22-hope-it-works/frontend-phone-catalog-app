import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Link to="/">
        <Logo />
      </Link>

      <div className="footer__nav">
        <Link
          to="/github"
          className="footer__nav__link"
        >
          github
        </Link>

        <Link
          to="/contacts"
          className="footer__nav__link"
        >
          contacts
        </Link>

        <Link
          to="/rights"
          className="footer__nav__link"
        >
          rights
        </Link>
      </div>

      <div className="footer__topscroll">
        Back to top

        <button
          type="button"
          className="footer__topscroll__button"
          aria-label="Save"
          onClick={() => window.scrollTo({ top: 0 })}
        />
      </div>
    </footer>
  );
};
