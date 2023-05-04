import { Route, Routes } from 'react-router-dom';
import PublicRoute from './PublicRoute/PublicRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
// import AdminRoute from './AdminRoute';
// import UserRoute from './UserRoute';

import { Layout } from 'components/Layout/Layout';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { RegisterPage } from '../pages/RegisterPage/RegisterPage';
import { ListPage } from '../pages/ListPage/ListPage';
import { ListAdminPage } from '../pages/ListAdminPage/ListAdminPage';
import { CreatePage } from '../pages/CreatePage/CreatePage';
import { EditPage } from '../pages/EditPage/EditPage';

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
            path="/admin"
            element={<PrivateRoute component={<ListAdminPage />} />}
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
