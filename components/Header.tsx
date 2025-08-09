"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "./Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="max-w-7xl mx-auto h-30 w-full flex items-start md:items-center justify-between absolute top-0 z-50 ">
      <div>
        <Logo />
      </div>

      <div
        className={`flex-col items-center justify-between w-full md:flex md:flex-row md:w-[50%] md:pr-4 lg:pr-0 font-bold animate-fade-in ${
          isMenuOpen ? "flex" : "hidden"
        }`}
      >
        <Link href="/" className="p-2">
          Home
        </Link>
        <Link href="/" className="pl-2">
          Facilities
        </Link>
        <Link href="/" className="p-2">
          Rooms
        </Link>
        <Link href="/" className="pl-2">
          Contact-us
        </Link>
      </div>
      <div className="h-full flex items-start md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none p-4">
          {isMenuOpen ? (
            <FaTimes size={24} className="animate-fade-in" />
          ) : (
            <FaBars size={24} className="animate-fade-in" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
