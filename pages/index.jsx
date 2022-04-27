import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";
import Slider from "../components/Slider";
import PriceCard from "../components/PriceCard";
import Footer from "../components/Footer"
export default function Home() {
  return (
    <>
      <NavBar />
      <main className="   text-white  ">
        <div className="  w-full sm:h-screen flex sm:flex-row flex-col  ">
          <div className="w-full h-full flex z-10 pl-4  items-start  space-y-12 absolute flex-col   sm:static  sm:w-1/2 sm:justify-center sm:items-left sm:space-y-12    ">
            <h1 className="text-lg  text-left  sm:text-2xl font-bold pt-12 sm:pt-0">
              DEVELOPED BY INTEGRATED PATH LOREM IPSUM DEVELOPED BY INTEGRATED
              PATH LOREM IPSUM
            </h1>

            <button className="bg-yellow-400 pr-4 pl-4 sm:p-3 sm:pl-6 sm:pr-6 rounded-xl">
              See More
            </button>
          </div>

          <div className=" w-full sm:w-1/2 h-500   flex items-center justify-center z-0 pt-20 sm:p-0  ">
            <Image
              src="/LandingPagePic 1.png"
              alt="Picture of the author"
              width={771}
              height={668}
              priority
            />
          </div>
        </div>
        <div className=" w-full  flex items-center justify-center z-0  sm:p-0  realtive ">
          <span className="w-full relative md:flex items-center justify-center hidden  ">
            <Image
              src="/background.png"
              alt="Picture of the author"
              width={1210}
              height={400}
              priority
            />
          </span>
          <span className="w-full relative flex items-center justify-center  md:hidden ">
            <Image
              src="/background.png"
              alt="Picture of the author"
              width={1210}
              height={900}
              priority
            />
          </span>

          <span className="absolute z-100 w-5/6 sm:w-3/4 md:w-3/4 lg:w-1/2    text-center  ">
            <h1 className="text-xl text-yellow-300">What is Seat-Score</h1>
            <p>
              A smart attendance solution for dynamic companies & start-ups that
              has needs dynamic attendance solutions
            </p>
          </span>
        </div>
        <Slider/>
        <div className="  w-full sm:h-screen flex sm:flex-row flex-col   ">
          <div className="w-full h-full flex z-10 pl-4  items-start  space-y-12 absolute flex-col   sm:static  sm:w-1/2 sm:justify-center sm:items-left sm:space-y-12   ">
            <h1 className="text-lg  text-left  sm:text-2xl font-bold ml-12  ">
            <span className="text-yellow-400">GPS</span> Attendance
            </h1>
            <p className="m-12 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
            </p>
           
          </div>

          <div className=" w-full sm:w-1/2 h-500   flex items-center justify-center z-0 pt-56 sm:p-0  ">
            <Image
              src="/map.png"
              alt="Picture of the author"
              width={565}
              height={565}
              priority
            />
          </div>
        </div>
        <PriceCard/>
        <Footer/> 
      </main>
    </>
  );
}
