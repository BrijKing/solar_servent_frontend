import React, { useEffect, useState } from "react";
import api from "../../utils/axiosInstance";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import styles from "./ViewCustomer.module.css";

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
    <div>
      <table className={`w-[1000px] border shadow-md ${styles.table}`}>
        <tr className="bg-blue-400 shadow-md">
          <th className="p-4 ">E-mail</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Mobile Number</th>
          <th>Address</th>
        </tr>
        {/* <div className={`s{}`}> */}
          {Array.from(customerData)?.map((data,index) => {
            console.log("data is", data);
            return (
              <tr key={data.id} className={`text-center h-[60px] shadow-md ${index%2!=0 ? styles.evenRow:styles.oddRow}` }>
                <td>{data.email}</td>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.mobileNumber}</td>
                <td>{data.address}</td>
              </tr>
            );
          })}
        {/* </div> */}
      </table>
    </div>
  );
};

export default ViewCustomer;
