export type RedditPost = {
  thumbnail: string;
  title: string;
  ups: number;
  created: number;
  author: string;
  url: string;
  subreddit: string;
} | null;
