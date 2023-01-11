import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { getNewPhones } from '../api/phones';
import { Card } from '../Card';
import { PhoneContext } from '../PhoneContext/PhoneContext';

export const NewPhones: React.FC = () => {
  // const [visiblePhones, setVisiblePhones] = useState<number>(0);
  // const [touchStart, setTouchStart] = useState<number>(0);
  // const [touchEnd, setTouchEnd] = useState<number>(0);
  // const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const { phones, setPhones } = useContext(PhoneContext);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [length, setLength] = useState<number>(phones.length - 1);
  const [touchPosition, setTouchPosition] = useState(0);

  const getNewPhonesFromServer = async () => {
    const newPhonesFromServer = await getNewPhones();

    setPhones(newPhonesFromServer);
  };

  useEffect(() => {
    getNewPhonesFromServer();
  }, []);

  useEffect(() => {
    setLength(phones.length - 1);
  }, [phones]);

  const nextItem = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const previousItem = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLImageElement>) => {
    const touchDown = event.touches[0].clientX;

    setTouchPosition(touchDown);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLImageElement>) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = event.touches[0].clientX;
    const difference = touchDown - currentTouch;

    if (difference > 5) {
      nextItem();
    }

    if (difference < -5) {
      previousItem();
    }

    setTouchPosition(0);
  };

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

  const visiblePhones = phones.slice(0, 4);

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

  return (
    <section className="new-phones">
      <div className="new-phones__container">
        <div className="new-phones__title">
          <h2 className="new-phones__title-text">Brand new models</h2>

          <div className="new-phones__buttons button">
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              type="button"
              className={classNames('button-left', {
                'button-left-isDisabled': currentIndex > 0,
              })}
              onClick={previousItem}
            >
              {'<'}
            </button>

            <button
              type="button"
              className={classNames('button-right', {
                'button-right-isDisabled':
                  currentIndex < length - 1,
              })}
              onClick={nextItem}
            >
              {/* {'>'} */}
            </button>
          </div>
        </div>
        <div className="new-phones__items">
          <div className="newPhones__carousel carousel__container">
            <div className="carousel__wrapper">
              <div
                className="carousel__content-wrapper"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
              >
                <div className="carousel__content grid">
                  {visiblePhones.map((phone) => (
                    <Card key={phone.id} phone={phone} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
