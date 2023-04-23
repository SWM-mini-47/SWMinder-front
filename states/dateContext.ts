import { getPostsByDate, getPostsByMonth } from '@/utils/api';
import { atom, selector } from 'recoil';

export const globalDate = atom<Date>({
  key: 'selectedDate',
  default: new Date(),
});

export const monthlyPosts = selector({
  key: 'posts',
  get: async ({ get }) => {
    return await getPostsByMonth(get(globalDate));
  },
});

export const globalPostFilter = atom<PostFilter>({
  key: 'filter',
  default: { mentoring: true, meetup: true, board: true },
});
