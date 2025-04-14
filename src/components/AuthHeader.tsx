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

function NavLinks() {
  return (
    <nav className="flex gap-6 ml-8 text-white font-semibold text-lg max-sm:hidden">
    <Link href="/" className="hover:underline">Home</Link>
    <Link href="/contact" className="hover:underline">Contact Us</Link>
    <Link href="/tasktracker" className="hover:underline">Task Tracker</Link>
    </nav>
  )
}

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
      <div className="flex items-center gap-10">
        <Logo />
        <NavLinks />
        </div>
        <Logout />
      </header>
    </>
  );
}
export default Header;