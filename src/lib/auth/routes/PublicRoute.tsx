import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks';
import { LoadingSpinner } from '../../../components/LoadingSpinner';

interface PublicRouteProps {
  children: React.ReactNode;
}

export function PublicRoute({ children }: PublicRouteProps) {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <LoadingSpinner />;
  }
  
  return user ? <Navigate to="/home" /> : <>{children}</>;
}