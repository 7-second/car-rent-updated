import React, { useState } from 'react'
import { GiSteeringWheel } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { FaGasPump } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Button, Dialog, Drawer } from "@material-tailwind/react";

import Card from './Card';



const List = ({cars}) => {
  const [change,setChange]=useState(true)


  return (
    <>
    <div
    className="sm:max-w-[18rem]  h-fit shadow-2xl mt-[20px] ml-[20px] bg-white "
  >
    <div className="w-[250px] h-[30px] flex justify-between p-[20px] pt-[5px]">
      <div className="flex flex-col">
        <h1 className="text-sm max-w-md">{cars.title}</h1>
        <h1 className="flex gap-1 items-center text-xs text-gray-500">
          {cars.type}
        </h1>
      </div>
      <button className="text-[15px]" onClick={()=>setChange(!change)}>
        <FaRegHeart className={`${change ? "flex" : "hidden"} `} />
        <FaHeart className={`${change ? "hidden" : "flex"}   text-red-600`} />
      </button>
    </div>

    <div className="max-w-md sm:w-full mx-auto px-[10px]  flex justify-center mt-2">
      <img
        src={cars.images[0].url}
        alt="cars"
        className=" px-[20px] h-[120px] mt-[20px] w-[250px]"
      />
    </div>

    <div className="w-[100%] h-[30px] flex justify-between px-[20px] mt-[10px]">
      <h1 className="flex gap-1 text-sm items-center">
        <FaGasPump />
        {cars.fuelCapacity}
      </h1>
      <h1 className="flex gap-1 text-sm  items-center">
        <GiSteeringWheel />
        {cars.transmission}
      </h1>
      <h1 className="flex gap-1 text-sm  items-center">
        <IoIosPeople />
        {cars.capacity}people
      </h1>
    </div>

    <div className="flex gap-1 text-sm  items-center justify-between pb-[10px]">
      <p className="flex gap-1 text-sm  items-center  px-[20px] pb-[10px]">
        ETB{cars.price}
        <sub className="text-[10px]">/Day</sub>
      </p>
      <div>
        <Button
        //   onClick={handleOpen}
          variant="outlined "
          className="bg-black px-5 py-1 rounded-md mr-3 hover:bg-blue-950 text-white"
        >
          More</Button>
        
      </div>
    </div>
  </div>
 

  </>
  )
}

export default List