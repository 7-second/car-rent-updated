import React, { useState } from "react";
import { CiHome, CiMenuBurger, CiSearch, CiSettings, } from "react-icons/ci";
import { Link } from "react-router-dom";
import { Drawer,  } from "@material-tailwind/react";
import Drawer1 from "./Drawer";

const Header = () => {
  
  return (
    <>







      <div className="w-full h-16 relative  bg-white flex justify-between items-center border-b-sky-400 mr-[50px]">
        {/* <IoMenuSharp className="size-8 ml-[20px] flex justify-center items-center " /> */}
       

        <div className="relative flex items-center p-[5px] ">
          <input
            type="text"
            placeholder="Search..."
            className="h-[30px] w-[200px] flex items-end rounded-xl
               outline-none justify-center bg-slate-100 ml-[340px] px-2 py-2 "
          />
          <CiSearch className="w-[30px] h-[25px] ml-[510px] absolute p-[5px] rounded-2xl bg-slate-200 cursor-pointer active:bg-sky-500" />
        </div>
        <Link to="/Login">
          <h3
            className="font-sans text-[15px] font-bold mr-[90px] cursor-pointer
       rounded-md
      bg-black text-white px-[10px]"
          >
            Login
          </h3>
        </Link>
      </div>
  
    </>
  );
};

export default Header;
