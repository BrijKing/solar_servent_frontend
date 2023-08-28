import React from "react";
import Home from "./pages/HomePage";
import Login from "./pages/Login";
import { Route, Routes } from "react-router";
import Register from "./pages/Register";
import { AuthProvider } from "./contexts/AuthContext";
import Dashboard from "./pages/Dashboard";
import ViewCustomer from "./components/View customer/ViewCustomer";
import ViewEmployee from "./components/View Employee/ViewEmployee";
import AddCustomer from "./components/Add Customer/AddCustomer";
import ReviewCustomer from "./components/Review Customer/ReviewCustomer";
const App = () => {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="addCustomer" element={<AddCustomer />} />
            <Route path="viewCustomer" element={<ViewCustomer />} />
            <Route path="reviewCustomer" element={<ReviewCustomer />} />
            <Route path="viewEmployees" element={<ViewEmployee />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
};

export default App;
