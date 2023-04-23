import { selectedDate } from '@/states/dateContext';
import { dday, formatDate, getPostsByDate } from '@/utils/api';
import { GLOBAL_COLOR } from '@/utils/color';
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

interface SideBarProps {
  postCallback: (post: Post) => void;
}

interface PostItemProps {
  post: Post;
  onClick: (post: Post) => void;
}

const style = {
  container: css`
    width: 500px;
    height: 800px;
    border: solid 1px #bbbbbb;
    border-radius: 30px 30px 0 0;
  `,
  dateContainer: css`
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
    height: 740px;
    overflow: hidden scroll;
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #ffffff;
    /* width */
    ::-webkit-scrollbar {
      width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #fff;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #222222;
    }
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
};

export default function SideBar({ postCallback }: SideBarProps) {
  const [date, setDate] = useRecoilState(selectedDate);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    (async () => {
      setPosts(await getPostsByDate(date));
    })();
  }, [date]);

  return (
    <div css={style.container}>
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
          return <PostItem onClick={postCallback} post={e} />;
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
