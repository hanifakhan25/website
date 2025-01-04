import React from 'react';

const Brand: React.FC = () => {
  const features = [
    {
      
      title: 'Next Day as Standard',
      description: 'Order before 3pm and get your order the next day as standard.',
    },
    {
      title: 'Made by True Artisans',
      description: 'Handmade crafted goods made with real passion and craftsmanship.',
    },
    {
      title: 'Unbeatable Prices',
      description: 'For our materials and quality, you won’t find better prices anywhere.',
    },
    {
      title: 'Recycled Packaging',
      description: 'We use 100% recycled packaging to ensure our footprint is manageable.',
    },
  ];

  return (
    <div className="flex flex-row  items-center justify-around w-auto h-[355px] mx-auto px-6 bg-white lg:mx-auto">
      <header className="py-8">
        <h1 className="text-2xl font-bold text-center mb-6">What makes our brand different</h1>
        <div className="flex flex-wrap justify-between mt-16 items-start">
          {features.map((feature, index) => (
            <div key={index} className="w-full md:w-[300px] text-center mb-6 md:mb-0">
              <h2 className="font-bold text-base mb-2">{feature.title}</h2>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
};

export default Brand;