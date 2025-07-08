import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Image from "next/image";
import ProfileCarousel from "./components/ProfileCarousel";
import { MarqueeDemo } from "./components/GridCardImage";
import Services from "./components/Services";
import OrderForm from "./components/Cantact";
import Footer from "./components/Footer";
import InfoCompany from "./components/InfoCompany";
  
export default function Home() {
  return (
     <>
     <div className="header min-h-screen relative overflow-hidden">
      <div className='fixed top-0 left-0 w-full z-50 cursor-pointer'>
        <Navbar />
      </div>
      <div className="absolute -top-17 left-1/2 -translate-x-1/2 w-full max-w-5xl pointer-events-none z-10">
        <Image
          src="/Lineanimation.svg"
          alt="Decorative lines"
          width={914}
          height={250}
          className="w-full"
          priority
        />
      </div>

      {/* Hero va Carousel'ni to'g'ri joylashtirish */}
      <div className="relative z-20">
        <Hero/>
      </div>
      <div className="relative z-30 mt-[-16rem]">
        <ProfileCarousel />
      </div>
     </div>

     <div className="bg-[#111111]">
       <MarqueeDemo />
       <Services/>
       <div className="bg-white h-[60px]"></div>

       <OrderForm />
       <div className="bg-white h-[120px]"></div>
<InfoCompany />
       <Footer />
      </div>
     </>
  );
}
   
