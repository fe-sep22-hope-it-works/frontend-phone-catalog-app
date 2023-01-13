/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-closing-tag-location */
import React, { useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';

import cn from 'classnames';
import s from './ProductControls.module.scss';

import { transformColor } from '../../utils/transformColor';

type Props = {
  capacityAvailable: string[],
  colorsAvailable: string[],
  color: string,
  capacity: string,
};

export const ProductControls: React.FC<Props> = ({
  capacityAvailable,
  capacity,
  colorsAvailable,
  color,
}) => {
  const location = useLocation();
  const currentPhoneId = location.pathname
    .slice(location.pathname.lastIndexOf('/') + 1);
  const transformedLink = currentPhoneId.split('-');

  const transformCaracityLink = useCallback((param: string) => {
    const capacityLink = transformedLink[transformedLink.length - 2]
      ?.replace(/\d{2,3}/g, param)?.replace(/[GB]/g, '');

    return `${transformedLink.slice(0, -2).join('-')}-${capacityLink}-${transformedLink.slice(-1)}`;
  }, []);

  const transformColorLink = useCallback((param: string) => {
    return `${transformedLink.slice(0, -1).join('-')}-${param}`;
  }, []);

  return (
    <div className={s.controls}>
      <div className={s.controls__item}>
        <h4 className={s.controls__title}>
          Available colors
          <span className={s.controls__code}>ID: 802390</span>
        </h4>

        <ul className={s.controls__params}>
          {colorsAvailable.map((currentColor: string, i) => (
            <li key={i} className={s.controls__params_item}>
              <Link
                to={`/phones/${transformColorLink(currentColor)}`}
                className={cn(s.controls__params_item_wrap, {
                  [s.controls__params_item_wrap_active]:
                    currentColor === color,
                })}
              >
                <div
                  className={s.controls__params_item_inner}
                  style={{ backgroundColor: `${transformColor(currentColor)}` }}
                > </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={s.controls__item}>
        <h4 className={s.controls__title}>
          Select capacity
        </h4>

        <ul className={s.controls__params}>
          {capacityAvailable.map((currentCatacity, i) => (
            <li
              key={i}
              className={s.controls__params_item}
            >
              <Link
                to={`/phones/${transformCaracityLink(currentCatacity)}`}
                className={cn(s.controls__params_capacity, {
                  [s.controls__params_capacity_active]:
                    currentCatacity === capacity,
                })}
              >
                {currentCatacity}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
