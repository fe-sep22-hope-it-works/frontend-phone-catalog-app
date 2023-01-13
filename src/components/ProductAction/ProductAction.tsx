import React from 'react';
import { Phone } from '../../types/Phone';
import { Button } from '../Button/Button';
import { Favorite } from '../Favorite';

import s from './ProductAction.module.scss';

type Props = {
  currentPhone: Phone,
};

export const ProductAction: React.FC<Props> = ({ currentPhone }) => {
  return (
    <div className={s.action}>
      <div className={s.action__btn}>
        <Button phone={currentPhone} />
      </div>

      <div className={s.action__favorite}>
        <Favorite phone={currentPhone} />
      </div>
    </div>
  );
};
