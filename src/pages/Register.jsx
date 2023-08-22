import { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import { Link } from "react-router-dom";
import api from "../utils/axiosInstance";
import { useMutation } from "react-query";
import registerUserApi from "../services/RegisterService";

const Register = () => {
  const data = {
    email: "",
    password: "",
    role: "",
  };

  const [registerData, setregisterData] = useState(data);

  function handleChange(e) {
    setregisterData({ ...registerData, [e.target.name]: e.target.value });
  }

  console.log(registerData);

  function HandleSubmit(e) {
    e.preventDefault();
    registerData(registerData);
  }
  return (
    <div>
      <NavBar />
      <div
        className="absolute"
        style={{
          background: "black",
          height: "100vh",
          overflowY: "hidden",
          top: 0,
          zIndex: -1,
        }}
      >
        <img
          src="HomePage_Image.png"
          alt=""
          style={{
            height: "100vh",
            overflow: "hidden",
            width: "100vw",
            opacity: 0.7,
            transform: "rotateY(180deg)",
          }}
        />
      </div>
      <div
        className="relative flex flex-col justify-center"
        style={{ zIndex: 1, height: "85vh" }}
      >
        <div className="w-full p-8 m-auto bg-[#001C30] rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-white underline">
            Register
          </h1>
          <form className="mt-6" onSubmit={HandleSubmit}>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-white"
              >
                Email
              </label>
              <input
                name="email"
                required
                type="email"
                className="block w-full px-4 py-2 mt-2 text-[#001C30] bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-white"
              >
                Password
              </label>
              <input
                name="password"
                required
                type="password"
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="role"
                className="block text-sm font-semibold text-white"
              >
                Role
              </label>
              <select
                name="role"
                required
                defaultValue={"DEFAULT"}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-[#001C30] bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              >
                <option disabled value="DEFAULT">
                  Select Role
                </option>
                <option value="admin">Admin</option>
                <option value="reviewer">Reviewer</option>
                <option value="agent">Agent</option>
              </select>
            </div>
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                Register
              </button>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-white">
            <Link
              to="/login"
              className="font-medium text-white hover:underline"
            >
              Already have an account?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
