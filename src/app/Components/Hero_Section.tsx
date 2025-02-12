import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative max-w-[1440px] mx-auto h-auto md:h-[704px] flex flex-col px-6 md:px-0">
      <div className="relative w-full bg-[#2A254B] flex flex-col md:flex-row items-center md:items-start py-12 px-6 md:px-20">
        
        {/* Left Content */}
        <div className="md:w-1/2 lg:w-[513px] space-y-8 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-normal text-white">
            The furniture brand for the future, with timeless designs
          </h2>
          <button className="py-4 px-6 bg-[#58556177] text-white hover:bg-opacity-25 transition duration-300">
            <Link href="/About">View collection</Link>
          </button>
          <p className="text-lg font-sans text-white leading-7">
            A new era in eco-friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors, and a beautiful way to display things digitally using modern web technologies.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
          <Image
            src="/1.jpg"
            alt="Chair"
            width={520}
            height={584}
            className="object-cover h-full md:h-[584px] w-full md:w-[520px]"
          />
        </div>

      </div>  
    </div>
  );
};

export default HeroSection;
