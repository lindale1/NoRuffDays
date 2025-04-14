"use client";
import * as React from "react";
import Image from "next/image";
import logo from '../app/assets/nrd Logo(new).png';

// Header component for Navbar with menu, logo, and logout
function MenuDrawer () {
    return (
        <div className="p-2.5 max-md:p-2 max-sm:p-1.5">
          <button
            aria-label="Menu"
            className="focus:outline-none"
          >
            <svg
              width="45"
              height="40"
              viewBox="0 0 45 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="menu-icon"
              style={{ width: "45px", height: "40px", cursor: "pointer" }}
            >
              <path
                d="M5.625 30V26.6667H39.375V30H5.625ZM5.625 21.6667V18.3333H39.375V21.6667H5.625ZM5.625 13.3333V10H39.375V13.3333H5.625Z"
                fill="#1D1B20"
              />
            </svg>
          </button>
        </div>
      );

}
function Logo () {
  return (
    <div className="flex justify-center items-center">
      <Image 
        src={logo}
        height={90}
        alt="No Ruff Days Logo"
      />
    </div>
  );
};

function Logout () {
  return (
    <>
    <div className="flex gap-3 items-center ml-6 max-sm:hidden">
      <button className="p-2 text-base font-bold rounded-lg border border-solid bg-white bg-opacity-90 text-stone-900">Logout</button>
    </div>
    <button
        className="hidden absolute right-4 max-sm:block"
        aria-label="Menu">
        <i className="ti ti-menu-2 text-2xl text-white" />
      </button>
    </>
  );
}

function Header() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <header className="flex relative items-center w-full bg-cyan-800 border-b border-[#2c6485]" style={{ backgroundColor: '#2c6485'}}>
        <MenuDrawer />
        <div className="flex items-center ">
        </div>
        <Logo />
         <div className="flex items-center ml-8">
        </div>
        <Logout />
      </header>
    </>
  );
}
export default Header;