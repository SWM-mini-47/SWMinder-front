type PostType = 'MENTORING' | 'MEETUP' | 'BOARD';
interface Post {
  applyEndTime: Date;
  applyStartTime: Date;
  author: string;
  category: PostType;
  createdDate: Date;
  endTime: Date;
  joinCount: number;
  limitCount: number;
  mentoringId: number;
  qustnrSn: number;
  startTime: Date;
  title: string;
}

interface PostsResponse {
  board: Post[];
  meetup: Post[];
  mentoring: Post[];
}

interface PostFilter {
  MENTORING: boolean;
  MEETUP: boolean;
  BOARD: boolean;
}
interface User {
  userid: number;
  username: string;
  profileImage: string;
}

// 민감한 정보는 따로 관리
interface UserCredentials {}

interface UserForm {}

interface Comment {
  id: number;
  author: string;
  content: string;
  created: Date;
  like: boolean;
  likeCount: number;
}
