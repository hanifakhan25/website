import React from "react";
import Image from "next/image"; // Import Image from next/image
import NavAbout from "../Components/AboutNav";
import Aboutfooter from "../Components/Aboutfooter";
import Link from "next/link";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <NavAbout/>
      <div className="w-full h-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-16 py-8">
        <div className="md:w-2/4 text-4xl md:text-2xl text-center md:text-left text-custom-purple">
          A brand built on the love of craftsmanship, quality, and outstanding customer service
        </div>
        <div className="mt-6 md:mt-0">
          <button className="bg-gray-200 h-12 w-40 rounded-sm text-custom-purple">
           <Link href="/Products">
            View our products
            </Link>
          </button>
        </div>
      </div>

      {/* Story Section */}
      <div className="w-[1440px] h-[603px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        {/* Text Section */}
        <div className="flex flex-col p-10 bg-[#2A254B] w-full md:w-[596px] h-full order-2 md:order-1">
          <h2 className="text-3xl font-normal mb-6 text-white">It started with a small idea</h2>
          <p className="text-white text-lg mb-6">
            A global brand with local beginnings, our story began in a small studio in South London in early 2014
          </p>
          <div className="-mt-auto">
            <button className="mt-72 bg-gray-500 rounded-md px-6 py-2 text-white">
              View Collection
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="ml-10 flex w-full md:w-[596px] h-full order-1 md:order-2">
          <Image
            src="/10.jpg" // Replace with your image path
            alt="Furniture display"
            width={596}
            height={603}
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-16 w-[1440px] h-[603px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="flex w-full md:w-1/2 h-full order-1 md:order-1">
          <Image
            src="/11.jpg" // Replace with your image path
            alt="Furniture display"
            width={720}
            height={603}
            className="object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col p-10 bg-gray-100 w-full md:w-1/2 h-full order-2 md:order-2">
          <h2 className="text-5xl font-normal mb-6">
            Our service isn’t just personal, it’s actually hyper personally exquisite
          </h2>
          <p className="text-2xl font-sans mt-4 mb-6">
            When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the mass market.
          </p>
          <p className="text-2xl font-sans mt-4 mb-6">
            Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique became the hotbed for the London interior design community.
          </p>
          <div className="mt-auto">
            <button className="bg-gray-500 rounded-md px-6 py-2 text-white">
              View Collection
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full h-auto pb-16">
        <h1 className="text-center text-custom-purple text-3xl mt-10">What makes our brand different</h1>
        <div className="flex flex-wrap justify-center md:justify-evenly px-4 py-10 gap-8">
          {[
            {
              img: "/image/Delivery.png",
              title: "Next day as standard",
              desc: "Order before 3pm and get your order the next day as standard",
            },
            {
              img: "/image/Checkmark--outline.png",
              title: "Made by true artisans",
              desc: "Handmade crafted goods made with real passion and craftsmanship",
            },
            {
              img: "/image/Purchase.png",
              title: "Unbeatable prices",
              desc: "For our materials and quality you won’t find better prices anywhere",
            },
            {
              img: "/image/Sprout.png",
              title: "Recycled packaging",
              desc: "We use 100% recycled materials to ensure our footprint is more manageable",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-200 w-72 h-auto rounded-sm px-6 py-8 text-center"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={80}
                height={80}
                className="mx-auto transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
              <h1 className="text-[#2A254B] text-lg mt-4">{item.title}</h1>
              <p className="text-[#2A254B] mt-4">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="w-full h-auto bg-gray-100 py-8">
        <div className="m-auto w-11/12 bg-white p-8 md:p-16">
          <h1 className="text-custom-purple text-2xl md:text-3xl text-center">Join the club and get the benefits</h1>
          <p className="text-custom-purple text-center mt-6 text-sm md:text-base">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center mt-6 space-y-4 md:space-y-0">
            <input
              type="text"
              placeholder="you@gmail.com"
              className="bg-gray-100 w-80 h-12 p-5 rounded-sm"
            />
            <button className="bg-[#2A254B] hover:bg-indigo-900 h-12 w-32 rounded-sm text-white">Sign Up</button>
          </div>
        </div>
      </div>
      <div>
        
    <Aboutfooter/>
      </div>
    </div>

  );
};

export default About;
