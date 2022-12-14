import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, useEffect, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCurrentUser } from '../redax/auth/auth-operations';
import { getLoder } from '../redax/auth/auth-selector';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PublicRoute from './Routes/PublicRoute';
import PrivateRoute from './Routes/PrivateRoute';
import Loader from './Loader/Loder';

const Header = lazy(() => import('./Header/Header'));
const AuthView = lazy(() => import('../views/AuthView/AuthView'));
const HomeView = lazy(() => import('../views/HomeView/HomeView'));
const DragonPageInfo = lazy(() => import('./DragonPageInfo/DragonPageInfo'));

export const App = () => {
  const isLoder = useSelector(getLoder);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <div>
      {isLoder && <Loader />}
      <Suspense fallback={<Loader />}>
        <Header />
        <Routes>
          <Route
            path="/authorization"
            element={
              <PublicRoute>
                <AuthView />
              </PublicRoute>
            }
          />

          <Route
            path="/home"
            element={
              <PrivateRoute>
                <HomeView />
              </PrivateRoute>
            }
          />
          <Route
            path="/home/:dragonId"
            element={
              <PrivateRoute>
                <DragonPageInfo />
              </PrivateRoute>
            }
          ></Route>
          <Route path="*" element={<Navigate to="/authorization" />}></Route>
        </Routes>
        <ToastContainer autoClose={3000} />
      </Suspense>
    </div>
  );
};
