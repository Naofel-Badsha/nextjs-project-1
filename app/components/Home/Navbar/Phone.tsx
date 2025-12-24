import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";


type Props = {
   showNav: boolean;
   closeNav: () => void

}

const Phone = ({closeNav,showNav}: Props) => {
const navOpen = showNav ? "translate-x-0" : "translate-x-[100%]"


  return (
    <div>
        {/*---------Overly------Color-------*/}
      <div
        className={`fixed ${navOpen} inset-0 transform transition-all right-e duration-500 z-[100002] bg-black opacity-70 w-full h-screen`}
      ></div>
      {/*---------Navlinks-------*/}
      <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[60%] bg-cyan-800 space-y-6 z-[1000050] right-0`}>
         {NavLinks.map((link) => {
          return <Link key={link.id} href={link.url}>
            <p className="text-white w-fit text-xl ml-12  pb-1 border-white sm:text-[25px]">{link.label}</p>
          </Link> 
         })}

         {/*---------Close---Icon-------*/}
         <CgClose onClick={closeNav} className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer transition-transform duration-500 ease-in-out hover:rotate-[360deg]"/>
      </div>
    </div>
  );
};

export default Phone;
