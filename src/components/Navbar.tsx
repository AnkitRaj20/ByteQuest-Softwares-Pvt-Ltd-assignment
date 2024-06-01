/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect } from "react";

import {Search, User,  Bookmark,ShoppingBag } from "lucide-react";


const Page = () => {

  useEffect(() => {
    const openMenu = () => {
      const menu = document.getElementById("menu");
      menu?.classList.toggle("hidden");
    };

    const menuButton = document.getElementById("menu-button");
    menuButton?.addEventListener("click", openMenu);

   
    // Cleanup: Remove the event listener when the component unmounts
    return () => {
      menuButton?.removeEventListener("click", openMenu);
    };
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg bg-black text-white">
      <div>
        <a href="/">
          TANN TRIM
        </a>
      </div>
      <button id="menu-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          className="h-6 w-6 cursor-pointer md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div
        className="hidden w-full md:flex md:items-center md:w-auto"
        id="menu"
      >
        <ul
          className="
              p-4
              item-center
              md:flex
              md:justify-between 
              md:pt-0"
        >
         <Search className="m-2 items-center" />
         <User className="m-2" />
         <Bookmark className="m-2" />
         <ShoppingBag className="m-2" />
          
          
        </ul>
      </div>
    </div>
  );
};

export default Page;