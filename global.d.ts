type PostType = 'mentoring' | 'meetup' | 'board';
interface Post {
  title: string;
  type: PostType;
  currentCount: number;
  totalCount: number;
  created: Date;
  scheduled: Date;
  author: string;
}
