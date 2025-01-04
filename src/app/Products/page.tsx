import Image from 'next/image';
import React from 'react';
import { TbTruckDelivery } from 'react-icons/tb';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { LuSprout } from "react-icons/lu";
import { MdOutlinePriceChange } from "react-icons/md";
import Navbar from '../Components/Navbar';
import ClubJoin from '../Components/Club';
import Footer from '../Components/Footer';


const ProductListing = () => {
  const features = [
    {
      title: 'Next day as standard',
      description: 'Order before 3pm and get your order the next day as standard.',
      icon: TbTruckDelivery,
    },
    {
      title: 'Made by true artisans',
      description: 'Hand-crafted goods made with real passion and craftsmanship.',
      icon: IoIosCheckmarkCircleOutline,
    },
    {
      title: 'Unbeatable prices',
      description: 'For our material and quality, you won’t find better prices anywhere.',
      icon: MdOutlinePriceChange,
    },
    {
      title: 'Recycled packaging',
      description: 'We use 100% recycled packaging to ensure our footprint is manageable.',
      icon: LuSprout,
    },
  ];

  return (
    <>
    <div>
    <Navbar/>
    </div>
      <section>
        <div className="container mx-auto px-4 md:px-8 lg:px-12 py-8 md:py-12">
          {/* Main Product Section */}
          <div className="flex justify-center flex-col md:flex-row gap-8 items-center w-full">
            <div className="w-auto md:w-1/2 h-auto">
              <Image
                src={'/12.jpg'}
                height={800}
                width={800}
                alt="chair"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 md:px-10 py-6 flex flex-col justify-center">
              <div>
                <p className="text-xl md:text-6xl font-semibold">The Dandy Chair</p>
                <p className="py-2 text-lg md:text-xl">$250</p>
              </div>
              <div className="text-[#505977] text-lg md:text-base">
                <h1 className="font-semibold text-xl">Description</h1>
                <div className="my-4 md:my-6">
                  <p>
                    A timeless design, with premium materials features as one of our most popular
                    and iconic pieces. The dandy chair is perfect for any stylish living space with
                    beech legs and lambskin leather upholstery.
                  </p>
                </div>
                <div className="ml-4">
                  <ul className="list-disc space-y-1">
                    <li>Premium material</li>
                    <li>Handmade upholstery</li>
                    <li>Quality timeless classic</li>
                  </ul>
                </div>
                <div>
                  <div className="my-8">
                    <h1 className="font-semibold">Dimensions</h1>
                  </div>
                  <div className="flex gap-12 md:gap-20 text-sm md:text-base">
                    <div>
                      <h1>Height</h1>
                      <p>110cm</p>
                    </div>
                    <div>
                      <h1>Width</h1>
                      <p>75cm</p>
                    </div>
                    <div>
                      <h1>Depth</h1>
                      <p>50cm</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-between items-center mt-8">
                    <div className="flex items-center gap-4">
                      <h1>Amount:</h1>
                      <button className="flex gap-4 bg-[#F5F5F5] rounded-md px-4 py-2">
                        <span>+</span> 1 <span>-</span>
                      </button>
                    </div>
                    <button className="w-full md:w-[146px] h-[56px] bg-[#2A254B] text-white mt-4 md:mt-0">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4">
            <h2 className="text-2xl mb-8">New Ceramics</h2>
            <div className="flex flex-row md:flex-nowrap lg:flex-nowrap gap-6 justify-center items-center">
              {[ 
                {
                  name: "The Dandy Chair",
                  price: "£250",
                  image: "/1.jpg",
                  background: "bg-[#e2eff6]",
                },
                {
                  name: "Rustic Vase Set",
                  price: "£155",
                  image: "/2.jpg",
                  background: "bg-[#ebebeb]",
                },
                {
                  name: "The Silky Vase",
                  price: "£125",
                  image: "/3.jpg",
                  background: "bg-gray-200",
                },
                {
                  name: "The Lucy Lamp",
                  price: "£399",
                  image: "/5.jpg",
                  background: "bg-[#d5f0f8]",
                }
              ].map((product, index) => (
                <div key={index} className={`mb-4 w-full md:w-1/4 lg:w-1/4 'opacity-100' : 'opacity-0'}`}>
                  <div className={`relative ${product.background} aspect-[4/3]`}>
                    <Image src={product.image} alt={product.name} layout="fill" className="object-cover" />
                  </div>
                  <div className="text-start mt-2">
                    <h3 className="font-normal font-Clash Display">{product.name}</h3>
                    <p className="text-gray-600">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* View Collection Button */}
          <div className="my-10 flex justify-center">
            <button className="bg-[#F9F9F9] py-3 px-6 rounded-md text-[#2A254B]">
              View collection
            </button>
          </div>

          {/* Features Section */}
          <div className="flex flex-col md:flex-row gap-6 mt-12 text-sm md:text-base">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="flex flex-col md:w-1/4 p-4 rounded-lg">
                  <Icon size={24} className="text-[#2A254B]" />
                  <p className="py-4 font-semibold">{feature.title}</p>
                  <p>{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <div>
        <ClubJoin/>

        </div>
        <div>
          <Footer/>
        </div>
    </>
  );
};

export default ProductListing;
