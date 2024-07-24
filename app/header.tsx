"use client";

import { CiMenuFries } from "react-icons/ci";
import Navbar from "./navbar";

export default function Header(){
  return(
    <div className="fixed top-0 right-0 z-50 duration-500 inset-x-0 flex justify-between items-center bg-primary px-12 xl:px-24 py-4 h-12 backdrop-blur-lg bg-opacity-60">
      <h1>Hadyan Abdul Aziz</h1>
      {/* desktop nav */}
      <div className="hidden xl:flex xl:flex-row xl:items-center xl:gap-x-4">
        <a href="#about"
          className="hover:border-b-2 hover:border-blue hover:text-blue transition duration-200 hover:cursor-pointer">About</a>
        <a href="#services"
          className="hover:border-b-2 hover:border-blue hover:text-blue transition duration-200 hover:cursor-pointer">Services</a>
        <a href="#experiences"
          className="hover:border-b-2 hover:border-blue hover:text-blue transition duration-200 hover:cursor-pointer">Experiences</a>
        <a href="#projects"
          className="hover:border-b-2 hover:border-blue hover:text-blue transition duration-200 hover:cursor-pointer">Projects</a>
        <a href="#contacts"
          className="hover:border-b-2 hover:border-blue hover:text-blue transition duration-200 hover:cursor-pointer">Contact</a>
        <div className="flex justify-center items-center border border-blue rounded px-2 py-1 hover:bg-blue/20 hover:cursor-pointer">
          <p className="text-blue">Resume</p>
        </div>
      </div>
      {/* mobile nav */}
      <Navbar />
    </div>
  );
}