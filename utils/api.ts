import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

if (!BASE_URL) throw new Error('Base url이 없습니다.');

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

// 로그인
export async function login(username: string, password: string) {
  return await axiosInstance.get('/login', { auth: { username: username, password: password } });
}

// 회원가입
export async function signUp(
  username: string,
  loginId: string,
  password: string,
  contact: string,
  email: string,
  skills: string[],
) {
  return await axiosInstance.post('/signUp', {
    username: username,
    loginId: loginId,
    password: password,
    contact: contact,
    email: email,
    skills: skills,
  });
}

export function formatDate(date: Date) {
  return `${date.getFullYear()}.${date.getMonth() + 1}${
    date.getDate() === 0 ? '' : `.${date.getDate()}`
  }`;
}

// 게시글 눌렀을 때 세부정보
// 제목 분류 게시자 게시일자 예정일자 모집현황
// type은 mentoring | meetup | board 3개 있음
export async function getPostsByDate(date: Date) {
  // return (
  //   await axiosInstance.get(`/posts/${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`)
  // ).data;

  return new Array(30).fill({
    title: '제목',
    type: 'meetup',
    currentCount: 1,
    totalCount: 2,
    created: date,
    scheduled: new Date(2023, 3, 26),
    author: '홍길동 멘토',
    url: 'https://google.com/',
  });
}

// 게시글 밑의 댓글
// 포스트팅된 글의 번호, 작성자, 댓글내용, 작성날짜, 좋아요 수, 내가 좋아요 버튼을 눌렀는지 여부
export async function getCommentsByPostId(postid: number) {
  // return (await axiosInstance.get(`/posts/by-id/${postid}/comments`)).data;

  return new Array(5).fill({
    id: 1,
    author: '홍길동',
    content: 'lorem ipsum',
    created: new Date(),
    like: false,
    likeCount: 20,
  });
}

// CalendarCell 내에서 보이는 정보
// 일별 상위 4개만 가져옴
export async function getPostsByMonth(date: Date) {
  // return (
  //   await axiosInstance.get(`/posts/${date.getFullYear()}/${date.getMonth() + 1}`)
  // ).data;

  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  return new Array(daysInMonth).fill([
    {
      title: '멘토링1',
      type: 'mentoring',
      currentCount: 1,
      totalCount: 2,
      created: date,
      scheduled: new Date(2023, 3, 26),
      author: 'asdf',
      url: 'https://google.com/',
    },
    {
      title: '모임1',
      type: 'meetup',
      currentCount: 1,
      totalCount: 2,
      created: date,
      scheduled: new Date(2023, 3, 26),
      author: 'asdf',
      url: 'https://google.com/',
    },
    {
      title: '게시글1',
      type: 'board',
      currentCount: 1,
      totalCount: 2,
      created: date,
      scheduled: new Date(2023, 3, 26),
      author: 'asdf',
      url: 'https://google.com/',
    },
    {
      title: '멘토링2',
      type: 'mentoring',
      currentCount: 1,
      totalCount: 2,
      created: date,
      scheduled: new Date(2023, 3, 26),
      author: 'asdf',
      url: 'https://google.com/',
    },
  ]);
}

// D-day 이거 어떻게 해야됨?
export function dday(date: Date) {
  const today = new Date();
  today.setHours(0);
  const timeDiff = today.getTime() - date.getTime();
  return `D${Math.ceil(timeDiff / (1000 * 3600 * 24)) - 1}`;
}
