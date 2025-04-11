"use client";
import * as React from "react";
import Image from "next/image";
import logo from '../app/assets/nrd Logo(new).png';

// Header component for Navbar with log in & sign up and logo
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

function LogOrSignUp () {
  return (
    <>
    <div className="flex gap-3 items-center ml-6 max-sm:hidden">
      <button className="p-2 text-base font-bold rounded-lg border border-solid bg-white bg-opacity-90 text-stone-900">Log in</button>
      <button className="p-2 text-base font-bold text-white rounded-lg border border-solid bg-stone-900 border-stone-900">Sign up</button>
    </div>
    <button
        className="hidden absolute right-4 max-sm:block"
        aria-label="Menu"
      >
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
      <header className="flex relative items-center justify-between w-full bg-cyan-800 border border-b h-[102px]" style={{ backgroundColor: '#2c6485'}}>
        <Logo />
        <div className="flex gap-6 items-center ml-8">
        </div>
        <LogOrSignUp />
      </header>
    </>
  );
}
export default Header;