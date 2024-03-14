"use client";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navlink = [
  { title: "About", path: "#about" },
  { title: "Project", path: "#project" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(true);
  return (
    <nav className="fixed mx-auto right-0 left-0 top-0 bg-opacity-100 z-10 bg-[#121212]  ">
      <div className="navbar flex flex-wrap justify-between mx-auto p-8 mb-4  ">
        <Link
          href="/"
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          {" "}
          LOGO
        </Link>
        <div className="md:hidden">
          {navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className=" flex items-center border border-slate-200 rounded text-slate-200 hover:border-white p-1"
            >
              {" "}
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className=" flex items-center border border-slate-200 rounded text-slate-200 hover:border-white p-1"
            >
              {" "}
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block  md:w-auto" id="navbar">
          <ul className="flex  md:space-x-8 ">
            {navlink.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="md:hidden">
        {!navbarOpen && <MenuOverlay links={navlink} />}
      </div>
    </nav>
  );
};

export default Navbar;
