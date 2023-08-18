import React from "react";
import Home from "./pages/HomePage";
import Login from "./pages/Login";
import { Route, Routes } from "react-router";
import Register from "./pages/Register";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
    </QueryClientProvider>
  );
};

export default App;
