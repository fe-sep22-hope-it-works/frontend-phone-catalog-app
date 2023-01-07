import { SortBy } from '../../types/SortBy';
import { getPhones } from '../../utils/fetch';

export const getAllPhones = (sortBy: SortBy) => {
  return getPhones(`?sortedby=${sortBy}&page=1&phonesQuantity=71`);
};
