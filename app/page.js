'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProfileCarousel from "./components/ProfileCarousel";
import { MarqueeDemo } from "./components/GridCardImage";
import Services from "./components/Services";
import OrderForm from "./components/Cantact";
import Footer from "./components/Footer";
import InfoCompany from "./components/InfoCompany";
import Loader from "./components/Loader";
import SecondLoader from "./components/SecondLoader.jsx";
 
export default function Home() {
  const [loadingState, setLoadingState] = useState('video'); // 'video', 'navbar', 'finished'

  useEffect(() => {
    if (loadingState === 'video') {
      const timer = setTimeout(() => setLoadingState('navbar'), 1000); // 1s for video
      return () => clearTimeout(timer);
    }
    if (loadingState === 'navbar') {
      const timer = setTimeout(() => setLoadingState('finished'), 3000); // 3s for navbar animation
      return () => clearTimeout(timer);
    }
  }, [loadingState]);

  return (
    <>
      {loadingState === 'video' && <Loader />}
      {loadingState === 'navbar' && <SecondLoader />}

      <div className={loadingState === 'video' ? 'hidden' : 'block'}>
        {/* Fon rasmi - radial gradient */}
        <div
          className="fixed inset-0 z-0"
          style={{
            background: `radial-gradient(circle at top left, rgba(75, 22, 76, 0.2), transparent 60%),
                         radial-gradient(circle at bottom right, rgba(75, 22, 76, 0.15), transparent 60%),
                         radial-gradient(circle at 30% 70%, rgba(75, 22, 76, 0.1), transparent 60%),
                         #0C0B10`,
          }}
        />
        
        {/* Navbar is always visible after video loader */}
        <div className={`fixed top-0 left-0 w-full z-50 cursor-pointer ${loadingState !== 'finished' ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}>
          <Navbar />
        </div>

        {/* Main content wrapper with opacity transition */}
        <div className={`relative z-10 ${loadingState === 'finished' ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'}`}>
          {/* HEADER qismi */}
          <div className="header min-h-screen relative overflow-hidden ">
            {/* SVG chiziqli animatsiya */}
            <div className="absolute -top-15 left-1/2 -translate-x-1/2 w-full max-w-5xl pointer-events-none z-10">
              <Image
                src="/Lineanimation.svg"
                alt="Decorative lines"
                width={914}
                height={250}
                className="w-full"
                priority
              />
            </div>

            {/* Hero */}
            <div className="relative z-20">
              <Hero/>
            </div>
            <div className="relative z-30 mt-[-14rem] mb-14">
              <ProfileCarousel />
            </div>
          </div>

          {/* CONTENT qismi */}
          <div className="bg-[#111111]">
            <MarqueeDemo />

          </div>
          <div className="services">
            <Services />
          </div>

          {/* White separator */}
          <div className="bg-white h-[60px]" />

          <div className="contact">
            <OrderForm />
          </div>

          <div className="bg-white h-[120px]" />

          <div className="bg-[#111111]">
            <InfoCompany />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
