import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const [loginBtn, setloginBtn] = useState("Login");

  return (
    <header className="w-full bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Logo */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              className="h-12 w-auto rounded-xl shadow-lg"
              src={LOGO_URL}
              alt="Logo"
            />
          </div>
        </div>

        {/* Nav Items */}
        <nav className="mt-4 md:mt-0">
          <ul className="flex flex-wrap md:flex-nowrap items-center gap-4 md:gap-6 text-gray-700 font-medium">
            <li className="flex items-center gap-1">
              Online:{" "}
              {onlineStatus ? (
                <span className="text-green-500">🟢</span>
              ) : (
                <span className="text-blue-500">🔴</span>
              )}
            </li>
            <li className="hover:text-blue-600 transition">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-blue-600 transition">
              <Link to="/about">About Us</Link>
            </li>
            <li className="hover:text-blue-600 transition">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <button
                onClick={() =>
                  setloginBtn(loginBtn === "Login" ? "Logout" : "Login")
                }
                className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
              >
                {loginBtn}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
