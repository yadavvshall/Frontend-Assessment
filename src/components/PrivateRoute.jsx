// src/components/PrivateRoute.jsx
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      element={user ? <Element /> : <Navigate to="/login" />}
    />
  );
};

PrivateRoute.propTypes = {
  element: PropTypes.elementType.isRequired,
};

export default PrivateRoute;
