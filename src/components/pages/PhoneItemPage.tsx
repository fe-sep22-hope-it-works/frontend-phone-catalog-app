import React from 'react';
import '../../styles/page-title.scss';
import { Grid } from '../Grid';
import { GridItem } from '../GridItem';
import { ProductInfo } from '../ProductInfo';

export const PhoneItemPage = () => {
  return (
    <Grid>
      <GridItem from={1} to={25}>
        <ProductInfo />
      </GridItem>
    </Grid>
  );
};
