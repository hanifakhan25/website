import React from "react";
import { FaInstagram } from "react-icons/fa";
import { ImFacebook2, ImLinkedin, ImPinterest, ImSkype, ImTwitter } from "react-icons/im";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#2A254B] px-6 py-10 md:py-16">
      
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Menu Section */}
        <div>
          <h1 className="text-white text-lg font-clash-display">Menu</h1>
          <ul className="text-white mt-4 space-y-2 text-sm">
            <li>New arrivals</li>
            <li>Best seller</li>
            <li>Recently Viewed</li>
            <li>Popular this week</li>
            <li><Link href="/Products">All Products</Link></li>
          </ul>
        </div>

        {/* Category Section */}
        <div>
          <h1 className="text-white text-lg font-clash-display">Category</h1>
          <ul className="text-white mt-4 space-y-2 text-sm">
            <li>Crockery</li>
            <li>Furniture</li>
            <li>Homeware</li>
            <li>Plants pot</li>
            <li>Chair</li>
          </ul>
        </div>

        {/* Our Company Section */}
        <div>
          <h1 className="text-white text-lg font-clash-display">Our Company</h1>
          <ul className="text-white mt-4 space-y-2 text-sm">
            <li><Link href="/About">About Us</Link></li>
            <li>Vacancies</li>
            <li>Contact Us</li>
            <li>Privacy</li>
            <li>Return Policy</li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h1 className="text-white text-lg font-clash-display">Join our mailing list</h1>
          <input
            type="text"
            placeholder="you@gmail.com"
            className="bg-input text-black w-mt-5 h-12 p-5 rounded-sm"
          />
          <button className="bg-white h-12 w-32 mt-3 hover:bg-blue-900 rounded-sm transition">
            Sign Up
          </button>
        </div>

      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-white max-w-7xl mx-auto mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-white text-sm">Copyright 2022 Avion LTD</p>

        {/* Social Media Icons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          {[ImLinkedin, ImFacebook2, FaInstagram, ImSkype, ImTwitter, ImPinterest].map((Icon, index) => (
            <div key={index} className="p-2 bg-[#2A254B] rounded-full">
              <Icon style={{ color: "white", fontSize: "24px" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;

