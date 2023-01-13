import React, { ReactNode } from 'react';
import s from './GridItem.module.scss';

type Props = {
  from: number,
  to: number
  children: ReactNode,
};

export const GridItem: React.FC<Props> = ({
  from,
  to,
  children,
}) => {
  return (
    <div className={s[`grid__item_${from}_${to}`]}>
      {children}
    </div>
  );
};
