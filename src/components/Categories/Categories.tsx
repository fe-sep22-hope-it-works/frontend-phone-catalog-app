import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import phone from '../../img/categories/mobile-phone.svg';
import tablet from '../../img/categories/tablet.svg';
import accessories from '../../img/categories/accessories.svg';
import { getAllPhones } from '../api/phones';

export const Categories = () => {
  const [countOfPhoneModels, setCountOfPhoneModels] = useState(0);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  const getAllPhonesLength = async () => {
    const allPhonesFromServer = await getAllPhones();

    setCountOfPhoneModels(allPhonesFromServer.length);
  };

  useEffect(() => {
    getAllPhonesLength();
  }, []);

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

  return (
    <section className="category category--home-page">
      <h2 className="category__title">Shop by category</h2>
      {innerWidth > 640
        ? (
          <div className="category__box">
            <div className="category__pages">
              <div className="category__photo">
                <Link
                  to="/phones"
                  onClick={() => window.scrollTo({ top: 0 })}
                >
                  <img
                    src={phone}
                    alt="Phone"
                    className="category__image"
                  />
                </Link>
              </div>
              <div className="category__photo category__photo--tablet">
                <Link
                  to="/tablets"
                  onClick={() => window.scrollTo({ top: 0 })}
                >
                  <img
                    src={tablet}
                    alt="Tablet"
                    className="category__image"
                  />
                </Link>
              </div>
              <div className="category__photo category__photo--accessories">
                <Link
                  to="/accessories"
                  onClick={() => window.scrollTo({ top: 0 })}
                >
                  <img
                    src={accessories}
                    alt="Accessories"
                    className="category__image"
                  />
                </Link>
              </div>
            </div>
            <div className="category__description">
              <div className="category__item">
                <Link
                  to="/phones"
                  className="category__link"
                  onClick={() => window.scrollTo({ top: 0 })}
                >
                  <h3 className="category__name">Mobile phones</h3>
                </Link>
                <p className="category__num-of-models">{`${countOfPhoneModels} models`}</p>
              </div>
              <div className="category__item">
                <Link
                  to="/tablets"
                  className="category__link"
                  onClick={() => window.scrollTo({ top: 0 })}
                >
                  <h3 className="category__name">Tablets</h3>
                </Link>
                <p className="category__num-of-models">Comming soon</p>
              </div>
              <div className="category__item">
                <Link
                  to="/accessories"
                  className="category__link"
                  onClick={() => window.scrollTo({ top: 0 })}
                >
                  <h3 className="category__name">Accessories</h3>
                </Link>
                <p className="category__num-of-models">Comming soon</p>
              </div>
            </div>
          </div>
        )
        : (
          <div className="category__box">
            <div className="category__description">
              <div className="category__item">
                <div className="category__photo">
                  <Link
                    to="/phones"
                    className="category__link"
                    onClick={() => window.scrollTo({ top: 0 })}
                  >
                    <img
                      src={phone}
                      alt="Phone"
                      className="category__image"
                    />
                  </Link>
                </div>
                <Link to="/phones" className="category__link">
                  <h3 className="category__name">Mobile phones</h3>
                </Link>
                <p className="category__num-of-models">{`${countOfPhoneModels} models`}</p>
              </div>
              <div className="category__item">
                <div className="category__photo category__photo--tablet">
                  <Link
                    to="/tablets"
                    className="category__link"
                    onClick={() => window.scrollTo({ top: 0 })}
                  >
                    <img
                      src={tablet}
                      alt="Tablet"
                      className="category__image"
                    />
                  </Link>
                </div>
                <Link to="/tablets" className="category__link">
                  <h3 className="category__name">Tablets</h3>
                </Link>
                <p className="category__num-of-models">Comming soon</p>
              </div>
              <div className="category__item">
                <div className="category__photo category__photo--accessories">
                  <Link
                    to="/accessories"
                    className="category__link"
                    onClick={() => window.scrollTo({ top: 0 })}
                  >
                    <img
                      src={accessories}
                      alt="Accessories"
                      className="category__image"
                    />
                  </Link>
                </div>
                <Link to="/accessories" className="category__link">
                  <h3 className="category__name">Accessories</h3>
                </Link>
                <p className="category__num-of-models">Comming soon</p>
              </div>
            </div>
          </div>
        )}
    </section>
  );
};
