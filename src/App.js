import React from "react";
import Home from "./pages/HomePage";
import Login from "./pages/Login";
import { Route, Routes} from "react-router";
import Register from "./pages/Register";
import { QueryClientProvider, QueryClient } from "react-query";
import { AuthProvider } from "./contexts/AuthContext";
import Dashboard from "./pages/Dashboard";
import ViewCustomer from "./components/View customer/ViewCustomer";
const App = () => {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="addCustomer" element={<h1>Add Customer</h1>} />
              <Route path="viewCustomer" element={<ViewCustomer />} />
              <Route
                path="reviewCustomer"
                element={<h1>Review Customers</h1>}
              />
              <Route path="viewEmployees" element={<h1>View Employees</h1>} />
            </Route>
          </Routes>
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
