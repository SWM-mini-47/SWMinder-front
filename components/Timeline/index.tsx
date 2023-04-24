import Post from './Post/index';
import { css } from '@emotion/react';
import { useState } from 'react';

export default function Timeline() {
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
      border-radius: 20px 20px 0px 0px;
      height: 700px;
      width: 540px;
      background-color: #ffffff;
      border: 1px solid #dbdbdb;
      padding: 20px;
      overflow: auto;
    `,
    searchBar: css`
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 0 0px 20px;
      height: 50px;
      position: relative;
    `,
    searchIcon: css`
      width: 30px;
      height: 30px;
      margin-left: 10px;
    `,
    date: css`
      text-align: center;
      vertical-align: bottom;
      font-size: 30px;
      font-family: Inter;
      color: #000000;
      flex: 1;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    `,
  };

  const [isSearchClicked, setIsSearchClicked] = useState(false);

  const handleSearchClick = () => {
    setIsSearchClicked(true);
  };

  const handleSearchCancel = () => {
    setIsSearchClicked(false);
  };

  // 선택한 날짜
  const date: string = '4월 23일 (일)';

  // 선택한 날짜에 게시된 멘토링, 게시글, 모임 등을 백엔드로부터 받아와야 함
  const posts: PostProps[] = [
    {
      category: '모임',
      title: '제목',
      mentor: '멘토',
      dday: 'D-24',
      capacity: 24,
      applicants: 21,
      startDate: '2023-01-03',
      endDate: '2023-01-24',
    },
    {
      category: '멘토링',
      title:
        '특강 제목 특강 제목 특강 제목 특강 제목 특강 제목 특강 제목 특강 제목 특강 제목 특강 제목 특강 제목 특강 제목 특강 제목',
      mentor: '홍길동 멘토',
      dday: 'D-12',
      capacity: 0,
      applicants: 0,
      startDate: '2023.03.01',
      endDate: '2023.03.10',
    },
    {
      category: '멘토링',
      title:
        '특강 제목 특강 제목 특강 제목 특강 제목 특강 제목 특강 제목 특강 제목 특강 제목 특강 제목 특강 제목 특강 제목 특강 제목',
      mentor: '홍길동 멘토',
      dday: 'D-12',
      capacity: 0,
      applicants: 0,
      startDate: '2023.03.01',
      endDate: '2023.03.10',
    },
    {
      category: '게시글',
      title:
        '특강 제목 특강 제목 특강 제목 특강 제목 특강 제목 특강 제목 특강 제목 특강 제목 특강 제목 특강 제목 특강 제목 특강 제목',
      mentor: '홍길동 멘토',
      dday: 'D-12',
      capacity: 0,
      applicants: 0,
      startDate: '2023.03.01',
      endDate: '2023.03.10',
    },
    {
      category: '멘토링',
      title: '제목',
      mentor: '멘토',
      dday: 'D-24',
      capacity: 24,
      applicants: 21,
      startDate: '2023-01-03',
      endDate: '2023-01-24',
    },
  ];

  // 검색 기능 아직 구현 못함
  return (
    <div css={style.frame}>
      <div css={style.searchBar}>
        {isSearchClicked ? (
          <>
            <input type="text" placeholder="검색어를 입력하세요." />
            <button onClick={handleSearchCancel}>취소</button>
          </>
        ) : (
          <>
            <div css={style.date}>{date}</div>
            <img src="/search.png" css={style.searchIcon} onClick={handleSearchClick} />
          </>
        )}
      </div>
      {posts.map((post, index) => (
        <div>
          <p> </p>
          <Post {...post} />
        </div>
      ))}
    </div>
  );
}
