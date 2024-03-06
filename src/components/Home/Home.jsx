import React from 'react'
import Header from '../header/header'
import logo from "../../img/p.png"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className="border-solid w-full h-[3rem] bg-white flex justify-center items-center -ml-20">
       <Link to="/" >
      <button className='shadow-lg border-sky-500 px-2 rounded-sm'>Page</button>
       </Link>
       
   
     
    </div>
    
    <div className="flex flex-row gap-5 ml-[30px] w-fit">

        <div className="bg-sky-500 w-[800px] h-[10rem] relative rounded-xl">
          <div className="w-32 h-32 bg-gray-400 rounded-full absolute border-solid mt-24">

          </div>
        </div>
        <div className="h-screen w-[.1px] bg-gray-300 ml-0">
  
        </div>
        <div className="  w-fit pr-5 h-[500px]  overflow-auto">
          <h1 className='bg-black pl-4 rounded-md text-white sticky top-0'>Favorite car selior</h1>

          <div className="flex flex-row gap-4 w-full h-fill items-center bg-slate-500 mt-7 rounded-md">
            <img src={logo} alt="" className='w-16 h-16' />
            <h2 className=''>Name</h2>
            <button className='bg-black text-white mt-7 ml-24 px-5 rounded-md active:bg-slate-500 hover:bg-slate-700'>Show</button>
          </div>

          <div className="flex flex-row gap-4 w-full h-fill items-center bg-slate-500 mt-7 rounded-md">
            <img src={logo} alt="" className='w-16 h-16' />
            <h2 className=''>Name</h2>
            <button className='bg-black text-white mt-7 ml-24 px-5 rounded-md active:bg-slate-500 hover:bg-slate-700'>Show</button>
          </div>
          <div className="flex flex-row gap-4 w-full h-fill items-center bg-slate-500 mt-7 rounded-md">
            <img src={logo} alt="" className='w-16 h-16' />
            <h2 className=''>Name</h2>
            <button className='bg-black text-white mt-7 ml-24 px-5 rounded-md active:bg-slate-500 hover:bg-slate-700'>Show</button>
          </div>
          <div className="flex flex-row gap-4 w-full h-fill items-center bg-slate-500 mt-7 rounded-md">
            <img src={logo} alt="" className='w-16 h-16' />
            <h2 className=''>Name</h2>
            <button className='bg-black text-white mt-7 ml-24 px-5 rounded-md active:bg-slate-500 hover:bg-slate-700'>Show</button>
          </div>
          <div className="flex flex-row gap-4 w-full h-fill items-center bg-slate-500 mt-7 rounded-md">
            <img src={logo} alt="" className='w-16 h-16' />
            <h2 className=''>Name</h2>
            <button className='bg-black text-white mt-7 ml-24 px-5 rounded-md active:bg-slate-500 hover:bg-slate-700'>Show</button>
          </div>
          <div className="flex flex-row gap-4 w-full h-fill items-center bg-slate-500 mt-7 rounded-md">
            <img src={logo} alt="" className='w-16 h-16' />
            <h2 className=''>Name</h2>
            <button className='bg-black text-white mt-7 ml-24 px-5 rounded-md active:bg-slate-500 hover:bg-slate-700'>Show</button>
          </div>
          <div className="flex flex-row gap-4 w-full h-fill items-center bg-slate-500 mt-7 rounded-md">
            <img src={logo} alt="" className='w-16 h-16' />
            <h2 className=''>Name</h2>
            <button className='bg-black text-white mt-7 ml-24 px-5 rounded-md active:bg-slate-500 hover:bg-slate-700'>Show</button>
          </div>
          <div className="flex flex-row gap-4 w-full h-fill items-center bg-slate-500 mt-7 rounded-md">
            <img src={logo} alt="" className='w-16 h-16' />
            <h2 className=''>Name</h2>
            <button className='bg-black text-white mt-7 ml-24 px-5 rounded-md active:bg-slate-500 hover:bg-slate-700'>Show</button>
          </div>

          <div className="flex flex-row gap-4 w-full h-fill items-center bg-slate-500 mt-7 rounded-md">
            <img src={logo} alt="" className='w-16 h-16' />
            <h2 className=''>Name</h2>
            <button className='bg-black text-white mt-7 ml-24 px-5 rounded-md active:bg-slate-500 hover:bg-slate-700'>Show</button>
          </div>
          <div className="flex flex-row gap-4 w-full h-fill items-center bg-slate-500 mt-7 rounded-md">
            <img src={logo} alt="" className='w-16 h-16' />
            <h2 className=''>Name</h2>
            <button className='bg-black text-white mt-7 ml-24 px-5 rounded-md active:bg-slate-500 hover:bg-slate-700'>Show</button>
          </div>
        </div>
    </div>
  
    </>
  )
}

export default Home