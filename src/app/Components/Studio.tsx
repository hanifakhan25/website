import React from "react";
import Image from "next/image";

export default function BrandInfo() {
  return (
    <div className="flex w-full md:w-[1440px] h-[603px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex-col md:flex-row">
      <div className="flex flex-col items-center justify-center p-6 w-full md:w-1/2 h-full order-2 md:order-1">
        <h2 className="text-3xl font-normal mb-2 mt-10">
          From a studio in London to a global brand with over 400 outlets
        </h2>
        <p className="mb-4 mt-10 font-sans text-lg text-[clash] text-1.5xl ">
          When we started Avalon, the idea was simple. Make high quality furniture
          affordable and available for the mass market.
        </p>
        <p className="mb-8 mt-10 font-sans text-lg">
          Handmade, and lovingly crafted furniture and homeware is what we live,
          breathe and design so our Chelsea boutique became the hub for the London
          interior design community.
        </p>
        <div className="items-start justify-start mt-auto">
          <button className="bg-gray-500 rounded-md px-4 py-2 mr-2">
            Get in touch
          </button>   
        </div>
      </div>
      <div className="md:w-1/2 order-1 md:order-2 flex items-center justify-center w-full h-full relative">
        <Image
          src="/8.jpg" // Replace with your image path
          alt="Furniture display"
          layout="fill" // This ensures the image covers the full dimensions of its container
          objectFit="cover" // Ensures the image fits properly within its container
        />
      </div>
    </div>
  );
}
