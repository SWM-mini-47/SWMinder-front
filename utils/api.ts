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
