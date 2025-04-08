"use client";
import * as React from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarButtons from "./NavbarButtons";

function Navbar() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <header className="flex relative items-center w-full bg-cyan-800 border border-b h-[102px]">
        <NavbarLogo imageUrl="assets/NoRoughDays.jpg" />
        <div className="flex gap-6 items-center ml-8">
        </div>
        <NavbarButtons />
      </header>
    </>
  );
}

export default Navbar;