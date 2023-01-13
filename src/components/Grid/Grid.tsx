import React, { ReactNode } from 'react';
import s from './Grid.module.scss';

type Props = {
  children: ReactNode,
};

export const Grid: React.FC<Props> = ({ children }) => {
  return (
    <div className={s.grid}>
      {children}
    </div>
  );
};
