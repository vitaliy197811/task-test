import { Navigate } from 'react-router-dom';

const AdminRoute = ({ component: Component, redirectTo = '/' }) => {
  const token = localStorage.getItem('token');
  return !token ? <Navigate to={redirectTo} /> : Component;
};

export default AdminRoute;
