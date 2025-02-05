import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import Logo from "../../img/car.jpg"
import { Link } from "react-router-dom";

function Login() {
  const [user,setUser]=useState({
    name:"",
    password:""
  })
 const login=(e)=>{
const {name,value}=e.target
setUser({...user,[name]:value})


}

const sub=(e)=>{
  e.preventDefault()
}
  return (
    <>
    <div className="h-[100vh] bg-slate-100">
    <div className="w-full h-[60px] bg-white flex justify-between items-center">
        <img src={Logo} alt="Logo"  className="w-[80px] h-[60px] ml-[10px]"/>
        <div className="">
            <ul className="flex flex-row gap-[30px] mr-[40px]">
                <li>About As</li>
                <li>Contact As</li>
                <li>Help</li>
            </ul>
        </div>

    </div>
      <div className=" mt-[50px] border w-[400px] h-fit  m-auto shadow-2xl bg-white  rounded-md">
        <div className="w-full flex justify-center mt-8">
          <h1 className="font-semibold font-s text-[20px]">Login</h1>
        </div>

        <form onSubmit={sub} >

      
        <div className="h-fit w-full flex justify-center mt-[30px] ">
          <table>
            <tr className="h-[50px]">
              <td>
                <label className="font-sans font-bold"> User-Name </label>
              </td>
              <td>
                {" "}
                <input
                name="name"
                value={user.name}
                onChange={login}
                className="font-sans ml-[10px] h-8 rounded-md  w-[200px] border-solid outline-none border-b-2  bg-slate-100" />
              </td>
            </tr>
            <tr className="h-[50px]">
              <td>
                <label className="font-sans font-bold">Password</label>
              </td>
              <td>
                {" "}
                <input
                name="password"
                value={user.password}
                onChange={login}
                  type="password"
                  className="font-sans ml-[10px] h-8 rounded-md w-[200px] border-solid outline-none border-b-2 bg-slate-100"
                />
              </td>
            </tr>
          </table>
        </div>
        <div className="flex justify-center w-full h-fit mt-4 ">
          <Button
         
            variant="outlined"
            className=" w-[200px] flex justify-center items-center h-7 ml-[70px] 
            rounded-md bg-sky-500 font-sans font-bold text-[18px] text-white hover:bg-sky-700"
          >
            Login
          </Button>
        </div>
        <div className="flex justify-center mt-3 pb-6">
            <h2>Creat New </h2>
           
              <Link to="/Signin" >
              <h2 className="text-sky-400 underline pl-1 ">
                 Account?</h2></Link>
        </div>
      </form>
      </div>
      
    
      <footer className=" w-[100%] h-[50px] bg-white mt-[155px]"></footer>
      </div>
    </>
  );
}
export default Login;
