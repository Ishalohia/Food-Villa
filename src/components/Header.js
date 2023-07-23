import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import logo2 from "../assets/logo2.png"; 
import cart from "../assets/cart.svg"
import dropdown from "../assets/dropdown.svg"

const Logo = () => (
  <Link to="/" className="flex items-center">
    <img className="h-8 w-32 mr-3" src={logo2} alt="logo" />
  </Link>
);

const Header = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };
  
   const handleUserDropdownToggle = () => {
    setShowUserDropdown(!showUserDropdown);
  };

  return (
    <div className="w-full z-20 top-0 left-0 self-baseline sticky backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo (always visible) */}
        <Logo />
        {/* Cart for small screen */}
        <div className="relative ml-4 mt-2 md:pl-30 block md:hidden">
          <Link to="/cart" className="flex items-center">
            <span>Cart</span> 
            <img
              src={cart}
              alt="cart"
              width={40}
              height={40}
              className="cursor-pointer"
            />
            {cartTotalQuantity > 0 && (
              <span
                className="bg-black rounded-full h-7 w-7 flex items-center justify-center text-white text-sm absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3"
                style={{
                  position: "absolute",
                  zIndex: 10,
                }}
              >
                {cartTotalQuantity}
              </span>
            )}
          </Link>
        </div>

        {/* Login and Menu toggle */}
        <div className="flex md:order-2 items-center">
          {/* For authenticated users */}
          {isAuthenticated && showUserDropdown && (
                <div className="absolute right-2 mt-28 w-40 bg-white rounded-lg shadow-lg">
                  <div className="py-1">
                    {/* Add items to show in the dropdown here */}
                    <div className="px-4 py-2 text-gray-800 flex justify-around">
                       <img
                          className="h-10 w-10 rounded-full"
                          src={user.picture}
                          alt={user.name}
                        />
                      <span>{user.name}</span>
                    </div>
                    </div>
                  </div>
              )}

          {/* Cart for desktop*/}
        <div className="mt-2 relative hidden md:block pr-16">
          <Link to="/cart" className="flex items-center ">
            <span className="">Cart</span> 
            <img
              src={cart}
              alt="cart"
              width={40}
              height={40}
              className="cursor-pointer"
            />
            {cartTotalQuantity > 0 && (
              <span
                className="bg-black rounded-full h-7 w-7 flex items-center justify-center text-white text-sm absolute top-0 right-16 transform translate-x-1/3 -translate-y-1/3"
                style={{
                  position: "absolute",
                  zIndex: 10,
                }}
              >
                {cartTotalQuantity}
              </span>
            )}
          </Link>
        </div>

          {/* Login/Logout button */}
          {isAuthenticated ? (
          
            <div className=" flex font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300  dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Log Out
            </button>
            <img src={dropdown} alt="dropdown" width={20} height={20} onClick={handleUserDropdownToggle}
              className="self-center ml-2"
            />
            </div>
        
          ) : (
            <button
              className="font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300  dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
              onClick={() => loginWithRedirect()}
            >
              Log In
            </button>
          )}

          

          {/* Menu toggle button */}
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="md:hidden ml-3 p-2 w-10 h-10 justify-center text-sm text-orange-300 rounded-lg hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-200 dark:text-orange-300 dark:hover:bg-orange-500 dark:focus:ring-orange-500"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
            onClick={handleMenuToggle}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex items-center justify-between w-full md:w-auto md:order-1`}
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-2">
            <Link to="/">
              <li className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:text-black-700 md:p-0 hover:text-red-700">
                Home
              </li>
            </Link>
            <Link to="/menu">
              <li className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:text-black-700 md:p-0 hover:text-red-700">
                Menu
              </li>
            </Link>
            <Link to="/about">
              <li className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:text-black-700 md:p-0 hover:text-red-700">
                About
              </li>
            </Link>
            <Link to="/contact">
              <li className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:text-black-700 md:p-0 hover:text-red-700">
                Contact us
              </li>
            </Link>
           
          </ul>
          
        </div>
        
      </div>
      
    </div>
  );
};

export default Header;
