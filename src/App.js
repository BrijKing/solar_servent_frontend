import React from "react";
import Home from "./pages/HomePage";
import Login from "./pages/Login";
import { Route, Routes } from "react-router";
import Register from "./pages/Register";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
  );
};

export default App;
