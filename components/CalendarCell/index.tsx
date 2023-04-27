import { globalPostFilter } from '@/states/dateContext';
import { GLOBAL_COLOR } from '@/utils/color';
import { css } from '@emotion/react';
import { useRecoilValue } from 'recoil';

interface CalendarCellProps {
  day: number;
  posts: Post[];
  enabled: boolean;
  highlight?: boolean;
}

interface CellPostProps {
  post: Post;
}

const style = {
  cell: (enabled: boolean, highlight: boolean) => css`
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    width: 150px;
    height: 145px;
    background-color: ${highlight ? '#eef7ff' : enabled ? '#FFF' : '#EEE'};
    border: 1px solid ${highlight ? '#0084ff' : '#e9e9e9'};
  `,
  day: css`
    font-size: 18px;
    margin: 1px 0 2px 10px;
  `,
  post: (color: string, backgroundColor: string) => css`
    width: 100%;
    height: 22px;
    border-radius: 22px;
    background-color: ${backgroundColor};
    margin-bottom: 5px;
    p {
      margin: 0;
      white-space: nowrap;
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: center;
      line-height: 22px;
      font-size: 14px;
      color: ${color};
    }
  `,
  postsContainer: css`
    position: relative;
    height: 110px;
    width: 80%;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
  `,
};

export default function CalendarCell({
  day,
  posts,
  enabled,
  highlight = false,
}: CalendarCellProps) {
  const globalFilter = useRecoilValue(globalPostFilter);
  return enabled ? (
    <div css={style.cell(enabled, highlight)}>
      <p css={style.day}>{day}</p>
      <div css={style.postsContainer}>
        {posts.map((post) => {
          if (globalFilter[post.category])
            return <CellPost key={`post-${post.mentoringId}`} post={post} />;
          return <div key={`post-${post.mentoringId}`} />;
        })}
      </div>
    </div>
  ) : (
    <div css={style.cell(enabled, false)} />
  );
}

function CellPost({ post }: CellPostProps) {
  const backgroundColor =
    post.category === 'MENTORING'
      ? GLOBAL_COLOR.blue
      : post.category === 'MEETUP'
      ? GLOBAL_COLOR.purple
      : GLOBAL_COLOR.gray;
  return (
    <div css={style.post('white', backgroundColor)}>
      <p>{post.title}</p>
    </div>
  );
}
