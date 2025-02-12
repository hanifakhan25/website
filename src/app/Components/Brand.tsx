import React from "react";

const Brand: React.FC = () => {
  const features = [
    {
      title: "Next Day as Standard",
      description: "Order before 3pm and get your order the next day as standard.",
    },
    {
      title: "Made by True Artisans",
      description: "Handmade crafted goods made with real passion and craftsmanship.",
    },
    {
      title: "Unbeatable Prices",
      description: "For our materials and quality, you won’t find better prices anywhere.",
    },
    {
      title: "Recycled Packaging",
      description: "We use 100% recycled packaging to ensure our footprint is manageable.",
    },
  ];

  return (
    <div className="bg-white py-12 px-6">
      <header className="max-w-screen-lg mx-auto text-center">
        <h1 className="text-2xl font-bold">What makes our brand different</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <h2 className="font-bold text-base">{feature.title}</h2>
              <p className="text-gray-600 text-sm mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
};

export default Brand;
