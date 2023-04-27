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

interface Comment {
  id: number;
  author: string;
  content: string;
  created: Date;
  like: boolean;
  likeCount: number;
}

interface User {
  memberId: number;
  username: string;
  loginId: string;
  profileImage: string;
  contact: string;
  birth: Date;
  email: string;
  address: string;
  education: string;
  skills: string[];
}
