"use client";

import { useState } from "react";

import Image from "next/image";
import logo from "../public/logo.svg";
import { BiX, BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="header max-width py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center ">
            <Image
              className="img object-contain"
              src={logo}
              alt="logo"
              width={120}
              height={50}
            />
            <nav className="hidden md:block md:ml-5 ">
              <ul className="flex items-start justify-start">
                <li className="hover:text-accent">
                  <button className="text-secondary font-bold">Features</button>
                </li>
                <li className="my-5 md:my-0 md:mx-5 hover:text-accent">
                  <button className="text-secondary font-bold">Pricing</button>
                </li>
                <li className="hover:text-accent">
                  <button className="text-secondary font-bold">
                    Resources
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div
              className="absolute left-5 right-5 top-20 rounded-lg bg-primary text-slate-200 
            text-center py-10 md:relative md:top-0 md:left-0 md:right-0 md:bg-transparent
            md:text-secondary md:text-left md:py-0 md:flex md:items-center "
            >
              <nav className="md:hidden">
                <ul className="flex flex-col items-center justify-center">
                  <li className="hover:text-accent">
                    <button>Features</button>
                  </li>
                  <li className="my-5 md:my-0 hover:text-accent">
                    <button>Pricing</button>
                  </li>
                  <li className="hover:text-accent">
                    <button>Resources</button>
                  </li>
                </ul>
              </nav>
              <ul className="flex flex-col items-center md:hidden">
                <li className="my-5 md:my-0 md:mr-5 hover:text-accent">
                  <button className=" ">Login </button>
                </li>
                <li>
                  <button className="btn-sm btn  rounded-full">Sign Up </button>
                </li>
              </ul>
            </div>
          )}

          <div className="hidden md:block">
            <ul className="flex items-center ml-5">
              <li className="my-5 md:my-0 md:mr-5 hover:text-accent">
                <button className="text-secondary font-semibold">Login </button>
              </li>
              <li>
                <button className="btn-sm btn  rounded-full">Sign Up </button>
              </li>
            </ul>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className=" md:hidden">
            {isOpen ? (
              <BiX className="text-4xl" />
            ) : (
              <BiMenuAltRight className="text-4xl" />
            )}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
