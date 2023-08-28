import React from "react";
import CustomTable from "../Table/CustomTable";

const ReviewCustomer = () => {
  return <div>
    <CustomTable fields={["Email", "Added By", "View", "Approve", "Disapprove"]} data={[]} />
  </div>;
};

export default ReviewCustomer;
