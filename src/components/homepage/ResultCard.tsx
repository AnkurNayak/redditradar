"use client";
import { RedditPost } from "@/types/RedditModels";
import Link from "next/link";

interface ResultCardProps {
  post: RedditPost;
}

const ResultCard: React.FC<ResultCardProps> = ({ post }) => {
  return (
    <div
      style={{
        padding: "16px",
        background: "#333d42",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <div
        style={{
          fontSize: 20,
          fontWeight: 900,
        }}
      >
        {post.title}
      </div>
      <p>
        Description:{" "}
        {post.selftext.length > 0
          ? post.selftext
          : "No Description found for this post"}
      </p>
      <div>author : {post.author}</div>
      <div>votes : {post.score}</div>
      <div>comments : {post.num_comments}</div>
      <div>
        <Link
          href={post.url}
          target="_blank"
          style={{
            color: "white",
            background: "#AE2C00",
            borderRadius: "999px",
            padding: "4px 8px",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "fit-content",
            fontSize: 14,
          }}
        >
          View post in reddit
        </Link>
      </div>
    </div>
  );
};

export default ResultCard;
