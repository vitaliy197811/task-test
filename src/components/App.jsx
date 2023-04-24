import { Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

import { Layout } from 'components/Layout/Layout';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { RegisterPage } from '../pages/RegisterPage/RegisterPage';
import { ListPage } from '../pages/ListPage/ListPage';
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
            element={
              // <ListPage />
              <PrivateRoute component={<ListPage />} />
            }
          />
          {/* <Route path="verification/:id" element={<Verification />} />

        <Route path="/" element={<SharedLayout />}>
          <Route
            path="main"
            index
            element={<PrivateRoute component={<MainPage />} />}
          />
          <Route
            path="categories"
            element={<PrivateRoute component={<CategoriesPage />} />}
          />
          <Route
            path="categories/:categoryName"
            element={<PrivateRoute component={<CategoriesPage />} />}
          />
          <Route
            path="search"
            element={<PrivateRoute component={<SearchPage />} />}
          />
          <Route
            path="add"
            element={
              <PrivateRoute component={<AddRecipe />} redirectTo="/my" />
            }
          />
          <Route
            path="my"
            element={<PrivateRoute component={<MyRecipes />} />}
          />
          <Route
            path="favorite"
            element={<PrivateRoute component={<Favorite />} />}
          />
          <Route
            path="shopping-list"
            element={<PrivateRoute component={<ShoppingList />} />}
          />
          <Route
            path="recipe/:recipeId"
            element={<PrivateRoute component={<RecipePage />} />}
          />
          <Route
            path="*"
            element={<PrivateRoute component={<NotFound />} />}
          />
        </Route> */}
        </Route>
      </Routes>
    </>
  );
};
