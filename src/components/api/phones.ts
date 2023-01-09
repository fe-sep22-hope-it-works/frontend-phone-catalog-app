import { Phone } from '../../types/Phone';
import { SortBy } from '../../types/SortBy';
import { getImages, getPhones } from '../../utils/fetch';

export const getAllPhones = (sortBy: SortBy) => {
  return getPhones<Phone[]>(`/phones?sortedby=${sortBy}&page=1&phonesQuantity=71`);
};

export const getPhoneById = (id: number) => {
  return getPhones<Phone>(`/phones/${id}`);
};

export const getPhoneImage = (id: number, numberOfImage: number) => {
  return getImages(`/public/${id}/0${numberOfImage}`);
};