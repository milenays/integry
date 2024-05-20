import React, { Component, ErrorInfo, ReactNode } from 'react';
import { toast } from 'react-toastify';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    toast.error("Bir hata oluştu!");
  }

  render() {
    if (this.state.hasError) {
      return <h1>Bir şeyler yanlış gitti. Lütfen sayfayı yenileyin.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;