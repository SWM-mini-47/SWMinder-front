type PostType = 'mentoring' | 'meetup' | 'board';
interface Post {
  title: string;
  type: PostType;
  currentCount: number;
  totalCount: number;
  created: Date;
  scheduled: Date;
  author: string;
  url: string;
}

interface PostFilter {
  mentoring: boolean;
  meetup: boolean;
  board: boolean;
}
interface User {
  userid: number;
  username: string;
  profileImage: string;
}

// 민감한 정보는 따로 관리
interface UserCredentials {}
