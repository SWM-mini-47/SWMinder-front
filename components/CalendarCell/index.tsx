import { GLOBAL_COLOR } from '@/utils/color';
import { css } from '@emotion/react';

interface CalendarCellProps {
  day: number;
  posts: Post[];
  enabled: boolean;
}

interface CellPostProps {
  post: Post;
}

const style = {
  cell: (enabled: boolean) => css`
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    width: 155px;
    height: 147px;
    background-color: ${enabled ? '#FFF' : '#EEE'};
    border: 1px solid #e9e9e9;
  `,
  day: css`
    font-size: 18px;
    margin: 3px 0 0 10px;
  `,
  post: (color: string, backgroundColor: string) => css`
    width: 130px;
    height: 23px;
    border-radius: 22px;
    background-color: ${backgroundColor};
    margin-bottom: 5px;
    p {
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: center;
      line-height: 23px;
      color: ${color};
    }
  `,
  postsContainer: css`
    height: 115px;
    width: 130px;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
  `,
};

export default function CalendarCell({ day, posts, enabled }: CalendarCellProps) {
  return (
    <div css={style.cell(enabled)}>
      <p css={style.day}>{day}</p>
      <div css={style.postsContainer}>
        {posts.map((post) => {
          return <CellPost post={post} />;
        })}
      </div>
    </div>
  );
}

function CellPost({ post }: CellPostProps) {
  const backgroundColor =
    post.type === 'mentoring'
      ? GLOBAL_COLOR.blue
      : post.type === 'meetup'
      ? GLOBAL_COLOR.purple
      : GLOBAL_COLOR.gray;
  return (
    <div css={style.post('white', backgroundColor)}>
      <p>{post.title}</p>
    </div>
  );
}
