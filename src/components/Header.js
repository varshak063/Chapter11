import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useInternetCheck } from "../utils/useInternetCheck";

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("Login");
 
  const isOnline = useInternetCheck();
  return (
    <>
      <div className="flex justify-between items-center bg-pink-100 mb shadow-lg">
        <div className="logo-container">
          <img className="w-20" src={LOGO_URL} alt="Logo" />
        </div>
        <div className="nav-items">
          <ul className="flex align-middle justify-between font-bold">
            <li className="m-2">
              Online Status:
              {isOnline === true ? (
                <button className="bg-green-900"></button>
              ) : (
                <button className="Offline"></button>
              )}
            </li>
            <Link to="/">
              <li className="m-2">Home</li>
            </Link>
            <Link to="/about">
              <li className="m-2">About Us</li>
            </Link>
            <Link>
              <li className="m-2">Contact Us</li>
            </Link>
            <Link to="/grocery">
              <li className="m-2">Grocery</li>
            </Link>
            <Link>
              <li className="m-2">Cart</li>
            </Link>
            <button
              className="m-2"
              onClick={() => {
                isLoggedIn === "Login"
                  ? setIsLoggedIn("Logout")
                  : setIsLoggedIn("Login");
              }}
            >
              {isLoggedIn}
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};
