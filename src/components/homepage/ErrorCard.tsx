"use client";
import { ErrorCardProps } from "@/types/ErrorModalProps";

const ErrorCard: React.FC<ErrorCardProps> = ({
  errorInfo,
  onModalClose,
  subReddit,
}) => {
  return (
    <div className="border-all" style={{ height: "100%" }}>
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
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                maxWidth: "280px",
              }}
            >
              {subReddit}
            </span>
          </div>
          <button
            style={{ borderRadius: "25px", cursor: "pointer" }}
            onClick={onModalClose}
          >
            Remove Query
          </button>
        </div>
        <div className="error-card-container">
          <div className="error-card-content">
            <div className="error-card-title border-bottom">
              <div>No results found for &quot;{subReddit}&quot;</div>
            </div>
            <div className="error-card-message">
              <div>Reason : {errorInfo?.data?.reason}</div>
              <div>Error Message : {errorInfo?.data?.message}</div>
              <div>Error Code : {errorInfo?.status}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorCard;
