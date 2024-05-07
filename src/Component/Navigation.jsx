import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../Styles/globalStyle.css";

function Navigation() {
  const location = useLocation();

  return (
    <div className="pb-40">
      <div className="Navigation text-white fixed top-0 right-0 left-0 z-50">
        <header className="flex justify-between p-5 md:p-10 m-auto items-center max-w-screen-xl">
          <h1 className="md:text-2xl font-bold">
            <Link to="/">SmartCrypto <span className="text-light-pink">Exch.</span></Link>
          </h1>
          <nav>
            <ul>
              {location.pathname === "/login" ? (
                <Link to="/signup">
                  <li className="bg-white rounded-full text-black-purple md:pt-3 md:ps-14 md:pb-3 md:pe-14  pt-1 ps-3 pb-1 pe-3 text-sm md:text-xl  font-bold hover:bg-black-purple-two hover:text-white duration-200 ease-in-out cursor-pointer">
                    SIGN UP
                  </li>
                </Link>
              ) : (
                <Link to="/login">
                  <li className="bg-white rounded-full text-black-purple md:pt-3 md:ps-14 md:pb-3 md:pe-14  pt-1 ps-3 pb-1 pe-3 text-sm md:text-xl  font-bold hover:bg-black-purple-two hover:text-white duration-200 ease-in-out cursor-pointer">
                    LOGIN
                  </li>
                </Link>
              )}
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default Navigation;
