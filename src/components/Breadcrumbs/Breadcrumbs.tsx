/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import s from './Breadcrumbs.module.scss';
import homeImg from '../../img/Home.svg';

type Props = {
  breads: Array<{
    title: string,
    path: string,
  }>
};

export const Breadcrumbs: React.FC<Props> = ({ breads }) => (
  <ul className={s.breadcrumbs}>
    {breads.map(({
      title,
      path,
    }) => {
      return (
        <li className={s.breadcrumbs__item} key={path}>
          <Link
            to={path}
            className={s.breadcrumbs__link}
          >
            {title !== 'home'
              ? title
              : <img src={homeImg} alt="Home" className={s.breadcrumbs__home} />}
          </Link>
        </li>
      );
    })}
  </ul>
);
