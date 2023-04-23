import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

if (!BASE_URL) throw new Error('Base url이 없습니다.');

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export async function login(username: string, password: string) {
  return await axiosInstance.post('/login', { username: username, password: password });
}

export function formatDate(date: Date) {
  return `${date.getFullYear()}.${date.getMonth() + 1}${
    date.getDate() === 0 ? '' : `.${date.getDate()}`
  }`;
}

export async function getPostsByDate(date: Date) {
  // return (
  //   await axiosInstance.get(`/posts/${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`)
  // ).data;

  return new Array(30).fill({
    title: 'asdf',
    type: 'mentoring',
    currentCount: 1,
    totalCount: 2,
    created: date,
    scheduled: new Date(2023, 3, 26),
    author: 'asdf',
  });
}

export function dday(date: Date) {
  const today = new Date();
  today.setHours(0);
  const timeDiff = today.getTime() - date.getTime();
  return `D${Math.ceil(timeDiff / (1000 * 3600 * 24)) - 1}`;
}
