import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAdminCheck } from '../lib/useAdminCheck';

const AdminRoute = ({ children }) => {
  const isAdmin = useAdminCheck();

  if (!isAdmin) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default AdminRoute;
