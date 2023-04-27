import { currentUser } from '@/states/userContext';
import { login } from '@/utils/api';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

const style = css`
  text-align: center;
  input {
    box-sizing: border-box;
    margin-top: 10px;
    margin: 10px auto 0 auto;
    display: block;
    padding: 0 20px 0 20px;
    height: 40px;
    width: 200px;
    text-decoration: none;
    border: solid 1px #cccccc;
  }
  button {
    border: none;
    height: 30px;
    width: 200px;
    background-color: #333333;
    color: white;
    margin-top: 10px;
  }
`;

export default function LoginPage() {
  const [user, setUser] = useRecoilState(currentUser);
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();

  return (
    <div css={style}>
      <h2>소마인더 로그인</h2>
      <input
        type="text"
        placeholder="아이디"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="비밀번호"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        onClick={async () => {
          //TODO: handle exception
          if ((await login(userName, password)).status === 200) {
            setUser({ ...user, userid: 0, username: userName });
            router.push('/');
          }
        }}
      >
        로그인
      </button>
    </div>
  );
}
