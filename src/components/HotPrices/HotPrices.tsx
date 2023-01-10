import React, { useContext, useEffect } from 'react';
import { getHotPricesPhones } from '../api/phones';
import { Card } from '../Card';
import { PhoneContext } from '../PhoneContext/PhoneContext';

export const HotPrices: React.FC = () => {
  const {
    phones,
    setPhones,
  } = useContext(PhoneContext);

  const getPhonesWithDiscountFromServer = async () => {
    const phonesFromServer = await getHotPricesPhones();

    setPhones(phonesFromServer);
  };

  useEffect(() => {
    getPhonesWithDiscountFromServer();
  }, []);

  // eslint-disable-next-line no-console
  console.log(phones);

  return (
    <div className="hotPrices">
      <div className="hotPrices__title">
        <h2>
          Hot prices
        </h2>

        <button
          type="button"
          className="hotPrices__button"
        >
          {'<'}
        </button>

        <button
          type="button"
          className="hotPrices__button"
        >
          {'>'}
        </button>
      </div>

      <div className="hotPrices__items grid">
        {phones.map(phone => (
          <Card phone={phone} />
        ))}
      </div>
    </div>
  );
};
