import { Phone } from '../../types/Phone';
import { PhoneFullInfo } from '../../types/PhoneFullInfo';
import { SortBy } from '../../types/SortBy';
import { getPhones } from '../../utils/fetch';

export const getAllPhones = (
  sortBy: SortBy | string = SortBy.ALPHABETCALLY,
  page = 1,
  phonesQuantity = 71,
) => {
  return getPhones<Phone[]>(`/phones?sortedby=${sortBy}&page=${page}&phonesQuantity=${phonesQuantity}`);
};

export const getPhoneById = (id: number) => {
  return getPhones<Phone>(`/phones/${id}`);
};

export const getPhoneImage = (id: number) => {
  return getPhones<string[]>(`/public/img/${id}`);
};

export const getHotPricesPhones = () => {
  return getPhones<Phone[]>('/phones/discount');
};

export const getNewPhones = () => {
  return getPhones<Phone[]>('/phones/new');
};

export const getSimilarPhones = (id: number) => {
  return getPhones<Phone[]>(`/phones/recommended/${id}`);
};

export const getCurrentPhone = (id: number) => {
  return getPhones<Phone>(`/phones/ext/${id}`);
};

export const getPhoneFull = (id: number) => {
  return getPhones<PhoneFullInfo>(`/phones/ext/${id}`);
};
