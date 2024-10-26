"use client";
import { ErrorCardProps } from "@/types/ErrorModalProps";

const ErrorCard: React.FC<ErrorCardProps> = ({
  errorInfo,
  onModalClose,
  subReddit,
}) => {
  return (
    <div className="error-card-container">
      <div className="error-card-content">
        <div className="error-card-title border-bottom">
          <div>No results found for &quot;{subReddit}&quot;</div>
        </div>
        <div className="error-card-message">
          <div>Reason : {errorInfo?.data?.reason}</div>
          <div>Error Message : {errorInfo?.data?.message}</div>
          <div>Error Code : {errorInfo?.status}</div>
          <button className="error-close-btn" onClick={onModalClose}>
            Close Modal
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorCard;
