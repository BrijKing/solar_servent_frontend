import React from "react";
import CustomTable from "../Table/CustomTable";
import { useEffect, useState } from "react";
import {
  approveCustomer,
  getCustomerPdfById,
  getPandingCustomerForApprovement,
  rejectCustomer,
} from "../../services/CustomerService";

import styles from "./ReviewCustomer.module.css";
import { AiFillEye } from "react-icons/ai";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PdfViewer from "../Pdf-viewer/PdfViewer";
import Modal from "../Modal/Modal";

const ReviewCustomer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [reviewCustomer, setReviewCustomer] = useState([]);
  const [tableUpdated, setTableUpdated] = useState(false);
  const [pdfData, setPdfData] = useState(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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

  function handleView(email) {
    openModal();
    getCustomerPdfById(email).then((res) => {
      if (res.status === 200) {
        setPdfData(res.data.pdfData);
      } else {
        alert("Something went wrong");
      }
    });
  }

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

  return (
    <div>
      <CustomTable
        fields={["Email", "Added By", "Actions"]}
        data={reviewCustomer}
      />

      <Modal isOpen={isModalOpen} onClose={closeModal} className="absolute left-[250px] top-[100px]">
        <PdfViewer pdfData={pdfData} />
      </Modal>
    </div>
  );
};

export default ReviewCustomer;
