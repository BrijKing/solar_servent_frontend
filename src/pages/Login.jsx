import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div style={{ height: "100vh", overflow: "hidden" }}>
        <NavBar />
        <div
          className="absolute"
          style={{
            background: "black",
            top: 0,
            zIndex: -1,
          }}
        >
          <img
            src="HomePage_Image.png"
            alt=""
            style={{
              height: "100vh",
              width: "100vw",
              opacity: 0.7,
              transform: "rotateY(180deg)",
            }}
          />
        </div>
        <div
          className="relative flex flex-col justify-center"
          style={{ zIndex: 1, height: "88vh" }}
        >
          <div className="w-full p-14 m-auto bg-[#001C30] rounded-md shadow-md lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-white underline">
              Sign in
            </h1>
            <form className="mt-6">
              <div className="mb-2">
                <label
                  for="email"
                  className="block text-sm font-semibold text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-[#001C30] bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label
                  for="password"
                  className="block text-sm font-semibold text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <a href="#" className="text-xs text-white hover:underline">
                Forget Password?
              </a>
              <div className="mt-6">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                  Login
                </button>
              </div>
            </form>

            <p className="mt-8 text-xs font-light text-center text-white">
              {" "}
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-medium text-white hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
