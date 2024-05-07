import React from "react";
import Navigation from "../Component/Navigation";
import "../Styles/globalStyle.css";

function Login() {
  return (
    <div className="Login">
      <Navigation />
      <div className="container max-w-screen-sm m-auto pt-24 p-5">
        <form>
          <h1 className="text-white mb-5 md:text-2xl font-bold">
            Welcome, Login to continue
          </h1>
          <div className="flex flex-col gap-7">
            <input type="email" placeholder="Email" className="p-3" required/>
            <input type="password" placeholder="Password" className="p-3" required/>
            <button className="text-white bg-black-purple-two rounded p-3 hover:bg-purple-950 duration-200 ease-in-out">
              Login
            </button>
          </div>
        </form>
        <p className="text-white mt-5">
          Don't have an account? Click on the sign up button.
        </p>
      </div>
    </div>
  );
}

export default Login;
