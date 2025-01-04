import Navbar from "./Components/Navbar";
import HeroSection from "./Components/Hero_Section";
import Footer from "./Components/Footer";
import Brand from "./Components/Brand";
import Four from "./Components/Ceramics";
import Products from "./Components/Products"
import ClubJoin from "./Components/Club";
import Studio from "./Components/Studio"
import About from "./About/page";
import NavAbout from "./Components/AboutNav";
import Aboutfooter from "./Components/Aboutfooter"
import ListiningProduct from "./Products/page"
import Cart from "./Cart/page";
export default function Home() {
  return (
   <div>
    <Navbar/>
    <HeroSection/>
    <Brand/>
    <Four/>
    <Products/>
    <ClubJoin/>  
      <Studio />  
    <Footer/>
   </div>
  );
}
