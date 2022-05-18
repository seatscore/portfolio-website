import Image from "next/image";
import { uploadcareLoader } from '@uploadcare/nextjs-loader';
const SliderImage = (props, title, desc) => {
  return (
    <div className="flex justify-center w-3/4   items-center pb-7 ">
      <div className="rounded-lg shadow-lg  max-w-sm   bg-primary-dark  ">
        <Image
          src="/slider0.png"
          alt="Picture of the author"
          width={557}
          height={300}
          priority
          loader={uploadcareLoader}
        />
        <div className="p-6  h-32   ">
          <h5 className=" text-xl font-medium mb-2 text-white">{props.title}</h5>
    
        </div>
      </div>
    </div>
  );
};

export default SliderImage;
