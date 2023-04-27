import Calendar from '@/components/Calendar';
import PostDetail from '@/components/PostDetail';
import SideBar from '@/components/SideBar';
import ToggleButton from '@/components/ToggleButton';
import UserInfo from '@/components/UserInfo';
import { globalDate, globalPostFilter } from '@/states/dateContext';
import { currentUser } from '@/states/userContext';
import { GLOBAL_COLOR } from '@/utils/color';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import Profile from '@/components/Profile/ProfileIndex';

const style = {
  sidebar: (show: boolean) => css`
    @media only screen and (max-width: 1300px) {
      left: 50%;
      transform: translate(-50% ${show ? '' : ',-50px'});
      margin-left: 0;
    }
    left: 0;
    margin-left: 25px;
    max-width: 600px;
    width: 100%;
    height: 100%;
    position: absolute;
    top: ${show ? '0' : '100%'};
    transform: ${show ? 'none' : 'translateY(-50px)'};
    opacity: ${show ? '100%' : '70%'};
  `,
  mainFeed: css`
    padding: 10px;
    overflow-y: auto;
    max-width: 1050px;
    width: 100%;
    height: 100%;
    overscroll-behavior-block: contain;
  `,
  calendarHead: css`
    display: flex;
    flex-direction: column;
  `,
  month: css`
    @media only screen and (max-width: 1300px) {
      align-self: center;
    }
    align-self: flex-end;
    display: flex;
    align-items: center;
    button {
      margin: 0 10px 0 10px;
      background: none;
      border: none;
      font-size: 30px;
      color: black;
    }
  `,
  filters: css`
    margin-bottom: 5px;
    display: flex;
    align-self: flex-start;
    flex-direction: row;
    & > div {
      margin-right: 5px;
    }
  `,
  container: css`
    position: fixed;
    display: flex;
    @media only screen and (max-width: 1300px) {
      flex-direction: column;
    }
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  `,
  leftInfo: css`
    position: relative;
    @media only screen and (max-width: 1300px) {
      align-self: center;
    }
    padding: 20px 0 0 0;
    max-width: 650px;
    width: 100%;
  `,

  line: (vertical: boolean) => css`
    @media only screen and (max-width: 1300px) {
      display: ${vertical ? 'none' : 'block'};
    }
    box-sizing: border-box;
    background-color: #e9e9e9;
    ${vertical ? 'width' : 'height'}: 1px;
    ${vertical ? 'height' : 'width'}: auto;
    margin: ${vertical ? '20px 0 20px 0' : '0 0 0 20px'};
  `,

  calendarTable: css`
    @media only screen and (max-width: 1300px) {
      overflow-y: visible;
    }
    overflow-x: auto;
  `,

  root: css`
    overscroll-behavior: none;
  `,
  p: css`
    background-color: #a7f6ff;
    display: inline-block;
    margin-left: 15px;
    margin-top: 0;
    border-radius: 5px;
    padding: 5px 10px 5px 10px;
    cursor: pointer;
    color: darkblue;
  `,
};

export default function Home() {
  const [postView, setPostView] = useState<Post | null>(null);
  const [showSideBar, setShowSideBar] = useState<boolean>(false);
  const [globalFilter, setGlobalFilter] = useRecoilState(globalPostFilter);
  const [date, setDate] = useRecoilState(globalDate);
  const user = useRecoilValue(currentUser);
  const router = useRouter();
  const [isMain, setIsMain] = useState<boolean>(true);
  const SceneChange = (): void => {
    setIsMain(!isMain);
  };
  if (isMain === true) {
    return (
      <div css={style.root}>
        <div css={style.container}>
          <div css={style.leftInfo}>
            <p css={style.p} onClick={SceneChange}>
              프로필 관리
            </p>
            <UserInfo onClick={() => router.push(user.userid === -1 ? '/login' : '/profile')} />

  if (user.userid === -1) {
    if (router.isReady) router.push('/login');
    return <>Login required</>;
  }

  return (
    <div css={style.root}>
      <div css={style.container}>
        <div css={style.leftInfo}>
          <UserInfo onClick={() => router.push(user.userid === -1 ? '/login' : '/profile')} />
          <div css={style.line(false)} />
        </div>
        <div css={style.line(true)} />
        <div css={style.mainFeed}>
          <div css={style.calendarHead}>
            <div css={style.month}>
              <button onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1))}>
                &lt;
              </button>
              <h1>{`${date.getMonth() + 1}월`}</h1>
              <button onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1))}>
                &gt;
              </button>
            </div>
            <div css={style.filters}>
              <ToggleButton
                text="특강"
                color={GLOBAL_COLOR.blue}
                value={globalFilter.MENTORING}
                onToggle={(flag) => setGlobalFilter({ ...globalFilter, MENTORING: flag })}
              />
              <ToggleButton
                text="모임"
                color={GLOBAL_COLOR.purple}
                value={globalFilter.MEETUP}
                onToggle={(flag) => setGlobalFilter({ ...globalFilter, MEETUP: flag })}
              />
              <ToggleButton
                text="게시글"
                color={GLOBAL_COLOR.gray}
                value={globalFilter.BOARD}
                onToggle={(flag) => setGlobalFilter({ ...globalFilter, BOARD: flag })}
              />
            </div>
          </div>
          <div css={style.calendarTable}>
            <Calendar
              onClickCell={(d: number) => {
                setShowSideBar(true);
                setDate(new Date(date.getFullYear(), date.getMonth(), d));
              }}
            />
          </div>
        </div>

        {postView === null ? (
          <></>
        ) : (
          <PostDetail
            post={postView}
            closeCallback={() => {
              setPostView(null);
            }}
          />
        )}
      </div>
    );
  } else {
    return (
      <div>
        <p css={style.p} onClick={SceneChange}>
          캘린더
        </p>

        <Profile />
      </div>
    );
  }
}
