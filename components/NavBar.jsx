import Image from "next/image";
import Link from "next/link";
const NavBar = () => {
  return (
     <div class=" flex flex-row items-center p-1  sm:justify-between  ">
    <div class="ml-8 text-lg text-gray-700 hidden md:flex"> <Image src="/logo.svg" alt="logo" width={100} height={100} /></div>
    
    
    
      <ul className="flex flex-row-reverse items-center justify-center sm:justify-start  w-3/4  space-x-8 sm:space-x-24 text-white">
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
     
      {/* 
      
      <div className=" w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2 text-white ">
      <span>
        <Image src="/logo.svg" alt="logo" width={100} height={100} />
      </span>
      <span></span>
      <ul className="flex flex-row w-3/4  space-x-36 ">
        <li className="hover:bg-yellow-300 rounded-xl p-2 hover:text-black">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="hover:bg-yellow-300 rounded-xl p-2 hover:text-black">
          <Link href="/">
            <a>About </a>
          </Link>
        </li>
        <li className="hover:bg-yellow-300 rounded-xl p-2 hover:text-black">
          <Link href="/">
            <a>Contact Us</a>
          </Link>
        </li>
        <li className="hover:bg-yellow-300 rounded-xl p-2 hover:text-black">
          <Link href="/">
            <a>Pricing</a>
          </Link>
        </li>
        <li className="hover:bg-yellow-300 rounded-xl p-2 hover:text-black">
          <Link href="/">
            <a>Login</a>
          </Link>
        </li>
      </ul>
    </div>*/}
  </div>

 
  );
};

export default NavBar;
