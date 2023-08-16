import React from "react";
import Home from "./pages/HomePage";
import Login from "./pages/Login";
import { Route, Routes } from "react-router";

const App = () => {
  return (
    <>
      {/* <div style={{ overflowX: "hidden" , overflowY:"hidden" }}> */}
        {/* <Home /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      {/* </div> */}
    </>
  );
};

export default App;
