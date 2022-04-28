import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";
import Slider from "../components/Slider";
import PriceCard from "../components/PriceCard";
import Footer from "../components/Footer";
import { useRef } from "react";
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
export default function Home() {
  const myRef = useRef(null)

  return (
    <>
      <NavBar />
      <main className="   text-white flex flex-col items-center justify-center  ">
        <div className=" w-full sm:w-5/6 sm:h-screen flex sm:flex-row flex-col  ">
          <div className="w-full h-full flex z-10 pl-4  items-start  space-y-12 absolute flex-col   sm:static  sm:w-1/2 sm:justify-center sm:items-left sm:space-y-12    ">
            <h1 className="text-lg  text-left  sm:text-2xl font-bold pt-12 sm:pt-0 mr-48 sm:mr-0 ">
              BEST ATTENDANCE SOLUTION FOR YOU COMPANY <br />
              <span className="text-gradient3 ">
                DEVELOPED BY INTEGRATED PATH{" "}
              </span>
            </h1>
            <button className="bg-yellow-400 pr-4 pl-4 pt-1 pb-1 sm:p-3 sm:pl-6 sm:pr-6 rounded-xl"  onClick={()=>scrollToRef(myRef)}>
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
          <span className="w-full relative flex items-center justify-center  md:hidden "  >
            <Image
              src="/background.png"
              alt="Picture of the author"
              width={1210}
              height={900}
              priority
            />
          </span>

          <span className="absolute z-100 w-5/6 sm:w-3/4 md:w-3/4 lg:w-1/2    text-center  "  ref={myRef} >
            <h1 className="text-xl text-yellow-300">What is Seat-Score </h1>
            <p>
              A smart attendance solution for dynamic companies & start-ups that
              needs advanced solutions for monitoring and tracking of their staff 
            </p>
          </span>
        </div>
        <Slider />
      
        <div className="  w-full sm:h-screen flex sm:flex-row flex-col   " >
        
          <div className="w-full h-full flex z-10 pl-4  items-start  space-y-12 absolute flex-col   sm:static  sm:w-1/2 sm:justify-center sm:items-left    ">  <h1 className="text-4xl ml-12 ">Our Most Valuable Feature </h1>
            <h1 className="text-lg  text-left  sm:text-2xl font-bold ml-12  ">
              <span className="text-yellow-400">GPS</span> Attendance
            </h1>
            <p className="m-12 "  >
              seatScore has a unique feature that allows you to track your staff in real time with optimized algorathim to provide the best accurate data for your employees location and their attendance log . 
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
        <PriceCard />
        <Footer />
      </main>
    </>
  );
}
