import React from "react";
import CustomTable from "../Table/CustomTable";
import { useEffect, useState } from "react";
import {
  approveCustomer,
  getPandingCustomerForApprovement,
  rejectCustomer,
} from "../../services/CustomerService";

import styles from "./ReviewCustomer.module.css";
import { AiFillEye } from "react-icons/ai";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReviewCustomer = () => {
  const [reviewCustomer, setReviewCustomer] = useState([]);
  const [tableUpdated, setTableUpdated] = useState(false);

  function handleView(email) {}

  function handleApprove(email) {
    approveCustomer(email).then((res) => {
      if (res.status === 200) {
        alert("Customer Approved");
        setTableUpdated((currState) => !currState);
      } else {
        alert("Something went wrong");
      }
    });
  }

  function handleDisApprove(email) {
    rejectCustomer(email).then((res) => {
      if (res.status === 200) {
        alert("Customer Rejected");

        setTableUpdated((currState) => !currState);
      } else {
        alert("Something went wrong");
      }
    });
  }

  useEffect(() => {
    getPandingCustomerForApprovement().then((res) => {
      let data = res.data.map((record) => {
        return {
          email: record.email,
          signedBy: record.signBy,
          actions: (
            <div className={`${styles["action-btn"]}`}>
              <button onClick={() => handleView(record.email)}>
                <AiFillEye />
              </button>
              <button onClick={() => handleApprove(record.email)}>
                <FontAwesomeIcon icon={faCheck} />
              </button>
              <button onClick={() => handleDisApprove(record.email)}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
          ),
        };
      });

      setReviewCustomer(data);
    });
  }, [tableUpdated]);
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
