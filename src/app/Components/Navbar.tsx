import Link from "next/link"; 
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <>
      <header className="w-full h-[132px] flex flex-col items-center text-white px-6 sm:px-10 lg:px-20 lg:mx-auto">
        <div className="border-b-[0.5px] border-[#0000004f] h-1/2 w-full mx-auto flex justify-between items-center">
          <div
            style={{
              backgroundColor: "white",
              padding: "10px",
              borderRadius: "50%",
            }}
          >
            <IoSearch style={{ color: "#2A254B", fontSize: "24px" }} />
          </div>
          <h1 className="text-[#22202E] text-2xl sm:text-3xl lg:text-4xl font-semibold">
            <Link href="/About">Avion</Link>
          </h1>
          <div className="flex text-xl gap-3">
            <div
              style={{
                backgroundColor: "white",
                padding: "10px",
                borderRadius: "50%",
              }}
            >
              <Link href="/Cart">
                <MdOutlineShoppingCart style={{ color: "#2A254B", fontSize: "24px" }} />
              </Link>
            </div>
            <div
              style={{
                backgroundColor: "white",
                padding: "10px",
                borderRadius: "50%",
              }}
            >
              <CgProfile style={{ color: "#2A254B", fontSize: "24px" }} />
            </div>
          </div>
        </div>

        <nav className="flex flex-wrap justify-between items-center h-1/2 text-[#726E8D] text-sm sm:text-base lg:text-lg w-full max-w-[1200px] mx-auto mt-4">
          <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">Plant pots</Link>
          <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">Ceramics</Link>
          <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">Tables</Link>
          <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">Chairs</Link>
          <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">Crockery</Link>
          <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">Tableware</Link>
          <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">Cutlery</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
