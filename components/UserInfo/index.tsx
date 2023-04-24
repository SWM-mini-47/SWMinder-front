import { currentUser } from '@/states/userContext';
import { css } from '@emotion/react';
import { useRecoilValue } from 'recoil';
import DefaultPic from '@/assets/person.svg';
import Image from 'next/image';

interface UserInfoProps {
  onClick: () => void;
}

const style = css`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  svg,
  img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
  p {
    margin: 10px;
    font-size: 25px;
    font-weight: bold;
  }
`;

export default function UserInfo({ onClick }: UserInfoProps) {
  const user = useRecoilValue(currentUser);
  return (
    <div css={style} onClick={onClick}>
      {user.profileImage ? (
        <Image width={100} height={100} src={user.profileImage} alt={'profile picture'} />
      ) : (
        <DefaultPic />
      )}
      <p>{user.username}</p>
    </div>
  );
}
