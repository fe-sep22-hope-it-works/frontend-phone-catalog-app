import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/page-title.scss';
import { Breadcrumbs } from '../Breadcrumbs';
import { Card } from '../Card';
import { PhoneContext } from '../PhoneContext/PhoneContext';
import sadSmile from '../../img/sadsmiley.svg';

export const FavouritesPage = () => {
  const { favouritePhones } = useContext(PhoneContext);

  return (
    <div className="favourites page">
      <h1 className="favourites__title page-title">Favourites Page</h1>
      <Breadcrumbs
        breads={[
          { title: 'home', path: '/' },
          { title: 'Favourites', path: '/favourites' },
        ]}
      />
      <p className="favourites__description">
        {`${favouritePhones.length} items`}
      </p>
      <div className="favourites__box grid">
        {favouritePhones.map(phone => (
          <Card key={phone.id} phone={phone} />
        ))}
      </div>
    </div>
    <>
      {favouritePhones.length > 0 ? (
        <div className="favourites page">
          <h1 className="favourites__title page-title">Favourites Page</h1>
          <p className="favourites__description">
            {`${favouritePhones.length} items`}
          </p>
          <div className="favourites__box grid">
            {favouritePhones.map(phone => (
              <Card key={phone.id} phone={phone} />
            ))}
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
