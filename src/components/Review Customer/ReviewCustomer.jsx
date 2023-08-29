import React from "react";
import CustomTable from "../Table/CustomTable";
import { useEffect } from "react";
import { getPandingCustomerForApprovement } from "../../services/CustomerService";
import { useState } from "react";
import styles from "./ReviewCustomer.module.css";
import { AiFillEye } from "react-icons/ai";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReviewCustomer = () => {
  const [reviewCustomer, setReviewCustomer] = useState([]);

  function handleView(email) {}

  function handleApprove(email) {}

  function handleDisApprove(email) {}

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
  }, []);
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
