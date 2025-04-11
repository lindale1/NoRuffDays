"use client";
import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="flex justify-between items-center px-8 py-0 w-full border-t border-solid bg-neutral-200 border-t-neutral-200 h-[74px] max-md:px-6 max-md:py-0 max-sm:px-4 max-sm:py-0 max-sm:h-16">
      <div className="text-sm text-gray-700 font-semibold">© NoRuffDays</div>
      <Link href="/contact">
      
      <button
        className="px-3 py-2 text-base font-bold leading-6 text-white bg-cyan-800 hover:bg-[#8fbfda] max-sm:px-2.5 max-sm:py-1.5 max-sm:text-sm"
        aria-label="Contact Us"
      >
        Contact Us
      </button>
      
      </Link>
    </footer>
  );
};

export default Footer;


