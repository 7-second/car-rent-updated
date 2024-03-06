import React, { useState } from "react";
import {
  CiHeart,
  CiHome,
  CiInstagram,
  CiMenuBurger,
  CiSettings,
} from "react-icons/ci";
import { Dialog, DialogBody, Drawer } from "@material-tailwind/react";
import logo from "../../img/p.png";
import { FaFacebook, FaHeart, FaInfo, FaTelegram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Drawer1 = () => {
  const [open, setOpen] = useState(false);
  const DrawerOpen = () => setOpen(true);
  const DrawerClose = () => setOpen(false);

  const [dialog, setDialog] = useState(false);
  const handledialog = () => setDialog(!dialog);

  return (
    <>
      <Drawer
        placement="left"
        open={open}
        onClose={DrawerClose}
        className="h-screen p-10 flex flex-col gap-5 z-50  "
      >
        <div className="relative pb-11">
          <img src={logo} alt="b" className="h-28 w-40 absolute -top-10" />
          <h3 className="ml-32 bold font-serif text-xl">Name</h3>
        </div>
        <hr />
        <div>
          <Link to="/home">
            <button className="flex flex-row gap-6 hover:bg-slate-900 items-center text-1xl active:bg-slate-600 hover:text-white rounded-xl px-4 w-fit">
              <CiHome />
              Home
            </button>
          </Link>
        </div>
        <div>
          <button className="flex flex-row gap-6 hover:bg-slate-900 items-center text-1xl active:bg-slate-600 hover:text-white rounded-xl px-4 w-fit">
            <CiSettings />
            Setting
          </button>
        </div>
        <div>
          <button className="flex flex-row gap-6 hover:bg-slate-900 items-center text-1xl active:bg-slate-600 hover:text-white rounded-xl px-4 w-fit">
            <FaHeart className="text-red-700" />
            Fav Cars
          </button>
          <hr className="mt-6" />
        </div>
        <div>
          <button
            onClick={handledialog}
            className="flex flex-row gap-6 hover:bg-slate-900 items-center text-1xl active:bg-slate-600 hover:text-white rounded-xl px-4 w-fit"
          >
            <FaInfo />
            About Us
          </button>
          <Dialog open={dialog} handler={handledialog}>
            <DialogBody>
              The key to more success is to have a lot of pillows. Put it this
              way, it took me twenty five years to get these plants, twenty five
              years of blood sweat and tears, and I&apos;m never giving up,
              I&apos;m just getting started. I&apos;m up to something. Fan luv.
            </DialogBody>
          </Dialog>
        </div>
        <hr className="mt-6" />
        <div className="bg-black w-full text-white flex justify-center  rounded-xl ">
          <h3>Contact Us</h3>
        </div>
        <ul className="flex flex-col gap-4">
          <li className="flex flex-row gap-6  hover:bg-sky-500 cursor-pointer">
            <FaFacebook />
            Face Book
          </li>
          <li className="flex flex-row gap-6  hover:bg-sky-500 cursor-pointer">
            <CiInstagram /> Instagram
          </li>
          <li className="flex flex-row gap-6  hover:bg-sky-500 cursor-pointer">
            <FaTelegram /> Telegram
          </li>
        </ul>
      </Drawer>
      <div className="absolute start-8">
        <button onClick={DrawerOpen}>
          <CiMenuBurger className=" " size={20} />
        </button>
      </div>
    </>
  );
};

export default Drawer1;

