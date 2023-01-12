import React, { useContext } from 'react';

import '../../styles/page-title.scss';
import { Card } from '../Card';
import { PhoneContext } from '../PhoneContext/PhoneContext';

export const FavouritesPage = () => {
  const { favouritePhones } = useContext(PhoneContext);

  return (
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
  );
};
