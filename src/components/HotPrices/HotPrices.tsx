import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { getHotPricesPhones } from '../api/phones';
import { Card } from '../Card';
import { PhoneContext } from '../PhoneContext/PhoneContext';

export const HotPrices: React.FC = () => {
  const [visiblePart, setVisiblePart] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const {
    phones,
    setPhones,
  } = useContext(PhoneContext);

  const visiblePartLength = 4;

  useEffect(() => {
    window.addEventListener('resize', () => {
      setInnerWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener('resize', () => {
        setInnerWidth(window.innerWidth);
      });
    };
  }, [innerWidth]);

  const getPhonesWithDiscountFromServer = async () => {
    const phonesFromServer = await getHotPricesPhones();

    setPhones(phonesFromServer);
  };

  useEffect(() => {
    getPhonesWithDiscountFromServer();
  }, []);

  const visibleItems = phones
    .slice(visiblePart, visiblePart + visiblePartLength);

  const firstPart = visiblePart < visiblePartLength;

  const lastPart = visiblePart + visiblePartLength >= phones.length;

  const rightSwipe = () => {
    if (visiblePart < phones.length - 1) {
      setVisiblePart((prevPart) => (prevPart + 1));
    }
  };

  const leftSwipe = () => {
    if (visiblePart > 1) {
      setVisiblePart((prevPart) => (prevPart - 1));
    }
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLImageElement>) => {
    setTouchEnd(0);
    setTouchStart(event.targetTouches[0].clientX);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLImageElement>) => {
    setTouchEnd(event.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100 && touchEnd !== 0) {
      rightSwipe();
    }

    if (touchStart - touchEnd < -100 && touchEnd !== 0) {
      leftSwipe();
    }
  };

  return (
    <section className="hotPrices">
      <div className="hotPrices__container">
        <div className="hotPrices__title">
          <h2 className="hotPrices__title__text">
            Hot prices
          </h2>

          <div className="hotPrices__title__buttons">
            <button
              type="button"
              className={classNames(
                'hotPrices__title__buttons__button',
                { 'hotPrices__title__buttons__button-isDisabled': firstPart },
              )}
              disabled={firstPart}
              onClick={() => setVisiblePart(part => part - visiblePartLength)}
            >
              {'<'}
            </button>

            <button
              type="button"
              className={classNames(
                'hotPrices__title__buttons__button',
                { 'hotPrices__title__buttons__button-isDisabled': lastPart },
              )}
              disabled={lastPart}
              onClick={() => setVisiblePart(part => part + visiblePartLength)}
            >
              {'>'}
            </button>
          </div>
        </div>

        <div
          className="hotPrices__items grid"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {visibleItems.map(phone => (
            <div key={phone.id} className="hotPrices__items__item">
              <Card phone={phone} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
