'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProfileCarousel from "./components/ProfileCarousel";
import { MarqueeDemo } from "./components/GridCardImage";
import Services from "./components/Services";
import OrderForm from "./components/Cantact";
import InfoCompany from "./components/InfoCompany";
import Loader from "./components/Loader";
import SecondLoader from "./components/SecondLoader.jsx";
import Footer from "./components/Footer";

export default function Home() {
  const [loadingState, setLoadingState] = useState('video'); // 'video', 'navbar', 'finished'

  useEffect(() => {
    if (loadingState === 'video') {
      const timer = setTimeout(() => setLoadingState('navbar'), 1000); // 1s for video
      return () => clearTimeout(timer);
    }
    if (loadingState === 'navbar') {
      const timer = setTimeout(() => setLoadingState('finished'), 1500); // 1.5s for navbar animation
      return () => clearTimeout(timer);
    }
  }, [loadingState]);

  return (
    <>
      {loadingState === 'video' && <Loader />}
      {loadingState === 'navbar' && <SecondLoader />}

      <div className={loadingState === 'video' ? 'hidden' : 'block'}>
        <div
          className="fixed inset-0 z-0"
          style={{
            background: `radial-gradient(circle at top left, rgba(75, 22, 76, 0.2), transparent 60%),
                         radial-gradient(circle at bottom right, rgba(75, 22, 76, 0.15), transparent 60%),
                         radial-gradient(circle at 30% 70%, rgba(75, 22, 76, 0.1), transparent 60%),
                         #0C0B10`,
          }}
        />

        {/* Main content wrapper with opacity transition */}
        <div className={`relative z-10 ${loadingState === 'finished' ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'}`}>
          {/* Navbar is now part of the page flow */}
          <div className={`w-full z-50 cursor-pointer ${loadingState !== 'finished' ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}>
            <Navbar />
          </div>

          {/* HEADER qismi */}
          <div className="header min-h-screen relative overflow-hidden">
            {/* SVG chiziqli animatsiya - faqat mobil uchun */}
            <div className="absolute top-0 lg:-top-12 left-1/2 -translate-x-1/2 w-full pointer-events-none z-10">
  <Image
    src="/Lineanimation.svg"
    alt="Decorative lines"
    width={945}
    height={250}
    className="mobile-line-animation m-auto"
    priority
    id="decorative-lines"
  />
</div>


            {/* Hero */}
            <div id="hero" className="hero-section     relative z-20 ">
              <Hero  />
            </div>
            <div id="jamoa" className="profile-corusel    w-full max-w-8xl mx-auto relative z-30 mt-[-18rem] mb-14 transform scale-60">
              <ProfileCarousel />
            </div>
 
          </div>

          {/* CONTENT qismi */}
          <div className="marquee      bg-[#111111]">
            <MarqueeDemo />
          </div>
          <div id="xizmatlar" className="services">
            <Services />
          </div>

          {/* White separator */}
          <div className="bg-white h-[60px]" />

          <div id="contact" className="contact">
            <OrderForm />
          </div>

          <div className="bg-white h-[120px]" />

          <div className="info">
            <InfoCompany />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}