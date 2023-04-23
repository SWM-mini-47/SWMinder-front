import Calendar from '@/components/Calendar';
import PostDetail from '@/components/PostDetail';
import SideBar from '@/components/SideBar';
import ToggleButton from '@/components/ToggleButton';
import { globalDate, globalPostFilter } from '@/states/dateContext';
import { GLOBAL_COLOR } from '@/utils/color';
import { css } from '@emotion/react';
import { useState } from 'react';
import { useRecoilState } from 'recoil';

const style = {
  sidebar: (show: boolean) => css`
    @media only screen and (max-width: 600px) {
      width: 100%;
      min-width: 300px;
      margin-left: 0;
    }

    @media only screen and (max-width: 1300px) {
      left: auto;
    }
    left: 0;

    margin-left: 25px;
    max-width: 600px;
    min-width: 500px;
    width: 100%;
    height: 100%;
    position: absolute;
    top: ${show ? '0' : '95%'};
  `,
  mainFeed: css`
    padding: 10px;
    overflow-y: auto;
    max-width: 1050px;
    width: 100%;
    height: 100%;
  `,
  calendarHead: css`
    display: flex;
    flex-direction: column;
  `,
  month: css`
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
      display: none;
    }
    max-width: 650px;
    width: 100%;
  `,

  line: css`
    @media only screen and (max-width: 1300px) {
      display: none;
    }
    background-color: #f5f5f5;
    width: 1px;
    height: 100%;
    margin: 20px 0 20px 0;
  `,
};

export default function Home() {
  const [date, setDate] = useRecoilState(globalDate);
  const [postView, setPostView] = useState<Post | null>(null);
  const [showSideBar, setShowSideBar] = useState<boolean>(true);
  const [globalFilter, setGlobalFilter] = useRecoilState(globalPostFilter);

  return (
    <div>
      <div css={style.container}>
        <div css={style.leftInfo}>TODO: 프로필 및 부가정보</div>
        <div css={style.line} />
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
                value={globalFilter.mentoring}
                onToggle={(flag) => setGlobalFilter({ ...globalFilter, mentoring: flag })}
              />
              <ToggleButton
                text="모임"
                value={globalFilter.meetup}
                color={GLOBAL_COLOR.purple}
                onToggle={(flag) => setGlobalFilter({ ...globalFilter, meetup: flag })}
              />
            </div>
          </div>
          <Calendar />
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
