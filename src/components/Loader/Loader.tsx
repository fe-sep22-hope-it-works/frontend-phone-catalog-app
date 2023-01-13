import React from 'react';
import s from './Loader.module.scss';

export const Loader: React.FC = () => (
  <div className={s.loader}>
    <div className={s.loader__content} />
  </div>
);
