import Head from "next/head";
import Image from "next/image";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";
import Slider from "../components/Slider";
import PriceCard from "../components/PriceCard";
import Footer from "../components/Footer";
import { useRef } from "react";
import Header from "../components/Header";
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
export default function Home() {
  const myRef = useRef(null);

  return (
    <>
      <Header />
      <NavBar />
      <main className="   text-white flex flex-col items-center justify-center  ">
        <div className=" w-full sm:w-5/6 sm:h-screen flex sm:flex-row flex-col  ">
          <div className="mb-16 group  w-full h-full flex z-10 pl-4  items-start  space-y-12 absolute flex-col   sm:static  sm:w-1/2 sm:justify-center sm:items-left sm:space-y-12   ">
            <h1 className=" text-4xl sm:text-6xl ">
              DEVELOPED BY <br />
              <span className="text-gradient3 inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform">
                INTEGRATED PATH
              </span>
              <span className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-white md:-mb-4 md:h-16 animate-cursor will-change-transform"></span>
            </h1>
            <button
              className="bg-gradient3 text-black pr-4 pl-4 pt-1 pb-1 sm:p-3 sm:pl-6 sm:pr-6 rounded-xl"
              onClick={() => scrollToRef(myRef)}
            >
              See More
            </button>
          </div>
          <div
            className=" w-full sm:w-1/2 h-500   flex items-center justify-center z-0 pt-20 sm:pt-72  "
            id="floating"
          >
            <img
              src="/LandingPagePic 1.png"
              alt="Picture of the author"
             
            />
          </div>
        </div>
        <div className=" w-full  flex items-center justify-center z-0  sm:p-0  realtive ">
          <span className="w-full relative md:flex items-center justify-center hidden  ">
            <img
              src="/background.png"
              alt="Picture of the author"
          
            />
          </span>
          <span className="w-full relative flex items-center justify-center  md:hidden ">
            <img
              src="/background.png"
              alt="Picture of the author"
           
            />
          </span>

          <span
            className="absolute z-100 w-5/6 sm:w-3/4 md:w-3/4 lg:w-1/2    text-center  "
            ref={myRef}
          >
            <h1 className="text-xl sm:text-4xl text-yellow-300">
              What is Seat-Score{" "}
            </h1>
            <p className="text-sm sm:text-xl">
              A smart attendance solution for dynamic companies & start-ups that
              needs advanced solutions for monitoring and tracking of their
              staff
            </p>
          </span>
        </div>
        <Slider />

        <div className="  w-full sm:h-screen flex sm:flex-row flex-col   ">
          <div className="w-full h-full flex z-10 sm:pl-4  items-start   space-y-6 absolute flex-col   sm:static  sm:w-1/2 sm:justify-center sm:items-left    ">
            {" "}
            <h1 className="text-4xl ml-12 ">Our Most Valuable Feature </h1>
            <h1 className="text-lg  text-left  sm:text-2xl font-bold ml-12  ">
              <span className="text-yellow-400">GPS</span> Attendance
            </h1>
            <p className="m-12 ">
              GPS determines the location and time, so Seat Score GPS determines
              the location of the company so that the employee can check in and
              check out when entering the company and leaving it, as well as any
              other location the employee goes to specified by the manager.
            </p>
          </div>

          <div className=" w-full sm:w-1/2 h-500   flex items-center justify-center z-0 pt-56 sm:p-0  ">
            <img
              src="/map.png"
              alt="Picture of the author"
            
              priority
              className="animate-[wiggle_1s_ease-in-out_infinite]"
              
            />
          </div>
        </div>
        <PriceCard />
        <Footer />
      </main>
    </>
  );
}
