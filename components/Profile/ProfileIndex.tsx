import Profile from './Profile';
import axios from 'axios';
import { useEffect } from 'react';

export default function Home() {
  axios
    .get('/signUp')
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <Profile
      name={'윤용재'}
      phone={'010-9091-9349'}
      school={'소마대'}
      birth={new Date()}
      email={'asdf'}
      address={'asdf'}
      skills={['java', 'android', 'python', 'spring']}
      description={'안녕하세요 저는 이번에 ...... 잘부탁드립니다'}
    />
  );
}
