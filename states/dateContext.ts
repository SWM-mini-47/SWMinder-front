import { getPostsByDate, getPostsByMonth } from '@/utils/api';
import { atom, selector } from 'recoil';

export const selectedDate = atom<Date>({
  key: 'selectedDate',
  default: new Date(),
});

export const monthlyPosts = selector({
  key: 'posts',
  get: async ({ get }) => {
    return await getPostsByMonth(get(selectedDate));
  },
});
