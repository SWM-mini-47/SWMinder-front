import { css } from '@emotion/react';
import Favorite from '@/assets/favorite.svg';
import FavoriteFill from '@/assets/favorite_fill.svg';
import { useEffect, useState } from 'react';

interface UserCommentProps {
  userName: string;
  userType: string;
  text: string;
  likeCallback: (like: boolean) => void;
  like: boolean;
  likeCount: number;
}

const style = {
  container: css`
    width: 800px;
    position: relative;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
  `,
  userContainer: css`
    width: 180px;
  `,
  userName: css`
    width: 180px;
    margin: 0;
    font-size: 30px;
    font-weight: bold;
  `,
  userType: css`
    width: 180px;
    margin: 10px 0 0 0;
    color: #333;
    font-size: 14px;
  `,
  commentContainer: css`
    width: 500px;
  `,
  line: css`
    margin: 10px 0 10px 0;
    align-items: stretch;
    background-color: #efefef;
    width: 1px;
  `,
  likeContainer: css`
    height: 50px;
    width: 80px;
    p {
      float: left;
      overflow: hidden;
      margin: 0 0 0 10px;
      line-height: 50px;
    }
    & > svg {
      float: left;
      margin: 0 0 0 10px;
      width: 25px;
      height: 50px;
    }
  `,
};

export default function UserComment({
  userName,
  userType,
  text,
  likeCallback,
  like,
  likeCount,
}: UserCommentProps) {
  const [heart, setHeart] = useState<boolean>(like);
  useEffect(() => {
    likeCallback(heart);
  }, [heart]);
  return (
    <div css={style.container}>
      <div css={style.userContainer}>
        <p css={style.userName}>{userName}</p>
        <p css={style.userType}>{userType}</p>
      </div>
      <div css={style.line} />
      <div css={style.commentContainer}>
        <p>{text}</p>
      </div>
      <div
        css={style.likeContainer}
        onClick={() => {
          setHeart(!heart);
        }}
      >
        {heart ? <FavoriteFill /> : <Favorite />}
        <p>{likeCount}</p>
      </div>
    </div>
  );
}
