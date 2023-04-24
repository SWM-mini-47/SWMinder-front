import { css } from '@emotion/react';
import Favorite from '@/assets/favorite.svg';
import FavoriteFill from '@/assets/favorite_fill.svg';
import { useEffect, useState } from 'react';
import { formatDate } from '@/utils/api';

interface UserCommentProps {
  comment: Comment;
  likeCallback: (like: boolean) => void;
}

const style = {
  container: css`
    width: 100%;
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
    font-size: 20px;
    font-weight: bold;
  `,
  userType: css`
    width: 180px;
    margin: 1px 0 0 0;
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

export default function UserComment({ comment, likeCallback }: UserCommentProps) {
  const [heart, setHeart] = useState<boolean>(comment.like);
  useEffect(() => {
    likeCallback(heart);
  }, [heart]);
  return (
    <div css={style.container}>
      <div css={style.userContainer}>
        <p css={style.userName}>{comment.author}</p>
        <p css={style.userType}>{formatDate(comment.created)}</p>
      </div>
      <div css={style.line} />
      <div css={style.commentContainer}>
        <p>{comment.content}</p>
      </div>
      <div
        css={style.likeContainer}
        onClick={() => {
          setHeart(!heart);
        }}
      >
        {heart ? <FavoriteFill /> : <Favorite />}
        <p>{comment.likeCount}</p>
      </div>
    </div>
  );
}
