import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from '../../redax/auth/auth-selector';

function PrivateRoute({ children, redirect = '/authorization' }) {
  const isLogedOrNot = useSelector(getIsLoggedIn);
  return isLogedOrNot ? children : <Navigate to={redirect} replace />;
}

export default PrivateRoute;
