import { formatDate, getCommentsByPostId } from '@/utils/api';
import { css } from '@emotion/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import UserComment from '../UserComment';

interface PostDetailProps {
  post: Post;
  closeCallback: () => void;
}

const style = {
  dim: css`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #00000021;
  `,
  container: css`
    position: relative;
    padding: 30px 20px 30px 20px;
    left: 50%;
    @media only screen and (max-width: 900px) {
      transform: none;
      left: 0;
    }
    transform: translateX(-50%);
    min-width: 900px;
    width: 70%;
    background-color: white;
    h3 {
      height: 30px;
      line-height: 30px;
      font-size: 15px;
      margin-left: 10px;
      color: #494949;
      display: inline-block;
      width: 150px;
    }
    a {
      float: right;
      width: 180px;
      text-align: center;
      display: block;
      line-height: 30px;
      margin: 10px;
      text-decoration: underline 1px black;
      color: #2c1a7c;
      font-size: 20px;
    }
  `,
  breaker: css`
    width: 100%;
    height: 1px;
    background-color: #aaaaaa;
  `,
  closeButton: css`
    position: absolute;
    font-size: 30px;
    font-weight: bold;
    border: none;
    background-color: white;
    padding: 20px;
    right: 0;
    top: 0;
  `,
};

export default function PostDetail({ post, closeCallback }: PostDetailProps) {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    setComments([]);
    (async () => {
      setComments(await getCommentsByPostId(post.id));
    })();
  }, [post.id]);

  return (
    <>
      <div css={style.dim} onClick={closeCallback} />
      <div css={style.container}>
        <button css={style.closeButton} onClick={closeCallback}>
          X
        </button>
        <h3>제목</h3>
        <span>{post.title}</span>
        <div css={style.breaker} />
        <h3>분류</h3>
        <span>{post.type}</span>
        <div css={style.breaker} />
        <h3>게시자</h3>
        <span>{post.author}</span>
        <div css={style.breaker} />
        <h3>게시 일자</h3>
        <span>{formatDate(post.created)}</span>
        <div css={style.breaker} />
        <h3>예정 일자</h3>
        <span>{formatDate(post.scheduled)}</span>
        <div css={style.breaker} />
        <h3>모집 현황</h3>
        <span>{`${post.currentCount}/${post.totalCount}`}</span>
        <div css={style.breaker} />
        <Link href={post.url}>접수하러 가기</Link>
        <div>
          <h3>댓글</h3>
          {comments.map((e) => {
            return (
              <UserComment
                key={`comment${e.id}`}
                comment={e}
                likeCallback={(like: boolean) => {}}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
