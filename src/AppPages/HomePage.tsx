"use client";
import { useGetPostsBySubredditQuery } from "@/redux/apis/redditApi";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
  RedditApiResponse,
  ResponseChild,
  SubRedditLaneProps,
} from "@/types/RedditModels";
import ErrorCard from "@/components/homepage/ErrorCard";
import { removeSubreddit } from "@/redux/slices/subRedditSlice";
import ResultCard from "@/components/homepage/ResultCard";
import CardLoader from "@/components/homepage/CardLoader";
import { ErrorInfo } from "@/types/ErrorModalProps";

const HomePage = () => {
  const { subreddits } = useSelector((state: RootState) => state.subreddits);
  // console.log(subreddits);

  return (
    <div className="home-page">
      <div className="subreddit-lane-container">
        {subreddits.map((reddit, index) => (
          <div key={index}>
            <SubRedditLane subreddit={reddit} />
          </div>
        ))}
      </div>
    </div>
  );
};

const SubRedditLane: React.FC<SubRedditLaneProps> = ({ subreddit }) => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useGetPostsBySubredditQuery(subreddit);

  const closeErrorModal = () => {
    dispatch(removeSubreddit(subreddit));
  };

  interface CustomError {
    status?: number;
    data?: {
      message?: string;
    };
  }

  const errorInfo: ErrorInfo | undefined = error
    ? {
        data: {
          reason:
            (error as CustomError).status === 404
              ? "Not Found"
              : "An error occurred",
          message:
            (error as CustomError).data?.message || "Something went wrong.",
        },
        status: (error as CustomError).status,
      }
    : undefined;

  return (
    <>
      {isLoading ? (
        <CardLoader />
      ) : errorInfo ? (
        <ErrorCard
          errorInfo={errorInfo}
          onModalClose={closeErrorModal}
          subReddit={subreddit}
        />
      ) : (
        <SearchResult data={data} subreddit={subreddit} />
      )}
    </>
  );
};

interface SearchResultProps {
  data: RedditApiResponse;
  subreddit: string;
}

const SearchResult: React.FC<SearchResultProps> = ({ data, subreddit }) => {
  const dispatch = useDispatch();

  // console.log(data);
  return (
    <div className="border-all">
      <div className="container" style={{ marginTop: "32px", padding: "8px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "8px 0",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span
              style={{
                fontWeight: 500,
                fontSize: 12,
                textTransform: "capitalize",
              }}
            >
              SUBREDDIT RESULT FOR :
            </span>
            <span
              style={{
                fontWeight: 500,
                fontSize: 18,
                textTransform: "capitalize",
              }}
            >
              {subreddit}
            </span>
          </div>
          <button
            style={{ borderRadius: "25px", cursor: "pointer" }}
            onClick={() => dispatch(removeSubreddit(subreddit))}
          >
            Remove Query
          </button>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {data?.data.children.map((child: ResponseChild) => (
            <ResultCard key={child.data.id} post={child.data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
