import React, { useState } from "react";
import logo from "../../assets/header/HobbyCueLogo.png";
import mobileLogo from "../../assets/header/mobilelogo.png";
import exploreIcon from "../../assets/header/explore.png";
import hobbiesIcon from "../../assets/header/Hobbies.png";
import bookmarkIcon from "../../assets/header/bookmark.png";
import notificationIcon from "../../assets/header/notifications_black_24dp1.png";
import cartIcon from "../../assets/header/Product3.png";
import hamburgerIcon from "../../assets/header/hamburger.png";
import closeIcon from "../../assets/header/cross.png";
import searchIcon from "../../assets/header/searchicon.png"; // Assuming you have a local search icon

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white border-b border-purple-300 py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt="Hobbycue Logo"
            className="h-10 hidden lg:block"
          />
          <img
            src={mobileLogo}
            alt="Hobbycue Logo"
            className="h-10 lg:hidden"
          />
        </div>
        <div className="flex-1 mx-4 hidden lg:flex">
          <input
            type="text"
            placeholder="Search here..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg"
          />
          <button className="bg-purple-600 text-white px-4 py-2 rounded-r-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.9 14.32a8 8 0 111.414-1.414l4.95 4.95a1 1 0 01-1.414 1.414l-4.95-4.95zM8 14A6 6 0 108 2a6 6 0 000 12z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="flex items-center space-x-4 lg:hidden">
          <button className="text-purple-600">
            <img src={searchIcon} alt="Search" className="h-6 w-6" />
          </button>
          <button className="text-purple-600">
            <img
              src={notificationIcon}
              alt="Notifications"
              className="h-6 w-6"
            />
          </button>
          <button onClick={toggleMenu} className="text-purple-600">
            <img
              src={menuOpen ? closeIcon : hamburgerIcon}
              alt="Menu"
              className="h-6 w-6"
            />
          </button>
        </div>
        <div className="flex items-center space-x-4 hidden lg:flex">
          <button className="flex items-center space-x-1 text-purple-600">
            <img src={exploreIcon} alt="Explore" className="h-5" />
            <span>Explore</span>
          </button>
          <button className="flex items-center space-x-1 text-purple-600">
            <img src={hobbiesIcon} alt="Hobbies" className="h-5" />
            <span>Hobbies</span>
          </button>
          <img
            src={bookmarkIcon}
            alt="Bookmark"
            className="h-5 text-purple-600"
          />
          <img
            src={notificationIcon}
            alt="Notifications"
            className="h-5 text-purple-600"
          />
          <img src={cartIcon} alt="Cart" className="h-5 text-purple-600" />
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
            Sign In
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden">
          <div className="flex flex-col items-center space-y-4 mt-4">
            <button className="flex items-center space-x-1 text-purple-600">
              <img src={exploreIcon} alt="Explore" className="h-5" />
              <span>Explore</span>
            </button>
            <button className="flex items-center space-x-1 text-purple-600">
              <img src={hobbiesIcon} alt="Hobbies" className="h-5" />
              <span>Hobbies</span>
            </button>
            <img
              src={bookmarkIcon}
              alt="Bookmark"
              className="h-5 text-purple-600"
            />
            <img
              src={notificationIcon}
              alt="Notifications"
              className="h-5 text-purple-600"
            />
            <img src={cartIcon} alt="Cart" className="h-5 text-purple-600" />
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg w-full">
              Sign In
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
