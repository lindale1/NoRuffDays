"use client";
import * as React from "react";
import Image from "next/image";
import NoRoughDays from "../app/assets/NoRoughDays.jpg";

function NavbarLogo({ imageUrl }: { imageUrl: string }) {
  return (
    <img
      src={imageUrl}
      alt="Logo"
      className="w-[91px] h-[91px] absolute left-0 top-[11px]"
    />
  );
}

function NavbarButtons() {
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

function Navbar() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <header className="flex relative items-center w-full bg-cyan-800 border border-b h-[102px]">
        <NavbarLogo imageUrl={NoRoughDays.src} />
        <div className="flex gap-6 items-center ml-8">
        </div>
        <NavbarButtons />
      </header>
    </>
  );
}

export default Navbar;