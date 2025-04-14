"use client";
import * as React from "react";
import Image from "next/image";
import logo from '../app/assets/nrd Logo(new).png';
import Link from 'next/link';

function Logo () {
  return (
    <div className="flex justify-center items-center">
      <Link href="/" passHref>
      <Image 
        src={logo}
        height={90}
        alt="No Ruff Days Logo"
        className="cursor-pointer"
      />
      </Link>
    </div>
  );
};

function Logout () {
  return (
    <div className="flex gap-3 items-center ml-6 max-sm:hidden">
      <button className="p-2 text-base font-bold rounded-lg border border-solid bg-white bg-opacity-90 text-stone-900">Logout</button>
    </div>
  );
}

function Header() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <header className="flex relative items-center justify-between w-full bg-cyan-800 border-b border-[#2c6485]" style={{ backgroundColor: '#2c6485'}}>
        <Logo />
        <Logout />
      </header>
    </>
  );
}
export default Header;