import Profile from '@/components/Profile';

export default function Home() {
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
