import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const [loginBtn, setLoginBtn] = useState("Login");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            className="h-10 w-auto rounded-xl shadow"
            src={LOGO_URL}
            alt="Logo"
          />
          <span className="text-lg font-bold text-gray-800 hidden sm:inline">
            FoodieApp
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✖️" : "☰"}
        </button>

        {/* Nav Items */}
        <nav
          className={`
            absolute md:static top-14 left-0 w-full md:w-auto 
            bg-white md:bg-transparent shadow-md md:shadow-none 
            md:flex items-center transition-all duration-300 
            ${isMenuOpen ? "block" : "hidden md:block"}
          `}
        >
          <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-gray-700 font-medium px-4 py-4 md:p-0">
            <li className="flex items-center gap-1">
              Online:{" "}
              {onlineStatus ? (
                <span className="text-green-500">🟢</span>
              ) : (
                <span className="text-red-500">🔴</span>
              )}
            </li>
            <li className="hover:text-blue-600 transition">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            </li>
            <li className="hover:text-blue-600 transition">
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
            </li>
            <li className="hover:text-blue-600 transition">
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
            </li>
            <li>
              <button
                onClick={() =>
                  setLoginBtn(loginBtn === "Login" ? "Logout" : "Login")
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
