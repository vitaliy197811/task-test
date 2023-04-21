import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { SharedLayout } from './Layout.styled';


export const Layout = () => {
  return (
    <SharedLayout>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
    </SharedLayout>
  );
};
