import React from "react";
import LoginImage from "../assets/LoginImage.jpg";
const Login = () => {
  return (
    <div className="bg-gradient-to-r from-teal-400 to-gray-800 h-screen flex justify-center items-center">
      <div className="bg-white w-[45%] h-3/5 flex  rounded-3xl">
        <img
          src={LoginImage}
          alt="Image Of Food"
          className=" h-full object-contain p-8 rounded-3xl w-[50%]"
        />

        <div className="border p-10">
          <form action="">
            <h2>Lets Get Started</h2>
            <p> Email </p>
            <input type="text" />
            <p>Password</p>
            <input type="password" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
