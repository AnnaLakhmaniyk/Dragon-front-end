// import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import Header from './Header/Header';
import AuthView from 'views/AuthView/AuthView';
// import { DragonView } from '../views/HomeView/HomeView';

export const App = () => {
  return (
    <div>
      <Suspense>
        <Header />
        <AuthView />
        {/* <DragonView /> */}
      </Suspense>
    </div>
  );
};
