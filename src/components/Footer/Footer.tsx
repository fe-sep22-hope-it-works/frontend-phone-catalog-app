import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <Link to="/">
          <Logo />
        </Link>

        <div className="footer__nav">
          <a
            href="https://github.com/fe-sep22-hope-it-works"
            className="footer__nav__link"
          >
            github
          </a>

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
          <label
            className="footer__topscroll__text"
            htmlFor="topscroll__button"
          >
            Back to top
          </label>

          <button
            id="topscroll__button"
            type="button"
            className="footer__topscroll__button"
            aria-label="Save"
            onClick={() => window.scrollTo({ top: 0 })}
          />
        </div>
      </div>
    </footer>
  );
};
