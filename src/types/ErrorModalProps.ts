export interface ErrorInfo {
  data?: {
    reason?: string;
    message?: string;
  };
  status?: number;
}

export interface ErrorCardProps {
  errorInfo?: ErrorInfo;
  onModalClose: () => void;
  subReddit: string;
}
