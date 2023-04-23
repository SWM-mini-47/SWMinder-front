import { css } from '@emotion/react';

interface PostProps {
  category: string;
  title: string;
  mentor: string;
  dday: string;
  capacity: number;
  applicants: number;
  startDate: string;
  endDate: string;
}

const style = {
  frame: css`
    border-radius: 20px;
    height: auto;
    width: 515px;
    background-color: #f6f6f6;
    align-items: center;
    padding: 10px;
  `,
  category: (category: string) => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    transform: rotate(0deg);
    border-radius: 80px;
    height: 48px;
    width: 48px;
    background-color: ${category === '멘토링'
      ? '#4d7cc3'
      : category === '모임'
      ? '#974DC3'
      : '#707070'};
  `,
  category_text: css`
    text-align: center;
    font-size: 14px;
    font-family: Inter;
    line-height: 125%;
    color: #ffffff;
  `,
  leftInfo: css`
    align-items: center;
    justify-content: center;
    float: left;
  `,
  rightInfo: css`
    margin-left: 50px;
    margin-right: 15px;
  `,
  title_text: css`
    text-align: left;
    vertical-align: bottom;
    font-size: 17px;
    font-family: Inter;
    line-height: 125%;
    color: #3b3b3b;
    margin-left: 16px;
    flex: 1;
  `,
  detail_frame: css`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 16px;
  `,
  detail_text: css`
    text-align: center;
    vertical-align: middle;
    font-size: 13px;
    font-family: Inter;
    line-height: 125%;
    color: #555555;
  `,
  rectangle_frame: css`
    height: 21px;
    width: 2px;
    background-color: #ffffff;
  `,
  rectangle: css`
    border-radius: 20px;
    height: 21px;
    width: 2px;
    background-color: #d9d9d9;
  `,
};

export default function Post({
  category,
  title,
  mentor,
  dday,
  capacity,
  applicants,
  startDate,
  endDate,
}: PostProps) {
  return (
    <div css={style.frame}>
      <div css={style.leftInfo}>
        <div css={style.category(category)}>
          <p css={style.category_text}>{category}</p>
        </div>
        <p css={style.detail_text}>{dday}</p>
      </div>

      <div css={style.rightInfo}>
        <p css={style.title_text}>{title}</p>
        <div css={style.detail_frame}>
          <p css={style.detail_text}>{mentor}</p>
          <div css={style.rectangle_frame}>
            <div css={style.rectangle} />
          </div>
          <p css={style.detail_text}>
            {applicants}/{capacity}
          </p>
          <div css={style.rectangle_frame}>
            <div css={style.rectangle} />
          </div>
          <p css={style.detail_text}>{startDate}</p>
          <div css={style.rectangle_frame}>
            <div css={style.rectangle} />
          </div>
          <p css={style.detail_text}>~{endDate}</p>
        </div>
      </div>
    </div>
  );
}
