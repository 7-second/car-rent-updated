import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Hero = () => {
  return <>
            <div className="flex flex-row gap-56 h-[200px] w-[100%] bg-slate-100 pt-[10px] pb-[20px]">

              <div className="flex justif-center ml-[90px] pr-[30px]  bg-sky-500 w-[500px]  h-[150px] relative  rounded-xl relaive">
                   <img src="https://cdn.pixabay.com/photo/2015/10/01/17/17/car-967387_1280.png" alt="" 
                   className="w-[400px] h-[200px] z-10 absolute mt-[10px]"/>
              </div>

              <div className="flex justif-center mr-[100px]  pr-[30px]  bg-sky-700 w-[500px] h-[150px]  rounded-xl ">
                   <img src="https://freepngimg.com/thumb/car/3-2-car-free-download-png.png" alt="" 
                   className="w-[400px] h-[200px] z-10  mt-[10px]"/>
              </div>

            </div>
        </>;
};

export default Hero;
