import React from "react";
import Image from 'next/image';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Cart = () => {
  return (
    <div>
      <Navbar/>
      <div className="w-full px-4 sm:px-10 lg:px-40 pt-10 pb-16 h-auto text-custom-purple">
        <h1 className="text-2xl sm:text-3xl text-center lg:text-left">
          Your Shopping Cart
        </h1>
        <div className="flex flex-col md:flex-row justify-between gap-8 mt-10">
          {/* Product Section */}
          <div className="flex flex-col md:w-3/5 border-t border-b border-gray-200">
            <h1 className="text-lg font-semibold">Product</h1>
            <div className="mt-8 flex items-start justify-between">
              <div className="flex">
                {/* Using Next.js Image component here */}
                <Image
                  src="/3.jpg"
                  alt="Product 1"
                  width={112} 
                  height={112} 
                  className="w-20 h-20 sm:w-28 sm:h-28 transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
                />
                <div className="ml-6">
                  <h1 className="text-base sm:text-lg font-medium">Graystone vase</h1>
                  <p className="text-sm mt-2">A timeless ceramic vase with a tri-color grey glaze.</p>
                  <p className="mt-2 text-base font-semibold">£85</p>
                </div>
              </div>
              {/* Quantity Section */}
              <div className="flex flex-col items-center">
                <h1 className="text-sm font-semibold sm:hidden lg:block">Quantity</h1>
                <p className="mt-2 text-lg font-medium">1</p>
              </div>
            </div>
            <div className="mt-8 flex items-start justify-between">
              <div className="flex">
                {/* Using Next.js Image component here */}
                <Image
                  src="/12.jpg"
                  alt="Product 2"
                  width={112} // Adjust these dimensions according to your image size
                  height={112} // Adjust these dimensions according to your image size
                  className="w-20 h-20 sm:w-28 sm:h-28 transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
                />
                <div className="ml-6">
                  <h1 className="text-base sm:text-lg font-medium">Basic white vase</h1>
                  <p className="text-sm mt-2">Beautiful and simple, this is one for the classics.</p>
                  <p className="mt-2 text-base font-semibold">£85</p>
                </div>
              </div>
              {/* Quantity Section */}
              <div className="flex flex-col items-center">
                <h1 className="text-sm font-semibold sm:hidden lg:block">Quantity</h1>
                <p className="mt-2 text-lg font-medium">1</p>
              </div>
            </div>
          </div>

          {/* Total Section */}
          <div className="border-t border-b border-gray-200 md:w-2/5 p-4 mt-8 md:mt-0">
            <h1 className="text-lg font-semibold">Total</h1>
            <p className="mt-10 text-lg font-medium">£170</p>
            <p className="mt-4 text-lg font-medium">£85</p>
            <div className="mt-10 text-center lg:text-right">
              <h1 className="inline text-lg sm:text-xl font-medium mr-4">Subtotal</h1>
              <h1 className="inline text-xl sm:text-2xl font-semibold">£210</h1>
              <p className="text-sm mt-4">Taxes and shipping are calculated at checkout</p>
              <button className="bg-[#2A254B] h-12 sm:h-14 mt-6 w-full sm:w-56 rounded-sm text-white">
                Go to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Cart;
