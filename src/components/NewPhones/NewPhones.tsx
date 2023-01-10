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
          className="new-phones__items grid"
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
=======
  const visiblePhones = phones.slice(0, 4);
=======
  // const visiblePhonesLength = 4;
  // const visiblePhones = phones.slice(0, 4);

  // useEffect(() => {
  //   window.addEventListener('resize', () => {
  //     setInnerWidth(window.innerWidth);
  //   });

  //   return () => {
  //     window.removeEventListener('resize', () => {
  //       setInnerWidth(window.innerWidth);
  //     });
  //   };
  // }, [innerWidth]);

  // const visiblePhones = phones.slice(
  //   visiblePhones,
  //   visiblePhones + visiblePhonesLength,
  // );

  // const firstPart = visiblePhones < visiblePhonesLength;
  // const lastPart = visiblePhones + visiblePhonesLength >= phones.length;

  // const rightClick = () => {
  //   if (visiblePhones < phones.length - 1) {
  //     setVisiblePhones((prevPart) => prevPart + 1);
  //   }
  // };

  // const leftClick = () => {
  //   if (visiblePhones > 1) {
  //     setVisiblePhones((prevPart) => prevPart - 1);
  //   }
  // };

  // const handleTouchStart = (event: React.TouchEvent<HTMLImageElement>) => {
  //   setTouchEnd(0);
  //   setTouchStart(event.targetTouches[0].clientX);
  // };

  // const handleTouchMove = (event: React.TouchEvent<HTMLImageElement>) => {
  //   setTouchEnd(event.targetTouches[0].clientX);
  // };

  // const handleTouchEnd = () => {
  //   if (touchStart - touchEnd > 100 && touchEnd !== 0) {
  //     rightClick();
  //   }

  //   if (touchStart - touchEnd < -100 && touchEnd !== 0) {
  //     leftClick();
  //   }
  // };
>>>>>>> 32e33c8 (Phones loaded, started working on styles and carousel)

  return (
    <section className="new-phones">
      <div className="new-phones__title">
        <h2>Brand new models</h2>

        <button type="button" className="new-phones__button">
          {'<'}
        </button>

        <button type="button" className="new-phones__button">
          {'>'}
        </button>
      </div>
<<<<<<< HEAD
    </div>
>>>>>>> 2351f75 (Merged with Hot Prices)
=======
      <div className="newPhones__carousel carousel__container">
        <div className="carousel__wrapper">
          <div className="carousel__content-wrapper">
            <div className="carousel__content">
              {phones.map((phone) => (
                <Card key={phone.id} phone={phone} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
>>>>>>> 32e33c8 (Phones loaded, started working on styles and carousel)
  );
};
