"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../app/assets/nrd Logo(new).png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession, signOut, SessionProvider } from "next-auth/react";

interface LogoutProps {
  onLogout: () => void;
}

function Logo() {
  return (
    <Link href="/" passHref>
      <Image
        src={logo}
        height={90}
        alt="No Ruff Days Logo"
        className="cursor-pointer"
      />
    </Link>
  );
}

function NavLinks() {
  return (
    <nav className="flex gap-6 ml-8 text-white font-semibold text-lg max-sm:hidden">
      <Link href="/" className="hover:underline">Home</Link>
      <Link href="/contact" className="hover:underline">Contact Us</Link>
      <Link href="/tasktracker" className="hover:underline">Task Tracker</Link>
    </nav>
  );
}

function Logout({ onLogout }: LogoutProps) {
  return (
    <div className="flex gap-3 items-center ml-6 max-sm:hidden">
      <button
        onClick={onLogout}
        className="p-2 text-base font-bold rounded-lg border border-solid bg-white bg-opacity-90 text-stone-900"
      >
        Logout
      </button>
    </div>
  );
}

function HeaderContent() {
  const { data: session } = useSession();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsLoggedIn(!!session?.user);
  }, [session]);

  const handleLogout = async () => {
    setIsLoggedIn(false);
    await signOut({ redirect: true, callbackUrl: "/" });
  };

  return (
    <header
      className="flex relative items-center justify-between w-full bg-cyan-800 border-b border-[#2c6485]"
      style={{ backgroundColor: "#2c6485" }}
    >
      <div className="flex gap-6 items-center ml-8">
        <Logo />
        <NavLinks />
      </div>
      {isLoggedIn ? (
        <Logout onLogout={handleLogout} />
      ) : (
        <div className="flex gap-3 items-center ml-6 max-sm:hidden">
          <Link
            href="/login"
            className="p-2 text-base font-bold rounded-lg border border-solid bg-white bg-opacity-90 text-stone-900"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="p-2 text-base font-bold text-white rounded-lg border border-solid bg-stone-900 border-stone-900"
          >
            Sign up
          </Link>
        </div>
      )}
    </header>
  );
}

export default function Header() {
  return (
    <SessionProvider>
      <HeaderContent />
    </SessionProvider>
  );
}
