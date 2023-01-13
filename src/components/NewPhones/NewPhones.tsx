import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { getNewPhones } from '../api/phones';
import { Card } from '../Card';
import { PhoneContext } from '../PhoneContext/PhoneContext';

export const NewPhones: React.FC = () => {
  const [visiblePhones, setVisiblePhones] = useState<number>(0);
  const [touchStart, setTouchStart] = useState<number>(0);
  const [touchEnd, setTouchEnd] = useState<number>(0);
  const { phones, setPhones } = useContext(PhoneContext);

  const visiblePhonesLength = 4;

  const getNewPhonesFromServer = async () => {
    const newPhonesFromServer = await getNewPhones();

    setPhones(newPhonesFromServer);
  };

  useEffect(() => {
    getNewPhonesFromServer();
  }, []);

  const visibleItems = phones
    .slice(visiblePhones, visiblePhones + visiblePhonesLength);

  const firstFour = visiblePhones < visiblePhonesLength;
  const lastFour = (visiblePhones + visiblePhonesLength) >= phones.length;

  const nextItem = () => {
    if (visiblePhones < phones.length) {
      setVisiblePhones((prevPart) => prevPart + 1);
    }
  };

  const previousItem = () => {
    if (visiblePhones > 0) {
      setVisiblePhones((prevPart) => prevPart - 1);
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
      nextItem();
    }

    if (touchStart - touchEnd < -100 && touchEnd !== 0) {
      previousItem();
    }
  };

  return (
    <section className="new-phones">
      <div className="new-phones__container">
        <div className="new-phones__title">
          <h2 className="new-phones__title-text">Brand new models</h2>

          <div className="new-phones__buttons button">
            <div className="button__left">
              <button
                type="button"
                className={classNames('button-left', {
                  'button-left-isDisabled': firstFour,
                })}
                disabled={firstFour}
                onClick={() => setVisiblePhones(part => (
                  part - visiblePhonesLength
                ))}
              >
                {'<'}
              </button>
            </div>

            <div className="button__right">
              <button
                type="button"
                className={classNames('button-right', {
                  'button-right-isDisabled': lastFour,
                })}
                disabled={lastFour}
                onClick={() => setVisiblePhones(part => (
                  part + visiblePhonesLength
                ))}
              >
                {'>'}
              </button>
            </div>
          </div>
        </div>
        <div
          className="new-phones__items grid grid--four-items"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {visibleItems.map((phone) => (
            <Card key={phone.id} phone={phone} />
          ))}
        </div>
      </div>
    </section>
  );
};
