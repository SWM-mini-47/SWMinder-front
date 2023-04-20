import { css } from '@emotion/react';

const frameStyle = css`
  border-radius: 20px;
  height: 103px;
  width: 515px;
  background-color: #f6f6f6;
`;

const category = css`
  display: inline-flex;
  justify-content: center;
  align-items: flex-start; /* 변경 */
  transform: rotate(0deg);
  border-radius: 80px;
  height: 48px;
  width: 48px;
  background-color: #4d7cc3;
`;

const category_text = css`
  text-align: center;
  font-size: 14px;
  font-family: Inter;
  line-height: 125%;
  color: #ffffff;
`;

const title_text = css`
  text-align: left;
  vertical-align: bottom;
  font-size: 17px;
  font-family: Inter;
  line-height: 125%;
  color: #3b3b3b;
  margin-left: 16px; /* 추가 */
`;

const detail_frame = css`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
`;

const detail_text = css`
  text-align: left;
  vertical-align: middle;
  font-size: 13px;
  font-family: Inter;
  line-height: 125%;
  color: #555555;
`;

const rectangle_frame = css`
  height: 21px;
  width: 2px;
  background-color: #ffffff;
`;

const rectangle = css`
  border-radius: 20px;
  height: 21px;
  width: 2px;
  background-color: #d9d9d9;
`;

export default function Post() {
  return (
    <div css={frameStyle}>
      <div css={detail_frame}>
        <div css={category}>
          <p css={category_text}>멘토링</p>
        </div>
        <p css={title_text}>특강제목 특강제목 특강제목 특강제목 특강제목</p>
      </div>

      <div css={detail_frame}>
        <p css={detail_text}>D-12</p>
        <p css={detail_text}>홍길동 멘토</p>
        <div css={rectangle_frame}>
          <div css={rectangle} />
        </div>
        <p css={detail_text}>999/999</p>
        <div css={rectangle_frame}>
          <div css={rectangle} />
        </div>
        <p css={detail_text}>2023.01.10</p>
        <div css={rectangle_frame}>
          <div css={rectangle} />
        </div>
        <p css={detail_text}>~ 2023.01.10</p>
      </div>
    </div>
  );
}
