"use client";
import * as React from "react";
import Image from "next/image";
import logo from '../app/assets/nrd Logo(new).png';
import Link from 'next/link';

interface LogInSignUpProps {
  onLogin: () => void;
}

interface LogoutProps {
  onLogout: () => void;
}

// Header component for Navbar with log in & sign up and logo
function Logo () {
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


function LogOrSignUp({ onLogin }: LogInSignUpProps) {
  return (
    <div className="flex gap-3 items-center ml-6 max-sm:hidden">
      <button 
        onClick={onLogin} 
        className="p-2 text-base font-bold rounded-lg border border-solid bg-white bg-opacity-90 text-stone-900"
      >
        Log in
      </button>
      <Link
        href="/signup"
        className="p-2 text-base font-bold text-white rounded-lg border border-solid bg-stone-900 border-stone-900"
      >
        Sign up
      </Link>
    </div>
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

function Header() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    const storedLoginState = localStorage.getItem('isLoggedIn');
    if (storedLoginState === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);  // Set logged in state to true when login button is clicked
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);  // Set logged out state when logout button is clicked
    localStorage.setItem('isLoggedIn', 'false');
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <header className="flex relative items-center justify-between w-full bg-cyan-800 border-b border-[#2c6485]" style={{ backgroundColor: '#2c6485'}}>
        <div className="flex gap-6 items-center ml-8">
          <Logo />
          <NavLinks />
        </div>
        {isLoggedIn ? (
          <Logout onLogout={handleLogout} />  // Show Logout if logged in
        ) : (
          <LogOrSignUp onLogin={handleLogin} />  // Show Log In and Sign Up if not logged in
        )}
      </header>
    </>
  );
}
export default Header;