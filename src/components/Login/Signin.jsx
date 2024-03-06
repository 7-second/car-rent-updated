import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import Logo from "../../img/car.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const initialValue = {
  username: "",
  email: "",
  password: "",
};

function Signin() {
  const navigate = useNavigate();
  const [user, setUser] = useState(initialValue);

  const [error, setError] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const sub = async (e) => {
    e.preventDefault();
    console.log();
    if (user.username === "" || user.email === "" || user.password === "") {
      setError("All Fields are Required!");
    } else {
      try {
        setError("");
        const response = await axios.post(
          "https://car-rental-btew.onrender.com/auth/register",
          user
        );
        if (response?.status === 201) {
          navigate.push("/Login");
        }
      } catch (error) {
        if (error.response.status === 409) {
          // console.log(error.response.data)
          setError(error.response.data);
        }

        // console.log(error, "Sing up");
      } finally {
        setUser(initialValue);
      }
    }
  };

  return (
    <>
      <div className="h-[100vh] bg-slate-100">
        <div className="w-full h-[60px] bg-white flex justify-between items-center">
          <img src={Logo} alt="Logo" className="w-[80px] h-[60px] ml-[10px]" />
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
            <h1 className="font-semibold font-s text-[20px]">Sing-IN</h1>
          </div>
          {error !== "" && (
            <p className="p-2 bg-red-200 text-red-500 rounded-md text-sm mt-4">
              {error}
            </p>
          )}
          <form onSubmit={sub}>
            <div className="h-fit w-full flex justify-center mt-[30px] ">
              <table>
                <tr className="h-[50px]">
                  <td>
                    <label className="font-sans font-bold"> Name </label>
                  </td>
                  <td>
                    {" "}
                    <input
                      name="username"
                      value={user.username}
                      onChange={handleChange}
                      className="font-sans ml-[10px] h-8 rounded-md  w-[200px] border-solid outline-none border-b-2  bg-slate-100"
                    />
                  </td>
                </tr>
                <tr className="h-[50px]">
                  <td>
                    <label className="font-sans font-bold"> Email </label>
                  </td>
                  <td>
                    {" "}
                    <input
                      name="email"
                      value={user.email}
                      onChange={handleChange}
                      className="font-sans ml-[10px] h-8 rounded-md  w-[200px] border-solid outline-none border-b-2  bg-slate-100"
                    />
                  </td>
                </tr>
                <tr className="h-[50px]">
                  <td>
                    <label className="font-sans font-bold"> Password </label>
                  </td>
                  <td>
                    {" "}
                    <input
                      name="password"
                      value={user.password}
                      onChange={handleChange}
                      type="password"
                      className="font-sans ml-[10px] h-8 rounded-md  w-[200px] border-solid outline-none border-b-2  bg-slate-100"
                    />
                  </td>
                </tr>
              </table>
            </div>
            <div className="flex justify-center w-full h-fit mt-4 ">
              <Button
                type="submit"
                variant="outlined"
                color="text.primery"
                className=" w-[200px] flex justify-center items-center h-7 ml-[70px] 
            rounded-md bg-sky-500 font-sans font-bold text-[18px] text-white hover:bg-sky-700"
              >
                Singin
              </Button>
            </div>
            <div className="flex justify-center mt-3 pb-6">
              <h2>Have Account </h2>
              <Link to="/Login">
                <h2 className="text-sky-400 underline pl-1 ">Account?</h2>
              </Link>
            </div>
          </form>
        </div>

        <footer className=" w-[100%] h-[50px] bg-white mt-[105px]"></footer>
      </div>
    </>
  );
}
export default Signin;
