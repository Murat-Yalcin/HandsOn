import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Login from "../pages/Login";
import Main from "../pages/Main";
import MovieDetail from "../pages/MovieDetail";
import Register from "../pages/Register";

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Main />} />
        <Route path="moviedetail/:id" element={<MovieDetail />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
