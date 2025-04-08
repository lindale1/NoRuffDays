"use client";
import React from "react";

function NavbarButtons() {
  return (
    <>
      <div className="flex gap-3 items-center ml-6 max-sm:hidden">
        <button className="p-2 text-base font-bold rounded-lg border border-solid bg-white bg-opacity-90 text-stone-900">
          Log in
        </button>
        <button className="p-2 text-base font-bold text-white rounded-lg border border-solid bg-stone-900 border-stone-900">
          Sign up
        </button>
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

export default NavbarButtons;