import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

if (!BASE_URL) throw new Error('Base url이 없습니다.');

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
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
  return [];
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
export async function getPostsByMonth(date: Date): Promise<PostsResponse> {
  const res = await axiosInstance.get(`/posts/${date.getFullYear()}/${date.getMonth() + 1}`);
  if (res.status !== 200) return { board: [], meetup: [], mentoring: [] };
  else return res.data;
}

// D-day 이거 어떻게 해야됨?
export function dday(date: Date) {
  const today = new Date();
  today.setHours(0);
  const timeDiff = today.getTime() - date.getTime();
  const diff = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return `D${diff === 0 ? `-${diff}` : diff > 0 ? `+${diff}` : diff}`;
}

export async function getMemberProfile(): Promise<User> {
  return (await axiosInstance.get('/member/info')).data;
}
