'use client'; // Add this directive at the top of the file

import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import Image from "next/image";

const Four: React.FC = () => {

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const products = [
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
    },
  ];

  return (
    <section className="py-20">
    <div className="max-w-screen-lg mx-auto">
        <h2 className="text-2xl mb-8 text-center">New Ceramics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className={`w-full ${isMounted ? "opacity-100 transition-opacity duration-500" : "opacity-0"}`}
            >
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
        <div className="text-center mt-12">
          <Button variant="outlined" className="rounded-none">
            View Collection
          </Button>
        </div>
      </div>

      
    </section>
  );
};

export default Four;
