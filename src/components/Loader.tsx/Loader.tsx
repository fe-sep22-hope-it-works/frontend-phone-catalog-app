import React from 'react';

type Props = {
  classToAdd?: string,
};

export const Loader: React.FC<Props> = ({ classToAdd }) => (
  <div className={`loader ${classToAdd}`}>
    <div className={`loader__content loader__content--${classToAdd}`} />
  </div>
);
