import Image from "next/image";
import { uploadcareLoader } from '@uploadcare/nextjs-loader';
import Link from "next/link";
const NavBar = () => {
  return (
    <div className=" flex flex-row items-center p-1  sm:justify-between  ">
      <div className=" ml-2 sm:ml-24 text-lg text-gray-700 flex ">
        {" "}
        <Image src="/logo.svg" alt="logo" width={100} height={100}  loader={uploadcareLoader}/>
      </div>

      <ul className=" hidden sm:flex sm:flex-row-reverse items-center justify-center sm:justify-start  w-3/4  space-x-8 md:space-x-24 text-white sm:block sm:mr-24  ">
        <li className="hover:bg-yellow-300 rounded-xl p-2 hover:text-black">
          <Link href="/">
            <a>Login</a>
          </Link>
        </li>
        <li className="hover:bg-yellow-300 rounded-xl p-2 hover:text-black">
          <Link href="/">
            <a>Contact Us </a>
          </Link>
        </li>
        <li className="hover:bg-yellow-300 rounded-xl p-2 hover:text-black">
          <Link href="/">
            <a>About Us</a>
          </Link>
        </li>
        <li className="hover:bg-yellow-300 rounded-xl p-2 hover:text-black">
          <Link href="/">
            <a>Pricing</a>
          </Link>
        </li>
        <li className="hover:bg-yellow-300 rounded-xl p-2 hover:text-black">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
