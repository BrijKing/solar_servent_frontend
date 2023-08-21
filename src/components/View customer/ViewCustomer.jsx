import React, { useEffect, useState } from "react";
import api from "../../utils/axiosInstance";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

async function getAllCustomer() {
  console.log("appi called");
  const response = await api.get("/customer/getAll");
  return response;
}

const ViewCustomer = () => {
  const getAllCustomerQuery = useQuery("getAllCustomer", getAllCustomer);
  const [customerData, setCustomerData] = useState({});
  const { isSuccess, isError } = getAllCustomerQuery;

  const navigate = useNavigate();
  useEffect(() => {
    if (isSuccess) {
      setCustomerData(getAllCustomerQuery.data.data);
      console.log("customer data is", getAllCustomerQuery.data);
    }
  }, [isSuccess, getAllCustomerQuery.data]);

  if (isError) {
    navigate("/login");
    // alert(getAllCustomerQuery.error.response.data);
  }

  return (
    <div className="bg-blue-100">
      <table className="w-[1000px]">
        <tr>
          <th className="p-3">E-mail</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Mobile Number</th>
          <th>Address</th>
        </tr>
        {Array.from(customerData)?.map((data) => {
          console.log("data is", data);
          return (
            <tr key={data.id}>
              <td>{data.email}</td>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.mobileNumber}</td>
              <td>{data.address}</td>
            </tr>
          );
        })}
        <tr></tr>
      </table>
    </div>
  );
};

export default ViewCustomer;
