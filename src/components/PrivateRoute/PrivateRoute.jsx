import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const token = localStorage.getItem('token');
  // const user = JSON.parse(localStorage.getItem('user'));
  return token ? (
    Component
  ) : (
    <Navigate to={redirectTo} />
  );
};

export default PrivateRoute;
