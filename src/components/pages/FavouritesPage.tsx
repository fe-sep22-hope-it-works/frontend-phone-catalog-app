import React, { useContext } from 'react';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs';
import { Card } from '../Card';
import { PhoneContext } from '../PhoneContext/PhoneContext';
import sadSmile from '../../img/sadsmiley.svg';

export const FavouritesPage = () => {
  const { favouritePhones } = useContext(PhoneContext);

  return (
    <>
      {favouritePhones.length > 0 ? (
        <div className="favourites page">
          <Breadcrumbs
            breads={[
              { title: 'home', path: '/' },
              { title: 'Favourites', path: '/favourites' },
            ]}
          />
          <h1 className="favourites__title page-title">Favourites Page</h1>
          <p className="favourites__description">
            {`${favouritePhones.length} items`}
          </p>
          <div>
            <TransitionGroup className="favourites__box grid">
              {favouritePhones.map(phone => (
                <CSSTransition
                  key={phone.id}
                  timeout={300}
                  classNames="favourite-item"
                >
                  <Card phone={phone} />
                </CSSTransition>
              ))}
            </TransitionGroup>
          </div>
        </div>
      ) : (
        <div className="favourites__empty">
          <div className="favourites__empty__message">
            <p className="favourites__empty__message__text">
              List is empty
            </p>
            <img
              className="favourites__empty__message__smile"
              src={sadSmile}
              alt="sadsmileIcon"
            />
          </div>

          <div className="favourites__empty__img" />
          <Link className="favourites__empty__link" to="/phones">
            <button
              className="favourites__empty__button"
              type="button"
            >
              Go and choose your wishes
            </button>
          </Link>
        </div>
      )}

    </>
  );
};
