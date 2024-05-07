import React from "react";
import Navigation from "../Component/Navigation";
import "../Styles/globalStyle.css";

function Signup() {
  return (
    <div className="Signup">
      <Navigation />
      <div className="container max-w-screen-sm m-auto pt-20 p-5">
        <form>
          <h1 className="text-white mb-5 md:text-2xl font-bold">
            Welcome, Sign-up to create account
          </h1>
          <div className="flex flex-col gap-7">
            <input type="text" placeholder="Full Name" className="p-3" required/>
            <input type="email" placeholder="Email" className="p-3" required/>
            <input type="password" placeholder="Password" className="p-3" required/>
            <button className="text-white bg-black-purple-two rounded p-3 hover:bg-purple-950 duration-200 ease-in-out">
              Signup    
            </button>
          </div>
        </form>
        <p className="text-white mt-5">
          Already have an account? Click on the login button.
        </p>
      </div>
    </div>
  );
}

export default Signup;
