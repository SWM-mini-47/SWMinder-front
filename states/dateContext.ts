import { atom } from 'recoil';

export const selectedDate = atom<Date>({
  key: 'selectedDate',
  default: new Date(),
});
