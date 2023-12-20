import React from 'react';
import Login from './Pages/Login/Login';
import User from './Pages/User/User';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user/*" element={<User />} />
      </Routes>
    </>
  );
};

export default App;