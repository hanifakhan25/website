import React from "react";
import Image from "next/image"; // Import the Image component from 'next/image'
import { FaInstagram, FaPinterest } from "react-icons/fa";
import { ImFacebook2, ImLinkedin, ImPinterest, ImPinterest2, ImSkype, ImTwitter } from "react-icons/im";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-96 bg-[#2A254B]">
      <div className="max-w-auto justify-around mx-auto flex space-x-8 pt-10 px-8">
        <div>
          <h1 className="text-white text-lg font-Clash Display">Menu</h1>
          <p className="text-white mt-4 text-sm">New arrivals</p>
          <p className="text-white mt-4 text-sm">Best seller</p>
          <p className="text-white mt-4 text-sm">Recently Viewed</p>
          <p className="text-white mt-4 text-sm">Popular this week</p>

          <p className="text-white mt-4 text-sm"><Link href="/Products">All Products </Link></p>
        </div>
        <div>
          <h1 className="text-white text-lg font-Clash Display ml-20">Category</h1>
          <p className="text-white mt-4 text-sm ml-20">Crockery</p>
          <p className="text-white mt-4 text-sm ml-20">Furniture</p>
          <p className="text-white mt-4 text-sm ml-20">Homeware</p>
          <p className="text-white mt-4 text-sm ml-20">Plants pot</p>
          <p className="text-white mt-4 text-sm ml-20">Chair</p>
          <p className="text-white mt-4 text-sm ml-20">Crockery</p>
        </div>
        <div className="pl-28">
          <h1 className="text-white text-lg font-Clash Display">Our Company</h1>
          <p className="text-white mt-4 text-sm"><Link href="/About">About Us </Link></p>
        
          <p className="text-white mt-4 text-sm">Vacancies</p>
          <p className="text-white mt-4 text-sm">Contact Us</p>
          <p className="text-white mt-4 text-sm">Privacy</p>
          <p className="text-white mt-4 text-sm">Return Policy</p>
        </div>
        <div className="pl-28">
          <h1 className="text-white text-lg font-Clash Display">Join our mailing list</h1>
          <input
            type="text"
            placeholder="you@gmail.com"
            className=" bg-input  text-black w-80 mt-5 h-12 p-5 rounded-sm"
          />
          <button className="bg-white h-12 w-32 hover:bg-blue-900 rounded-sm mt-5">Sign Up</button>
        </div>
      </div>
      <div className="border-t-2 border-white max-w-auto mx-auto w-11/12 my-8">
        <div className="flex justify-between items-center">
          <p className="text-white mt-4 text-sm">Copyright 2022 Avion LTD</p>
          <div
  style={{
    backgroundColor: "#2A254B",
    display: "flex",
    justifyContent: "center", // Aligns the icons to the center
    alignItems: "center", // Vertically centers the icons
    gap: "8px", // Controls the space between the icons
    padding: "10px",
  }}
>
  <div
    style={{
      backgroundColor: "#2A254B",
      padding: "10px",
      borderRadius: "50%",
    }}
  >
    <ImLinkedin style={{ color: "white", fontSize: "24px" }} />
  </div>
  <div
    style={{
      backgroundColor: "#2A254B",
      padding: "10px",
      borderRadius: "50%",
    }}
  >
    <ImFacebook2 style={{ color: "white", fontSize: "24px" }} />
  </div>
  <div
    style={{
      backgroundColor: "#2A254B",
      padding: "10px",
      borderRadius: "50%",
    }}
  >
    <FaInstagram style={{ color: "white", fontSize: "24px" }} />
  </div>
  <div
    style={{
      backgroundColor: "#2A254B",
      padding: "10px",
      borderRadius: "50%",
    }}
  >
    <ImSkype style={{ color: "white", fontSize: "24px" }} />
  </div>
  <div
    style={{
      backgroundColor: "#2A254B",
      padding: "10px",
      borderRadius: "50%",
    }}
  >
    <ImTwitter style={{ color: "white", fontSize: "24px" }} />
  </div>
  <div
    style={{
      backgroundColor: "#2A254B",
      padding: "10px",
      borderRadius: "50%",
    }}
  >
    <ImPinterest style={{ color: "white", fontSize: "24px" }} />
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
