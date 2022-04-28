import Image from "next/image";
const PriceCard = ({ props, height, bgCOLOR }) => {
  return (
    <div className=" flex flex-col  md:flex-row justify-center items center   mb-12   sm:space-x-12   w-full  ">
      <div className=" rounded-xl py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min sm:w-full  bg-gradient-to-b from-gradient0 to-gradient1 z-30 mb-12 sm:mb-0">
        <h1 className="text-gray-500 font-semibold text-xl ">Free Trial</h1>
        <div className="text-center py-4 px-7">
          <h1 className="text-white text-xl font-semibold">free</h1>
          <p className="text-gray-500  mt-2">1month</p>
        </div>
        <div className="h-px bg-gray-200"></div>
        <div className="text-center mt-3">
          <p className="text-sm text-gray-400">
            limited to 5 employees for 1 month
          </p>
        </div>
        <a href="mailto:ayasalam020@gmail.com">
          <button className="w-full mt-6 mb-3 py-2 text-white font-semibold bg-gradient-to-l from-gradient5 to-gradient6">
            Contact Us{" "}
          </button>
        </a>
      </div>
      <div className="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full opacity-85 rounded-xl   md:max-w-min sm:w-full bg-gradient-to-b from-gradient3 to-gradient4 transform scale-1 sm:scale-1 md:scale-105 lg:scale-105 xl:scale-105 z-40  shadow-none sm:shadow-none md:shadow-xl lg:shadow-xl xl:shadow-xl mb-12 sm:mb-0 ">
        <h1 className="text-white font-semibold text-xl ">Premium</h1>
        <div className="text-center py-4 px-7">
          <h1 className="text-white text-xl font-semibold">Get a Quote</h1>
          <p className="text-white text-opacity-50 mt-2">Monthely</p>
        </div>
        <div className="h-px bg-purple-400"></div>
        <div className="text-center mt-3">
          <p className="text-sm text-white text-opacity-80">
            covers all the above plus support for each employee
          </p>
        </div>

        <a href="mailto:ayasalam020@gmail.com">
          <button className="w-full mt-6 mb-3 py-2 text-white font-semibold bg-gradient-to-l from-gradient5 to-gradient6">
            Contact Us{" "}
          </button>
        </a>
      </div>
      <div className=" rounded-xl py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min sm:w-full bg-gradient-to-b from-gradient0 to-gradient1 z-30 mb-12 sm:mb-0">
        <h1 className="text-gray-500 font-semibold text-xl ">Standard</h1>
        <div className="text-center py-4 px-7">
          <h1 className="text-white text-xl font-semibold">Get a Quote</h1>
          <p className="text-gray-500  mt-2">Monthely</p>
        </div>
        <div className="h-px bg-gray-200"></div>
        <div className="text-center mt-3">
          <p className="text-sm text-gray-400">cover all the features above</p>
        </div>
        <a href="mailto:ayasalam020@gmail.com">
          <button className="w-full mt-6 mb-3 py-2 text-white font-semibold bg-gradient-to-l from-gradient5 to-gradient6">
            Contact Us{" "}
          </button>
        </a>
      </div>
    </div>
  );
};

export default PriceCard;
