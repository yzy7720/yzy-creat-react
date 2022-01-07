import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/login';

const main = () => (
  <Routes>
    <Route path='/home' element={Home} />
    <Route path='/login' element={Login} />
    <Route path='*' element={<Navigate to="/login" />} />
  </Routes>
)
export default main;