import { Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

import { Layout } from 'components/Layout/Layout';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { RegisterPage } from '../pages/RegisterPage/RegisterPage';
import { ListPage } from '../pages/ListPage/ListPage';
import { CreatePage } from '../pages/CreatePage/CreatePage';
import { EditPage } from '../pages/EditPage/EditPage';
// const ListPage = lazy(() => import('../pages/ListPage/ListPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            element={
              <PublicRoute component={<LoginPage />} redirectTo="/list" />
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute component={<RegisterPage />} redirectTo="/list" />
            }
          />
          <Route
            path="/list"
            element={<PrivateRoute component={<ListPage />} />}
          />
          <Route
            path="/add"
            element={<PrivateRoute component={<CreatePage />} />}
          />
          <Route
            path="/list/:id"
            element={<PrivateRoute component={<EditPage />} />}
          />
        </Route>
      </Routes>
    </>
  );
};
