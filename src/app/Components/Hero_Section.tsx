import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="relative max-w-[1440px] h-[704px] flex flex-col  mx-auto">
      <div className="absolute top-[60px] left-[80px] w-[1280px] h-[584px] bg-[#2A254B] flex">
        <div className="w-[513px] h-[187px] gap-10">
          <h2 className="mt-16 ml-16 text-4xl font-normal text-white">The furniture brand for the future, with timeless designs</h2>
          <button className="ml-16 mt-16 py-4 px-6 bg-[#58556177] text-white hover:bg-opacity-25">
            <Link href="/About">
            View collection
            </Link>
            </button>
          <div className="flex justify-start w-[602px] h-[81px] ml-16">
            <p className="mt-24 font-normal leading-7 text-lg font-sans text-white h-[81px] top-[483px] left-[60px]">
              A new era in eco-friendly furniture with avelon, the French luxury retail brand with nice fonts, tasteful colors and a beautiful way to display things digitally using modern web technologies.
            </p>
          </div>
        </div>
        <div className="absolute left-[760px] top-0 h-full">
          <Image src="/1.jpg" alt="Chair" width={520} height={584} className="object-cover h-full" />
        </div>
      </div>  
    </div>
  );
};

export default HeroSection;
