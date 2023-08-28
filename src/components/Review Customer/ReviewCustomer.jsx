import React from "react";
import CustomTable from "../Table/CustomTable";
import { useEffect } from "react";
import { getPandingCustomerForApprovement } from "../../services/CustomerService";
import { useState } from "react";

const ReviewCustomer = () => {
  const [reviewCustomer, setReviewCustomer] = useState([]);

  function handleView(email) {
    console.log(email);
  }

  function handleApprove(email) {}

  function handleDisApprove(email) {}

  useEffect(() => {
    getPandingCustomerForApprovement().then((res) => {
      console.log("response ", res.data);

      let data = res.data.map((record) => {
        return {
          email: record.email,
          signedBy: record.signBy,
          actions: (
            <>
              <button onClick={() => handleView(record.email)}>V</button>
              <button onClick={() => handleApprove(record.email)}>T</button>
              <button onClick={() => handleDisApprove(record.email)}>T</button>
            </>
          ),
        };
      });

      setReviewCustomer(data);
    });
  }, []);
  console.log("new data ", reviewCustomer);
  return (
    <div>
      <CustomTable
        fields={["Email", "Added By", "Actions"]}
        data={reviewCustomer}
      />
    </div>
  );
};

export default ReviewCustomer;
