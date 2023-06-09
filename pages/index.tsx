import Calendar from '@/components/Calendar';
import PostDetail from '@/components/PostDetail';
import SideBar from '@/components/SideBar';
import ToggleButton from '@/components/ToggleButton';
import UserInfo from '@/components/UserInfo';
import { forceReload, globalDate, globalPostFilter } from '@/states/dateContext';
import { currentUser } from '@/states/userContext';
import { getMemberProfile } from '@/utils/api';
import { GLOBAL_COLOR } from '@/utils/color';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

const style = {
  sidebar: (show: boolean) => css`
    @media only screen and (max-width: 1750px) {
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
    @media only screen and (max-width: 1750px) {
      align-self: center;
    }
    padding: 10px;
    overflow-y: auto;
    max-width: 1080px;
    width: 100%;
    height: 100%;
    overscroll-behavior-block: contain;
  `,
  calendarHead: css`
    display: flex;
    flex-direction: column;
  `,
  month: css`
    @media only screen and (max-width: 1750px) {
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
    @media only screen and (max-width: 1750px) {
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
    @media only screen and (max-width: 1750px) {
      align-self: center;
      display: none;
    }
    padding: 20px 0 0 0;
    max-width: 650px;
    width: 100%;
  `,

  line: (vertical: boolean) => css`
    @media only screen and (max-width: 1750px) {
      display: ${vertical ? 'none' : 'block'};
    }
    box-sizing: border-box;
    background-color: #e9e9e9;
    ${vertical ? 'width' : 'height'}: 1px;
    ${vertical ? 'height' : 'width'}: auto;
    margin: ${vertical ? '20px 0 20px 0' : '0 0 0 20px'};
  `,

  calendarTable: css`
    width: 1050px;
    overflow-y: visible;
  `,

  root: css`
    overscroll-behavior: none;
  `,

  logo: css`
    width: 100%;
    text-align: center;
    margin-top: 50px;
    font-weight: bolder;
    font-size: 50px;
    color: #929292;
    p {
      font-size: 15px;
      font-weight: lighter;
    }
  `,

  filterButton: css`
    :hover {
      background: black;
      color: white;
    }
    border: solid black 1px;
    background: white;
    margin-right: 20px;
  `,
};

export default function Home() {
  const [postView, setPostView] = useState<Post | null>(null);
  const [reload, setReload] = useRecoilState(forceReload);
  const [showSideBar, setShowSideBar] = useState<boolean>(false);
  const [globalFilter, setGlobalFilter] = useRecoilState(globalPostFilter);
  const [date, setDate] = useRecoilState(globalDate);
  const [user, setUser] = useRecoilState(currentUser);
  const router = useRouter();

  if (user.memberId === -1) {
    (async () => {
      const newuser = await getMemberProfile();
      console.log(newuser);
      if (newuser.memberId === undefined && router.isReady) router.push('/login');
      setUser({
        ...newuser,
        username: newuser.username === undefined ? 'Guest' : newuser.username,
        birth: new Date(newuser.birth),
        skills: newuser.skills === undefined ? [] : newuser.skills,
      });
    })();
    return <></>;
  }

  return (
    <div css={style.root}>
      <div css={style.container}>
        <div css={style.leftInfo}>
          <UserInfo onClick={() => router.push(user.memberId === -1 ? '/login' : '/profile')} />
          <div css={style.line(false)} />
          <div css={style.logo}>
            소마인더
            <br />
            SWMinder
            <p>
              front-end
              <br />
              남동훈 윤용재 홍정희
            </p>
            <p>
              back-end
              <br />
              김현철 최정용
            </p>
          </div>
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
              <button css={style.filterButton} onClick={() => setReload(reload + 1)}>
                새로고침
              </button>
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

        <div css={style.sidebar(showSideBar)}>
          <SideBar
            handleCallback={() => setShowSideBar(!showSideBar)}
            postCallback={(post: Post) => setPostView(post)}
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
}
