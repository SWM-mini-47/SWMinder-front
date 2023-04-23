import { globalDate, globalPostFilter } from '@/states/dateContext';
import { dday, formatDate, getPostsByDate } from '@/utils/api';
import { GLOBAL_COLOR } from '@/utils/color';
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import Handle from '@/assets/drag_handle.svg';

interface SideBarProps {
  postCallback: (post: Post) => void;
  handleCallback: () => void;
}

interface PostItemProps {
  post: Post;
  onClick: (post: Post) => void;
}

const style = {
  container: css`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border: solid 1px #bbbbbb;
    background-color: white;
    border-radius: 30px 30px 0 0;
  `,
  dateContainer: css`
    margin-top: 50px;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    p {
      font-size: 20px;
      text-align: center;
    }
    button {
      font-size: 20px;
      background-color: white;
      border: none;
    }
  `,
  list: css`
    height: auto;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #ffffff;
  `,
  item: css`
    display: flex;
    width: 90%;
    padding: 10px;
    justify-content: space-around;
    align-items: center;
    background-color: #e9e9e9;
    border-radius: 20px;
    margin-top: 8px;
  `,
  leftInfo: (type: PostType) => css`
    width: 50px;
    & > div {
      width: 50px;
      height: 50px;
      border-radius: 100%;
      background-color: ${type === 'meetup'
        ? GLOBAL_COLOR.purple
        : type === 'mentoring'
        ? GLOBAL_COLOR.blue
        : GLOBAL_COLOR.gray};
      color: white;
      line-height: 50px;
      text-align: center;
      font-size: 10px;
    }
    p {
      font-size: 15px;
      margin: 5px 0 0 0;
      text-align: center;
    }
  `,
  rightInfo: css`
    width: 80%;
    p {
      width: 100%;
      word-wrap: break-word;
      font-size: 20px;
      min-height: 60px;
      font-weight: lighter;
      margin: 10px 10px 0 10px;
    }
    & > div {
      margin-top: 5px;
      display: flex;
      justify-content: space-evenly;
      width: 100%;
      flex-direction: row;
      p {
        font-weight: normal;
        width: auto;
        min-height: 0;
        margin: 0;
        font-size: 15px;
      }
    }
  `,
  line: css`
    width: 2px;
    background-color: #adadad;
  `,
  handle: css`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 50px;
  `,
};

export default function SideBar({ postCallback, handleCallback }: SideBarProps) {
  const [date, setDate] = useRecoilState(globalDate);
  const [posts, setPosts] = useState<Post[]>([]);
  const globalFilter = useRecoilValue(globalPostFilter);

  useEffect(() => {
    (async () => {
      setPosts(await getPostsByDate(date));
    })();
  }, [date]);

  return (
    <div css={style.container}>
      <Handle css={style.handle} onClick={() => handleCallback()} />
      <div css={style.dateContainer}>
        <button
          onClick={() => {
            setDate(new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1));
          }}
        >
          &lt;
        </button>
        <p>{`${date.getMonth() + 1}월 ${date.getDate()}일`}</p>
        <button
          onClick={() => {
            setDate(new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1));
          }}
        >
          &gt;
        </button>
      </div>
      <div css={style.list}>
        {posts.map((e) => {
          return globalFilter[e.type] ? <PostItem onClick={postCallback} post={e} /> : <></>;
        })}
      </div>
    </div>
  );
}

function PostItem({ post, onClick }: PostItemProps) {
  return (
    <div
      css={style.item}
      onClick={() => {
        onClick(post);
      }}
    >
      <div css={style.leftInfo(post.type)}>
        <div>
          {post.type === 'meetup' ? '모임' : post.type === 'mentoring' ? '멘토링' : '게시글'}
        </div>
        <p>{dday(post.scheduled)}</p>
      </div>
      <div css={style.rightInfo}>
        <p>{post.title}</p>
        <div>
          <p>{post.author}</p>
          <div css={style.line} />
          <p>{`${post.currentCount}/${post.totalCount}`}</p>
          <div css={style.line} />
          <p>{formatDate(post.created)}</p>
          <div css={style.line} />
          <p>{`~${formatDate(post.scheduled)}`}</p>
        </div>
      </div>
    </div>
  );
}
