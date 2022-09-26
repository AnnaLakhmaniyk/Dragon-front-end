import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from '../../redax/auth/auth-selector';

function PublicRoute({ children, redirect = '/home' }) {
  const isLogedOrNot = useSelector(getIsLoggedIn);

  return isLogedOrNot ? <Navigate to={redirect} replace /> : children;
}

export default PublicRoute;
