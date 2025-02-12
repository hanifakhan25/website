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
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <h2 className="text-2xl mb-8 font-[clash] text-center md:text-left">Our Popular Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center">
          {[ 
            {
              name: "The Popular Saude Sofa",
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
              name:"The Dandy Chair",
              price: "£125",
              image: "/7.jpg",
              background: "bg-gray-200",
            }
          ].map((product, index) => (
            <div key={index} className={`w-full ${isMounted ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}> 
              <div className={`relative w-full h-80 ${product.background} rounded-lg overflow-hidden`}>
                <Image src={product.image} alt={product.name} layout="fill" className="object-cover" />
              </div>
              <div className="text-center mt-4">
                <h3 className="font-medium text-lg font-Clash Display">{product.name}</h3>
                <p className="text-gray-600 text-base">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="outlined" className="rounded-none px-6 py-2 text-lg">
            View Collection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Ceramics;
