export interface RedditPost {
  id: string;
  title: string;
  selftext: string;
  author: string;
  score: number;
  num_comments: number;
  url: string;
}

export interface ResponseChild {
  data: RedditPost;
}

export interface ResponseChildren {
  after: string | null;
  before: string | null;
  children: ResponseChild[];
}

export interface RedditApiResponse {
  kind: string;
  data: ResponseChildren;
}

export interface SubRedditLaneProps {
  subreddit: string;
}
