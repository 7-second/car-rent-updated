import axios from "axios";
import List from "./List";
import React, { useEffect, useState } from "react";
import Header from "../../components/header/header";
import Hero from "../hero/hero";
import Cars from "./cars";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { GiLoad } from "react-icons/gi";
import Drawer1 from "../header/Drawer";

const Card = () => {
  const [cars, setCars] = useState([]);
  const [open, setOpen] = useState(false);
  const [lod, setLod] = useState(false);

  const handleOpen = () => setOpen(!open);

  useEffect(() => {
    async function fetchData() {
      try {
        setLod(true);
        const res = await axios.get("https://car-rental-btew.onrender.com/car");
        // setPosts(res.data);
        setCars(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLod(false);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="bg-slate-100 h-[100vh] w-full flex flex-col">
        {/* <div className="flex flex-row gap-0 relative"> */}
        {/* <Drawer1 className="w-fit " /> */}
        <Header />
        {/* </div> */}
        <div className="flex flex-col">
          <Hero />

          <h3 className=" text-[20px] font-serif font-bold ml-[20px] text-white  bg-black w-fit  rounded-md px-[20px]">
            New Brand Cars
          </h3>
          <hr className="mr-[20px]"></hr>

          <div className="flex overflow-auto justify-center md:justify-start w-full pr-[20px] ">
            {lod && (
              <div className="w-full h-64 flex justify-center items-center">
                <AiOutlineLoading3Quarters size={20} className="animate-spin" />
              </div>
            )}
            {cars.length > 0 &&
              cars.map((cars, i) => <List key={i} cars={cars} />)}
          </div>
        </div>
        <div className="mt-[20px] w-full flex flex-wrap">
          {cars.length > 0 &&
            cars.map((cars, i) => <Cars key={i} cars={cars} />)}
        </div>
      </div>
    </>
  );
};

export default Card;
