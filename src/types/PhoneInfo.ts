import { Phone } from './Phone';
import { PhoneFullInfo } from './PhoneFullInfo';

export interface PhoneInfo {
  phone: PhoneFullInfo,
  currPhone: Phone,
  similar: Phone[],
}
