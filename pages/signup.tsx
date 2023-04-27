import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { signUp, login } from '@/utils/api';

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

export default function SignUpPage() {
  const [userName, setUserName] = useState<string>('');
  const [loginId, setloginId] = useState<string>('');
  const [contact, setContact] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [skills, setSkills] = useState<string[]>([]);
  const [password, setPassword] = useState<string>('');
  const router = useRouter();

  return (
    <div css={style}>
      <h2>회원가입</h2>
      <input
        type="text"
        placeholder="이름"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="아이디"
        onChange={(e) => {
          setloginId(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="비밀번호"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="연락처"
        onChange={(e) => {
          setContact(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="이메일"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="기술 스택"
        onChange={(e) => {
          setSkills(e.target.value.split(','));
        }}
      />
      <button
        onClick={async () => {
          router.push('/login');
        }}
      >
        뒤로가기
      </button>
      <button
        onClick={async () => {
          if ((await signUp(userName, loginId, password, contact, email, skills)).status === 200) {
            login(userName, password);
            router.push('/');
          }
        }}
      >
        확인
      </button>
    </div>
  );
}
