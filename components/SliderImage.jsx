import Image from "next/image";

const SliderImage = (props, title, desc) => {
  return (
    <div class="flex justify-center w-3/4 items-center  ">
      <div class="rounded-lg shadow-lg  max-w-sm   bg-primary-dark  ">
        <Image
          src="/slider0.png"
          alt="Picture of the author"
          width={557}
          height={300}
          priority
        />
        <div class="p-6  ">
          <h5 class=" text-xl font-medium mb-2 text-white">{props.title}</h5>
          <p class="text-white text-base mb-4">{props.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default SliderImage;
