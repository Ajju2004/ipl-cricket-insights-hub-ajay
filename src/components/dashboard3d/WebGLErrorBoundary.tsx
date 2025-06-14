
import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface WebGLErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

interface WebGLErrorBoundaryProps {
  children: React.ReactNode;
}

class WebGLErrorBoundary extends React.Component<WebGLErrorBoundaryProps, WebGLErrorBoundaryState> {
  constructor(props: WebGLErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): WebGLErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('WebGL Error:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <Card className="bg-black/95 border-gray-700 h-[500px] shadow-2xl">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-3">
              <AlertTriangle className="text-yellow-400" size={28} />
              3D Visualization Error
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center h-full text-center">
            <div className="text-gray-300 mb-6">
              <p className="text-lg mb-2">WebGL context error occurred</p>
              <p className="text-sm text-gray-400">
                This may be due to GPU limitations or browser restrictions
              </p>
            </div>
            <Button 
              onClick={this.handleRetry}
              className="flex items-center gap-2"
            >
              <RefreshCw size={16} />
              Retry 3D Visualization
            </Button>
          </CardContent>
        </Card>
      );
    }

    return this.props.children;
  }
}

export default WebGLErrorBoundary;
