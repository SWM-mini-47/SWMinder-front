import { css } from '@emotion/react';
import CalendarCell from '../CalendarCell';
import { monthlyPosts, globalDate } from '@/states/dateContext';
import { useRecoilState, useRecoilValueLoadable } from 'recoil';

const style = css`
  width: 100%;
  border: 0;
  border-spacing: 0;
  border-collapse: separate;
  height: 100%;
  max-width: 1260px;
  min-width: 800px;
  max-height: 870px;

  td {
    height: 16%;
    max-height: 145px;
    padding: 0;
    margin: 0;
  }
`;

export default function Calendar() {
  const [date, setDate] = useRecoilState(globalDate);
  const posts = useRecoilValueLoadable(monthlyPosts);
  const startOffset = new Date(date.getFullYear(), date.getMonth() + 1, 1).getDay();
  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  return (
    <table css={style}>
      <tbody>
        {Array.from({ length: 6 }).map((e, i) => {
          const rowOffset = i * 7 + 1;
          return (
            <tr key={`calendarRow${rowOffset}`}>
              {Array.from({ length: 7 }).map((e2, j) => {
                const d = j + rowOffset - startOffset;
                if (d <= 0 || d > daysInMonth)
                  return (
                    <td key={`calendarCell${d}`}>
                      <CalendarCell day={0} posts={[]} enabled={false} />
                    </td>
                  );
                else
                  return (
                    <td
                      key={`calendarCell${d}`}
                      onClick={() => {
                        setDate(new Date(date.getFullYear(), date.getMonth(), d));
                      }}
                    >
                      <CalendarCell
                        day={d}
                        highlight={d === date.getDate()}
                        posts={posts.state === 'hasValue' ? posts.getValue()[d - 1] : []}
                        enabled={true}
                      />
                    </td>
                  );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
