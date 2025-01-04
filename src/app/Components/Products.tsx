'use client'; // Add this directive at the top of the file

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@mui/material';

const Ceramics: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="py-20 ">
      <div className="w-[1440px] mx-auto px-4">
        <h2 className="text-2xl mb-8 font-[clash]">Our popular products</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          {[ 
            {
              name: "The Popular saude sofa",
              price: "£250",
              image: "/4.jpg",
              background: "bg-[#e2eff6]",
            },
            {
              name: "The Dandy Chair",
              price: "£155",
              image: "/1.jpg",
              background: "bg-[#ebebeb]",
            },
            {
              name: "The Dandy Chair",
              price: "£125",
              image: "/7.jpg",
              background: "bg-gray-200",
            }
          ].map((product, index) => (
            <div key={index} className={`mb-4 w-full ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
              <div className={`relative ${index === 0 ? 'md:w-full lg:w-[700px] h-[400px]' : 'md:w-1/2 lg:w-[350px] h-[400px]'} aspect-[4/3]`}>
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

export default Ceramics;
