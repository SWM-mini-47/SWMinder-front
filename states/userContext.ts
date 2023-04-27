import { atom } from 'recoil';

export const currentUser = atom<User>({
  key: 'currentUser',
  default: {
    memberId: -1,
    username: 'Guest',
    loginId: '',
    profileImage: '',
    contact: '',
    birth: new Date(),
    email: '',
    address: '',
    education: '',
    skills: [],
  },
});
