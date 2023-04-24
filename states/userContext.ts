import { atom } from 'recoil';

export const currentUser = atom<User>({
  key: 'currentUser',
  default: {
    userid: -1,
    username: 'Guest',
    profileImage: '',
  },
});
