import Post from '@/components/Timeline/Post';
import { getPostsByMonth } from '@/utils/api';
import { atom, selector } from 'recoil';

export const globalDate = atom<Date>({
  key: 'selectedDate',
  default: new Date(),
});

export const globalYear = selector({
  key: 'globalYear',
  get: ({ get }) => {
    return get(globalDate).getFullYear();
  },
});

export const globalMonth = selector({
  key: 'globalMonth',
  get: ({ get }) => {
    return get(globalDate).getMonth();
  },
});

export const monthlyPosts = selector({
  key: 'posts',
  get: async ({ get }) => {
    const date = new Date(get(globalYear), get(globalMonth) + 1, 0);
    const daysInMonth = date.getDate();
    const posts = await getPostsByMonth(date);
    const sortedPosts: Post[][] = new Array(daysInMonth).fill(undefined).map((e) => []);
    const parser = (e: Post) => {
      const { applyEndTime, applyStartTime, createdDate, startTime } = e;
      const parsedElement = {
        ...e,
        applyEndTime: new Date(applyEndTime),
        applyStartTime: new Date(applyStartTime),
        createdDate: new Date(createdDate),
        startTime: new Date(startTime),
      };
      sortedPosts[parsedElement.startTime.getDate() - 1].push(parsedElement);
    };
    posts.mentoring.forEach(parser);
    posts.meetup.forEach(parser);
    posts.board.forEach(parser);
    return sortedPosts;
  },
});

export const globalPostFilter = atom<PostFilter>({
  key: 'filter',
  default: { MENTORING: true, MEETUP: true, BOARD: true },
});
