import React, { useEffect, useState } from "react";
import {
  addCustomerForRevivew,
  searchCustomerApi,
} from "../../services/CustomerService";
import { getNameFromToken } from "../../utils/jwtTokenDecoder";

const AddCustomer = () => {
  const data = {
    email: "",
    fname: "",
    lname: "",
    mobno: "",
    address: "",
  };

  const [addCustomer, setAddCustomer] = useState(data);
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [pdfFile, setPdfFile] = useState(null);
  const [borderColor, setBorderColor] = useState("blue");

  const handleChange = (e) => {
    setAddCustomer({ ...addCustomer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    const formData = new FormData();
    formData.append("email", addCustomer.email);
    formData.append("isSigned", false);
    formData.append("pdfData", pdfFile);
    formData.append("signBy", getNameFromToken());
    e.preventDefault();
    addCustomerForRevivew(formData)
      .then((res) => {
        alert("Customer Successfully added for review");
        setAddCustomer(data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const onPdfUpload = (e) => {
    setPdfFile(e.target.files[0]);
  };

  useEffect(() => {
    setError("");
    setBorderColor("blue");
    if (addCustomer.email !== "")
      searchCustomerApi(addCustomer.email)
        .then((res) => {
          setUser(res.data);
          setBorderColor("blue");
        })
        .catch((error) => {
          setError(error);
          setBorderColor("red");
        });
  }, [addCustomer]);

  return (
    <div class="flex flex-col items-center justify-center ">
      <div
        className="w-full p-28 bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0 "
        style={{
          minWidth: "77vw",
        }}
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight text-black md:text-2xl dark:text-black">
            Add Customer
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-black dark:text-black"
              >
                E-mail
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className={`bg-white border border-blue-900 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 focus:border-${borderColor}-500 block w-full p-2.5 dark:bg-white dark:border-${borderColor}-500 dark:text-blue-900 outline-none `}
                required
                value={addCustomer.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-between gap-28">
              <div className="flex-1">
                <label
                  for="fname"
                  className="block mb-2 text-sm font-medium text-black dark:text-black"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  value={addCustomer.fname}
                  disabled={borderColor === "red" || addCustomer.email === ""}
                  className={`bg-white border border-blue-900 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-blue-900 dark:text-blue-900`}
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="flex-1">
                <label
                  for="lname"
                  className="block mb-2 text-sm font-medium text-black dark:text-black"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lname"
                  id="lname"
                  value={addCustomer.lname}
                  disabled={borderColor === "red" || addCustomer.email === ""}
                  className="bg-white border border-blue-900 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-blue-900 dark:text-blue-900"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex justify-between gap-28 ">
              <div className="flex-1">
                <label
                  for="address"
                  className="block mb-2 text-sm font-medium text-black dark:text-black"
                >
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  value={addCustomer.address}
                  disabled={borderColor === "red" || addCustomer.email === ""}
                  className="h-20 bg-white border border-blue-900 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-blue-900 dark:text-blue-900"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="flex-1">
                <label
                  for="mobno"
                  className="block mb-2 text-sm font-medium text-black dark:text-black"
                >
                  Mobile number
                </label>
                <input
                  type="text"
                  name="mobno"
                  id="mobno"
                  value={addCustomer.mobno}
                  disabled={borderColor === "red" || addCustomer.email === ""}
                  className="bg-white border border-blue-900 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-blue-900 dark:text-blue-900"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label className="w-full bg-transparent hover:bg-gray-700 text-gray-700 font-semibold hover:text-white py-2 px-4  border border-gray-700 hover:border-transparent rounded ">
                Upload Pdf{" "}
                <input
                  name="pdfData"
                  type="file"
                  size="60"
                  style={{ display: "none", width: "100%" }}
                  accept=".pdf"
                  id="file"
                  disabled={borderColor === "red" || addCustomer.email === ""}
                  onChange={onPdfUpload}
                />
              </label>
            </div>
            <button
              type="submit"
              className="bg-gray-90 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[200px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            >
              Add Customer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCustomer;
