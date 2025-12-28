"use client"

import { NavLinks } from '@/constant/constant';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { DiJoomla } from "react-icons/di";
import { HiBars3BottomRight } from 'react-icons/hi2';
import ThemeToggler from '../../Helper/ThemeToggler';


type Props = {
  openNav: () => void;
}

const Nav = ({openNav}: Props) => {
  const [navBg, setNavBg] = useState(false);
  useEffect(() => {
   const handler = () => {
    if(window.scrollY >= 90) setNavBg(true);
    if(window.scrollY < 90) setNavBg(false)
   }
  window.addEventListener("scroll", handler);
  return()=> window.removeEventListener("scroll", handler)
  },[])
  
    return (
      <div className={`transition-all ${navBg ? "bg-white dark:bg-gray-900 shadow-md" : "fixed"} duration-200 py-4 z-[10000] fixed w-full`}>
        <div className="flex items-center h-full justify-between w-[92%] mx-auto">
          <div className="flex items-center sm:space-x-20 ">
            {/*--------Logo------------*/}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-cyan-800 dark:bg-white rounded-full flex items-center justify-center flex-col">
                <DiJoomla className="text-2xl text-white" />
              </div>
              <h1 className="text-cyan-800 hidden sm:block md:text-2xl font-bold">
                Codex_Lab
              </h1>
            </div>
            {/*--------Navlink------------*/}
            <div className="hidden lg:flex items-center space-x-10">
              {NavLinks.map((link) => {
                return (
                  <Link
                    key={link.id}
                    href={link.url}
                    className="text-base hover:text-cyan-700 font-medium transition-all duration-200"
                  >
                    <p>{link.label}</p>
                  </Link>
                );
              })}
            </div>
          </div>
          {/*----------Button------------*/}
          <div className="flex items-center space-x-4">
            {/*------Login/Register---Button------*/}
            <button className="px-8 py-2.5 sm:text-sm rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-300 transition-all duration-300">
              Login & Register
            </button>
            {/*------Job/Post---Button------*/}
            <button className="px-8 py-2.5 sm:text-sm rounded-lg cursor-pointer bg-cyan-800 text-white hover:bg-cyan-600 transition-all duration-300">
              Job Post
            </button>
            {/*----------Theme------Toggler-------*/}
            <ThemeToggler />

            {/*----------Hamburger------Menu-------*/}
            <HiBars3BottomRight onClick={openNav} className='lg:hidden w-8 h-8 cursor-pointer text-black'/>

          </div>
        </div>
      </div>
    );
};

export default Nav;