import React, { useContext, useEffect } from 'react';
import { getNewPhones } from '../api/phones';
import { Card } from '../Card';
import { PhoneContext } from '../PhoneContext/PhoneContext';

export const NewPhones: React.FC = () => {
  // const [visiblePhones, setVisiblePhones] = useState<number>(0);
  // const [touchStart, setTouchStart] = useState<number>(0);
  // const [touchEnd, setTouchEnd] = useState<number>(0);
  // const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  // const [currentIndex, setCurrentIndex] = useState<number>(0);
  // const [length, setLength] = useState(phones.length);
  const { phones, setPhones } = useContext(PhoneContext);

  const getNewPhonesFromServer = async () => {
    const newPhonesFromServer = await getNewPhones();

    setPhones(newPhonesFromServer);
  };

  useEffect(() => {
    getNewPhonesFromServer();
  }, []);

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
  );
};
