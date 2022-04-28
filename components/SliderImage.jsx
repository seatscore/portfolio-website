import Image from "next/image";

const SliderImage = (props, title, desc) => {
  return (
    <div className="flex justify-center w-3/4 items-center  ">
      <div className="rounded-lg shadow-lg  max-w-sm   bg-primary-dark  ">
        <Image
          src="/slider0.png"
          alt="Picture of the author"
          width={557}
          height={300}
          priority
        />
        <div className="p-6  ">
          <h5 className=" text-xl font-medium mb-2 text-white">{props.title}</h5>
    
        </div>
      </div>
    </div>
  );
};

export default SliderImage;
