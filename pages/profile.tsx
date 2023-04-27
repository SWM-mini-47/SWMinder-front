import Profile from '@/components/Profile/Profile';
import { currentUser } from '@/states/userContext';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';

export default function ProfilePage() {
  const user = useRecoilValue(currentUser);
  const router = useRouter();

  if (user.memberId === -1) {
    if (router.isReady) router.push('/login');
    return <>Login required</>;
  }
  return (
    <Profile
      name={user.username}
      phone={user.contact}
      school={user.education}
      birth={user.birth}
      email={user.email}
      address={user.address}
      skills={user.skills}
      description={''}
    />
  );
}
