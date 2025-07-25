import React from 'react';
import { Navigate } from 'react-router-dom';

const Authwapper = (props) => {
  let users = null;

  try {
    const raw = localStorage.getItem('user');
    users = raw ? JSON.parse(raw) : null;
  } catch (e) {
    console.error('Invalid JSON in localStorage:', e);
    localStorage.removeItem('user');
  }

  return users ? props.children : <Navigate to="/login" />;
};

export default Authwapper;
